"use client";

export default function InstallationSteps() {
    const steps = [
        { title: "1. Étude & Devis", desc: "Simulation gratuite d'aides et étude technique de faisabilité pour votre PAC." },
        { title: "2. Aides & Primes", desc: "Constitution de votre dossier de subventions MaPrimeRénov' et Prime CEE." },
        { title: "3. Pose RGE", desc: "Installation de votre pompe à chaleur par nos techniciens RGE QualiPAC." },
        { title: "4. Mise en service", desc: "Contrôle d'étanchéité, mise en route et réglage de votre chauffage." }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Comment se passe l'installation ?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((s, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-4xl font-black text-rose-100 mb-2">0{i + 1}</div>
                            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                            <p className="text-sm text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
