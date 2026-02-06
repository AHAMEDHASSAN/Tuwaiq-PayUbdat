"use client";

function PaymentLinks({ currentLang }) {
  const isAr = currentLang === "AR";

  const content = {
    EN: {
      title: "Payment Links",
      subtitle: "Fast, secure, and easy to use",
      description: "Create and share secure payment links instantly via social media, messaging apps, SMS, email, or QR code scanning. Supports Mada, Visa, MasterCard, American Express, Apple Pay, and more",
      tip: "Ideal for online sales and remote collections",
    },
    AR: {
      title: "روابط الدفع",
      subtitle: "سريعة، آمنة، وسهلة الاستخدام",
      description: "أنشئ وشارك روابط دفع آمنة على الفور عبر وسائل التواصل الاجتماعي، أو تطبيقات المراسلة، أو الرسائل النصية القصيرة، أو البريد الإلكتروني، أو مسح رمز QR. يدعم مدى، فيزا، ماستركارد، أمريكان إكسبريس، آبل باي، والمزيد",
      tip: "مثالي للمبيعات عبر الإنترنت والتحصيل عن بعد",
    }
  };

  const t = content[currentLang] || content.EN;

  return (
    <section className="w-full bg-white py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-20">
          
          {/* Left Side: Phone Image with Gradient Background */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div 
              className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center overflow-visible"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #E6FAFF 100%)',
                borderRadius: '40px'
              }}
            >
              <img 
                src={isAr ? "/SecintArbic6.png" : "/PhonFeatures.png"} 
                alt="Payment Links Interface" 
                className="h-[125%] lg:h-[135%] w-auto object-contain z-10"
                style={{
                  clipPath: isAr ? 'inset(1px)' : 'none',
                  transform: isAr ? 'scale(1.01)' : 'none'
                }}
              />
            </div>
          </div>

          {/* Right Side: Text & Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start z-10 py-2">
            <div className="space-y-4 md:space-y-6 w-full">
              <div className={`flex items-center gap-2 group cursor-pointer w-full justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <h2 className={`text-xl lg:text-2xl font-bold text-blue-600 ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                  {t.title}
                </h2>
                <span className="text-blue-500 text-xl lg:text-2xl font-light transform transition-transform group-hover:translate-x-1" aria-hidden="true">
                  {isAr ? "←" : "→"}
                </span>
              </div>

              <h3 className={`text-xl lg:text-4xl font-bold text-gray-900 leading-tight text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                {t.subtitle}
              </h3>

              <p className={`text-gray-500 text-sm lg:text-lg leading-relaxed text-center ${isAr ? 'lg:text-right' : 'lg:text-left'} max-w-xl mt-6 lg:mt-10`}>
                {t.description}
              </p>

              <p className={`text-gray-600 font-medium text-sm lg:text-base text-center ${isAr ? 'lg:text-right' : 'lg:text-left'} mt-8 lg:mt-16`}>
                {t.tip}
              </p>
            </div>

            {/* Payment Logos - Restored correct paths and aligned to bottom */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 lg:pt-0">
              <img src="/Made.png" alt="Mada" className="h-4 lg:h-6 w-auto object-contain transition-all hover:scale-110" />
              <img src="/MasterCard.png" alt="MasterCard" className="h-6 lg:h-10 w-auto object-contain transition-all hover:scale-110" />
              <img src="/Visa.png" alt="Visa" className="h-4 lg:h-5 w-auto object-contain transition-all hover:scale-110" />
              <img src="/AmericanExpress.png" alt="American Express" className="h-7 lg:h-12 w-auto object-contain transition-all hover:scale-110" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PaymentLinks;
