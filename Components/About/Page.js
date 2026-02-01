"use client";
import { useState } from 'react';

function About({ currentLang }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const isAr = currentLang === 'AR';

    const content = {
        EN: {
            title: "Tuwaiq Pay - One Platform - Multiple Payment Channels",
            features: [
                {
                    title: "SoftPOS (Tap to Pay)",
                    desc: "Accept card payments directly on your smartphone—no physical POS device required."
                },
                {
                    title: "Payment Links",
                    desc: "Create and share secure payment links via social media, SMS, email, or QR codes. Supports Mada, Visa, MasterCard, American Express, Apple Pay, and more."
                },
                {
                    title: "E-Commerce Integrations",
                    desc: "Plug-and-play integrations with WooCommerce, Salla, Zid, and custom APIs for smooth online checkouts."
                }
            ]
        },
        AR: {
            title: "طويق باي - منصة واحدة - قنوات دفع متعددة",
            features: [
                {
                    title: "نقاط البيع عبر الهاتف (Tap to Pay)",
                    desc: "اقبل مدفوعات البطاقات مباشرة على هاتفك الذكي - لا حاجة لجهاز نقاط بيع."
                },
                {
                    title: "روابط الدفع",
                    desc: "أنشئ وشارك روابط دفع آمنة عبر وسائل التواصل الاجتماعي، الرسائل القصيرة، البريد الإلكتروني، أو رموز QR. تدعم مدى، فيزا، ماستركارد، أمريكان إكسبريس، أبل باي، والمزيد."
                },
                {
                    title: "الربط مع المتاجر الإلكترونية",
                    desc: "ربط سريع وسهل مع ووكومرس، سلة، زد، وواجهات برمجية مخصصة لتجربة دفع سلسة عبر الإنترنت."
                }
            ]
        }
    };

    const t = content[currentLang] || content.EN;

    const nextFeature = () => setActiveIndex((prev) => (prev + 1) % t.features.length);
    const prevFeature = () => setActiveIndex((prev) => (prev - 1 + t.features.length) % t.features.length);

    return (
        <section id="about-us" className={`w-full py-12 lg:py-24 overflow-hidden bg-white ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Mobile Specific Header: Title at Top */}
                <div className="lg:hidden mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 text-center leading-tight">
                        {t.title}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    
                    {/* 1. Image Section (Order 1 on Mobile, 2 on Desktop) */}
                    <div className="w-full lg:w-1/2 relative flex justify-center order-1 lg:order-2">
                        {/* Purple Blob Background */}
                        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] lg:w-[110%] h-[100%] lg:h-[100%] bg-gradient-to-t from-[#E9D5FF] to-transparent rounded-[3rem] z-0"></div>
                        
                        <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[404px] flex items-center justify-center">
                            <img 
                                src="/iPhone 14 Pro.png" 
                                alt="Tuwaiq Pay App Interface" 
                                className="w-full h-auto md:w-[404px] md:h-[835px] md:object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* 2. Content Section (Order 2 on Mobile, 1 on Desktop) */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        
                        {/* Desktop Only Title */}
                        <h2 className={`hidden lg:block text-4xl font-bold text-gray-900 leading-tight mb-12 ${isAr ? 'text-right' : 'text-left'}`}>
                            {t.title}
                        </h2>

                        {/* Desktop View: Full Feature List */}
                        <div className="hidden lg:block space-y-10">
                            {t.features.map((feature, index) => (
                                <div key={index} className={`space-y-3 ${isAr ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-xl font-bold text-blue-600">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile View: Carousel Single Feature + Navigation */}
                        <div className="lg:hidden flex flex-col items-center text-center space-y-0 mt-4">
                            <div className="space-y-2 min-h-[140px] flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-blue-600">
                                    {t.features[activeIndex].title}
                                </h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed max-w-[320px] mx-auto">
                                    {t.features[activeIndex].desc}
                                </p>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex items-center justify-center gap-10 mt-6">
                                <button 
                                    onClick={isAr ? nextFeature : prevFeature}
                                    className="text-gray-300 hover:text-blue-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={isAr ? prevFeature : nextFeature}
                                    className="text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
