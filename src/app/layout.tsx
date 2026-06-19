import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import StructuredData from "@/components/seo/StructuredData";
import AttributionTracker from "@/components/AttributionTracker";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const canonicalDomain = headersList.get("x-irve-canonical-domain") || "www.expertoaerotermia.es";
  const path = headersList.get("x-irve-path") || "";
  const baseUrl = `https://${canonicalDomain}`;

  return {
    title: {
      template: `%s | Experto Aerotermia`,
      default: "Experto Aerotermia - Instalación de Aerotermia España",
    },
    description: "Compara gratis hasta 3 presupuestos de instaladores acreditados de aerotermia y suelo radiante en España. Ahorra hasta un 70% en calefacción.",
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
      title: "Experto Aerotermia - Instalación de Aerotermia España",
      description: "Compara gratis hasta 3 presupuestos de instaladores acreditados de aerotermia y suelo radiante en España. Ahorra hasta un 70% en calefacción.",
      siteName: "Experto Aerotermia",
      locale: "es_ES",
      type: "website",
      url: `${baseUrl}${path}`,
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Experto Aerotermia - Instalación de Aerotermia España",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Experto Aerotermia - Instalación de Aerotermia España",
      description: "Compara gratis hasta 3 presupuestos de instaladores acreditados de aerotermia y suelo radiante en España. Ahorra hasta un 70% en calefacción.",
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
  themeColor: "#06b6d4",
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
      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLKMW5XR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AttributionTracker />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
