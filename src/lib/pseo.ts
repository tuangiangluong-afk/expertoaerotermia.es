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

const DEFAULT_REGIONAL = {
    subsidyName: "Subvenciones y Ayudas",
    subsidyAmount: "Hasta 3.000€ de Subvención Autonómica",
    avgPrice: "7.000€ – 15.000€"
};

function getExpertTip(city: string, postalCode: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const tips = [
        `Para una instalación de aerotermia en ${city}, recomendamos aprovechar si ya dispone de suelo radiante o radiadores de baja temperatura para maximizar la eficiencia (COP).`,
        `En ${city}, combinar su sistema de aerotermia con paneles solares le permite climatizar su hogar de forma casi 100% gratuita durante gran parte del año.`,
        `Asegúrese de solicitar las subvenciones europeas Next Generation disponibles en ${city} para la instalación de bombas de calor aire-agua antes de que se agoten los fondos.`
    ];
    return tips[hash % tips.length];
}

function getIntroHtml(city: string, postalCode: string, avgPrice: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    
    // Evaluate closures replacing ${city} etc.
    const intros = [
        `<p class="mb-4">¿Desea instalar un sistema de <strong>aerotermia</strong> en <strong>${city}</strong> para reducir sus facturas de calefacción y gas? Nuestros técnicos especialistas diseñan y realizan la instalación de su bomba de calor de alta eficiencia.</p><p>Una instalación estándar de aerotermia en ${city} cuesta generalmente entre <strong>${avgPrice}</strong> antes de deducciones. Sustituir su vieja caldera por aerotermia le permite ahorrar hasta un <strong>75%</strong> en su factura energética anual.</p>`,
        `<p class="mb-4">Climatice su vivienda de forma eficiente en <strong>${city}</strong> y protéjase contra la subida de los precios del gas y el gasóleo. Nuestros expertos en aerotermia realizan un estudio térmico gratuito a medida.</p><p>Presupuesto estimado: <strong>${avgPrice}</strong> llave en mano. Le ayudamos a gestionar su expediente de subvenciones para maximizar sus ayudas locales y autonómicas.</p>`
    ];

    return intros[hash % intros.length];
}

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, postalCode, pricing } = cityConfig;
    const postal = postalCode || "";
    
    const regionalInfo = DEFAULT_REGIONAL;
    const realPrice = pricing?.base || regionalInfo.avgPrice;

    // Use a small local function to render the strings that require dynamic interpolation 
    // at runtime (since the strings above use ${city} which we need to evaluate at runtime)
    
    const renderTip = (c: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const tips = [
        `Para una instalación de aerotermia en ${c}, recomendamos aprovechar si ya dispone de suelo radiante o radiadores de baja temperatura para maximizar la eficiencia (COP).`,
        `En ${c}, combinar su sistema de aerotermia con paneles solares le permite climatizar su hogar de forma casi 100% gratuita durante gran parte del año.`,
        `Asegúrese de solicitar las subvenciones europeas Next Generation disponibles en ${c} para la instalación de bombas de calor aire-agua antes de que se agoten los fondos.`
      ];
      return tips[hash % tips.length];
    };

    const renderIntro = (c: string, p: string, avg: string) => {
      const hash = c.split('').reduce((a, x) => a + x.charCodeAt(0), 0);
      const intros = [
        `<p class="mb-4">¿Desea instalar un sistema de <strong>aerotermia</strong> en <strong>${c}</strong> para reducir sus facturas de calefacción y gas? Nuestros técnicos especialistas diseñan y realizan la instalación de su bomba de calor de alta eficiencia.</p><p>Una instalación estándar de aerotermia en ${c} cuesta generalmente entre <strong>${avg}</strong> antes de deducciones. Sustituir su vieja caldera por aerotermia le permite ahorrar hasta un <strong>75%</strong> en su factura energética anual.</p>`,
        `<p class="mb-4">Climatice su vivienda de forma eficiente en <strong>${c}</strong> y protéjase contra la subida de los precios del gas y el gasóleo. Nuestros expertos en aerotermia realizan un estudio térmico gratuito a medida.</p><p>Presupuesto estimado: <strong>${avg}</strong> llave en mano. Le ayudamos a gestionar su expediente de subvenciones para maximizar sus ayudas locales y autonómicas.</p>`
      ];
      return intros[hash % intros.length];
    };

    return {
        meta_title: `Instalador Aerotermia en ${city}${postal ? ` (${postal})` : ""} | Presupuesto y Precio`,
        meta_description: `Instalación de aerotermia en ${city} por especialistas certificados. Ahorre hasta un 75% en calefacción y aire acondicionado. Presupuesto en 24h.`,
        hero_title: `Instalador de <span class="text-blue-500">Aerotermia</span> en ${city}${postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : ""}`,
        hero_badge: regionalInfo.subsidyName,
        intro_html: cityConfig.unique_intro || renderIntro(city, postal, realPrice),
        cta_primary: "Calcular presupuesto de aerotermia",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip: cityConfig.unique_expert_tip || renderTip(city),
    };
}
