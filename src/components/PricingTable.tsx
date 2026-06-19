"use client";

export default function PricingTable() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
                    Quel prix pour une installation de pompe à chaleur en 2026 ?
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 text-slate-700">
                                <th className="p-4 border-b">Type de Pompe à Chaleur</th>
                                <th className="p-4 border-b">Matériel (Unité Int./Ext.)</th>
                                <th className="p-4 border-b">Installation &amp; Raccordement</th>
                                <th className="p-4 border-b">Reste à Charge (Aides Déduites)*</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-rose-950">PAC Air-Air (Climatisation Réversible)</td>
                                <td className="p-4">3 000€ - 6 000€</td>
                                <td className="p-4">1 500€ - 3 000€</td>
                                <td className="p-4 font-bold text-green-600">Dès 3 500€ (Après aides CEE)</td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-rose-950">PAC Air-Eau (Chauffage &amp; Eau Chaude)</td>
                                <td className="p-4">7 000€ - 12 000€</td>
                                <td className="p-4">3 000€ - 5 000€</td>
                                <td className="p-4 font-bold text-green-600">Dès 2 000€ (Après MaPrimeRénov&apos;)</td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-rose-950">PAC Géothermique (Haute Performance)</td>
                                <td className="p-4">12 000€ - 18 000€</td>
                                <td className="p-4">5 000€ - 8 000€</td>
                                <td className="p-4 font-bold text-green-600">Dès 9 000€ (Après aides d&apos;État)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-sm text-slate-500 mt-4 italic">
                    *Estimations moyennes 2026. Les aides de l&apos;État (MaPrimeRénov&apos; et Prime CEE) sont calculées selon le revenu fiscal du foyer et la zone géographique. Le reste à charge minimal est garanti pour les ménages très modestes.
                </p>
            </div>
        </section>
    );
}
