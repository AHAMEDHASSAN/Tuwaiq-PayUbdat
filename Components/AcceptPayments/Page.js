"use client";

function AcceptPayments({ currentLang }) {
    const isAr = currentLang === 'AR';

    const content = {
        EN: {
            title: "Start Accepting Payments Today",
            desc: "Create an account in minutes and start collecting your sales and payments digitally with Tuwaiq pay",
            appStoreTitle: "App Store",
            appStoreSub: "Download on the",
            googlePlayTitle: "Google Play",
            googlePlaySub: "GET IT ON",
        },
        AR: {
            title: "ابدأ بقبول المدفوعات اليوم",
            desc: "أنشئ حساباً في دقائق وابدأ في تحصيل مبيعاتك ومدفوعاتك رقمياً مع طويق باي",
            appStoreTitle: "App Store",
            appStoreSub: "حمله من",
            googlePlayTitle: "Google Play",
            googlePlaySub: "تنزيل من",
        }
    };

    const t = content[currentLang] || content.EN;

    return (
        <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    className="relative overflow-hidden rounded-[40px] px-8 md:px-16 lg:px-24 pt-6 pb-1 md:py-0 min-h-[315px] md:h-[365px] flex flex-col md:flex-row items-center justify-between gap-12"
                    style={{
                        background: 'linear-gradient(108.46deg, #E6EFFF 0%, #F5F8FF 51.56%, #E0EAFF 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.6)'
                    }}
                >
                    {/* Glow Effects */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        {/* Top Right Purple Glow */}
                        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-[#7811FE] opacity-[0.4] blur-[100px] rounded-full" />
                        {/* Bottom Left Purple Glow */}
                        <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] bg-[#7811FE] opacity-[0.4] blur-[100px] rounded-full" />
                        {/* Subtle Blue Base Glow */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#3B82F6] opacity-[0.05] blur-[120px] rounded-full" />
                    </div>
                    {/* Left Side Content */}
                    <div className={`flex-1 z-10 text-center md:text-left space-y-6 ${isAr ? 'md:text-right' : 'md:text-left'} order-1`}>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-2xl lg:text-[32px] font-bold text-[#0F172A] leading-tight tracking-tight">
                                {t.title}
                            </h2>
                            <p className="text-[#64748B] text-base md:text-lg max-w-[480px] font-normal leading-relaxed mx-auto md:mx-0 px-2 md:px-0">
                                {t.desc}
                            </p>
                        </div>

                        {/* Download Buttons */}
                        <div className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 px-4 md:px-0`}>
                            <a 
                                href="https://apps.apple.com/eg/app/tuwaiq-pay/id6745802564" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3.5 rounded-full hover:bg-black transition-all duration-300 active:scale-[0.98] shadow-lg shadow-black/5"
                            >
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <img src="/AppStore.png" alt="App Store" className="w-full h-full object-contain brightness-0 invert" />
                                </div>
                                <div className="flex flex-col items-start leading-none text-left">
                                    <span className="text-[10px] text-gray-400 font-medium mb-0.5">{t.appStoreSub}</span>
                                    <span className="text-base font-semibold">{t.appStoreTitle}</span>
                                </div>
                            </a>

                            <a 
                                href="https://play.google.com/store/apps/details?id=com.tuwaiq.tuwaiq_pay&pli=1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3.5 rounded-full hover:bg-black transition-all duration-300 active:scale-[0.98] shadow-lg shadow-black/5"
                            >
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <img src="/GooglePlay.png" alt="Google Play" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col items-start leading-none text-left">
                                    <span className="text-[10px] text-gray-400 font-medium mb-0.5 uppercase tracking-wider">{t.googlePlaySub}</span>
                                    <span className="text-base font-semibold">{t.googlePlayTitle}</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex-1 w-full relative h-auto flex items-start justify-center md:justify-end order-2 mt-4 md:mt-0">
                        <div className="relative w-full flex items-start justify-center md:justify-end">
                            {/* Mobile Mockup Image */}
                            <img 
                                src="/banner mockup 1.png" 
                                alt="Tuwaiq Pay App Mobile" 
                                className="block md:hidden w-[80%] h-auto object-contain z-10"
                                style={{ 
                                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
                                }}
                            />
                            {/* Desktop Image */}
                            <img 
                                src="/PlaneThree.png" 
                                alt="Tuwaiq Pay App Desktop" 
                                className={`hidden md:block h-full w-auto object-contain z-10 md:h-[100%] md:w-auto`}
                                style={{ 
                                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AcceptPayments;
