"use client";

import Footer from "@/Components/Footer/Page";
import Header from "@/Components/Header/page";
import Terms from "@/Components/Terms/Page";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function TermsContent() {
    const searchParams = useSearchParams();
    const [currentLang, setCurrentLang] = useState('AR');

    // Sync language from URL or localStorage
    useEffect(() => {
        const lang = searchParams.get('lang');
        const savedLang = localStorage.getItem("language");
        
        if (lang === 'AR' || lang === 'EN') {
            handleLanguageChange(lang);
        } else if (savedLang === 'AR' || savedLang === 'EN') {
            handleLanguageChange(savedLang);
        } else {
            handleLanguageChange('AR'); // Default
        }
    }, [searchParams]);

    const handleLanguageChange = (langCode: string) => {
        setCurrentLang(langCode);
        localStorage.setItem("language", langCode);
        if (langCode === 'AR') {
            document.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            document.dir = 'ltr';
            document.documentElement.lang = 'en';
        }
    };

    return (
        <main className="pt-20 min-h-screen">
            <Header currentLang={currentLang} onLanguageSwitch={handleLanguageChange} />
            <Terms currentLang={currentLang} />
            <Footer currentLang={currentLang} />
        </main>
    );
}

export default function TermsPage() {
    return (
        <Suspense fallback={null}>
            <TermsContent />
        </Suspense>
    );
}
