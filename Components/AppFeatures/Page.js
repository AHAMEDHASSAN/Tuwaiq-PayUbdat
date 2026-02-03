"use client";

function AppFeatures({ currentLang }) {
    const isAr = currentLang === 'AR';

    const content = {
        EN: {
            title: "Powering all your business needs",
            features: [
                { id: 1, text: "Generate Bills", icon: "bill" },
                { id: 2, text: "Bank Transfers", icon: "bank" },
                { id: 3, text: "Digital Onboarding", icon: "user" },
                { id: 4, text: "Transparent Pricing", icon: "pricing" },
                { id: 5, text: "Payment Link & QR", icon: "qr" },
                { id: 6, text: "Track Payments", icon: "track" },
                { id: 7, text: "In-App Support", icon: "support" }
            ],
            appStoreSub: "Download on the",
            googlePlaySub: "GET IT ON",
            appStoreTitle: "App Store",
            googlePlayTitle: "Google Play"
        },
        AR: {
            title: "تلبية كافة احتياجات أعمالك",
            features: [
                { id: 1, text: "إصدار الفواتير", icon: "bill" },
                { id: 2, text: "التحويلات البنكية", icon: "bank" },
                { id: 3, text: "التسجيل الرقمي", icon: "user" },
                { id: 4, text: "أسعار شفافة", icon: "pricing" },
                { id: 5, text: "رابط الدفع و QR", icon: "qr" },
                { id: 6, text: "تتبع المدفوعات", icon: "track" },
                { id: 7, text: "دعم داخل التطبيق", icon: "support" }
            ],
            appStoreSub: "حمل من",
            googlePlaySub: "احصل عليه من",
            appStoreTitle: "App Store",
            googlePlayTitle: "Google Play"
        }
    };

    const t = content[currentLang] || content.EN;

    // Helper to render icons
    const renderIcon = (type) => {
        const classes = "w-5 h-5 text-white";
        switch (type) {
            case "bill": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
            case "bank": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
            case "user": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
            case "pricing": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
            case "qr": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zm-6 0H6.414a1 1 0 00-.707.293L4 16.586V18h2.586l1.707-1.707A1 1 0 008.586 16H8v-1zM4 11h2v2H4v-2zm2 0h2v2H6v-2zm2 0h2v2H8v-2zm-6 3h2v2H2v-2zm2 0h2v2H4v-2zm2 0h2v2H6v-2zm14-5v1m-6 0h-2v1h2V9zm-2 2h-2v1h2v-1zm2 1h-2v1h2v-1zm-4 1h-2v1h2v-1zm4-5v2h-2V7h2zm-4 0v2h-2V7h2z" /></svg>; // Approximate QR
            case "track": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
            case "support": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
            default: return null;
        }
    };

    return (
        <section id="faqs" className={`w-full bg-[#007AFF] pt-16 pb-0 overflow-hidden ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-[1728px] mx-auto px-4 md:px-[60px] lg:px-[120px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 pt-8 lg:pt-16">
                
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <img 
                        src="PlaneTow.png" 
                        alt="Mobile App Interface" 
                        className="w-full max-w-[600px] h-auto object-contain"
                    />
                </div>

                {/* Right Side: Text & Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 md:space-y-10 pb-16 lg:pb-0">
                    <h2 className={`text-2xl md:text-5xl lg:text-5xl font-bold text-white leading-tight text-center ${isAr ? 'lg:text-right w-full' : 'lg:text-left'}`}>
                        {t.title}
                    </h2>

                    {/* Features Grid */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                        {t.features.map((feature) => (
                            <div key={feature.id} className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] px-4 py-2 md:px-5 md:py-3 transition-transform hover:scale-105">
                                {renderIcon(feature.icon)}
                                <span className="text-white font-medium text-[11px] md:text-base whitespace-nowrap">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Store Buttons */}
                    <div className={`flex flex-row justify-center ${isAr ? 'lg:justify-start' : 'lg:justify-start'} gap-3 w-full pt-4`}>
                        <a 
                            href="https://apps.apple.com/eg/app/tuwaiq-pay/id6745802564" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 bg-black text-white px-2 py-2 rounded-[15px] md:rounded-[30px] border border-transparent transition-colors hover:bg-gray-900 group max-w-[180px] md:min-w-[180px]"
                        >
                            <img src="/AppStore.png" alt="App Store" className="h-5 md:h-8 w-5 md:w-8 object-contain" />
                            <div className={`text-left leading-none ${isAr ? 'text-right' : 'text-left'}`}>
                                <div className="text-[8px] md:text-[10px] text-white">{t.appStoreSub}</div>
                                <div className="text-[14px] md:text-xl font-medium mt-0.5 tracking-tight md:tracking-wide">{t.appStoreTitle}</div>
                            </div>
                        </a>
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.tuwaiq.tuwaiq_pay&pli=1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 bg-black text-white px-2 py-2 rounded-[15px] md:rounded-[30px] border border-transparent transition-colors hover:bg-gray-900 group max-w-[180px] md:min-w-[180px]"
                        >
                            <img src="/GooglePlay.png" alt="Google Play" className="h-5 md:h-8 w-5 md:w-8 object-contain" />
                            <div className={`text-left leading-none ${isAr ? 'text-right' : 'text-left'}`}>
                                <div className="text-[8px] md:text-[10px] text-white uppercase tracking-wider">{t.googlePlaySub}</div>
                                <div className="text-[14px] md:text-xl font-medium mt-0.5 tracking-tight md:tracking-wide">{t.googlePlayTitle}</div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AppFeatures;
