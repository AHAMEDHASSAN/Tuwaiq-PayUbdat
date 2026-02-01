"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import About from "../Components/About/Page";
import AcceptPayments from "../Components/AcceptPayments/Page";
import AppFeatures from "../Components/AppFeatures/Page";
import Business from "../Components/Business/Page";
import Contact from "../Components/Contact/Page";
import Footer from "../Components/Footer/Page";
import Header from "../Components/Header/page";
import Hero from "../Components/Hero/page";
import Plans from "../Components/Plans/Page";

export default function Home() {
  const searchParams = useSearchParams();
  const [currentLang, setCurrentLang] = useState('EN');

  // Initial language sync from URL
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'AR' || lang === 'EN') {
      handleLanguageChange(lang);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (langCode === 'AR') {
      document.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  };

  return (
    <main>
      <Header currentLang={currentLang} onLanguageSwitch={handleLanguageChange} />
      <Hero currentLang={currentLang} />
      <About currentLang={currentLang} />
      <Business currentLang={currentLang} />
      <AppFeatures currentLang={currentLang} />
      <Plans currentLang={currentLang} />
      <AcceptPayments currentLang={currentLang} />
      <Contact currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  );
}
