"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import AppFeaturesGrid from "../../Components/AppFeaturesGrid/Page";
import EcommerceIntegrations from "../../Components/EcommerceIntegrations/Page";
import FeaturesHero from "../../Components/FeaturesHero/Page";
import Footer from "../../Components/Footer/Page";
import Header from "../../Components/Header/page";
import PaymentLinks from "../../Components/PaymentLinks/Page";
import SoftPOS from "../../Components/SoftPOS/Page";

function FeaturesContent() {
  const searchParams = useSearchParams();
  const [currentLang, setCurrentLang] = useState("EN");

  // Initial language sync from URL
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'AR' || lang === 'EN') {
      handleLanguageChange(lang);
    }
  }, [searchParams]);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (langCode === "AR") {
      document.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.dir = "ltr";
      document.documentElement.lang = "en";
    }
  };

  return (
    <main>
      <Header
        currentLang={currentLang}
        onLanguageSwitch={handleLanguageChange}
      />
      <FeaturesHero currentLang={currentLang} />
      <PaymentLinks currentLang={currentLang} />
      <EcommerceIntegrations currentLang={currentLang} />
      <SoftPOS currentLang={currentLang} />
      <AppFeaturesGrid currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  );
}

export default function FeaturesPage() {
  return (
    <Suspense fallback={null}>
      <FeaturesContent />
    </Suspense>
  );
}
