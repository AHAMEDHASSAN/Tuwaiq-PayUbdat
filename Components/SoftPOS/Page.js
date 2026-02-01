"use client";

function SoftPOS({ currentLang }) {
  const isAr = currentLang === "AR";

  const content = {
    EN: {
      title: "SoftPOS (Tap to Pay)",
      subtitle: "Perfect for small retailers, sales reps & delivery agents",
      description: "Turn your smartphone into a payment terminal and accept card payments directly from your mobile device—without additional hardware or operational hassle.",
      features: [
        "No physical POS required.",
        "Fast and secure card acceptance."
      ]
    },
    AR: {
      title: "نقاط البيع عبر الهاتف (تطبيق الدفع)",
      subtitle: "مثالي لتجار التجزئة الصغار ومندوبي المبيعات ووكلاء التوصيل",
      description: "حول هاتفك الذكي إلى جهاز دفع واقبل مدفوعات البطاقات مباشرة من جهازك المحمول - بدون أجهزة إضافية أو تعقيدات تشغيلية.",
      features: [
        "لا حاجة لجهاز نقاط بيع فعلي.",
        "قبول آمن وسريع للبطاقات."
      ]
    }
  };

  const t = content[currentLang] || content.EN;

  return (
    <section className="w-full bg-white py-8 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left/Top Side: Phone Image (No background/shadow) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] flex items-center justify-center overflow-visible">
              <img 
                src="/PlaneSex.png" 
                alt="SoftPOS Interface" 
                className="w-full h-auto object-contain z-10"
              />
            </div>
          </div>

          {/* Right/Bottom Side: Text & Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start z-10">
            <div className="space-y-4 md:space-y-6 w-full">
              <div className="flex items-center gap-3 group cursor-pointer w-full justify-center lg:justify-start">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-600 text-center lg:text-left">
                  {t.title}
                </h2>
                <span className="text-blue-500 text-2xl lg:text-3xl font-light transform transition-transform group-hover:translate-x-1" aria-hidden="true">
                  {isAr ? "←" : "→"}
                </span>
              </div>

              <h3 className="text-xl lg:text-3xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                {t.subtitle}
              </h3>

              <div className="space-y-6">
                <p className="text-gray-500 text-sm lg:text-lg leading-relaxed text-center lg:text-left max-w-xl">
                  {t.description}
                </p>
                
                <div className="space-y-4 pt-4">
                  {t.features.map((feature, i) => (
                    <p key={i} className="text-gray-600 font-medium text-sm lg:text-base text-center lg:text-left">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SoftPOS;
