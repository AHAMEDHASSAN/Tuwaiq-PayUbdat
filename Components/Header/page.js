"use client";
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Header({ currentLang, onLanguageSwitch }) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    
    // Sync language from URL on mount
    useEffect(() => {
        const langCode = searchParams.get('lang');
        if (langCode && (langCode === 'EN' || langCode === 'AR') && langCode !== currentLang) {
            onLanguageSwitch(langCode);
        }
    }, [searchParams, onLanguageSwitch, currentLang]);

    // Translations + routes (same order for EN & AR)
    const menuItems = {
        EN: [
            { name: 'Home', href: '/' },
            { name: 'About us', href: '/#about-us' },
            { name: 'Features', href: '/features' },
            { name: 'FAQs', href: '/#faqs' },
            { name: 'Blogs', href: '/blogs' },
            { name: 'Pricing', href: '/#pricing' },
            { name: 'Contact', href: '/#contact' }
        ],
        AR: [
            { name: 'الرئيسية', href: '/' },
            { name: 'من نحن', href: '/#about-us' },
            { name: 'المميزات', href: '/features' },
            { name: 'الأسئلة الشائعة', href: '/#faqs' },
            { name: 'المدونة', href: '/blogs' },
            { name: 'الأسعار', href: '/#pricing' },
            { name: 'اتصل بنا', href: '/#contact' }
        ]
    };

    const languages = [
        { 
            code: 'EN', 
            name: 'English', 
            flag: (
                <svg className="w-5 h-5 rounded-full object-cover" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="32" height="32" rx="16" ry="16" fill="#bf0a30"/>
                    <path fill="#ffffff" d="M0 4h32v2H0zM0 8h32v2H0zM0 12h32v2H0zM0 16h32v2H0zM0 20h32v2H0zM0 24h32v2H0zM0 28h32v2H0z"/>
                    <rect x="0" y="0" width="16" height="18" fill="#002868"/>
                    <text x="1" y="11" fill="white" fontSize="8" fontFamily="sans-serif">*</text> 
                </svg>
            )
        },
        { 
            code: 'AR', 
            name: 'العربية', 
            flag: (
                <svg className="w-5 h-5 rounded-full object-cover" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="32" height="32" rx="16" ry="16" fill="#138535"/>
                    <path fill="#ffffff" d="M8 14h16v3H8z" opacity="0.3"/> 
                    <path fill="#ffffff" d="M8 18h16v1H8z"/>
                </svg>
            )
        }
    ];

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

    const switchLanguage = (langCode) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', langCode);
        router.push(`${pathname}?${params.toString()}`);
        onLanguageSwitch(langCode);
        setIsLangMenuOpen(false);
    };

    const items = menuItems[currentLang];
    const activeIndex = items.findIndex((item) => item.href !== '#' && pathname === item.href);
    const resolvedActiveIndex = activeIndex >= 0 ? activeIndex : 0;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleNavigation = (e, href) => {
        e.preventDefault();
        
        // Append current language to internal URLs
        let targetHref = href;
        if (!href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
            const separator = href.includes('?') ? '&' : '?';
            targetHref = `${href}${separator}lang=${currentLang}`;
        }

        // Handle external links
        if (href.startsWith('http')) {
            window.open(href, '_blank');
            setIsMobileMenuOpen(false);
            return;
        }

        // Handle hash links for smooth scrolling
        if (href.includes('/#')) {
            const targetId = href.split('/#')[1];
            
            // If we are on the home page
            if (pathname === '/') {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                    return;
                }
            }
        }

        // Default navigation for other cases or different pages
        router.push(targetHref);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo Section */}
                    <button
                        type="button"
                        onClick={() => router.push('/')}
                        className="flex-shrink-0 flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
                    >
                        <img className="h-8 w-auto" src="/Logo.png" alt="TuwaiqPay Logo" />
                        <span className="text-2xl font-bold text-blue-600 tracking-tight">TuwaiqPay</span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8 rtl:space-x-reverse ml-10 rtl:ml-0 rtl:mr-10">
                        {menuItems[currentLang].map((item, index) => (
                            item.href === '#' ? (
                                <Link
                                    key={item.name}
                                    href="#"
                                    className={`${index === resolvedActiveIndex ? 'text-blue-600 font-bold' : 'text-gray-500 font-medium'} hover:text-blue-600 transition-colors duration-200 text-[15px] cursor-pointer`}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={(e) => handleNavigation(e, item.href)}
                                    className={`bg-transparent border-0 p-0 font-inherit ${index === resolvedActiveIndex ? 'text-blue-600 font-bold' : 'text-gray-500 font-medium'} hover:text-blue-600 transition-colors duration-200 text-[15px] cursor-pointer`}
                                >
                                    {item.name}
                                </button>
                            )
                        ))}
                    </nav>

                    {/* Desktop Actions Section */}
                    <div className="hidden lg:flex items-center gap-4 ml-auto rtl:ml-0 rtl:mr-auto">
                        
                        {/* Language Selector Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={toggleLangMenu}
                                className="flex items-center gap-1.5 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 rounded-md hover:bg-gray-50"
                            >
                                {languages.find(l => l.code === currentLang)?.flag}
                                <span className="font-medium text-sm">{currentLang}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3 h-3 text-gray-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isLangMenuOpen && (
                                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1 focus:outline-none z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => switchLanguage(lang.code)}
                                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 text-left rtl:text-right"
                                        >
                                            {lang.flag}
                                            <span className="font-medium">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Get App Button */}
                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                            {currentLang === 'EN' ? 'Get App' : 'حمل التطبيق'}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden ml-auto rtl:ml-0 rtl:mr-auto">
                        <button
                            onClick={toggleMobileMenu}
                            className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open menu</span>
                            {/* Hamburger Icon */}
                            {!isMobileMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                /* Close Icon */
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50 h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="px-4 py-2 space-y-1">
                        {menuItems[currentLang].map((item, index) => (
                            item.href === '#' ? (
                                <Link
                                    key={item.name}
                                    href="#"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-4 text-center text-base border-b border-gray-100 transition-colors hover:bg-gray-50 hover:text-blue-600 cursor-pointer ${index === resolvedActiveIndex ? 'text-blue-600 font-bold' : 'text-gray-700 font-semibold'}`}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={(e) => handleNavigation(e, item.href)}
                                    className={`block w-full px-3 py-4 text-center text-base border-b border-gray-100 transition-colors hover:bg-gray-50 hover:text-blue-600 cursor-pointer bg-transparent border-x-0 border-t-0 font-inherit ${index === resolvedActiveIndex ? 'text-blue-600 font-bold' : 'text-gray-700 font-semibold'}`}
                                >
                                    {item.name}
                                </button>
                            )
                        ))}
                    </div>
                    <div className="py-6 space-y-4">
                        <div className="flex justify-center">
                             {/* Mobile Language Switcher */}
                             <button 
                                onClick={() => switchLanguage(currentLang === 'EN' ? 'AR' : 'EN')}
                                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-blue-600 transition-all"
                            >
                                {languages.find(l => l.code === (currentLang === 'EN' ? 'AR' : 'EN'))?.flag}
                                <span>{currentLang === 'EN' ? 'العربية' : 'English'}</span>
                            </button>
                        </div>
                        <div className="px-5">
                            <button className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg text-base">
                                {currentLang === 'EN' ? 'Get App' : 'حمل التطبيق'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
