"use client";

function FeaturesHero({ currentLang }) {
  const isAr = currentLang === "AR";

  const content = {
    EN: {
      title: "Why Businesses Trust Tuwaiq Pay",
      subheading: (
        <>
          Smart Payment Solutions for Freelancers and <br /> Businesses in Saudi Arabia
        </>
      ),
      intro: "Just your mobile number or email — no paperwork needed.",
      bullets: [
        "Designed specifically for the Saudi market",
        "Secure and compliant payment infrastructure",
        "Easy onboarding and quick integration",
        "Scalable for growing businesses",
        "On-time, responsive customer support",
        "Multiple payment methods",
        "Fast and reliable fund transfers",
        "One platform for all your payment needs",
      ],
      appStoreSub: "Download on the",
      appStoreTitle: "App Store",
      googlePlaySub: "GET IT ON",
      googlePlayTitle: "Google Play",
    },
    AR: {
      title: "لماذا تثق الشركات في طويق باي",
      subheading: (
        <>
          حلول دفع ذكية للمستقلين <br /> والشركات في المملكة العربية السعودية
        </>
      ),
      intro: "رقم جوالك أو بريدك الإلكتروني فقط — بدون أوراق.",
      bullets: [
        "مصمم خصيصاً للسوق السعودي",
        "بنية دفع آمنة ومتوافقة مع الأنظمة",
        "انضمام سهل ودمج سريع",
        "قابل للتوسع مع نمو أعمالك",
        "دعم عملاء في الوقت المناسب ومستجيب",
        "طرق دفع متعددة",
        "تحويلات سريعة وموثوقة",
        "منصة واحدة لجميع احتياجات الدفع",
      ],
      appStoreSub: "حمل من",
      appStoreTitle: "App Store",
      googlePlaySub: "احصل عليه من",
      googlePlayTitle: "Google Play",
    },
  };

  const t = content[currentLang] || content.EN;

  return (
    <section
      className={`w-full bg-white lg:h-[calc(100vh-80px)] flex items-center overflow-x-hidden py-4 lg:py-6 relative ${isAr ? "font-sans" : ""}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-10 w-full lg:mt-6">
        {/* Left: Text + List + Buttons */}
        <div className="w-full lg:w-[55%] flex flex-col justify-between items-start z-10 py-2">
          <div className="space-y-3 lg:space-y-4 w-full">
            <h1 className="text-2xl md:text-3xl lg:text-[2.35rem] font-bold text-gray-900 leading-tight lg:whitespace-nowrap">
              {t.title}
            </h1>
            <div className="flex items-center gap-2 group">
              <p className="text-base lg:text-xl font-semibold text-blue-600 leading-snug">
                {t.subheading}
              </p>
              <span className="text-blue-500 text-xl lg:text-2xl font-light" aria-hidden="true">
                {isAr ? "←" : "→"}
              </span>
            </div>
            
            <p className="text-gray-500 text-xs lg:text-[1rem] max-w-md">
              {t.intro}
            </p>

            <ul className="space-y-1 lg:space-y-1.5 text-gray-700 text-xs lg:text-[1.05rem] list-none pl-0">
              {t.bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-gray-900 font-bold text-base">•</span>
                  <span className="font-medium text-gray-600 truncate">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://apps.apple.com/eg/app/tuwaiq-pay/id6745802564"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-[14px] border border-gray-800 transition-all hover:bg-gray-900 w-[160px] lg:w-[180px]"
            >
              <img
                src="/AppStore.png"
                alt="App Store"
                className="h-4 lg:h-5 w-4 lg:w-5 object-contain"
              />
              <div className="text-left leading-none">
                <div className="text-[8px] text-gray-400">
                  {t.appStoreSub}
                </div>
                <div className="text-xs lg:text-sm font-semibold mt-0.5">
                  {t.appStoreTitle}
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tuwaiq.tuwaiq_pay&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-[14px] border border-gray-800 transition-all hover:bg-gray-900 w-[165px] lg:w-[190px]"
            >
              <img
                src="/GooglePlay.png"
                alt="Google Play"
                className="h-4 lg:h-5 w-4 lg:w-5 object-contain"
              />
              <div className="text-left leading-none">
                <div className="text-[8px] text-gray-400 uppercase tracking-tighter">
                  {t.googlePlaySub}
                </div>
                <div className="text-xs lg:text-sm font-semibold mt-0.5">
                  {t.googlePlayTitle}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Single Hero Image */}
        <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end min-h-[400px] lg:min-h-[500px]">
          <div className="relative w-full max-w-[550px] lg:max-w-[700px] h-full flex lg:items-start justify-center">
            <img
              src={isAr ? "/SecintArbic5.png" : "/HeroFeatures.png"}
              alt="Tuwaiq Pay Features"
              className="w-full h-auto object-contain lg:mt-[-5px]"
              style={{
                clipPath: isAr ? 'inset(1px)' : 'none',
                transform: isAr ? 'scale(1.01)' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
