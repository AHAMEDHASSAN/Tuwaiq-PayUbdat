"use client";

function EcommerceIntegrations({ currentLang }) {
  const isAr = currentLang === "AR";

  const content = {
    EN: {
      title: "E-Commerce Integrations & Plugins",
      subtitle: "Powerful Features",
      description: "Seamlessly integrate Tuwaiq Pay with your online store and leading e-commerce platforms:",
      platforms: ["WooCommerce", "Salla", "Zid"],
      secondaryText: "Other platforms and custom APIs. Enable smooth checkout experiences and accept online payments with ease to grow your e-commerce sales.",
    },
    AR: {
      title: "تكامل وتقنيات الربط مع التجارة الإلكترونية",
      subtitle: "مميزات قوية",
      description: "اربط طويق باي بسلاسة مع متجرك عبر الإنترنت ومنصات التجارة الإلكترونية الرائدة:",
      platforms: ["ووكومرس", "سلة", "زد"],
      secondaryText: "منصات أخرى وواجهات برمجة تطبيقات مخصصة. مكن تجربة دفع سلسة واقبل المدفوعات عبر الإنترنت بسهولة لتنمية مبيعات تجارتك الإلكترونية.",
    }
  };

  const t = content[currentLang] || content.EN;

  return (
    <section className="w-full bg-white py-8 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row-reverse lg:items-stretch gap-12 lg:gap-20 ${isAr ? 'lg:flex-row' : ''}`}>
          
          {/* Right/Top Side: Laptop Image without Background/Shadow */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-40">
            <div className="relative w-full max-w-[600px] flex items-center justify-center overflow-visible">
              <img 
                src="/LapTopFeatures.png" 
                alt="E-Commerce Integrations" 
                className="w-full h-auto object-contain z-10"
              />
            </div>
          </div>

          {/* Left/Bottom Side: Text & Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start z-10 py-6 lg:mt-32">
            <div className="space-y-4 md:space-y-6 w-full">
              <div className="flex items-center gap-3 group cursor-pointer w-full justify-center lg:justify-start">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-600 text-center lg:text-left">
                  {t.title}
                </h2>
                <span className="text-blue-500 text-2xl lg:text-3xl font-light transform transition-transform group-hover:translate-x-1" aria-hidden="true">
                  {isAr ? "←" : "→"}
                </span>
              </div>

              <h3 className="text-xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                {t.subtitle}
              </h3>

              <div className="space-y-4">
                <p className="text-gray-500 text-sm lg:text-lg leading-relaxed text-center lg:text-left max-w-xl">
                  {t.description}
                </p>
                
                <ul className="space-y-2 text-gray-700 text-sm lg:text-[1rem] list-none p-0 text-center lg:text-left">
                  {t.platforms.map((platform, i) => (
                    <li key={i} className="flex items-center justify-center lg:justify-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{platform}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-600 font-medium text-sm lg:text-base text-center lg:text-left mt-8 lg:mt-0 max-w-xl pt-6">
              {t.secondaryText}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EcommerceIntegrations;
