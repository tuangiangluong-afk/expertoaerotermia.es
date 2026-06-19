/**
 * Heat Pump Hub Site Configuration (Vaisseau Mère)
 */

export interface SiteConfig {
    slug: string;
    domain: string;
    aliases?: string[];
    city: string;
    postalCode: string;
    department: string;
    region: string;
    name: string;
    phoneNumber: string;
    email: string;
    targetType: 'SOLAR' | 'MIXED';
    priceRange: 'STANDARD' | 'PREMIUM' | 'LUXE';
    theme: 'premium' | 'trust';
    heroImage: string;
    description: string;
    meta: {
        title: string;
        description: string;
    };
    certifications: string[];
    aidesDisponibles: string[];
    features: string[];
    localKeywords: string[];
    quartiers: string[];
    coproprietes: string[];
    centresCommerciaux: string[];
    ga_id?: string;
    gtm_id?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

const TEMPLATE_CERTIFICATIONS = [
    "RGE QualiPAC",
    "Qualibat",
    "Assurance décennale"
];

const TEMPLATE_AIDES = [
    "MaPrimeRénov'",
    "Certificats d'Économie d'Énergie (CEE)",
    "Éco-Prêt à Taux Zéro (Éco-PTZ)",
    "TVA Réduite 5.5%"
];

const TEMPLATE_FEATURES = [
    "Devis gratuit sous 24h",
    "Étude thermique offerte",
    "Économies de chauffage jusqu'à 70%",
    "Installateurs certifiés RGE QualiPAC",
    "Dossier de subventions ANAH géré à 100%"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: 'expertoaerotermia.es',
    city: "France",
    postalCode: "",
    department: "",
    region: "National",
    name: 'Experto Aerotermia',
    phoneNumber: "01 84 80 00 00",
    email: 'contacto@expertoaerotermia.es',
    targetType: 'MIXED',
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/pac-hero.png",
    description: "Le réseau n°1 d'installateurs de pompes à chaleur en France. Devis gratuit, étude thermique et artisans certifiés RGE QualiPAC.",
    meta: {
        title: "Expert Pompe à Chaleur | Installation & Remplacement de Chauffage France",
        description: "Installation de pompe à chaleur air-eau et air-air partout en France. Devis gratuit sous 24h. Simulateur d'éligibilité aux aides MaPrimeRénov'."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
        "installateur pompe à chaleur",
        "remplacement chaudière fioul",
        "pompe à chaleur air eau",
        "artisan RGE QualiPAC",
        "aides installation PAC"
    ],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 46.2276, lng: 2.2137 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertpompeachaleur.com": _hubConfig,
    "www.expertpompeachaleur.com": _hubConfig,
    "home": _hubConfig
};

export function getSiteConfig(hostnameOrSlug: string): SiteConfig | null {
    let hostname = hostnameOrSlug.split(':')[0];
    hostname = hostname.replace(/^www\./, '');

    const bySlug = Object.values(SITES).find(s => s.slug === hostname);
    if (bySlug) return bySlug;

    if (SITES[hostname]) return SITES[hostname];

    return _hubConfig;
}

export function getSiteBySlug(slug: string): SiteConfig | null {
    return Object.values(SITES).find(s => s.slug === slug) || null;
}

export function getSatelliteSites(): SiteConfig[] {
    return []; // No satellite domains
}

export function isMainHub(hostname: string): boolean {
    return true; // Always true as there are no satellite domains
}

export function getHubConfig(): SiteConfig {
    return _hubConfig;
}
