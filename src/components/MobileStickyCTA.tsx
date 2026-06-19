"use client";

import { Zap } from "lucide-react";

interface MobileStickyCTAProps {
    targetId?: string;
    themeColor?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'cyan';
}

export default function MobileStickyCTA({
    targetId = "simulateur",
    themeColor = 'blue'
}: MobileStickyCTAProps) {
    const gradients = {
        blue: "from-blue-600 to-blue-700 shadow-blue-500/30",
        emerald: "from-emerald-600 to-emerald-700 shadow-emerald-500/30",
        amber: "from-blue-600 to-blue-700 shadow-blue-500/30",
        purple: "from-purple-600 to-purple-700 shadow-purple-500/30",
        rose: "from-rose-600 to-rose-700 shadow-rose-500/30",
        cyan: "from-cyan-600 to-cyan-700 shadow-cyan-500/30",
    };

    const gradientClass = gradients[themeColor] || gradients.rose;

    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/80 backdrop-blur-lg border-t border-neutral-200 p-4 pb-safe">
            <a
                href={`#${targetId}`}
                onClick={scrollToForm}
                className={`flex w-full items-center justify-center gap-2 bg-gradient-to-r ${gradientClass} text-white rounded-xl py-4 font-extrabold shadow-xl transition active:scale-95`}
            >
                <Zap size={20} fill="currentColor" />
                <span>Devis Gratuit en 24h</span>
            </a>
        </div>
    );
}
