"use client";
 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
 
interface CookieBannerProps {
    slug: string;
    cityName: string;
}
 
const CookieBanner = ({ slug, cityName }: CookieBannerProps) => {
    const [showBanner, setShowBanner] = useState(false);
 
    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);
 
    const acceptAll = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };
 
    const rejectAll = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setShowBanner(false);
    };
 
    if (!showBanner) return null;
 
    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-neutral-900/95 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 shadow-2xl shadow-blue-500/10 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg shrink-0 bg-blue-500/10">
                    <Cookie className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Privacidad & Cookies
                    </h3>
                    <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        Utilizamos cookies para mejorar tu experiencia en la web de {cityName}. Sin rastreos intrusivos, lo prometemos.
                        {' '}
                        <Link href="/mentions-legales" className="underline text-blue-400 hover:text-blue-300 transition">
                            Saber más
                        </Link>
                    </p>
 
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={acceptAll}
                            className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
                        >
                            ${cityName ? "Aceptar todo" : "Aceptar todo"}
                        </button>
                        <button
                            onClick={rejectAll}
                            className="w-full py-2 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Continuar sin aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default CookieBanner;
