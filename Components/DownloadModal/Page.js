"use client";
import { useEffect, useState } from "react";

function DownloadModal({ isOpen, onClose, currentLang }) {
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [showInstallSteps, setShowInstallSteps] = useState(false);
    const isAr = currentLang === 'AR';

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setAnimate(true), 10);
            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
            setShowInstallSteps(false);
        }
    }, [isOpen]);

    const content = {
        EN: {
            title: "Get Tuwaiq Pay",
            subtitle: "Choose how you want to experience our platform",
            close: "Close",
            figma: {
                title: "Figma UI/UX Design",
                desc: "Explore the professional design and user experience of Tuwaiq Pay.",
                btn: "Open Figma"
            },
            app: {
                title: "Mobile Application",
                desc: "Experience Tuwaiq Pay directly on your mobile device as a web app.",
                btn: "Install Now"
            }
        },
        AR: {
            title: "احصل على طويق باي",
            subtitle: "اختر الطريقة التي تفضلها لتجربة منصتنا",
            close: "إغلاق",
            figma: {
                title: "تصميم UI/UX (Figma)",
                desc: "استكشف التصميم الاحترافي وتجربة المستخدم الخاصة بطويق باي.",
                btn: "فتح في Figma"
            },
            app: {
                title: "تطبيق الجوال",
                desc: "استمتع بتجربة طويق باي مباشرة على هاتفك كـ Web App.",
                btn: "تحميل الآن"
            }
        }
    };

    const installSteps = {
        EN: {
            title: "How to Install",
            ios: "Tap 'Share' then 'Add to Home Screen'",
            android: "Tap the three dots (⋮) then 'Install App'"
        },
        AR: {
            title: "كيفية التثبيت",
            ios: "اضغط على 'مشاركة' ثم 'إضافة إلى الشاشة الرئيسية'",
            android: "اضغط على الثلاث نقاط (⋮) ثم 'تثبيت التطبيق'"
        }
    };

    const t = content[currentLang] || content.EN;
    const s = installSteps[currentLang] || installSteps.EN;

    if (!mounted || (!isOpen && !animate)) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden transition-all duration-500 ${isOpen && animate ? 'visible' : 'invisible'}`}>
            <div 
                className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 ${isOpen && animate ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            <div 
                className={`relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden transform transition-all duration-500 ease-out ${isOpen && animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'} ${isAr ? 'font-sans' : ''}`}
                dir={isAr ? 'rtl' : 'ltr'}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                <div className="p-8 md:p-12 relative z-10">
                    <button 
                        onClick={showInstallSteps ? () => setShowInstallSteps(false) : onClose}
                        className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-gray-400 hover:text-gray-600 transition-colors p-2"
                    >
                        {showInstallSteps ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>

                    {!showInstallSteps ? (
                        <>
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-3xl mb-4">
                                    <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-2">{t.title}</h2>
                                <p className="text-gray-500 font-medium">{t.subtitle}</p>
                            </div>

                            <div className="grid gap-4">
                                <a 
                                    href="/Figma_1770378373074.pdf"
                                    download="TuwaiqPay_Design.pdf"
                                    className="group flex items-center gap-6 p-6 rounded-[30px] bg-gray-50 border-2 border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300 text-left rtl:text-right"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 28.5C19 25.0195 20.317 21.6814 22.6612 19.2201C25.0054 16.7587 28.1848 15.375 31.5 15.375C34.8152 15.375 37.9946 16.7587 40.3388 19.2201C42.683 21.6814 44 25.0195 44 28.5L44 41.625C44 45.1054 42.683 48.4435 40.3388 50.9049C37.9946 53.3662 34.8152 54.75 31.5 54.75C28.1848 54.75 25.0054 53.3662 22.6612 50.9049C20.317 48.4435 19 45.1054 19 41.625L19 28.5Z" fill="white" fillOpacity="0.2"/>
                                            <path d="M19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{t.figma.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{t.figma.desc}</p>
                                    </div>
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>

                                <button 
                                    className="group flex items-center gap-6 p-6 rounded-[30px] bg-gray-50 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-300 text-left rtl:text-right"
                                    onClick={() => setShowInstallSteps(true)}
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">{t.app.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{t.app.desc}</p>
                                    </div>
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">{s.title}</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-blue-50 rounded-[30px] text-left rtl:text-right">
                                    <h4 className="text-blue-600 font-bold mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.04.04-2.3.69-3.05 1.56-.67.77-1.26 1.93-1.12 3.06 1.16.08 2.34-.64 3.07-1.47z"/></svg>
                                        iOS (iPhone)
                                    </h4>
                                    <p className="text-gray-600 font-medium">{s.ios}</p>
                                </div>
                                <div className="p-6 bg-purple-50 rounded-[30px] text-left rtl:text-right">
                                    <h4 className="text-purple-600 font-bold mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.0232 15.3414 16.6176 14.9358 16.6176 14.436C16.6176 13.9363 17.0232 13.5307 17.523 13.5307C18.0227 13.5307 18.4284 13.9363 18.4284 14.436C18.4284 14.9358 18.0227 15.3414 17.523 15.3414ZM6.47702 15.3414C5.97724 15.3414 5.57161 14.9358 5.57161 14.436C5.57161 13.9363 5.97724 13.5307 6.47702 13.5307C6.97681 13.5307 7.38243 13.9363 7.38243 14.436C7.38243 14.9358 6.97681 15.3414 6.47702 15.3414ZM17.9152 10.7491L19.7912 7.49969C19.9272 7.26425 19.8471 6.96338 19.6117 6.82736C19.3762 6.69135 19.0754 6.77142 18.9394 7.00686L17.0396 10.3015C15.5413 9.61904 13.8509 9.23071 12 9.23071C10.1491 9.23071 8.45869 9.61904 6.9604 10.3015L5.0606 7.00686C4.92458 6.77142 4.62371 6.69135 4.38827 6.82736C4.15283 6.96338 4.07276 7.26425 4.20878 7.49969L6.08476 10.7491C2.65089 12.602 0.355157 16.1417 0 20.3077H24C23.6448 16.1417 21.3491 12.602 17.9152 10.7491Z"/></svg>
                                        Android
                                    </h4>
                                    <p className="text-gray-600 font-medium">{s.android}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DownloadModal;
