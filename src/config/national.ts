import { CityConfig } from "@/lib/db";

export const NATIONAL_CONFIG: CityConfig = {
    slug: "home",
    domain: "expertoaerotermia.es",
    name: "Experto Aerotermia",
    city: "España",
    phoneNumber: "+34 900 000 000",
    email: "contacto@expertoaerotermia.es",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    description: "La red n°1 de instaladores de aerotermia en España. Presupuesto gratuito, estudio de rentabilidad y técnicos certificados.",
    meta: {
        title: "Experto Aerotermia | Calefacción Eficiente y Ahorro Energético",
        description: "Instalación de aerotermia para particulares en toda España. Presupuesto gratuito en 24h. Simulador de ayudas y subvenciones."
    },
    features: [
        "Rendimiento Garantizado",
        "Presupuesto Gratuito en 24h",
        "Subvenciones Disponibles",
        "Técnicos Certificados"
    ],
    pricing: {
        base: "Presupuesto Gratuito",
        description: "Presupuesto personalizado según su sistema de calefacción actual"
    },
    hospitals: [],
    stations: [],
    neighborhoods: [],
    points_of_interest: {
        hotels: [],
        nightlife: [],
        monuments: [],
        parking_difficulty: "N/A"
    }
};
