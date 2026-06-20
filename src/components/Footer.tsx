import Link from "next/link";
import { SITES } from "@/lib/sites-config";
import { CityConfig } from "@/lib/db";
import { SiteConfig } from "@/lib/sites-config";
import { getTheme } from "@/lib/theme";
import { Mail } from "lucide-react";

interface FooterProps {
    config: CityConfig | SiteConfig;
}

export function Footer({ config }: FooterProps) {
    if (!config) return null;

    const neighborhoods = (config as any).neighborhoods || (config as any).quartiers || [];
    const theme = getTheme(config.slug);

    const uniqueSites = Array.from(
        new Map(Object.values(SITES).map(site => [site.slug, site])).values()
    );

    const sitesByRegion = uniqueSites
        .filter(site => site.slug !== 'home' && site.slug !== 'expertoaerotermia.es' && site.slug !== 'www.expertoaerotermia.es')
        .reduce((acc, site) => {
            const region = site.region || 'Otras';
            if (!acc[region]) acc[region] = [];
            acc[region].push(site);
            return acc;
        }, {} as Record<string, SiteConfig[]>);

    const getGlobalDiverseAnchor = (cityName: string, index: number) => {
        const variations = ["Aerotermia ${cityName}","Instalador aerotermia ${cityName}","Suelo radiante ${cityName}","Precio aerotermia ${cityName}","Calefacción aerotermia ${cityName}"];
        return variations[index % variations.length].replace(/\${cityName}/g, cityName);
    };

    return (
        <footer className="bg-neutral-900 border-t border-white/10 py-12 text-neutral-400">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-white font-bold mb-4">Sobre {config.name}</h4>
                <p className="max-w-2xl mx-auto text-sm mb-8">
                    {config.name} es el comparador líder para la instalación de aerotermia y suelo radiante en {config.city}. Compara gratis hasta 3 presupuestos de instaladores acreditados (RITE).
                </p>

                <div className="inline-flex items-center gap-2 bg-blue-500/10 border-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="font-bold text-sm">Instaladores Homologados RITE</span>
                </div>

                <div className="border-t border-white/10 pt-12 mt-12">
                    <div className="grid md:grid-cols-4 gap-8 text-left max-w-7xl mx-auto">
                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">
                                {config.slug === 'home' ? 'Zonas de Actividad' : 'Zonas de Actividad'}
                            </h5>
                            <ul className="space-y-3 text-sm">
                                {config.slug === 'home' ? (
                                    <>
                                        
            <li><Link href="/ville/madrid" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Madrid</Link></li>
            <li><Link href="/ville/barcelona" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Barcelona</Link></li>
            <li><Link href="/ville/valencia" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Valencia</Link></li>
            <li><Link href="/ville/sevilla" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Sevilla</Link></li>
            <li><Link href="/ville/malaga" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-amber-500 transition"></span>Málaga</Link></li>
        
                                    </>
                                ) : (
                                    <>
                                        {neighborhoods.slice(0, 6).map((zone: string) => (
                                            <li key={zone}>
                                                <Link href={`#simulateur`} className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                                    <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                                    {zone}
                                                </Link>
                                            </li>
                                        ))}
                                        {neighborhoods.length === 0 && (
                                            <li className="text-neutral-500 italic">Todo {config.city}</li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">
                                Nuestra Red
                            </h5>
                            <ul className="space-y-3 text-sm">
                                {(() => {
                                    let nearbySites = [];
                                    const currentSite = config as SiteConfig;

                                    if (config.slug === 'home') {
                                        const topSlugs = ["madrid", "barcelona", "valencia", "sevilla"];
                                        nearbySites = uniqueSites.filter(s => topSlugs.includes(s.slug));
                                    } else {
                                        const sameDept = uniqueSites.filter(s => s.slug !== 'home' && s.slug !== currentSite.slug && s.department === currentSite.department);
                                        const sameRegion = uniqueSites.filter(s => s.slug !== 'home' && s.slug !== currentSite.slug && s.region === currentSite.region && s.department !== currentSite.department);

                                        const combined = [...sameDept, ...sameRegion, ...uniqueSites.filter(s => s.slug !== 'home' && s.slug !== currentSite.slug)];
                                        const seen = new Set();
                                        for (const s of combined) {
                                            if (!seen.has(s.slug) && nearbySites.length < 5) {
                                                seen.add(s.slug);
                                                nearbySites.push(s);
                                            }
                                        }
                                    }

                                    const getVariedFooterAnchor = (cityName: string, index: number) => {
                                        const variations = ["Aerotermia ${cityName}","Instalador aerotermia ${cityName}","Suelo radiante ${cityName}","Precio aerotermia ${cityName}","Calefacción aerotermia ${cityName}"];
                                        return variations[index % variations.length].replace(/\${cityName}/g, cityName);
                                    };

                                    return nearbySites.map((site, index) => (
                                        <li key={site.slug}>
                                            <Link
                                                href={`/ville/${site.slug}`}
                                                className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"
                                            >
                                                <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                                {getVariedFooterAnchor(site.city, index)}
                                            </Link>
                                        </li>
                                    ));
                                })()}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">Nuestros Artículos</h5>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/guides/ayudas-aerotermia-next-generation" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Subvenciones Aerotermia 2026
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides/ahorro-aerotermia-suelo-radiante" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Ahorro con Suelo Radiante
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides/precio-instalacion-aerotermia" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Precio de la Aerotermia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Todos nuestros artículos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                        <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                        Asociarse como instalador
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">Marcas</h5>
                            <ul className="space-y-3 text-sm mb-8">
                                {["Daikin","Mitsubishi","Panasonic","Saunier Duval"].map((brand) => (
                                    <li key={brand}>
                                        <Link href={`#simulateur`} className="text-neutral-400 hover:text-white transition flex items-center gap-2 group">
                                            <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                            Aerotermia {brand}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <h5 className="text-white font-bold mb-6 text-lg tracking-tight">Contacto</h5>
                            <ul className="space-y-6">
                                <li>
                                    <Link href="/contact" className="flex items-start gap-4 text-neutral-400 hover:text-white transition group text-left">
                                        <div className={`p-2 rounded-lg bg-white/5 group-hover:${theme.classes.bg} transition group-hover:text-neutral-900`}>
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-white font-bold text-lg">{config.email}</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 mt-4 text-left max-w-7xl mx-auto mb-16 px-4 md:px-0">
                    <h5 className="text-white font-bold mb-8 text-xl tracking-tight text-center md:text-left">
                        Nuestra Red de Instaladores de Aerotermia en España
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {Object.entries(sitesByRegion).map(([region, sites]) => (
                            <div key={region} className="space-y-4">
                                <h6 className="text-white/80 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-500/50"></span>
                                    {region}
                                </h6>
                                <ul className="space-y-3 text-sm">
                                    {sites.map((site, index) => (
                                        <li key={site.slug}>
                                            <Link
                                                href={`/ville/${site.slug}`}
                                                className="text-neutral-400 hover:text-white transition flex items-center gap-2 group"
                                            >
                                                <span className={`w-1 h-1 rounded-full bg-neutral-600 group-hover:${theme.classes.bg} transition`}></span>
                                                {getGlobalDiverseAnchor(site.city, index)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-xs border-t border-white/10 pt-8">
                    &copy; {new Date().getFullYear()} {config.name} - Todos los derechos reservados.
                </div>
                <div className="flex justify-center gap-4 text-xs mt-4 mb-2">
                    <Link href="/mentions-legales" className="text-neutral-500 hover:text-white transition-colors">Aviso Legal</Link>
                    <span className="text-neutral-700">•</span>
                    <Link href="/cgv" className="text-neutral-500 hover:text-white transition-colors">Condiciones</Link>
                </div>
            </div>
        </footer>
    );
}
