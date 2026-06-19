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
    "madrid": {
        ..._hubConfig,
        slug: "madrid",
        city: "Madrid",
        postalCode: "28001",
        region: "Comunidad de Madrid",
        department: "Madrid",
        coordinates: { lat: 40.4168, lng: -3.7038 }
    },
    "barcelona": {
        ..._hubConfig,
        slug: "barcelona",
        city: "Barcelona",
        postalCode: "08001",
        region: "Cataluña",
        department: "Barcelona",
        coordinates: { lat: 41.3851, lng: 2.1734 }
    },
    "valencia": {
        ..._hubConfig,
        slug: "valencia",
        city: "Valencia",
        postalCode: "46001",
        region: "Comunidad Valenciana",
        department: "Valencia",
        coordinates: { lat: 39.4699, lng: -0.3763 }
    },
    "sevilla": {
        ..._hubConfig,
        slug: "sevilla",
        city: "Sevilla",
        postalCode: "41001",
        region: "Andalucía",
        department: "Sevilla",
        coordinates: { lat: 37.3891, lng: -5.9845 }
    },
    "zaragoza": {
        ..._hubConfig,
        slug: "zaragoza",
        city: "Zaragoza",
        postalCode: "50001",
        region: "Aragón",
        department: "Zaragoza",
        coordinates: { lat: 41.6488, lng: -0.8891 }
    },
    "m-laga": {
        ..._hubConfig,
        slug: "m-laga",
        city: "Málaga",
        postalCode: "29001",
        region: "Andalucía",
        department: "Málaga",
        coordinates: { lat: 36.7213, lng: -4.4216 }
    },
    "murcia": {
        ..._hubConfig,
        slug: "murcia",
        city: "Murcia",
        postalCode: "30001",
        region: "Región de Murcia",
        department: "Murcia",
        coordinates: { lat: 37.9922, lng: -1.1307 }
    },
    "palma": {
        ..._hubConfig,
        slug: "palma",
        city: "Palma",
        postalCode: "07001",
        region: "Islas Baleares",
        department: "Baleares",
        coordinates: { lat: 39.5696, lng: 2.6502 }
    },
    "las-palmas": {
        ..._hubConfig,
        slug: "las-palmas",
        city: "Las Palmas",
        postalCode: "35001",
        region: "Canarias",
        department: "Las Palmas",
        coordinates: { lat: 28.1235, lng: -15.4363 }
    },
    "bilbao": {
        ..._hubConfig,
        slug: "bilbao",
        city: "Bilbao",
        postalCode: "48001",
        region: "País Vasco",
        department: "Vizcaya",
        coordinates: { lat: 43.263, lng: -2.935 }
    },
    "alicante": {
        ..._hubConfig,
        slug: "alicante",
        city: "Alicante",
        postalCode: "03001",
        region: "Comunidad Valenciana",
        department: "Alicante",
        coordinates: { lat: 38.3452, lng: -0.481 }
    },
    "c-rdoba": {
        ..._hubConfig,
        slug: "c-rdoba",
        city: "Córdoba",
        postalCode: "14001",
        region: "Andalucía",
        department: "Córdoba",
        coordinates: { lat: 37.8882, lng: -4.7794 }
    },
    "valladolid": {
        ..._hubConfig,
        slug: "valladolid",
        city: "Valladolid",
        postalCode: "47001",
        region: "Castilla y León",
        department: "Valladolid",
        coordinates: { lat: 41.6523, lng: -4.7245 }
    },
    "vigo": {
        ..._hubConfig,
        slug: "vigo",
        city: "Vigo",
        postalCode: "36201",
        region: "Galicia",
        department: "Pontevedra",
        coordinates: { lat: 42.2406, lng: -8.7207 }
    },
    "gij-n": {
        ..._hubConfig,
        slug: "gij-n",
        city: "Gijón",
        postalCode: "33201",
        region: "Asturias",
        department: "Asturias",
        coordinates: { lat: 43.5322, lng: -5.6611 }
    },
    "l-hospitalet": {
        ..._hubConfig,
        slug: "l-hospitalet",
        city: "L'Hospitalet",
        postalCode: "08901",
        region: "Cataluña",
        department: "Barcelona",
        coordinates: { lat: 41.3597, lng: 2.0998 }
    },
    "vitoria": {
        ..._hubConfig,
        slug: "vitoria",
        city: "Vitoria",
        postalCode: "01001",
        region: "País Vasco",
        department: "Álava",
        coordinates: { lat: 42.8467, lng: -2.6716 }
    },
    "a-coru-a": {
        ..._hubConfig,
        slug: "a-coru-a",
        city: "A Coruña",
        postalCode: "15001",
        region: "Galicia",
        department: "A Coruña",
        coordinates: { lat: 43.3623, lng: -8.4115 }
    },
    "elche": {
        ..._hubConfig,
        slug: "elche",
        city: "Elche",
        postalCode: "03201",
        region: "Comunidad Valenciana",
        department: "Alicante",
        coordinates: { lat: 38.2669, lng: -0.6984 }
    },
    "granada": {
        ..._hubConfig,
        slug: "granada",
        city: "Granada",
        postalCode: "18001",
        region: "Andalucía",
        department: "Granada",
        coordinates: { lat: 37.1773, lng: -3.5986 }
    },
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
