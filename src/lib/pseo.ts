import type { CityConfig } from "@/lib/db";

export interface PseoPageContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_badge: string;
    intro_html: string;
    cta_primary: string;
    pricing_estimated: string;
    regional_subsidy: string;
    expert_tip: string;
}

const REGIONAL_DATA: Record<string, { subsidyName: string; subsidyAmount: string; avgPrice: string; }> = {
    "28": { subsidyName: "Fondos Next Generation Madrid", subsidyAmount: "Hasta 3.000€ en Madrid", avgPrice: "8.000€ – 15.000€" },
    "08": { subsidyName: "Fondos Next Generation Cataluña", subsidyAmount: "Hasta 3.000€ en Barcelona", avgPrice: "8.500€ – 16.000€" },
};

const DEFAULT_REGIONAL = {
    subsidyName: "Fondos Next Generation EU",
    subsidyAmount: "Subvenciones europeas hasta 3.000€",
    avgPrice: "8.000€ – 15.000€"
};

type SpintaxType = "meta_title" | "meta_description" | "hero_title" | "hero_subtitle" | "cta_primary";
type SpintaxContext = "HUB" | "LOCAL";

const templates: Record<SpintaxType, Record<SpintaxContext, string[]>> = {
    meta_title: {
        HUB: [
            "Los Mejores Instaladores de Aerotermia en {city} | Presupuestos",
            "Precio Instalación Aerotermia {city} | Ayudas Next Generation",
            "Comparador de Instaladores de Aerotermia en la provincia de {dept}"
        ],
        LOCAL: [
            "Instalador de Aerotermia en {city} | Presupuesto en 24h",
            "Expertos en Aerotermia en {city} | Ahorra hasta 70% en calefacción",
            "Instalación de Aerotermia y Suelo Radiante en {city}"
        ]
    },
    meta_description: {
        HUB: [
            "Compara hasta 3 presupuestos de aerotermia en {city}. Encuentra empresas certificadas (RITE) y gestiona tus subvenciones europeas fácilmente.",
            "Directorio de expertos en aerotermia en {city}. Olvídate del gas y reduce tu factura de luz. Pide tu estudio gratuito hoy mismo."
        ],
        LOCAL: [
            "Empresa instaladora de aerotermia en {city}. Soluciones de climatización eficientes (frío/calor). Gestionamos las ayudas Next Generation por ti.",
            "Ahorra en tu factura instalando aerotermia en tu chalet en {city}. Servicio rápido, equipos premium y máxima eficiencia energética."
        ]
    },
    hero_title: {
        HUB: [
            "Compara los <span class=\"text-sky-500\">Mejores Instaladores de Aerotermia</span> en {city}",
            "Aerotermia en <span class=\"text-sky-500\">{city}</span>: Compara Precios y Subvenciones",
            "Encuentra tu <span class=\"text-sky-500\">Experto en Aerotermia</span> en {city}"
        ],
        LOCAL: [
            "Tu Instalador de <span class=\"text-sky-500\">Aerotermia</span> en {city}",
            "Despídete del Gas con Aerotermia en <span class=\"text-sky-500\">{city}</span>",
            "Los Expertos en <span class=\"text-sky-500\">Climatización</span> en {city}"
        ]
    },
    hero_subtitle: {
        HUB: [
            "Recibe 3 presupuestos gratuitos de empresas homologadas. Averigua cuánto puedes ahorrar y si aplicas a los Fondos Next Generation.",
            "La forma más inteligente de instalar aerotermia. Te conectamos con los especialistas más valorados de tu zona."
        ],
        LOCAL: [
            "Suelo radiante, agua caliente y aire acondicionado en un solo equipo. Instalación rápida y gestión integral de ayudas en toda la provincia.",
            "Revaloriza tu vivienda y corta tus facturas energéticas de raíz. Estudio térmico gratuito para tu hogar en {city}."
        ]
    },
    cta_primary: {
        HUB: ["Comparar Presupuestos"],
        LOCAL: ["Solicitar Estudio Gratuito"]
    }
};

export async function getPseoContent(cityConfig: CityConfig, isHub: boolean = false): Promise<PseoPageContent> {
    const context: SpintaxContext = isHub ? "HUB" : "LOCAL";
    const cityHash = cityConfig.city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const pick = (arr: string[]) => arr[cityHash % arr.length];
    
    const replaceVars = (text: string) => {
        return text
            .replace(/{city}/g, cityConfig.city)
            .replace(/{dept}/g, cityConfig.department || "");
    };

    const regional = REGIONAL_DATA[cityConfig.department || ""] || DEFAULT_REGIONAL;

    return {
        meta_title: replaceVars(pick(templates.meta_title[context])),
        meta_description: replaceVars(pick(templates.meta_description[context])),
        hero_title: replaceVars(pick(templates.hero_title[context])),
        hero_badge: isHub ? "100% Gratis | Sin compromiso" : `Instalador certificado en ${cityConfig.city}`,
        intro_html: replaceVars(pick(templates.hero_subtitle[context])),
        cta_primary: pick(templates.cta_primary[context]),
        pricing_estimated: regional.avgPrice,
        regional_subsidy: regional.subsidyAmount,
        expert_tip: `Gestión de Subvenciones Next Generation en la provincia de ${cityConfig.department || ""}.`
    };
}
