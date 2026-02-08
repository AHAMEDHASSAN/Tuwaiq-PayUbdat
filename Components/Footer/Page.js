import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Footer({ currentLang }) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const isAr = currentLang === 'AR';

    const content = {
        EN: {
            reachUs: "Reach Us",
            followUs: "Follow Us",
            whatsApp: "WhatsApp",
            callCenter: "Call Center",
            email: "Email",
            locationLabel: "Our Office",
            address: "Kingdom of Saudi Arabia, Jubail, Al-Dana District, 26th Street",
            aboutUs: "About us",
            features: "Features",
            pricing: "Pricing",
            faqs: "FAQs",
            blogs: "Blogs",
            contact: "Contact",
            terms: "Terms and condition",
            copyright: "© 2026 TuwaiqPay. All rights reserved",
            appStoreSub: "Download on the",
            appStoreTitle: "App Store",
            googlePlaySub: "GET IT ON",
            googlePlayTitle: "Google Play",
        },
        AR: {
            reachUs: "تواصل معنا",
            followUs: "تابعنا",
            whatsApp: "واتساب",
            callCenter: "مركز الاتصال",
            email: "البريد الإلكتروني",
            locationLabel: "مقرنا",
            address: "المملكة العربية السعودية، الجبيل، حي الدانة، شارع 26",
            aboutUs: "من نحن",
            features: "المميزات",
            pricing: "الأسعار",
            faqs: "الأسئلة الشائعة",
            blogs: "المدونة",
            contact: "اتصل بنا",
            terms: "الشروط والأحكام",
            copyright: "© 2026 طويق باي. جميع الحقوق محفوظة",
            appStoreSub: "حمّل من",
            appStoreTitle: "App Store",
            googlePlaySub: "احصل عليه من",
            googlePlayTitle: "Google Play",
        }
    };

    const t = content[currentLang] || content.EN;

    const navLinks = [
        { key: 'aboutUs', href: '/#about-us' },
        { key: 'features', href: '/features' },
        { key: 'pricing', href: '/#pricing' },
        { key: 'faqs', href: '/faqs' },
        { key: 'blogs', href: '/blogs' },
        { key: 'contact', href: '/#contact' },
        { key: 'terms', href: '/terms' },
    ];

    const handleNavigation = (e, href) => {
        e.preventDefault();
        
        // Append current language to internal URLs
        let targetHref = href;
        if (!href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
            const [pathAndQuery, hash] = href.split('#');
            const targetPath = pathAndQuery === '/' ? '/' : pathAndQuery;
            
            const params = new URLSearchParams(searchParams.toString());
            params.set('lang', currentLang);
            
            targetHref = `${targetPath}?${params.toString()}${hash ? '#' + hash : ''}`;
        }

        // Handle external links
        if (href.startsWith('http')) {
            window.open(href, '_blank');
            return;
        }

        // Handle hash links for smooth scrolling
        if (href.includes('/#')) {
            const targetId = href.split('/#')[1] || href.split('#')[1];
            
            // If we are on the home page
            if (pathname === '/') {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }
        }

        // Default navigation for other cases or different pages
        router.push(targetHref);
    };

    return (
        <footer className={`w-full bg-black text-white overflow-hidden relative ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center xl:text-left">
                {/* Reach Us & Follow Us Container */}
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-10 mb-16 md:mb-24 text-left rtl:text-right">
                    
                    {/* Reach Us Box */}
                    <div className="w-full md:flex-[2] bg-[#111827] border border-gray-800 rounded-[32px] p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 text-left rtl:text-right">{t.reachUs}</h3>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 lg:gap-8 text-left rtl:text-right">
                            {/* WhatsApp */}
                            <a href="https://api.whatsapp.com/message/UY24PCKYYXXBN1?autoload=1&app_absent=0" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-[#1F2937] flex items-center justify-center transition-all group-hover:bg-[#2a3a4a]">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <div className="text-left rtl:text-right">
                                    <div className="text-gray-400 text-xs mb-0.5">{t.whatsApp}</div>
                                    <div className="text-white font-bold text-sm sm:text-base">0509684000</div>
                                </div>
                            </a>

                            {/* Call Center */}
                            <a href="tel:0115026715" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-[#1F2937] flex items-center justify-center transition-all group-hover:bg-[#2a3a4a]">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="text-left rtl:text-right">
                                    <div className="text-gray-400 text-xs mb-0.5">Phone</div>
                                    <div className="text-white font-bold text-sm sm:text-base">0115026715</div>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:info@tuwaiqpay.com.sa" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-[#1F2937] flex items-center justify-center transition-all group-hover:bg-[#2a3a4a]">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="overflow-hidden text-left rtl:text-right">
                                    <div className="text-gray-400 text-xs mb-0.5">{t.email}</div>
                                    <div className="text-white font-bold text-sm sm:text-base truncate">info@tuwaiqpay.com.sa</div>
                                </div>
                            </a>
                        </div>

                        {/* Address Row - Separate for better readability */}
                        <div className="mt-10 pt-8 border-t border-gray-800/50 flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-[#1F2937] flex-shrink-0 flex items-center justify-center transition-all group-hover:bg-[#2a3a4a]">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div className="text-left rtl:text-right">
                                <div className="text-gray-400 text-xs mb-0.5">{t.locationLabel}</div>
                                <div className="text-white font-bold text-sm md:text-base leading-relaxed">{t.address}</div>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us Section */}
                    <div className="flex flex-col items-start md:items-start justify-center space-y-6 md:flex-1">
                        <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#22C55E] to-[#3B82F6] bg-clip-text text-transparent">
                            {t.followUs}
                        </h3>
                        <div className="flex items-center justify-start gap-6 md:gap-4 flex-wrap">
                            {[
                                { id: 'linkedin', href: 'https://www.linkedin.com/company/tuwaiq-pay/' },
                                { id: 'x', href: 'https://x.com/tuwaiqpay?s=21' },
                                { id: 'instagram', href: 'https://www.instagram.com/tuwaiqpay?igsh=ejRvd3VqZGl3cG84&utm_source=qr' },
                                { id: 'tiktok', href: 'https://www.tiktok.com/@tuwaiqpay?_t=ZS-8tQ35aA8kuW&_r=1' },
                                { id: 'facebook', href: 'https://www.facebook.com/mhammad.almal' }
                            ].map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111827] flex items-center justify-center border border-gray-800 hover:bg-[#1F2937] transition-all"
                                >
                                    {social.id === 'linkedin' && (
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    )}
                                    {social.id === 'x' && (
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    )}
                                    {social.id === 'instagram' && (
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                    )}
                                    {social.id === 'tiktok' && (
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                                        </svg>
                                    )}
                                    {social.id === 'facebook' && (
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section Row */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mb-10 text-center">
                    {/* Logo - First on Mobile, Left on Desktop */}
                    <div className="flex items-center gap-3 order-1 xl:justify-start">
                        <img src="/Logo.png" alt="TawaqPay" className="h-10 w-auto brightness-0 invert" />
                        <span className="text-2xl font-extrabold tracking-tight">TuwaiqPay</span>
                    </div>

                    {/* App Buttons - Second on Mobile, Right on Desktop */}
                    <div className="flex items-center justify-center gap-3 md:gap-4 w-full md:w-auto order-2 xl:order-3">
                        <a href="https://apps.apple.com/eg/app/tuwaiq-pay/id6745802564" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-b from-[#1F2937] to-[#111827] border border-gray-800 px-4 md:px-7 py-2.5 md:py-3 rounded-full hover:border-gray-700 transition-all">
                            <img src="/AppStore.png" alt="App Store" className="h-5 w-5 md:h-7 md:w-7 object-contain brightness-0 invert" />
                            <div className="flex flex-col items-start leading-none text-left">
                                <span className="text-[8px] md:text-[10px] text-gray-500 mb-0.5 md:mb-1">{t.appStoreSub}</span>
                                <span className="text-sm md:text-base font-bold tracking-tight">App Store</span>
                            </div>
                        </a>
                        
                        <a href="https://play.google.com/store/apps/details?id=com.tuwaiq.tuwaiq_pay&pli=1" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-b from-[#1F2937] to-[#111827] border border-gray-800 px-4 md:px-7 py-2.5 md:py-3 rounded-full hover:border-gray-700 transition-all">
                            <img src="/GooglePlay.png" alt="Google Play" className="h-5 w-5 md:h-7 md:w-7 object-contain" />
                            <div className="flex flex-col items-start leading-none text-left">
                                <span className="text-[8px] md:text-[10px] text-gray-500 mb-0.5 md:mb-1 uppercase tracking-wider">{t.googlePlaySub}</span>
                                <span className="text-sm md:text-base font-bold tracking-tight">Google Play</span>
                            </div>
                        </a>
                    </div>

                    {/* Navigation - Third on Mobile, Middle on Desktop */}
                    <div className="flex flex-col xl:flex-row items-center gap-x-12 gap-y-4 order-3 xl:order-2">
                        {/* Mobile Two Rows */}
                        <div className="flex xl:hidden flex-col space-y-4 w-full">
                                <nav className="flex items-center justify-center gap-x-6 flex-wrap">
                                    {['aboutUs', 'features', 'pricing', 'faqs'].map((key) => {
                                        const link = navLinks.find(l => l.key === key);
                                        return (
                                            <button 
                                                key={key} 
                                                onClick={(e) => handleNavigation(e, link?.href || '#')}
                                                className="bg-transparent border-0 p-0 text-gray-300 hover:text-white transition-colors text-[13px] font-medium cursor-pointer"
                                            >
                                                {t[key]}
                                            </button>
                                        );
                                    })}
                                </nav>
                                <nav className="flex items-center justify-center gap-x-6 flex-wrap">
                                    {['blogs', 'contact', 'terms'].map((key) => {
                                        const link = navLinks.find(l => l.key === key);
                                        return (
                                            <button 
                                                key={key} 
                                                onClick={(e) => handleNavigation(e, link?.href || '#')}
                                                className="bg-transparent border-0 p-0 text-gray-300 hover:text-white transition-colors text-[13px] font-medium cursor-pointer"
                                            >
                                                {t[key]}
                                            </button>
                                        );
                                    })}
                                </nav>
                        </div>
                        {/* Desktop Single Row */}
                        <nav className="hidden xl:flex items-center gap-x-8">
                            {navLinks.map((link) => (
                                <button 
                                    key={link.key} 
                                    onClick={(e) => handleNavigation(e, link.href)}
                                    className="bg-transparent border-0 p-0 text-white hover:text-gray-300 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
                                >
                                    {t[link.key]}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="w-full border-t border-white/20 mb-8" />

                {/* Copyright Section */}
                <div className="text-center pb-4">
                    <p className="text-gray-500 text-sm">
                        {t.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
