"use client";
import { useEffect, useState } from "react";

function DownloadModal({ isOpen, onClose, currentLang }) {
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);
    const isAr = currentLang === 'AR';

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Small delay to ensure the DOM is ready for transition
            const timer = setTimeout(() => setAnimate(true), 10);
            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
        }
    }, [isOpen]);

    const content = {
        EN: {
            title: "Get Tuwaiq Pay",
            subtitle: "Download our official app for your mobile device",
            close: "Close",
            ios: {
                title: "App Store",
                desc: "Download for your iPhone or iPad.",
                btn: "Download"
            },
            android: {
                title: "Google Play",
                desc: "Get it on your Android device.",
                btn: "Download"
            }
        },
        AR: {
            title: "احصل على طويق باي",
            subtitle: "حمل التطبيق الرسمي على هاتفك المحمول",
            close: "إغلاق",
            ios: {
                title: "App Store",
                desc: "حمل التطبيق لأجهزة iPhone و iPad.",
                btn: "تحميل"
            },
            android: {
                title: "Google Play",
                desc: "احصل عليه لأجهزة الأندرويد.",
                btn: "تحميل"
            }
        }
    };

    const t = content[currentLang] || content.EN;

    if (!mounted || (!isOpen && !animate)) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden transition-all duration-500 ${isOpen && animate ? 'visible' : 'invisible'}`}>
            {/* Backdrop with Blur */}
            <div 
                className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 ${isOpen && animate ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div 
                className={`relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden transform transition-all duration-500 ease-out ${isOpen && animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'} ${isAr ? 'font-sans' : ''}`}
                dir={isAr ? 'rtl' : 'ltr'}
            >
                {/* Header Decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/5 rounded-full -ml-24 -mb-24 blur-3xl"></div>

                <div className="p-6 md:p-12 relative z-10">
                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-gray-400 hover:text-gray-600 transition-colors p-2 bg-gray-50 rounded-full"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Logo & Title */}
                    <div className="text-center mb-6 md:mb-10">
                        <div className="inline-flex items-center justify-center p-3 md:p-4 bg-blue-50 rounded-[22px] md:rounded-[28px] mb-3 md:mb-4 shadow-inner">
                            <img src="/Logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-1 md:mb-2 tracking-tight">{t.title}</h2>
                        <p className="text-gray-500 font-medium text-sm md:text-lg">{t.subtitle}</p>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                        
                        {/* iOS Card */}
                        <a 
                            href="https://apps.apple.com/eg/app/tuwaiq-pay/id6745802564"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center text-center p-5 md:p-8 rounded-[30px] md:rounded-[35px] bg-gray-50 border-2 border-transparent hover:border-blue-600 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 384 512">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-14.7 0-51.4-22.2-82.2-22.2-40.3 0-112.7 22.1-150.8 124.5-5.6 15.3-11.8 33-11.8 54.3 0 54.3 43.1 121.7 82.2 121.7 14.5 0 28.5-4.2 44.4-4.2 16.6 0 32.1 4.2 46.5 4.2 40.3 0 85.8-67.4 100.3-100.3 5.3-12.2 7.6-26.6 7.6-40.4zm-12.6-176.3c15.2-18.4 25.5-44 22.7-69.6-22 1-48.4 14.8-64.1 33.1-13.8 15.9-26 41.5-22.8 66.2 24.3 1.9 49-11.3 64.2-29.7z"/>
                                </svg>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{t.ios.title}</h4>
                            <p className="text-[12px] md:text-sm text-gray-400 leading-relaxed mb-4 md:mb-6 flex-grow">{t.ios.desc}</p>
                            <div className="w-full py-2.5 md:py-3 bg-blue-600 text-white rounded-xl md:rounded-2xl text-[12px] md:text-sm font-bold shadow-md transform group-hover:scale-105 transition-all">
                                {t.ios.btn}
                            </div>
                        </a>

                        {/* Android Card */}
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.tuwaiq.tuwaiq_pay&pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center text-center p-5 md:p-8 rounded-[30px] md:rounded-[35px] bg-gray-50 border-2 border-transparent hover:border-[#34A853] hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F1F3F4] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 md:w-9 md:h-9" viewBox="0 0 48 48">
                                    <path fill="#4DB6AC" d="M12 24 L34 37 L34 11 Z" />
                                    <path fill="#FFD54F" d="M34 37 L40 33.5 L34 30 Z" />
                                    <path fill="#F06292" d="M34 11 L40 14.5 L34 18 Z" />
                                    <path fill="#4FC3F7" d="M40 14.5 L44 19 L44 29 L40 33.5 Z" />
                                </svg>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{t.android.title}</h4>
                            <p className="text-[12px] md:text-sm text-gray-400 leading-relaxed mb-4 md:mb-6 flex-grow">{t.android.desc}</p>
                            <div className="w-full py-2.5 md:py-3 bg-[#34A853] text-white rounded-xl md:rounded-2xl text-[12px] md:text-sm font-bold shadow-md transform group-hover:scale-105 transition-all">
                                {t.android.btn}
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadModal;
