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
                { id: 5, text: "رابط الدفع ورمز الاستجابة السريعة", icon: "qr" },
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
            case "qr": return <img src="/link-square.png" alt="Payment Link & QR" className={classes} />;
            case "track": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
            case "support": return <svg xmlns="http://www.w3.org/2000/svg" className={classes} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
            default: return null;
        }
    };

    return (
        <section id="faqs" className={`w-full bg-[#007AFF] pt-8 pb-0 overflow-hidden ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12 pt-4 lg:pt-8">
                
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <img 
                        src={isAr ? "/SecintArbic2.png" : "/PlaneTow.png"} 
                        alt="Mobile App Interface" 
                        className="w-full max-w-[180px] lg:max-w-[450px] h-auto object-contain scale-110"
                        style={{
                            clipPath: isAr ? 'inset(1px)' : 'none'
                        }}
                    />
                </div>

                {/* Right Side: Text & Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 md:space-y-10 pb-8 lg:pb-0">
                    <div className="relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/30 to-blue-400/20 blur-2xl rounded-3xl"></div>
                        <h2 className={`relative text-[42px] md:text-5xl lg:text-[64px] font-bold bg-gradient-to-r from-[#D8BEFF] via-[#88DBFF] to-[#FFFFFF] bg-clip-text text-transparent leading-tight text-center ${isAr ? 'lg:text-right w-full' : 'lg:text-left'} px-4`}>
                            {t.title}
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="w-full">
                        {/* Mobile: Custom 2-1-2-2 Layout */}
                        <div className="flex md:hidden flex-col gap-4 w-full">
                            {/* Row 1: 2 items */}
                            <div className="grid grid-cols-2 gap-4">
                                {t.features.slice(0, 2).map((feature) => (
                                    <div key={feature.id} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] p-[10px] transition-transform hover:scale-105">
                                        {renderIcon(feature.icon)}
                                        <span className="text-white font-medium text-[13px] whitespace-nowrap">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Row 2: 1 item centered */}
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] p-[10px] transition-transform hover:scale-105 w-[calc(50%-4px)]">
                                    {renderIcon(t.features[2].icon)}
                                    <span className="text-white font-medium text-[13px] whitespace-nowrap">{t.features[2].text}</span>
                                </div>
                            </div>
                            {/* Row 3: 2 items */}
                            <div className="grid grid-cols-2 gap-4">
                                {t.features.slice(3, 5).map((feature) => (
                                    <div key={feature.id} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] p-[10px] transition-transform hover:scale-105">
                                        {renderIcon(feature.icon)}
                                        <span className={`text-white font-medium ${isAr && feature.id === 5 ? 'text-[10px] whitespace-normal text-center leading-tight' : 'text-[13px] whitespace-nowrap'}`}>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Row 4: 2 items */}
                            <div className="grid grid-cols-2 gap-4">
                                {t.features.slice(5, 7).map((feature) => (
                                    <div key={feature.id} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] p-[10px] transition-transform hover:scale-105">
                                        {renderIcon(feature.icon)}
                                        <span className="text-white font-medium text-[13px] whitespace-nowrap">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Desktop: Custom 3-2-2 Layout for large screens, Flex wrap for medium */}
                        <div className="hidden md:flex flex-wrap lg:grid lg:grid-cols-1 gap-4 w-full">
                            {/* lg View: 3-2-2 */}
                            <div className="hidden lg:flex flex-col gap-4 w-full">
                                {/* Row 1: 3 items */}
                                <div className="flex gap-4">
                                    {t.features.slice(0, 3).map((feature) => (
                                        <div key={feature.id} className="flex items-center justify-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] px-5 py-3 transition-transform hover:scale-105">
                                            {renderIcon(feature.icon)}
                                            <span className="text-white font-medium text-base whitespace-nowrap">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Row 2: 2 items */}
                                <div className="flex gap-4">
                                    {t.features.slice(3, 5).map((feature) => (
                                        <div key={feature.id} className="flex items-center justify-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] px-5 py-3 transition-transform hover:scale-105">
                                            {renderIcon(feature.icon)}
                                            <span className="text-white font-medium text-base whitespace-nowrap">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Row 3: 2 items */}
                                <div className="flex gap-4">
                                    {t.features.slice(5, 7).map((feature) => (
                                        <div key={feature.id} className="flex items-center justify-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] px-5 py-3 transition-transform hover:scale-105">
                                            {renderIcon(feature.icon)}
                                            <span className="text-white font-medium text-base whitespace-nowrap">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* md View: Flex wrap (preserving original behavior for medium screens) */}
                            <div className="flex lg:hidden flex-wrap justify-center gap-4">
                                {t.features.map((feature) => (
                                    <div key={feature.id} className="flex items-center justify-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[100px] px-5 py-3 transition-transform hover:scale-105">
                                        {renderIcon(feature.icon)}
                                        <span className="text-white font-medium text-base whitespace-nowrap">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
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
