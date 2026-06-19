import Link from "next/link";
import { NATIONAL_CONFIG } from "@/config/national";
import { slugify } from "@/lib/slugify";
import { SiteConfig } from "@/lib/sites-config";
import { CityConfig } from "@/lib/db";
import { getNearbyCities } from "@/lib/geo";

interface InternalMeshProps {
    city?: string;
    config?: CityConfig | SiteConfig;
}

export function InternalMesh({ city, config }: InternalMeshProps) {
    const neighborhoods = (config as any)?.neighborhoods || (config as any)?.quartiers || [];

    const rawNearby = config ? getNearbyCities(config.slug, 12) : [];
    const slugs = new Set();
    const nearbyCities = rawNearby.filter(city => {
        if (slugs.has(city.slug)) return false;
        slugs.add(city.slug);
        return true;
    });

    function getVariedAnchor(name: string, index: number) {
        const variations = [
            `Aerotermia ${name}`,
            `Instalador bomba de calor ${name}`,
            `Climatización eficiente ${name}`,
            `Suelo radiante ${name}`,
            `Especialistas calefacción ${name}`
        ];
        return variations[index % variations.length];
    }

    return (
        <section className="bg-neutral-900 border-t border-white/5 py-16 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-4 gap-12 text-left">
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Nuestros Servicios</h4>
                        <ul className="space-y-3">
                            {[
                                "Instalación de Aerotermia",
                                "Estudio de Eficiencia Energética",
                                "Mantenimiento de Bomba de Calor",
                                "Suelo Radiante",
                                "Aerotermia con Placas Solares"
                            ].map((service, i) => (
                                <li key={i}>
                                    <a href="#simulateur" className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2">
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Delegaciones Cercanas</h4>
                        <ul className="space-y-3">
                            {nearbyCities.slice(0, 6).map((city, i) => (
                                <li key={city.slug}>
                                    <Link
                                        href={`/ville/${city.slug}`}
                                        className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2"
                                    >
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {getVariedAnchor(city.city, i)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">
                            {config ? `Barrios de ${config.city}` : "Zonas de actuación"}
                        </h4>
                        <ul className="space-y-3">
                            {neighborhoods.slice(0, 8).map((quartier: string, i: number) => (
                                <li key={quartier}>
                                    <Link href={`#simulateur`} className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2">
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {getVariedAnchor(quartier, i + 2)}
                                    </Link>
                                </li>
                            ))}
                            {neighborhoods.length === 0 && (
                                <li className="text-neutral-500 text-sm italic">Toda la provincia y alrededores</li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Documentación y Consejos</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Subvenciones Aerotermia 2026", href: "/guides/subvenciones-aerotermia" },
                                { label: "Ahorro Energético", href: "/guides/ahorro-energetico-bomba-de-calor" },
                                { label: "Precio Instalación", href: "/guides/precio-aerotermia-vivienda" },
                                { label: "Todos los artículos", href: "/guides" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-neutral-400 hover:text-white transition text-sm flex items-center gap-2">
                                        <span className="bg-amber-500 rounded-full h-1 w-1 shrink-0"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}