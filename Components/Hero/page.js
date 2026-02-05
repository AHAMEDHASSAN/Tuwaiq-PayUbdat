

function Hero({ currentLang }) {
    const isAr = currentLang === 'AR';
    
    const content = {
        EN: {
            title: <>Get Paid Faster, Collect <br className="hidden lg:block" /> Your Sales, and Grow Your <br className="hidden lg:block" /> Business with Tuwaiq Pay</>,
            desc: <>Tuwaiq Pay enables freelancers and businesses in Saudi Arabia create bills, <br className="hidden lg:block" /> accept payments, and track every transaction — Digitally and securely</>,
            appStoreSub: "Download on the",
            googlePlaySub: "GET IT ON",
            appStoreTitle: "App Store",
            googlePlayTitle: "Google Play"
        },
        AR: {
            title: <>احصل على مستحقاتك، <br className="hidden lg:block" /> وزد مبيعاتك ونمِ أعمالك <br className="hidden lg:block" /> مع طويق باي</>,
            desc: <>طويق باي تمكن المستقلين والشركات في المملكة العربية السعودية من إنشاء الفواتير، <br className="hidden lg:block" /> قبول المدفوعات، وتتبع كل معاملة — رقمياً وبكل أمان</>,
            appStoreSub: "حمل من",
            googlePlaySub: "احصل عليه من",
            appStoreTitle: "App Store",
            googlePlayTitle: "Google Play"
        }
    };

    const t = content[currentLang] || content.EN;

    return (
        <section className={`w-full bg-gray-100 min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-8 lg:py-12 relative ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full h-full">
                
                {/* Left Column: Text & Buttons */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 z-10 pb-4 lg:pb-20">
                    <div className="Title space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start">
                        <h1 className={`text-3xl md:text-5xl lg:text-[3rem] font-bold text-gray-900 leading-[1.2] lg:leading-[1.15] tracking-tight mt-6 lg:mt-10 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                            {t.title}
                        </h1>
                        <p className={`text-[13px] lg:text-[15px] text-gray-500 leading-relaxed max-w-xl text-center ${isAr ? 'lg:text-right' : 'lg:text-left'} px-2 lg:px-0`}>
                            {t.desc}
                        </p>

                        <div className={`Buttons flex flex-row flex-wrap justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} gap-3 w-full`}>
                            <a 
                                href="https://apps.apple.com/eg/app/tuwaiq-pay/id6745802564" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-black text-white px-2 py-1.5 rounded-[20px] lg:rounded-[30px] border border-transparent transition-colors group w-[160px] lg:w-[210px]"
                            >
                                <img src="/AppStore.png" alt="App Store" className="h-6 lg:h-8 w-6 lg:w-8 object-contain" />
                                <div className={`text-left leading-none ${isAr ? 'text-right' : 'text-left'}`}>
                                    <div className="text-[9px] lg:text-[10px] text-white">{t.appStoreSub}</div>
                                    <div className="text-sm lg:text-xl font-medium mt-0.5 tracking-wide">{t.appStoreTitle}</div>
                                </div>
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.tuwaiq.tuwaiq_pay&pli=1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-black text-white px-2 py-1.5 rounded-[20px] lg:rounded-[30px] border border-transparent transition-colors group w-[165px] lg:w-[220px]"
                            >
                                <img src="/GooglePlay.png" alt="Google Play" className="h-6 lg:h-8 w-6 lg:w-8 object-contain" />
                                <div className={`text-left leading-none ${isAr ? 'text-right' : 'text-left'}`}>
                                    <div className="text-[9px] lg:text-[10px] text-white uppercase tracking-wider">{t.googlePlaySub}</div>
                                    <div className="text-sm lg:text-xl font-medium mt-0.5 tracking-wide">{t.googlePlayTitle}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Only: Payment Partners (In Flow) */}
                <div className="w-full flex lg:hidden items-center justify-center gap-5 mt-2 mb-4">
                    <img src="/Made.png" alt="Mada" className="h-5 object-contain" />
                    <img src="/Visa.png" alt="Visa" className="h-4 object-contain" />
                    <img src="/MasterCard.png" alt="MasterCard" className="h-5 object-contain" />
                    <img src="/Pay.png" alt="Apple Pay" className="h-5 object-contain" />
                    <img src="/AmericanExpress.png" alt="Amex" className="h-5 object-contain" />
                </div>

                {/* Right Column: Image */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-4 lg:mt-17">
                    
                    {/* Main Phone Image */}
                    <div className="relative z-10 w-full max-w-[500px] lg:max-w-none lg:w-[1400px]">
                        <img 
                            src={isAr ? "/HeroArpic.png" : "/Hero.png"} 
                            alt="App Screens" 
                            className={`w-full h-auto ${isAr ? 'scale-90 lg:scale-90 lg:-translate-x-20 lg:-mt-16' : 'lg:scale-130 lg:translate-x-20 lg:-mt-4'} transition-transform duration-500`}
                            style={{
                                maskImage: `linear-gradient(${isAr ? 'to left' : 'to right'}, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 95%)`,
                                WebkitMaskImage: `linear-gradient(${isAr ? 'to left' : 'to right'}, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 95%)`,
                                maskComposite: 'intersect',
                                WebkitMaskComposite: 'source-in'
                            }}
                 />

                    </div>
                </div>

            </div>
            {/* Desktop Only: Payment Partners - Absolute Positioned at Bottom of Section */}
            <div className={`hidden lg:block absolute ${isAr ? 'bottom-24' : 'bottom-12'} w-full z-20`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-12 md:gap-20">
                        <img src="/Made.png" alt="Mada" className="h-12 object-contain" />
                        <img src="/Visa.png" alt="Visa" className="h-10 object-contain" />
                        <img src="/MasterCard.png" alt="MasterCard" className="h-12 object-contain" />
                        <img src="/Pay.png" alt="Apple Pay" className="h-12 object-contain" />
                        <img src="/AmericanExpress.png" alt="Amex" className="h-12 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;