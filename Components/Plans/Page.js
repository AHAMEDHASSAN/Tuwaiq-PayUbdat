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
                    title: "Soft POS",
                    desc: "For most businesses that want to otpimize web queries",
                    items: [
                        { label: "Mada fees", value: "1% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees", value: "2.5% + 1 SAR / Transaction" },
                        { label: "Amex", value: "3% + 1 SAR / Transaction" },
                        { label: "Refund fees", value: "3 SAR" },
                        { label: "Transfer fees < 20k", value: "3 SAR" },
                        { label: "Transfer fees > 20k", value: "10 SAR" }
                    ]
                },
                {
                    id: 2,
                    title: "E-Commerce",
                    desc: "For most businesses that want to otpimize web queries",
                    items: [
                        { label: "Mada fees", value: "1% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Inside KSA Card)", value: "2.5% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Outside KSA Card)", value: "2.8% + 1 SAR / Transaction" },
                        { label: "Amex", value: "3% + 1 SAR / Transaction" },
                        { label: "Refund fees", value: "3 SAR" },
                        { label: "Transfer fees < 20k", value: "3 SAR" },
                        { label: "Transfer fees > 20k", value: "10 SAR" }
                    ]
                },
                {
                    id: 3,
                    title: "Payment Link",
                    desc: "For most businesses that want to otpimize web queries",
                    items: [
                        { label: "Mada fees", value: "1% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Inside KSA Card)", value: "2.5% + 1 SAR / Transaction" },
                        { label: "Visa / Master fees (Outside KSA Card)", value: "2.8% + 1 SAR / Transaction" },
                        { label: "Amex", value: "3% + 1 SAR / Transaction" },
                        { label: "Refund fees", value: "3 SAR" },
                        { label: "Transfer fees < 20k", value: "3 SAR" },
                        { label: "Transfer fees > 20k", value: "10 SAR" }
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
                    title: "نقاط بيع محمولة",
                    desc: "لأغلب الأعمال التي تريد تحسين استعلامات الويب",
                    items: [
                        { label: "رسوم مدى", value: "1% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد", value: "2.5% + 1 ريال / عملية" },
                        { label: "أميكس", value: "3% + 1 ريال / عملية" },
                        { label: "رسوم الاسترجاع", value: "3 ريال" },
                        { label: "رسوم التحويل < 20 ألف", value: "3 ريال" },
                        { label: "رسوم التحويل > 20 ألف", value: "10 ريال" }
                    ]
                },
                {
                    id: 2,
                    title: "تجارة إلكترونية",
                    desc: "لأغلب الأعمال التي تريد تحسين استعلامات الويب",
                    items: [
                        { label: "رسوم مدى", value: "1% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (داخل المملكة)", value: "2.5% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (خارج المملكة)", value: "2.8% + 1 ريال / عملية" },
                        { label: "أميكس", value: "3% + 1 ريال / عملية" },
                        { label: "رسوم الاسترجاع", value: "3 ريال" },
                        { label: "رسوم التحويل < 20 ألف", value: "3 ريال" },
                        { label: "رسوم التحويل > 20 ألف", value: "10 ريال" }
                    ]
                },
                {
                    id: 3,
                    title: "رابط الدفع",
                    desc: "لأغلب الأعمال التي تريد تحسين استعلامات الويب",
                    items: [
                        { label: "رسوم مدى", value: "1% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (داخل المملكة)", value: "2.5% + 1 ريال / عملية" },
                        { label: "رسوم فيزا / ماستر كارد (خارج المملكة)", value: "2.8% + 1 ريال / عملية" },
                        { label: "أميكس", value: "3% + 1 ريال / عملية" },
                        { label: "رسوم الاسترجاع", value: "3 ريال" },
                        { label: "رسوم التحويل < 20 ألف", value: "3 ريال" },
                        { label: "رسوم التحويل > 20 ألف", value: "10 ريال" }
                    ]
                }
            ]
        }
    };

    const t = content[currentLang] || content.EN;

    return (
        <section id="pricing" className={`w-full bg-white py-16 lg:py-24 scroll-mt-24 ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight">
                        {t.header}
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium px-4 md:px-0">
                        {t.subHeader}
                    </p>
                </div>

                {/* Free Plan Pricing Title */}
                <div className={`mb-6 ${isAr ? 'text-right' : 'text-left'} md:text-center`}>
                    <span className="text-gray-500 text-xl md:text-2xl font-bold block">
                        {t.freePlan}
                    </span>
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
        <div className={`bg-[#F8F9FA] rounded-[32px] p-5 lg:p-7 flex flex-col h-full border border-gray-100 ${!isMobile ? 'hover:shadow-xl transition-shadow duration-300' : ''}`}>
            {/* Card Header */}
            <div className="mb-4 space-y-2">
                <h3 className="text-3xl font-black text-gray-900">{card.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>

            {/* List items */}
            <div className="space-y-3 mb-2 flex-grow">
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

            {/* Note: Prices are VAT exclusive */}
            <div className="mb-4 text-[10px] text-gray-400">
                {t.note}
            </div>

            {/* Monthly Subscription Row */}
            <div className="border-t border-gray-200 pt-3 mt-2 mb-4 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-400">{t.monthlySub}</span>
                <span className="text-xl font-black text-gray-900">{t.free}</span>
            </div>

            {/* Footer Buttons */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">

                    {/* Get Started Button */}
                    <a 
                        href="https://api.whatsapp.com/message/UY24PCKYYXXBN1?autoload=1&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow py-3 px-6 rounded-[14px] border border-blue-500 text-blue-500 font-bold hover:bg-blue-50 transition-colors duration-300 text-center"
                    >
                        {t.btn}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Plans;
