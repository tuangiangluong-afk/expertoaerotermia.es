// ========================================
// NATIONAL TARGETS - 39 HIGH-VALUE ZONES
// Aerotermia - Couverture Nationale pSEO (Maximized ES)
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
    unique_intro?: string;
    unique_expert_tip?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    {
        slug: "madrid",
        name: "Madrid",
        heroTitle: "Aerotermia",
        geo: { lat: 40.4168, lng: -3.7038 },
        price_start: 8100,
        top_places: ["Centro","Chamberí","Salamanca","Retiro"],
        zip: "28001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Madrid? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Madrid diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Madrid para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "barcelona",
        name: "Barcelona",
        heroTitle: "Aerotermia",
        geo: { lat: 41.3851, lng: 2.1734 },
        price_start: 8400,
        top_places: ["Eixample","Gràcia","Sarrià-Sant Gervasi","Les Corts"],
        zip: "08001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Barcelona? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Barcelona diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Barcelona, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "valencia",
        name: "Valencia",
        heroTitle: "Aerotermia",
        geo: { lat: 39.4699, lng: -0.3763 },
        price_start: 8300,
        top_places: ["Ruzafa","El Carmen","El Cabanyal","Campanar"],
        zip: "46001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Valencia? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Valencia diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Valencia para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "sevilla",
        name: "Sevilla",
        heroTitle: "Aerotermia",
        geo: { lat: 37.3891, lng: -5.9845 },
        price_start: 8200,
        top_places: ["Triana","Nervión","Los Remedios","Casco Antiguo"],
        zip: "41001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Sevilla? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Sevilla diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Sevilla, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "zaragoza",
        name: "Zaragoza",
        heroTitle: "Aerotermia",
        geo: { lat: 41.6488, lng: -0.8891 },
        price_start: 8300,
        top_places: ["Centro","Delicias","Actur","El Rabal"],
        zip: "50001",
        tier: "BIG5",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Zaragoza? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Zaragoza diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Zaragoza, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "malaga",
        name: "Málaga",
        heroTitle: "Aerotermia",
        geo: { lat: 36.7213, lng: -4.4214 },
        price_start: 8100,
        top_places: ["La Malagueta","El Palo","Teatinos","Centro Histórico"],
        zip: "29001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Málaga? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Málaga diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Málaga, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "murcia",
        name: "Murcia",
        heroTitle: "Aerotermia",
        geo: { lat: 37.9922, lng: -1.1307 },
        price_start: 8100,
        top_places: ["El Carmen","Vistalegre","La Fama","San Basilio"],
        zip: "30001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Murcia? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Murcia diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Murcia, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "palma",
        name: "Palma",
        heroTitle: "Aerotermia",
        geo: { lat: 39.5696, lng: 2.6502 },
        price_start: 8000,
        top_places: ["Santa Catalina","Son Vida","Paseo Marítimo","Casco Antiguo"],
        zip: "07001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Palma? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Palma diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Palma para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "las-palmas",
        name: "Las Palmas",
        heroTitle: "Aerotermia",
        geo: { lat: 28.1235, lng: -15.4363 },
        price_start: 8000,
        top_places: ["Vegueta","Triana","Las Canteras","Ciudad Jardín"],
        zip: "35001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Las Palmas? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Las Palmas diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Las Palmas, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "bilbao",
        name: "Bilbao",
        heroTitle: "Aerotermia",
        geo: { lat: 43.263, lng: -2.935 },
        price_start: 8100,
        top_places: ["Abando","Indautxu","Casco Viejo","Deusto"],
        zip: "48001",
        tier: "GOLDEN",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Bilbao? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Bilbao diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Bilbao, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "alicante",
        name: "Alicante",
        heroTitle: "Aerotermia",
        geo: { lat: 38.3452, lng: -0.481 },
        price_start: 8300,
        top_places: ["Postiguet","San Juan","Centro","Benalúa"],
        zip: "03001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Alicante? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Alicante diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Alicante, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "cordoba",
        name: "Córdoba",
        heroTitle: "Aerotermia",
        geo: { lat: 37.8882, lng: -4.7794 },
        price_start: 8200,
        top_places: ["Judería","Centro","Ciudad Jardín","Poniente"],
        zip: "14001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Córdoba? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Córdoba diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Córdoba, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "valladolid",
        name: "Valladolid",
        heroTitle: "Aerotermia",
        geo: { lat: 41.6522, lng: -4.7245 },
        price_start: 8000,
        top_places: ["Centro","Parquesol","Delicias","Covaresa"],
        zip: "47001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Valladolid? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Valladolid diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Valladolid, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "vigo",
        name: "Vigo",
        heroTitle: "Aerotermia",
        geo: { lat: 42.2406, lng: -8.7207 },
        price_start: 8400,
        top_places: ["Casco Vello","Bouzas","Coia","Teis"],
        zip: "36201",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Vigo? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Vigo diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Vigo, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "gijon",
        name: "Gijón",
        heroTitle: "Aerotermia",
        geo: { lat: 43.5322, lng: -5.6611 },
        price_start: 8000,
        top_places: ["Cimadevilla","Arena","El Llano","Somió"],
        zip: "33201",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Gijón? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Gijón diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Gijón, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "hospitalet",
        name: "L'Hospitalet",
        heroTitle: "Aerotermia",
        geo: { lat: 41.3596, lng: 2.0998 },
        price_start: 8000,
        top_places: ["Centre","Bellvitge","Santa Eulàlia","Collblanc"],
        zip: "08901",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en L'Hospitalet? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en L'Hospitalet diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En L'Hospitalet, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "vitoria",
        name: "Vitoria-Gasteiz",
        heroTitle: "Aerotermia",
        geo: { lat: 42.8467, lng: -2.6716 },
        price_start: 8200,
        top_places: ["Casco Viejo","Lovaina","San Martín","Zabalgana"],
        zip: "01001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Vitoria-Gasteiz? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Vitoria-Gasteiz diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Vitoria-Gasteiz, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "coruna",
        name: "A Coruña",
        heroTitle: "Aerotermia",
        geo: { lat: 43.3623, lng: -8.4115 },
        price_start: 8100,
        top_places: ["Monte Alto","Los Rosales","Riazor","Ciudad Vieja"],
        zip: "15001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en A Coruña? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en A Coruña diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En A Coruña, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "granada",
        name: "Granada",
        heroTitle: "Aerotermia",
        geo: { lat: 37.1773, lng: -3.5986 },
        price_start: 8200,
        top_places: ["Albaicín","Realejo","Centro","Zaidín"],
        zip: "18001",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Granada? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Granada diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Granada, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "elche",
        name: "Elche",
        heroTitle: "Aerotermia",
        geo: { lat: 38.2669, lng: -0.6984 },
        price_start: 8000,
        top_places: ["Altabix","Centro","Carrús","El Pla"],
        zip: "03201",
        tier: "STRATEGIC",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Elche? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Elche diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Elche, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "oviedo",
        name: "Oviedo",
        heroTitle: "Aerotermia",
        geo: { lat: 43.3614, lng: -5.8494 },
        price_start: 8100,
        top_places: ["Centro","La Florida","Pumarín","El Cristo"],
        zip: "33001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Oviedo? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Oviedo diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Oviedo, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "badalona",
        name: "Badalona",
        heroTitle: "Aerotermia",
        geo: { lat: 41.45, lng: 2.2474 },
        price_start: 8300,
        top_places: ["Centre","Gorg","Llefià","Pomar"],
        zip: "08911",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Badalona? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Badalona diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Badalona, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "cartagena",
        name: "Cartagena",
        heroTitle: "Aerotermia",
        geo: { lat: 37.6257, lng: -0.9966 },
        price_start: 8400,
        top_places: ["Casco Antiguo","Ensanche","Los Dolores","San Antón"],
        zip: "30201",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Cartagena? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Cartagena diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Cartagena, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "terrassa",
        name: "Terrassa",
        heroTitle: "Aerotermia",
        geo: { lat: 41.5615, lng: 2.0089 },
        price_start: 8300,
        top_places: ["Centre","Ca n'Aurell","Sant Pere","Les Fonts"],
        zip: "08221",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Terrassa? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Terrassa diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Terrassa, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "jerez",
        name: "Jerez",
        heroTitle: "Aerotermia",
        geo: { lat: 36.685, lng: -6.1261 },
        price_start: 8000,
        top_places: ["Centro","La Granja","Norte","Sur"],
        zip: "11401",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Jerez? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Jerez diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Jerez, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "sabadell",
        name: "Sabadell",
        heroTitle: "Aerotermia",
        geo: { lat: 41.5433, lng: 2.1094 },
        price_start: 8300,
        top_places: ["Centre","Creu Alta","Can Rull","Ca n'Oriac"],
        zip: "08201",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Sabadell? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Sabadell diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Sabadell, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "mostoles",
        name: "Móstoles",
        heroTitle: "Aerotermia",
        geo: { lat: 40.3223, lng: -3.8649 },
        price_start: 8300,
        top_places: ["Centro","Norte-Universidad","Sur","Oeste"],
        zip: "28931",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Móstoles? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Móstoles diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Móstoles para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "santa-cruz",
        name: "Santa Cruz",
        heroTitle: "Aerotermia",
        geo: { lat: 28.4682, lng: -16.2546 },
        price_start: 8000,
        top_places: ["Centro","Salamanca","Ofra","La Salud"],
        zip: "38001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Santa Cruz? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Santa Cruz diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Santa Cruz, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "pamplona",
        name: "Pamplona",
        heroTitle: "Aerotermia",
        geo: { lat: 42.8125, lng: -1.6458 },
        price_start: 8300,
        top_places: ["Casco Viejo","Ensanche","Iturrama","San Juan"],
        zip: "31001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Pamplona? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Pamplona diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Pamplona, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "almeria",
        name: "Almería",
        heroTitle: "Aerotermia",
        geo: { lat: 36.834, lng: -2.4637 },
        price_start: 8200,
        top_places: ["Centro","Nueva Andalucía","Zapillo","Retamar"],
        zip: "04001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Almería? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Almería diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Almería, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "alcala",
        name: "Alcalá",
        heroTitle: "Aerotermia",
        geo: { lat: 40.4816, lng: -3.3639 },
        price_start: 8100,
        top_places: ["Casco Histórico","Ensanche","Espartales","El Val"],
        zip: "28801",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Alcalá? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Alcalá diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Alcalá para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "fuenlabrada",
        name: "Fuenlabrada",
        heroTitle: "Aerotermia",
        geo: { lat: 40.2842, lng: -3.7942 },
        price_start: 8100,
        top_places: ["Centro","Loranca","Naranjo","La Avanzada"],
        zip: "28941",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Fuenlabrada? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Fuenlabrada diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Fuenlabrada para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "leganes",
        name: "Leganés",
        heroTitle: "Aerotermia",
        geo: { lat: 40.3283, lng: -3.7635 },
        price_start: 8200,
        top_places: ["Zarzaquemada","San Nicasio","Carrascal","Centro"],
        zip: "28911",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Leganés? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Leganés diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Leganés para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "san-sebastian",
        name: "San Sebastián",
        heroTitle: "Aerotermia",
        geo: { lat: 43.3183, lng: -1.9812 },
        price_start: 8300,
        top_places: ["Gros","Centro","Antiguo","Amara"],
        zip: "20001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en San Sebastián? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en San Sebastián diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En San Sebastián, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "getafe",
        name: "Getafe",
        heroTitle: "Aerotermia",
        geo: { lat: 40.3083, lng: -3.7327 },
        price_start: 8100,
        top_places: ["Centro","Sector III","Getafe Norte","Bercial"],
        zip: "28901",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Getafe? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Getafe diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Getafe para financiar hasta el 40% de tu instalación de aerotermia."
    },
    {
        slug: "burgos",
        name: "Burgos",
        heroTitle: "Aerotermia",
        geo: { lat: 42.3439, lng: -3.6969 },
        price_start: 8100,
        top_places: ["Centro Histórico","Gamonal","San Pedro","G3"],
        zip: "09001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Burgos? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Burgos diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Burgos, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "albacete",
        name: "Albacete",
        heroTitle: "Aerotermia",
        geo: { lat: 38.9942, lng: -1.8585 },
        price_start: 8300,
        top_places: ["Centro","Ensanche","Industria","San Pablo"],
        zip: "02001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Albacete? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Albacete diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Gracias al clima cálido de Albacete, un equipo de aerotermia te proporcionará aire acondicionado en verano mediante suelo refrescante o fancoils, con un consumo mínimo."
    },
    {
        slug: "santander",
        name: "Santander",
        heroTitle: "Aerotermia",
        geo: { lat: 43.4623, lng: -3.8044 },
        price_start: 8400,
        top_places: ["Sardinero","Centro","Castilla-Hermida","Alisal"],
        zip: "39001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Santander? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Santander diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "En Santander, los inviernos pueden ser exigentes. La aerotermia mantiene su eficiencia incluso con temperaturas bajo cero, siendo el reemplazo perfecto para tu vieja caldera de gas o gasoil."
    },
    {
        slug: "castellon",
        name: "Castellón",
        heroTitle: "Aerotermia",
        geo: { lat: 39.9864, lng: -0.0513 },
        price_start: 8400,
        top_places: ["Centro","Grao","Este","Oeste"],
        zip: "12001",
        tier: "HUB",
        heroImage: undefined,
        unique_intro: "¿Buscando una instalación de aerotermia en Castellón? Este sistema de climatización de alta eficiencia permite ahorrar hasta un 70% en tu factura energética. Nuestros instaladores certificados en Castellón diseñan la solución perfecta para tu hogar, combinando calefacción, refrigeración y agua caliente.",
        unique_expert_tip: "Aprovecha las subvenciones europeas Next Generation disponibles en Castellón para financiar hasta el 40% de tu instalación de aerotermia."
    },
];

export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = target.price_start + " €";
    const priceDesc = "Estudio y Presupuesto Gratis";

    return {
        slug: target.slug,
        city: target.name,
        name: `${target.heroTitle} en ${target.name}`,
        domain: `${target.slug}.${slug === 'madrid' ? 'localhost' : 'expertoaerotermia.es'}`, 
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2672&auto=format&fit=crop",
        postalCode: target.zip,
        department: "ES",
        region: "España",
        description: `${target.heroTitle} en ${target.name} (${target.zip}).`,
        geo: target.geo,
        features: [
            "Estudio Gratis",
            "Instaladores Certificados",
            "Garantía Total"
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
        phoneNumber: "900 00 00 00",
        email: "contacto@expertoaerotermia.es",
        type: "PARTNER",
        targetType: "MIXED",
        meta: {
            title: `${target.heroTitle} en ${target.name} | ${priceDisplay}`,
            description: `${target.heroTitle} ${target.name} ${target.zip}. Soluciones eficientes.`
        },
        unique_intro: target.unique_intro,
        unique_expert_tip: target.unique_expert_tip
    };
}
