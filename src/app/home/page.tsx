import { getHubConfig, SITES, SiteConfig } from "@/lib/sites-config";
import { NATIONAL_TARGETS } from "@/config/national-targets";
import { Zap, Award, ArrowRight, Home, CheckCircle, TrendingDown, ShieldCheck, Sun } from "lucide-react";
import LocalLinker from "@/components/blog/LocalLinker";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import { CityCards } from "@/components/CityCards";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { Footer } from "@/components/Footer";
import RealizationsGrid from "@/components/RealizationsGrid";
import LogoCloud from "@/components/LogoCloud";
import PricingTable from "@/components/PricingTable";
import InstallationSteps from "@/components/InstallationSteps";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
    title: "Installateur Pompes à Chaleur RGE | Devis & Simulation Aides",
    description: "Comparez les meilleurs installateurs de pompes à chaleur RGE. Simulation gratuite d'aides et économies d'énergie, prime d'État déduite et devis sous 24h.",
    keywords: ["installateur pompes à chaleur", "pompe à chaleur RGE", "simulation aides PAC", "devis pompe à chaleur", "chauffage pompe à chaleur", "QualiPAC RGE", "pompe à chaleur air eau prix", "pompe à chaleur 1 euro 2026", "remplacement chaudière fioul par pompe à chaleur", "aide pompe à chaleur 2026", "pompe à chaleur air air prix", "COP pompe à chaleur", "consommation pompe à chaleur", "pompe à chaleur ou chaudière gaz", "meilleure marque pompe à chaleur", "entretien pompe à chaleur prix"],
};

export default function HomePage() {
    const hub = getHubConfig();

    const cities = NATIONAL_TARGETS.map(target => ({
        name: target.name,
        department: target.zip.substring(0, 2),
        slug: target.slug,
        available: true
    }));

    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            {/* NAVIGATION - Rose theme */}
            <Header isHub={true} variant="default" themeColor="rose" />

            {/* HERO */}
            <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-slate-50/90 to-slate-50" />
                    <Image
                        src={hub.heroImage}
                        alt="Pompe à chaleur moderne installée devant une maison"
                        fill
                        priority
                        className="object-cover opacity-20"
                        sizes="100vw"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
                        {/* Left Column: Form & Intro */}
                        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
                            <div>
                                {/* Trust Badge */}
                                <div className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 mb-6">
                                    <CheckCircle size={16} className="mr-2" />
                                    Réseau National certifié RGE QualiPAC
                                </div>

                                {/* H1 */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                                    Passez à la <span className="text-rose-600">Pompe à Chaleur</span> et réduisez vos factures.
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl text-slate-600 mb-4 max-w-xl mx-auto lg:mx-0">
                                    <strong className="text-slate-900">Jusqu'à 70% d'économies sur votre chauffage.</strong> Recevez vos devis gratuits et simulez vos primes d&apos;État sous 24h.
                                </p>
                            </div>

                            {/* LEAD FORM */}
                            <div className="w-full max-w-xl mx-auto lg:mx-0 relative z-30 text-left">
                                <div id="simulateur" className="bg-white rounded-2xl shadow-xl shadow-rose-950/10 overflow-hidden border border-slate-200">
                                    <div className="p-1 bg-gradient-to-r from-rose-600 to-rose-700"></div>
                                    <div className="p-6 md:p-8">
                                        <div className="mb-6">
                                            <h3 className="text-lg font-bold text-slate-900">Simuler mes subventions &amp; Économies de Chauffage</h3>
                                            <p className="text-sm text-slate-500">Gratuit • Sans engagement • Résultats en 2 min</p>
                                        </div>
                                        <LeadForm
                                            city="France"
                                            domain="expertpompeachaleur.com"
                                            targetType="MIXED"
                                            themeColor="rose"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Hero Image & Trust Badges */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="relative h-[480px] w-full mb-8">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-rose-950/10 border border-slate-100 bg-white p-2">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                                        <Image
                                            src={hub.heroImage}
                                            alt="Maison équipée de pompes à chaleur"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute bottom-8 left-8 right-8 z-20">
                                            <div className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl border border-white/50 flex items-center gap-4 cursor-default">
                                                <div className="bg-rose-100 p-3 rounded-full shrink-0">
                                                    <ShieldCheck className="w-6 h-6 text-rose-600" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg text-slate-900">Garantie Performance</div>
                                                    <div className="text-sm font-medium text-slate-500">Économies de chauffage jusqu'à 70%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap items-center gap-4 justify-center px-4">
                                <div className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
                                    <Award size={24} className="text-rose-600 fill-rose-100" />
                                    <span className="font-bold text-slate-900 text-base">QualiPAC RGE</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
                                    <Award size={24} className="text-rose-600 fill-rose-100" />
                                    <span className="font-bold text-slate-900 text-base">Garantie Décennale</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <LogoCloud />

            {/* Comparison Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-2 text-sm font-bold mb-4">
                            <TrendingDown size={18} />
                            Économies &amp; Performance
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Chaudière Classique vs Pompe à Chaleur (PAC)
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Reprenez le contrôle de votre facture de chauffage face à l&apos;augmentation continue des prix du fioul et du gaz.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200">
                            <div className="grid md:grid-cols-2">
                                {/* Network Column */}
                                <div className="p-8 bg-red-50 border-b md:border-b-0 md:border-r border-red-100 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                            <span className="text-2xl">🔥</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-red-900">Chaudière Classique</h3>
                                            <p className="text-sm text-red-600">Énergie Fossile Coûteuse</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-red-100">
                                            <span className="text-neutral-700">Coût d&apos;exploitation</span>
                                            <span className="font-semibold text-red-600">En hausse constante (Gaz / Fioul)</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-red-100">
                                            <span className="text-neutral-700">Aides de l&apos;État</span>
                                            <span className="font-semibold text-red-600">Aucune éligibilité</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-4">
                                            <span className="font-bold text-neutral-900">Bilan Carbone</span>
                                            <span className="text-lg font-bold text-red-600">Émission importante de CO2</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Solar Column */}
                                <div className="p-8 bg-green-50 relative rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-10">
                                        RECOMMANDÉ
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                            <Zap className="text-rose-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-green-900">Pompe à Chaleur</h3>
                                            <p className="text-sm text-green-600">Énergie Renouvelable</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-green-100">
                                            <span className="text-neutral-700">Facture annuelle</span>
                                            <span className="font-semibold text-green-600">Jusqu&apos;à 70% d&apos;économies</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-green-100">
                                            <span className="text-neutral-700">Primes d&apos;État</span>
                                            <span className="font-semibold text-green-600">MaPrimeRénov&apos; &amp; CEE déduits</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-4">
                                            <span className="font-bold text-neutral-900">Rendement (COP)</span>
                                            <span className="text-lg font-bold text-green-600">COP jusqu&apos;à 4 (1kW = 4kW)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingTable />

            {/* Installation Steps */}
            <InstallationSteps />

            {/* Realizations Grid */}
            <RealizationsGrid />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Cities Grid */}
            <section id="villes" className="py-20 bg-slate-50 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Nos installateurs par ville
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Trouvez un technicien RGE QualiPAC près de chez vous
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="bg-white p-2 rounded-3xl shadow-lg border border-slate-200">
                            <LocalLinker />
                        </div>
                    </div>

                    <div className="mb-16">
                        <CityCards cities={cities} themeColor="rose" />
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Commencez à économiser sur votre chauffage
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        Simulez vos subventions en 2 minutes et recevez vos devis gratuits.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#simulateur"
                            className="flex items-center justify-center gap-3 rounded-2xl bg-rose-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-rose-700 transition"
                        >
                            <Zap size={24} />
                            Lancer ma simulation PAC
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer config={hub} />

            {/* Mobile Sticky CTA */}
            <MobileStickyCTA themeColor="rose" />

            {/* Floating CTA */}
            <FloatingCTA label="Simuler mes gains" />
        </div>
    );
}
