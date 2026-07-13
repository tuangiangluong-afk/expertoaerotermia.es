import Script from "next/script";

export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Experto Aerotermia",
        "url": "https://www.expertoaerotermia.es",
        "logo": "https://www.expertoaerotermia.es/logo.png",
        "description": "Red nacional de instaladores profesionales de aerotermia y bombas de calor para particulares y empresas en España.",
        "sameAs": [],
        "foundingDate": "2020",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ES"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "910 00 00 00",
            "contactType": "customer service",
            "areaServed": "ES",
            "availableLanguage": "Spanish"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.expertoaerotermia.es/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.expertoaerotermia.es",
        "name": "expertoaerotermia",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.expertoaerotermia.es/ville/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Instalación de Aerotermia",
        "provider": { "@type": "Organization", "name": "expertoaerotermia" },
        "areaServed": { "@type": "Country", "name": "España" }
    };

    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://www.expertoaerotermia.es",
        "name": "Experto Aerotermia",
        "description": "Instalación de aerotermia y bombas de calor",
        "inLanguage": "es",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [
                "h1",
                ".hero-description",
                ".faq-answer",
                "article h2",
                "article p:first-of-type",
                ".prose > p:first-child"
            ]
        },
        "isPartOf": {
            "@type": "WebSite",
            "url": "https://www.expertoaerotermia.es",
            "name": "Experto Aerotermia"
        }
    };

    return (
        <>
        <Script
            id="org-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) + '\n' + JSON.stringify(websiteSchema) + '\n' + JSON.stringify(serviceSchema) + '\n' + JSON.stringify(faqSchema) }}
        />

        <Script

            id="webpage-speakable-schema"

            type="application/ld+json"

            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}

        />

        </>
    );
}
