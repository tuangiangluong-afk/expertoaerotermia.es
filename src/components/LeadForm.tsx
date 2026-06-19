"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Home,
    User,
    Clock,
    Shield,
    Phone,
    Mail,
    User2,
    Calendar,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    Flame,
    Thermometer,
    TrendingUp,
    Zap,
    AlertTriangle
} from "lucide-react";
import Link from "next/link";

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

interface LeadFormProps {
    city: string;
    domain: string;
    targetType?: 'SOLAR' | 'MIXED';
    themeColor?: 'gold' | 'amber' | 'slate' | 'rose';
    initialProjectType?: 'proprietaire_maison' | 'coproprietaire' | 'locataire';
}

interface FormData {
    projectType: 'proprietaire_maison' | 'coproprietaire' | 'locataire' | null;
    monthlyBill: 'plus_150' | '100_150' | 'moins_100' | null;
    roofType: 'fioul' | 'gaz' | 'electricite' | 'bois' | null;
    solarLocation: 'radiateurs' | 'plancher' | 'air' | null;
    name: string;
    email: string;
    phone: string;
    zipCode: string;
}

const FRENCH_PHONE_REGEX = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
const ZIP_CODE_REGEX = /^\d{5}$/;

export default function LeadForm({
    city,
    domain,
    targetType = 'MIXED',
    themeColor = 'gold',
    initialProjectType
}: LeadFormProps) {
    const router = useRouter();
    const INITIAL_FORM_DATA: FormData = {
        projectType: initialProjectType || null,
        monthlyBill: null,
        roofType: null,
        solarLocation: null,
        name: "",
        email: "",
        phone: "",
        zipCode: ""
    };

    const [step, setStep] = useState(initialProjectType ? 2 : 1);
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    const getLeadScore = (): number => {
        let score = 0;
        if (formData.projectType === 'proprietaire_maison') score += 30;
        if (formData.projectType === 'coproprietaire') score += 5;
        if (formData.monthlyBill === 'plus_150') score += 30;
        if (formData.monthlyBill === '100_150') score += 15;
        if (formData.monthlyBill === 'moins_100') score += 5;
        if (formData.roofType === 'fioul') score += 30;
        if (formData.roofType === 'gaz') score += 20;
        if (formData.roofType === 'electricite') score += 15;
        if (formData.roofType === 'bois') score += 10;
        if (formData.solarLocation === 'radiateurs') score += 20;
        if (formData.solarLocation === 'plancher') score += 25;
        if (formData.solarLocation === 'air') score += 15;
        return score;
    };

    const handleOptionSelect = (field: keyof FormData, value: string) => {
        if (step === 1 && field === 'projectType') {
            if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                    event: 'form_start',
                    lead_category: value
                });
            }
        }
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage("");
        }
    };

    const canProceed = (): boolean => {
        switch (step) {
            case 1: return formData.projectType !== null;
            case 2: return formData.monthlyBill !== null;
            case 3: return formData.roofType !== null;
            case 4: return formData.solarLocation !== null;
            case 5:
                return (
                    formData.name.trim() !== "" &&
                    formData.email.includes("@") &&
                    ZIP_CODE_REGEX.test(formData.zipCode.trim()) &&
                    formData.phone.trim() !== "" &&
                    FRENCH_PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))
                );
            default: return false;
        }
    };

    const nextStep = () => {
        if (canProceed() && step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            if (step === 2 && initialProjectType) return;
            setStep(step - 1);
        }
    };

    const handleSubmit = async () => {
        if (!canProceed()) {
            setStatus('error');
            const errors = [];
            if (formData.name.trim() === "") errors.push("votre Nom");
            if (!ZIP_CODE_REGEX.test(formData.zipCode.trim())) errors.push("un Code Postal valide");
            if (!formData.email.includes("@")) errors.push("un Email valide");
            if (formData.phone.trim() === "" || !FRENCH_PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))) errors.push("un Numéro de téléphone valide");
            
            setErrorMessage(`Veuillez renseigner : ${errors.join(', ')}.`);
            return;
        }

        setStatus('loading');

        try {
            let attribution = {};
            if (typeof window !== 'undefined') {
                const stored = sessionStorage.getItem('lead_attribution');
                if (stored) {
                    try { attribution = JSON.parse(stored); } catch (e) {}
                }
            }

            const payload = {
                ...formData,
                city,
                postalCode: formData.zipCode,
                domain,
                leadScore: getLeadScore(),
                niche: 'pac',
                timestamp: new Date().toISOString(),
                attribution
            };

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Erreur lors de l\'envoi');
            }

            const data = await res.json();

            if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                    event: 'generate_lead',
                    lead_category: formData.projectType,
                    lead_city: city,
                    value: 100.00,
                    currency: 'EUR',
                    traffic_source: (attribution as any).source || 'direct',
                    landing_page: window.location.pathname
                });
            }

            // Redirect to success page if we have VUD details!
            if (data?.vud && data.vud.devis_id) {
                router.push(`/${domain}/success?devis_id=${data.vud.devis_id}&devis_hash=${data.vud.devis_hash || ''}`);
                return;
            }

            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Une erreur est survenue');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-rose-50 to-red-50/30 border border-rose-200 rounded-3xl p-8 text-center">
                <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md shadow-rose-500/10">
                    <CheckCircle className="text-rose-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-rose-800 mb-3">
                    Étude d&apos;éligibilité validée !
                </h3>
                <p className="text-neutral-700 mb-6">
                    Votre demande a été transmise. Un thermicien certifié RGE QualiPAC va réaliser votre étude thermique sous **24h** pour votre projet à **{city}**.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-rose-700 font-medium">
                    <Shield size={16} />
                    <span>Matériel garanti &amp; Installateur RGE</span>
                </div>
            </div>
        );
    }

    const OptionButton = ({
        selected,
        onClick,
        icon: Icon,
        label,
        sublabel,
        highlight = false
    }: {
        selected: boolean;
        onClick: () => void;
        icon: React.ElementType;
        label: string;
        sublabel?: string;
        highlight?: boolean;
    }) => (
        <button
            onClick={onClick}
            className={`
                relative w-full p-5 rounded-2xl border-2 transition-all duration-200
                flex items-center gap-4 text-left
                ${selected
                    ? 'border-rose-500 bg-rose-50/30 shadow-lg'
                    : 'border-neutral-200 bg-white hover:bg-neutral-50'
                }
                ${highlight && !selected ? 'ring-2 ring-rose-400 ring-offset-2' : ''}
            `}
        >
            <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                ${selected ? 'bg-white text-rose-600 shadow' : 'bg-neutral-100 text-neutral-600'}
            `}>
                <Icon size={24} />
            </div>
            <div>
                <div className={`font-bold ${selected ? 'text-neutral-900' : 'text-neutral-800'}`}>
                    {label}
                </div>
                {sublabel && (
                    <div className="text-sm text-neutral-500 mt-0.5">{sublabel}</div>
                )}
            </div>
            {selected && (
                <div className="absolute top-3 right-3">
                    <CheckCircle className="text-rose-600" size={20} />
                </div>
            )}
        </button>
    );

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden font-sans">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-700 to-rose-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Flame size={24} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Simulateur Chauffage 2026</h3>
                        <p className="text-white/80 text-sm">Calcul d&apos;aides MaPrimeRénov&apos; &amp; CEE</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                    <div className="h-2 bg-slate-900/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-slate-900 transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-800 font-medium">
                        <span>Étape {step}/{totalSteps}</span>
                        <span>{Math.round(progress)}% complété</span>
                    </div>
                </div>
            </div>

            {/* Form Body */}
            <div className="p-6">
                {/* Step 1: Project Type */}
                {step === 1 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Quel est votre statut d&apos;habitation ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.projectType === 'proprietaire_maison'}
                                onClick={() => handleOptionSelect('projectType', 'proprietaire_maison')}
                                icon={Home}
                                label="Propriétaire de maison individuelle"
                                sublabel="Éligibilité maximale pour les aides de l'État (MaPrimeRénov')"
                                highlight={true}
                            />
                            <OptionButton
                                selected={formData.projectType === 'coproprietaire'}
                                onClick={() => handleOptionSelect('projectType', 'coproprietaire')}
                                icon={Home}
                                label="Copropriétaire (Appartement / Maison)"
                                sublabel="Projet nécessitant généralement l'accord de la copropriété"
                            />
                            <OptionButton
                                selected={formData.projectType === 'locataire'}
                                onClick={() => handleOptionSelect('projectType', 'locataire')}
                                icon={User}
                                label="Locataire"
                                sublabel="Non éligible directement aux aides de l'État"
                            />
                        </div>
                    </div>
                )}

                {/* Step 2: Monthly Bill */}
                {step === 2 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Quel est le montant estimé de votre facture d&apos;énergie (chauffage) ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.monthlyBill === 'plus_150'}
                                onClick={() => handleOptionSelect('monthlyBill', 'plus_150')}
                                icon={TrendingUp}
                                label="Plus de 150 € / mois"
                                sublabel="Potentiel d'économies d'énergie très important"
                            />
                            <OptionButton
                                selected={formData.monthlyBill === '100_150'}
                                onClick={() => handleOptionSelect('monthlyBill', '100_150')}
                                icon={Zap}
                                label="Entre 100 et 150 € / mois"
                                sublabel="Transition énergétique très recommandée"
                            />
                            <OptionButton
                                selected={formData.monthlyBill === 'moins_100'}
                                onClick={() => handleOptionSelect('monthlyBill', 'moins_100')}
                                icon={Zap}
                                label="Moins de 100 € / mois"
                                sublabel="Maison déjà bien isolée ou petite surface"
                            />
                        </div>
                    </div>
                )}

                {/* Step 3: Heat System (roofType) */}
                {step === 3 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Quel est votre système de chauffage principal actuel ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.roofType === 'fioul'}
                                onClick={() => handleOptionSelect('roofType', 'fioul')}
                                icon={Flame}
                                label="Chaudière Fioul ou Charbon"
                                sublabel="⚠️ Remplacement prioritaire fortement subventionné"
                            />
                            <OptionButton
                                selected={formData.roofType === 'gaz'}
                                onClick={() => handleOptionSelect('roofType', 'gaz')}
                                icon={Flame}
                                label="Chaudière Gaz (standard ou condensation)"
                                sublabel="Transition écologique vers une énergie plus propre"
                            />
                            <OptionButton
                                selected={formData.roofType === 'electricite'}
                                onClick={() => handleOptionSelect('roofType', 'electricite')}
                                icon={Zap}
                                label="Radiateurs électriques"
                                sublabel="Divisez vos factures de chauffage par 3 avec une PAC réversible"
                            />
                            <OptionButton
                                selected={formData.roofType === 'bois'}
                                onClick={() => handleOptionSelect('roofType', 'bois')}
                                icon={Flame}
                                label="Chauffage au Bois / Autre"
                                sublabel="Remplacement ou appoint pour relève de chaudière"
                            />
                        </div>
                    </div>
                )}

                {/* Step 4: Emitters (solarLocation) */}
                {step === 4 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            De quel type d&apos;émetteurs de chaleur disposez-vous ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.solarLocation === 'radiateurs'}
                                onClick={() => handleOptionSelect('solarLocation', 'radiateurs')}
                                icon={Thermometer}
                                label="Radiateurs à eau chaude"
                                sublabel="Idéal pour une PAC Air-Eau moyenne ou haute température"
                            />
                            <OptionButton
                                selected={formData.solarLocation === 'plancher'}
                                onClick={() => handleOptionSelect('solarLocation', 'plancher')}
                                icon={Home}
                                label="Plancher chauffant hydraulique"
                                sublabel="Performance et confort maximisés avec une PAC Air-Eau basse température"
                                highlight={true}
                            />
                            <OptionButton
                                selected={formData.solarLocation === 'air'}
                                onClick={() => handleOptionSelect('solarLocation', 'air')}
                                icon={Thermometer}
                                label="Pas de réseau hydraulique (Radiateurs électriques)"
                                sublabel="Idéal pour une PAC Air-Air (climatisation réversible)"
                            />
                        </div>
                    </div>
                )}

                {/* Step 5: Contact Info */}
                {step === 5 && (
                    <div className="space-y-5">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Saisissez vos coordonnées pour recevoir votre étude gratuite
                        </h4>

                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                    <User2 size={16} />
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Jean Dupont"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                        Code Postal du projet
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        placeholder="75000"
                                        maxLength={5}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                        <Mail size={16} />
                                        Adresse email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="jean.dupont@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                    <Phone size={16} />
                                    Numéro de téléphone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="06 12 34 56 78"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition outline-none"
                                />
                                {formData.phone && !FRENCH_PHONE_REGEX.test(formData.phone.replace(/\s/g, '')) && (
                                    <p className="text-xs text-red-500 mt-1">
                                        Format de téléphone invalide (Ex: 0612345678)
                                    </p>
                                )}
                            </div>
                        </div>

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-8 items-start">
                    {step > 1 && !(step === 2 && initialProjectType) && (
                        <button
                            onClick={prevStep}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition"
                        >
                            <ArrowLeft size={18} />
                            Retour
                        </button>
                    )}

                    {step < totalSteps ? (
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className={`
                                    flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition
                                    ${canProceed()
                                    ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg shadow-rose-500/20 hover:from-rose-700 hover:to-rose-800'
                                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                                }
                                `}
                        >
                            Continuer
                            <ArrowRight size={20} />
                        </button>
                    ) : (
                        <div className="w-full">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={status === 'loading'}
                                className={`
                                        w-full py-4 px-6 rounded-xl text-lg font-bold text-white shadow-xl transition-all
                                        ${status === 'loading'
                                        ? 'bg-slate-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 transform hover:-translate-y-1 shadow-rose-500/20'
                                    }
                                    `}
                            >
                                {status === 'loading' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Simulation...
                                    </span>
                                ) : (
                                    "Obtenir mon étude thermique"
                                )}
                            </button>

                            <p className="text-xs text-slate-400 text-center mt-4 px-4 leading-relaxed">
                                En cliquant sur ce bouton, vous acceptez nos <Link href="/cgv" className="underline hover:text-rose-600">CGV</Link> et acceptez d&apos;être recontacté par nos experts RGE QualiPAC partenaires pour votre projet de pompe à chaleur.
                            </p>
                        </div>
                    )}
                </div>

                {/* Trust footer */}
                <div className="flex flex-wrap justify-center sm:justify-between gap-3 mt-6 pt-6 border-t border-neutral-100 text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><Shield size={12} className="text-green-500" /> Données Sécurisées</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Sans engagement</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><Flame size={12} className="text-red-500" /> Installateurs RGE QualiPAC</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Étude 24h</span>
                </div>
            </div>
        </div>
    );
}
