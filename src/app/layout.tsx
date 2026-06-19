import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { getCurrentYearSEO } from "@/lib/date";
import StructuredData from "@/components/seo/StructuredData";
import AttributionTracker from "@/components/AttributionTracker";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const canonicalDomain = headersList.get("x-irve-canonical-domain") || "www.expertoaerotermia.es";
  const path = headersList.get("x-irve-path") || "";
  const baseUrl = `https://${canonicalDomain}`;

  return {
    title: {
      template: "%s | Experto Aerotermia 2026",
      default: "Experto Aerotermia - Instalación de Bombas de Calor 2026",
    },
    description: "Instalación de bombas de calor aerotérmicas en España. Compara presupuestos de instaladores certificados y solicita las ayudas NextGen.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "Experto Aerotermia - Calefacción Eficiente España",
      description: "Instalación de bombas de calor aerotérmicas en España. Compara presupuestos de instaladores autorizados y solicita las ayudas Next Generation.",
      siteName: "Experto Aerotermia",
      locale: "es_ES",
      type: "website",
      url: `${baseUrl}${path}`,
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Experto Aerotermia - Instalación de aerotermia en España",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Experto Aerotermia - Calefacción Eficiente España",
      description: "Instalación de bombas de calor aerotérmicas en España. Compara presupuestos de instaladores autorizados y solicita las ayudas Next Generation.",
      images: [`${baseUrl}/images/og-image.png`],
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/favicon.png",
      apple: "/icon.png",
      other: [
        {
          rel: "icon",
          url: "/favicon.ico",
        }
      ]
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PLKMW5XR');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-900 text-neutral-50`}
      >
        <StructuredData />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-20JN53SLCP" />
        <AttributionTracker />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLKMW5XR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
