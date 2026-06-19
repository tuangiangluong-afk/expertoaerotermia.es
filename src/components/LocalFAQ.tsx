import { CityConfig } from "@/lib/db";

interface LocalFAQProps {
    site: CityConfig;
    segment: "B2C" | "COPRO" | "ENTREPRISE";
}

export function LocalFAQ({ site, segment }: LocalFAQProps) {
    const city = site.city;
    const faqs = getLocalFAQData(city, site.department, segment);

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Preguntas frecuentes en {city}
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Todo lo que necesita saber sobre la instalación de aerotermia en su localidad.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details 
                            key={idx} 
                            className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                            {...(idx === 0 ? { open: true } : {})}
                        >
                            <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-bold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                <span>{faq.question}</span>
                                <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function cityHash(city: string): number {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
        hash = ((hash << 5) - hash + city.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

export function getLocalFAQData(city: string, department: string | undefined, segment: "B2C" | "COPRO" | "ENTREPRISE") {
    const dept = department || "";
    const h = cityHash(city);
    const installCount = 40 + (h % 80);

    return [
        {
            question: `¿Cuál es el precio de una instalación de aerotermia en ${city}?`,
            answer: `El coste de instalar aerotermia en ${city} suele oscilar entre 7.000€ y 15.000€, dependiendo del tamaño de la vivienda y si incluye suelo radiante. Este precio es antes de descontar las subvenciones disponibles.`
        },
        {
            question: `¿Cuánto tiempo se tarda en instalar la aerotermia en ${city}?`,
            answer: `Nuestros técnicos certificados intervienen rápidamente tras la aprobación del presupuesto. La instalación en una vivienda en ${city} suele durar entre 2 y 4 días. Hemos realizado más de ${installCount} obras en su provincia recientemente.`
        },
        {
            question: `¿Existen ayudas para instalar aerotermia en ${city}?`,
            answer: `Sí, en ${city} puede beneficiarse de las ayudas de los fondos europeos Next Generation y subvenciones autonómicas, que pueden cubrir hasta 3.000€ del coste total.`
        }
    ];
}
