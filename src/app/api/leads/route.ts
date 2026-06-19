import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createSupabaseAdmin } from '@/lib/supabase-server';
import { getSiteConfig } from '@/lib/sites-config';
import { sendLeadToViteUnDevis } from '@/lib/viteundevis';

// Help functions to calculate score for heat pump leads
function calculateScore(body: any): number {
    let score = 0;
    if (body.projectType === 'proprietaire_maison') score += 30;
    if (body.projectType === 'coproprietaire') score += 5;
    if (body.monthlyBill === 'plus_150') score += 30;
    if (body.monthlyBill === '100_150') score += 15;
    if (body.monthlyBill === 'moins_100') score += 5;
    if (body.roofType === 'fioul') score += 30;
    if (body.roofType === 'gaz') score += 20;
    if (body.roofType === 'electricite') score += 15;
    if (body.roofType === 'bois') score += 10;
    if (body.solarLocation === 'radiateurs') score += 20;
    if (body.solarLocation === 'plancher') score += 25;
    if (body.solarLocation === 'air') score += 15;
    return score;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("📥 [API/LEADS/SOLAR] Received body:", body);
        const {
            name, email, phone, city, postalCode, domain,
            projectType, monthlyBill, roofType, solarLocation,
            attribution
        } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Champs obligatoires manquants' },
                { status: 400 }
            );
        }

        const leadScore = calculateScore(body);
        
        // ----------------------------------------------------
        // ARBITRAGE ROUTING
        // Score >= 55 AND not asbestos/thatch AND house owner -> Premium Partner
        // Score < 55 -> ViteUnDevis API
        // ----------------------------------------------------
        let arbitrageStatus = 'vite_un_devis';
        if (leadScore >= 55 && roofType !== 'amiante_chaume' && projectType === 'proprietaire_maison') {
            arbitrageStatus = 'direct_partner';
        }

        console.log(`⚖️ [ARBITRAGE] Lead score: ${leadScore}. Routing status: ${arbitrageStatus}`);

        // Forward to ViteUnDevis if it is a secondary lead
        let vudResult = null;
        if (arbitrageStatus === 'vite_un_devis') {
            console.log("📡 [ViteUnDevis] Forwarding lead to ViteUnDevis API...");
            
            let catId = '4'; // Pompe à Chaleur (PAC)
            if (postalCode === '33260') {
                catId = '145'; // Map to Déménagement for tests
            }
            
            const nameParts = (name || '').trim().split(/\s+/);
            const prenom = nameParts[0] || 'Client';
            const nom = nameParts.slice(1).join(' ') || 'Inconnu';
            
            const vudPayload = {
                nom,
                prenom,
                email,
                tel: phone,
                cp: postalCode,
                ville: city,
                cp_projet: postalCode,
                ville_projet: city,
                pays: 'fr',
                adresse1: 'Adresse non communiquee',
                tp: 1, // Particulier
                type_bien: 2, // Maison
                situation: projectType === 'proprietaire_maison' ? 1 : 2,
                delais: 2, // Dans les 6 mois
                description: `Projet de pose de pompe à chaleur (PAC). Type de chauffage actuel: ${roofType || 'N/A'}. Emetteurs: ${solarLocation || 'N/A'}. Facture mensuelle estimée: ${monthlyBill || 'N/A'}. Statut d'habitation: ${projectType || 'N/A'}.`,
                cat_id: catId,
                site_name: domain || 'expertpompeachaleur.com'
            };
            
            try {
                vudResult = await sendLeadToViteUnDevis(vudPayload);
            } catch (err) {
                console.error("❌ Failed to forward to ViteUnDevis:", err);
            }
        }

        const apiKey = process.env.RESEND_API_KEY;
        const resend = apiKey ? new Resend(apiKey) : null;

        // 1. SAVE TO DATABASE (Supabase)
        const metadata = {
            monthly_bill: monthlyBill,
            heating_type: roofType,
            emitters_type: solarLocation,
            source: 'website',
            attribution: attribution || { source: 'direct', medium: 'direct' },
            score: leadScore,
            arbitrage_status: arbitrageStatus,
            niche: 'pac'
        };

        const supabase = createSupabaseAdmin();
        const siteConfig = getSiteConfig(domain);
        const region = siteConfig?.region || 'National';
        const department = siteConfig?.department || (postalCode ? postalCode.substring(0, 2) : null);

        const { error: dbError } = await supabase
            .from('leads')
            .insert({
                name,
                email,
                phone,
                city,
                postal_code: postalCode,
                tenant_id: domain,
                type: 'pac_lead',
                housing_type: projectType,
                status: 'new',
                region: region,
                department: department,
                message: JSON.stringify(metadata, null, 2),
                niche: 'pac',
                arbitrage_status: arbitrageStatus,
                score: leadScore
            });

        if (dbError) {
            console.error('Supabase DB Error:', dbError);
        }

        // 2. SEND NOTIFICATION EMAIL (Resend)
        if (resend) {
            const subject = arbitrageStatus === 'direct_partner'
                ? `💎🌡️ NOUVEAU LEAD PAC PREMIUM [${postalCode || city}] - ${name}`
                : `🌡️ Lead PAC à 10€ (ViteUnDevis) [${postalCode || city}] - ${name}`;

            const html = `
                <h1>Nouveau Lead Pompe à Chaleur (PAC)</h1>
                <p><strong>Domaine :</strong> ${domain} (${city} - ${postalCode || 'N/A'})</p>
                
                <div style="background-color: ${arbitrageStatus === 'direct_partner' ? '#ecfdf5' : '#f8fafc'}; border: 1.5px solid ${arbitrageStatus === 'direct_partner' ? '#10b981' : '#cbd5e1'}; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                    <h2 style="margin-top:0; color: ${arbitrageStatus === 'direct_partner' ? '#065f46' : '#334155'};">
                        Scoring & Routage : ${arbitrageStatus === 'direct_partner' ? '💎 PARTENAIRE DIRECT' : '✉️ REVENDU VITEUNDEVIS'}
                    </h2>
                    <p><strong>Score :</strong> ${leadScore} / 100</p>
                    <p><strong>Statut Arbitrage :</strong> ${arbitrageStatus}</p>
                </div>

                <h2>Informations de contact</h2>
                <ul>
                    <li><strong>Nom :</strong> ${name}</li>
                    <li><strong>Email :</strong> ${email}</li>
                    <li><strong>Téléphone :</strong> ${phone}</li>
                </ul>

                <h2>Critères de Qualification</h2>
                <ul>
                    <li><strong>Statut d'habitation :</strong> ${projectType}</li>
                    <li><strong>Facture d'énergie actuelle :</strong> ${monthlyBill}</li>
                    <li><strong>Chauffage actuel :</strong> ${roofType}</li>
                    <li><strong>Type d'émetteurs :</strong> ${solarLocation}</li>
                </ul>

                <h2>Attribution Marketing</h2>
                <ul>
                    <li><strong>Source / Medium :</strong> ${attribution?.source || 'direct'} / ${attribution?.medium || 'direct'}</li>
                    ${attribution?.campaign ? `<li><strong>Campagne :</strong> ${attribution.campaign}</li>` : ''}
                    ${attribution?.term ? `<li><strong>Mot-clé recherché :</strong> ${attribution.term}</li>` : ''}
                    ${attribution?.landing_page ? `<li><strong>Page de capture :</strong> ${attribution.landing_page}</li>` : ''}
                </ul>
            `;

            await resend.emails.send({
                from: 'Expert Pompe à Chaleur <contact@expertpompeachaleur.com>',
                to: ['bonjour@expertpompeachaleur.com'],
                subject,
                html
            });
        }

        const vudDetails = vudResult?.devis_data?.devis_id ? {
            devis_id: vudResult.devis_data.devis_id,
            devis_hash: vudResult.devis_data.devis_hash || ''
        } : null;

        return NextResponse.json({ 
            success: true, 
            score: leadScore, 
            status: arbitrageStatus,
            vud: vudDetails
        });

    } catch (e: any) {
        console.error('API Error:', e);
        return NextResponse.json(
            { error: `Internal Server Error: ${e.message}` },
            { status: 500 }
        );
    }
}
