"use client";
import { useState } from 'react';

function About({ currentLang }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
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

    // Swipe Handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            isAr ? prevFeature() : nextFeature();
        } else if (isRightSwipe) {
            isAr ? nextFeature() : prevFeature();
        }
    };

    return (
        <section id="about-us" className={`w-full py-12 lg:py-24 mt-[50px] overflow-hidden bg-white ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Mobile Specific Header: Title at Top */}
                <div className="lg:hidden mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 text-center leading-tight">
                        {t.title}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
                    
                    {/* 1. Image Section (Order 1 on Mobile, 2 on Desktop) */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-start order-1 lg:order-2 lg:-mt-16">
                        
                        <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[345px] flex items-center justify-center">
                            {/* Purple Blob Background */}
                            <div className="absolute bottom-[-1px] lg:bottom-[92px] left-1/2 -translate-x-1/2 w-[125%] lg:w-[130%] h-[95%] lg:h-[95%] bg-gradient-to-t from-[#E9D5FF] to-transparent rounded-[3rem] z-0"></div>
                            
                            <img 
                                src="/iPhone 14 Pro.png" 
                                alt="Tuwaiq Pay App Interface" 
                                className="w-full h-auto md:w-[345px] md:h-[710px] md:object-contain drop-shadow-2xl relative z-10"
                            />
                        </div>
                    </div>

                    {/* 2. Content Section (Order 2 on Mobile, 1 on Desktop) */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        
                        {/* Desktop Only Title */}
                        <h2 className={`hidden lg:block text-4xl font-bold text-gray-900 leading-tight mb-6 ${isAr ? 'text-right' : 'text-left'}`}>
                            {t.title}
                        </h2>

                        {/* Desktop View: Full Feature List */}
                        <div className="hidden lg:block space-y-6">
                            {t.features.map((feature, index) => (
                                <div key={index} className={`space-y-1 ${isAr ? 'text-right' : 'text-left'}`}>
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
                        <div 
                            className="lg:hidden flex flex-col items-center text-center space-y-0 mt-4 touch-pan-y"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div className="space-y-2 min-h-[140px] flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-blue-600">
                                    {t.features[activeIndex].title}
                                </h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed max-w-[320px] mx-auto">
                                    {t.features[activeIndex].desc}
                                </p>
                            </div>

                            {/* Pagination Dots (Replacing Arrows) */}
                            <div className="flex items-center justify-center gap-2 mt-6">
                                {t.features.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                            index === activeIndex ? 'bg-blue-600 w-5' : 'bg-gray-300'
                                        }`}
                                        aria-label={`Go to feature ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
