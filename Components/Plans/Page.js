"use client";
import { useRef, useState } from "react";

function Plans({ currentLang }) {
    const isAr = currentLang === 'AR';
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const width = scrollRef.current.offsetWidth;
            const scrollLeft = scrollRef.current.scrollLeft;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    const content = {
        EN: {
            header: "Flexible Plans for Every Business Size",
            subHeader: "Choose the plan that fits your needs — no setup fees, no hidden charges.",
            freePlan: "Free Plan Pricing",
            note: "Note: Prices are VAT exclusive",
            btn: "Get Started",
            monthlySub: "Monthly Subscription",
            free: "Free",
            cards: [
                {
                    id: 1,
                    title: "Silver",
                    desc: "For most businesses that want to optimize web queries",
                    items: [
                        { label: "Mada fees", value: "1% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (KSA)", value: "2.5% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Issued outside KSA)", value: "2.8% + 1 SAR / Transaction" },
                        { label: "Amex", value: "3% + 1 SAR / Transaction" },
                        { label: "Refund fees", value: "3 SAR" },
                        { label: "Transfer fees < 20k SAR", value: "3 SAR" },
                        { label: "Transfer fees > 20k SAR", value: "10 SAR" }
                    ]
                },
                {
                    id: 2,
                    title: "Gold",
                    desc: "For most businesses that want to optimize web queries",
                    items: [
                        { label: "Mada fees", value: "1% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (KSA)", value: "2.5% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Issued outside KSA)", value: "2.8% + 1 SAR / Transaction" },
                        { label: "Amex", value: "3% + 1 SAR / Transaction" },
                        { label: "Refund fees", value: "3 SAR" },
                        { label: "Transfer fees < 20k SAR", value: "3 SAR" },
                        { label: "Transfer fees > 20k SAR", value: "10 SAR" }
                    ]
                },
                {
                    id: 3,
                    title: "Platinum",
                    desc: "For most businesses that want to optimize web queries",
                    items: [
                        { label: "Mada fees", value: "1% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (KSA)", value: "2.5% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Issued outside KSA)", value: "2.8% + 1 SAR / Transaction" },
                        { label: "Amex", value: "3% + 1 SAR / Transaction" },
                        { label: "Refund fees", value: "3 SAR" },
                        { label: "Transfer fees < 20k SAR", value: "3 SAR" },
                        { label: "Transfer fees > 20k SAR", value: "10 SAR" }
                    ]
                }
            ]
        },
        AR: {
            header: "خطط مرنة تناسب جميع أحجام الأعمال",
            subHeader: "اختر الخطة التي تناسب احتياجاتك - لا توجد رسوم تأسيس ولا تكاليف مخفية.",
            freePlan: "أسعار الباقة المجانية",
            note: "ملاحظة: الأسعار غير شاملة ضريبة القيمة المضافة",
            btn: "أبدأ الأن",
            monthlySub: "الاشتراك الشهري",
            free: "مجاني",
            cards: [
                {
                    id: 1,
                    title: "الفضية",
                    desc: "لأغلب الأعمال التي تريد تحسين استعلامات الويب",
                    items: [
                        { label: "رسوم مدى", value: "1% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (داخل المملكة)", value: "2.5% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (خارج المملكة)", value: "2.8% + 1 ريال / عملية" },
                        { label: "أميكس", value: "3% + 1 ريال / عملية" },
                        { label: "رسوم الاسترجاع", value: "3 ريال" },
                        { label: "رسوم التحويل < 20 ألف ريال", value: "3 ريال" },
                        { label: "رسوم التحويل > 20 ألف ريال", value: "10 ريال" }
                    ]
                },
                {
                    id: 2,
                    title: "الذهبية",
                    desc: "لأغلب الأعمال التي تريد تحسين استعلامات الويب",
                    items: [
                        { label: "رسوم مدى", value: "1% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (داخل المملكة)", value: "2.5% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (خارج المملكة)", value: "2.8% + 1 ريال / عملية" },
                        { label: "أميكس", value: "3% + 1 ريال / عملية" },
                        { label: "رسوم الاسترجاع", value: "3 ريال" },
                        { label: "رسوم التحويل < 20 ألف ريال", value: "3 ريال" },
                        { label: "رسوم التحويل > 20 ألف ريال", value: "10 ريال" }
                    ]
                },
                {
                    id: 3,
                    title: "البلاتينية",
                    desc: "لأغلب الأعمال التي تريد تحسين استعلامات الويب",
                    items: [
                        { label: "رسوم مدى", value: "1% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (داخل المملكة)", value: "2.5% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (خارج المملكة)", value: "2.8% + 1 ريال / عملية" },
                        { label: "أميكس", value: "3% + 1 ريال / عملية" },
                        { label: "رسوم الاسترجاع", value: "3 ريال" },
                        { label: "رسوم التحويل < 20 ألف ريال", value: "3 ريال" },
                        { label: "رسوم التحويل > 20 ألف ريال", value: "10 ريال" }
                    ]
                }
            ]
        }
    };

    const t = content[currentLang] || content.EN;

    return (
        <section id="pricing" className={`w-full bg-white py-16 lg:py-24 ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-[1728px] mx-auto px-4 md:px-[60px] lg:px-[120px]">
                
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight">
                        {t.header}
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium px-4 md:px-0">
                        {t.subHeader}
                    </p>
                </div>

                {/* Mobile Slider / Desktop Grid */}
                <div className="relative group">
                    {/* Desktop Grid (Hidden on Mobile) */}
                    <div className="hidden lg:grid grid-cols-3 gap-8">
                        {t.cards.map((card) => (
                            <PlanCard key={card.id} card={card} t={t} isAr={isAr} />
                        ))}
                    </div>

                    {/* Mobile View: Horizontal Slider with Dots */}
                    <div className="lg:hidden">
                        <div 
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style>{`
                                .scrollbar-hide::-webkit-scrollbar { display: none; }
                            `}</style>
                            {t.cards.map((card) => (
                                <div key={card.id} className="min-w-full snap-center px-2">
                                    <PlanCard card={card} t={t} isAr={isAr} isMobile={true} />
                                </div>
                            ))}
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {t.cards.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function PlanCard({ card, t, isAr, isMobile = false }) {
    return (
        <div className={`bg-[#F8F9FA] rounded-[32px] p-6 lg:p-8 flex flex-col h-full border border-gray-100 ${!isMobile ? 'hover:shadow-xl transition-shadow duration-300' : ''}`}>
            {/* Card Header */}
            <div className="mb-6 space-y-3">
                <h3 className="text-3xl font-black text-gray-900">{card.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>

            {/* List items */}
            <div className="space-y-4 mb-4 flex-grow">
                {card.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="flex flex-wrap justify-between w-full text-sm font-medium">
                            <span className="text-gray-500">
                                {item.label.includes('(') ? (
                                    <span className="flex flex-col">
                                        <span>{item.label.split('(')[0]}</span>
                                        <span className="text-xs text-gray-400 mt-0.5">({item.label.split('(')[1]}</span>
                                    </span>
                                ) : (
                                    item.label
                                )}
                            </span>
                            <span className={`font-black text-gray-900 ${isAr ? 'mr-auto' : 'ml-auto text-right'}`}>
                                {item.value.includes('/') ? (
                                    <>
                                        {item.value.split('/')[0]}
                                        <span className="font-medium text-gray-500 text-[10px]">/ {item.value.split('/')[1]}</span>
                                    </>
                                ) : (
                                    item.value
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Monthly Subscription Row */}
            <div className="border-t border-gray-200 pt-5 mt-4 mb-6 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-400">{t.monthlySub}</span>
                <span className="text-xl font-black text-gray-900">{t.free}</span>
            </div>

            {/* Footer Buttons */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    {/* WhatsApp Button */}
                    <button className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045a11.871 11.871 0 001.592 5.925L0 24l6.135-1.61a11.811 11.811 0 005.912 1.586h.005c6.634 0 12.045-5.411 12.048-12.045a11.85 11.85 0 00-3.359-8.521" />
                        </svg>
                    </button>
                    {/* Get Started Button */}
                    <button className="flex-grow py-3 px-6 rounded-[14px] border border-blue-500 text-blue-500 font-bold hover:bg-blue-50 transition-colors duration-300">
                        {t.btn}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Plans;
