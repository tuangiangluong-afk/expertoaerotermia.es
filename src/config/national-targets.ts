// ========================================
// NATIONAL TARGETS - LOCALIZED ZONES (ES AEROTERMIA)
// ========================================

export interface NationalTarget {
    slug: string;
    name: string;
    heroTitle: string;
    geo: { lat: number; lng: number };
    price_start: number;
    top_places: string[];
    zip: string;
    tier: 'BIG5' | 'GOLDEN' | 'HUB' | 'STRATEGIC';
    heroImage?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    { slug: "madrid", name: "Madrid", heroTitle: "Aerotermia", geo: { lat: 40.4168, lng: -3.7038 }, price_start: 8000, top_places: ["Centro", "Chamberí", "Salamanca", "Retiro"], zip: "28001", tier: "BIG5" },
    { slug: "zaragoza", name: "Zaragoza", heroTitle: "Aerotermia", geo: { lat: 41.6488, lng: -0.8891 }, price_start: 7800, top_places: ["Centro", "Delicias", "Actur", "El Rabal"], zip: "50001", tier: "BIG5" },
    { slug: "valladolid", name: "Valladolid", heroTitle: "Aerotermia", geo: { lat: 41.6522, lng: -4.7245 }, price_start: 7900, top_places: ["Centro", "Parquesol", "Delicias", "Covaresa"], zip: "47001", tier: "BIG5" },
    { slug: "sevilla", name: "Sevilla", heroTitle: "Aerotermia", geo: { lat: 37.3891, lng: -5.9845 }, price_start: 8200, top_places: ["Triana", "Nervión", "Los Remedios", "Casco Antiguo"], zip: "41001", tier: "GOLDEN" },
    { slug: "toledo", name: "Toledo", heroTitle: "Aerotermia", geo: { lat: 39.8628, lng: -4.0273 }, price_start: 7900, top_places: ["Casco Histórico", "Santa María de Benquerencia", "Buenavista"], zip: "45001", tier: "GOLDEN" },
    { slug: "barcelona", name: "Barcelona", heroTitle: "Aerotermia", geo: { lat: 41.3851, lng: 2.1734 }, price_start: 8500, top_places: ["Eixample", "Gràcia", "Sarrià-Sant Gervasi", "Les Corts"], zip: "08001", tier: "STRATEGIC" },
    { slug: "valencia", name: "Valencia", heroTitle: "Aerotermia", geo: { lat: 39.4699, lng: -0.3763 }, price_start: 8000, top_places: ["Ruzafa", "El Carmen", "El Cabanyal", "Campanar"], zip: "46001", tier: "STRATEGIC" },
    { slug: "bilbao", name: "Bilbao", heroTitle: "Aerotermia", geo: { lat: 43.2630, lng: -2.9350 }, price_start: 8300, top_places: ["Abando", "Indautxu", "Casco Viejo", "Deusto"], zip: "48001", tier: "STRATEGIC" },
    { slug: "murcia", name: "Murcia", heroTitle: "Aerotermia", geo: { lat: 37.9922, lng: -1.1307 }, price_start: 7700, top_places: ["El Carmen", "Vistalegre", "La Fama", "San Basilio"], zip: "30001", tier: "STRATEGIC" },
    { slug: "pamplona", name: "Pamplona", heroTitle: "Aerotermia", geo: { lat: 42.8125, lng: -1.6458 }, price_start: 8000, top_places: ["Casco Viejo", "Ensanche", "Iturrama", "San Juan"], zip: "31001", tier: "STRATEGIC" }
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = target.price_start + " €";
    const priceDesc = "Estudio y Cotización gratis";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} ${target.name}`,
        domain: `${target.slug}.expertoaerotermia.es`, // rewrite target
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: "ES",
        region: "España",
        description: `${target.heroTitle} en ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Estudio Gratis",
            "Rendimiento Garantizado",
            "Certificación Oficial",
            "Garantía Total",
            "Presupuesto en 24h"
        ],
        stations: [],
        hospitals: [],
        neighborhoods: target.top_places,
        points_of_interest: {
            hotels: [],
            nightlife: [],
            monuments: target.top_places,
            parking_difficulty: "Variable"
        },
        pricing: {
            base: priceDisplay,
            description: priceDesc,
            km: 0
        },
        phoneNumber: "900 000 000",
        email: "contacto@expertoaerotermia.es",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} ${target.name} | ${priceDisplay}`,
            description: `Instalación de aerotermia en ${target.name} (${target.zip}). Compara presupuestos y ahorra en tu factura de calefacción.`
        }
    };
}
