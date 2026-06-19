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
    targetType: 'SOLAR' | 'MIXED' | 'PMP' | 'CONCRETE';
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
    "Instaladores RITE",
    "Garantía de equipos",
    "Servicio Técnico Oficial"
];
const TEMPLATE_AIDES = [
    "Ayudas Next Generation",
    "Deducciones fiscales"
];
const TEMPLATE_FEATURES = [
    "Estudio de climatización gratis",
    "Ahorro de hasta 70%",
    "Equipos eficientes"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "expertoaerotermia.es",
    city: "España",
    postalCode: "",
    department: "",
    region: "National",
    name: "Experto Aerotermia",
    phoneNumber: "910 00 00 00",
    email: "contacto@expertoaerotermia.es",
    targetType: "MIXED",
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/pac-hero.png",
    description: "Encuentra instaladores autorizados de aerotermia en España. Solicita tu estudio gratuito.",
    meta: {
        title: "Experto Aerotermia | Presupuestos & Instalación",
        description: "Encuentra instaladores autorizados de aerotermia en España. Solicita tu estudio gratuito."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
    "aerotermia precios",
    "suelo radiante"
],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 46.22, lng: 2.21 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertoaerotermia.es": _hubConfig,
    "www.expertoaerotermia.es": _hubConfig,
    "home": _hubConfig
};

export const getSiteConfig = (hostnameOrSlug: string): SiteConfig | null => {
    let hostname = hostnameOrSlug.split(':')[0];
    hostname = hostname.replace(/^www\./, '');
    const bySlug = Object.values(SITES).find(s => s.slug === hostname);
    if (bySlug) return bySlug;
    if (SITES[hostname]) return SITES[hostname];
    return _hubConfig;
};

export const getSiteBySlug = (slug: string): SiteConfig | null => Object.values(SITES).find(s => s.slug === slug) || null;
export const getSatelliteSites = (): SiteConfig[] => [];
export const isMainHub = (hostname: string): boolean => true;
export const getHubConfig = (): SiteConfig => _hubConfig;
