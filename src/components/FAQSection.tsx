"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({ city }: { city?: string }) {
    // SEO-focused questions based on PAA (People Also Ask)
    
    const cityText = city ? ` à ${city}` : "";
    const cityPlural = city ? ` à ${city} et ses alentours` : "";
    const faqs = [
        {
            question: `Quel est le prix moyen d'une pompe à chaleur${cityText} ?`,
            answer: `Le coût d'une pompe à chaleur air-eau installée se situe généralement entre 8 000€ et 18 000€ TTC selon la puissance, la marque (Daikin, Atlantic, Mitsubishi...) et les contraintes de pose${cityPlural}. Ce prix est souvent amorti en 5 à 8 ans grâce aux économies de chauffage.`
        },
        {
            question: `Quelles aides pour installer une pompe à chaleur${cityText} ?`,
            answer: `Plusieurs aides sont cumulables${cityText} : MaPrimeRénov' (jusqu'à 11 000€ selon vos revenus), les Certificats d'Économie d'Énergie (CEE, jusqu'à 5 000€), l'Éco-Prêt à Taux Zéro (jusqu'à 50 000€) et la TVA réduite à 5,5%. L'installation doit être réalisée par un artisan certifié RGE QualiPAC.`
        },
        {
            question: "Comment fonctionne une pompe à chaleur air-eau ?",
            answer: "La PAC air-eau capte les calories naturellement présentes dans l'air extérieur grâce à un fluide frigorigène. Ces calories sont ensuite amplifiées par un compresseur et transférées à votre circuit de chauffage central (radiateurs ou plancher chauffant). Pour 1 kWh d'électricité consommé, une PAC produit en moyenne 3 à 4 kWh de chaleur (COP de 3 à 4)."
        },
        {
            question: "Est-ce qu'une pompe à chaleur fonctionne quand il fait très froid ?",
            answer: "Oui, les PAC modernes fonctionnent efficacement jusqu'à -15°C voire -25°C pour les modèles hauts de gamme (Daikin Altherma, Mitsubishi Zubadan). Le rendement diminue légèrement par grand froid, mais une résistance d'appoint prend le relais si nécessaire. Dans la grande majorité du territoire français, la PAC couvre 100% des besoins."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                        Questions fréquentes
                    </h2>
                    <p className="text-slate-600">
                        Tout savoir sur votre projet pompe à chaleur.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-bold text-slate-900 pr-8">{question}</span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-rose-600 shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
}
