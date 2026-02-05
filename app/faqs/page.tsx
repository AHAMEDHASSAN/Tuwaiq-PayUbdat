"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import FAQs from "../../Components/FAQs/Page";
import Footer from "../../Components/Footer/Page";
import Header from "../../Components/Header/page";

function FAQsContent() {
  const searchParams = useSearchParams();
  const [currentLang, setCurrentLang] = useState("EN");

  // Initial language sync from URL or default
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'AR' || lang === 'EN') {
      handleLanguageChange(lang);
    } else {
      handleLanguageChange("EN"); // Default to English
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
    <main className="bg-[#F8F9FA]">
      <Header
        currentLang={currentLang}
        onLanguageSwitch={handleLanguageChange}
      />
      <FAQs currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  );
}

export default function FAQsPage() {
  return (
    <Suspense fallback={null}>
      <FAQsContent />
    </Suspense>
  );
}
