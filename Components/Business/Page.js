"use client";

function Business({ currentLang }) {
    const isAr = currentLang === 'AR';

    const content = {
        EN: {
            header: "Flexible Plans for Every Business Size",
            subHeader: "Choose the plan that fits your needs — no setup fees, no hidden charges.",
            cards: [
                {
                    id: 1,
                    title: "Quick Online Setup",
                    desc: "Register and activate your account fully online — no paperwork, no delays.",
                    img: "/Plane2.png",
                    bg: "bg-[#DEE7FF]",
                    span: "md:col-span-12 lg:col-span-5"
                },
                {
                    id: 2,
                    title: "Transparent, Fair Pricing",
                    desc: "Clear fees, no hidden costs. You always know what you're paying for.",
                    img: "/Plane1.png",
                    bg: "bg-[#FEFCE8]",
                    span: "md:col-span-12 lg:col-span-7"
                },
                {
                    id: 3,
                    title: "Get Paid with a Tap",
                    desc: "Create a link or QR code and let customers pay instantly using their preferred method.",
                    img: "/Plane3.png",
                    bg: "bg-[#DCFCE7]",
                    span: "md:col-span-12 lg:col-span-7"
                },
                {
                    id: 4,
                    title: "Fast Bank Payouts",
                    desc: "We Transfer your settled transactions to your bank account quickly with no delays.",
                    img: null,
                    bg: "bg-[#F3E8FF]",
                    span: "md:col-span-4"
                },
                {
                    id: 5,
                    title: "Grow your business with Sub-Accounts Feature",
                    desc: "We Transfer your settled transactions to your bank account quickly with no delays.",
                    img: "/Plane4.png",
                    bg: "bg-[#BFDBFE]",
                    span: "md:col-span-4"
                },
                {
                    id: 6,
                    title: "Support That Responds",
                    desc: "Get in-app support to raise requests or complaints, get your enquiries answered, and track requests—all from within the app.",
                    img: null,
                    bg: "bg-[#E0F2FE]",
                    span: "md:col-span-4"
                }
            ],
            mockups: {
                balanceLabel: "Available balance",
                transferLabel: "Transfer Amount",
                scheduledLabel: "Scheduled On",
                scheduledDate: "15 March 2027",
                managerLabel: "Store Manager",
                activeLabel: "Active",
                paymentLinkLabel: "Payment Link",
                tapToPayLabel: "Tap to Pay",
                ecommerceLabel: "E-Commerce",
                requestType: "Request Type : Complaint",
                requestCategory: "Request category : Login issue",
                supportGreeting: "Hello, Faisal",
                supportMessage: "Your request has been submitted successfully. This is an automated message.",
                supportTime: "02/09/2024 - 12:32 PM"
            }
        },
        AR: {
            header: "حلول متكاملة لإدارة أعمالك",
            subHeader: "اختر الخطة التي تناسب احتياجاتك - لا توجد رسوم تأسيس ولا تكاليف خفية.",
            cards: [
                {
                    id: 1,
                    title: "إعداد حساب سريع عبر الإنترنت",
                    desc: "سجل وفعل حسابك بالكامل عبر الإنترنت - بدون معاملات ورقية أو تأخير.",
                    img: "/SecintArbic1.png",
                    bg: "bg-[#DEE7FF]",
                    span: "md:col-span-12 lg:col-span-5"
                },
                {
                    id: 2,
                    title: "تسعير عادل وشفاف",
                    desc: "رسوم واضحة، لا توجد تكاليف خفية. ستعرف دائماً ما تدفعه.",
                    img: "/Plane1.png",
                    bg: "bg-[#FEFCE8]",
                    span: "md:col-span-12 lg:col-span-7"
                },
                {
                    id: 3,
                    title: "احصل على مدفوعاتك بلمسة واحدة",
                    desc: "أنشئ رابطاً أو رمز QR واترك عملاءك يدفعون فوراً باستخدام وسيلة الدفع المفضلة لديهم.",
                    img: "/Plane3.png",
                    bg: "bg-[#DCFCE7]",
                    span: "md:col-span-12 lg:col-span-7"
                },
                {
                    id: 4,
                    title: "دفعات بنكية سريعة",
                    desc: "نقوم بتحويل معاملاتك المستحقة إلى حسابك البنكي بسرعة وبدون تأخير.",
                    img: null,
                    bg: "bg-[#F3E8FF]",
                    span: "md:col-span-4"
                },
                {
                    id: 5,
                    title: "نمِّ أعمالك مع ميزة الحسابات الفرعية",
                    desc: "أدر فروعك وموظفيك بسهولة ووزع الصلاحيات بكفاءة عالية.",
                    img: "/Plane4.png",
                    bg: "bg-[#BFDBFE]",
                    span: "md:col-span-4"
                },
                {
                    id: 6,
                    title: "دعم فني يستجيب",
                    desc: "احصل على دعم فني داخل التطبيق لتقديم الطلبات أو الشكاوى، والحصول على إجابات لاستفساراتك، ومتابعة الطلبات.",
                    img: null,
                    bg: "bg-[#E0F2FE]",
                    span: "md:col-span-4"
                }
            ],
            mockups: {
                balanceLabel: "الرصيد المتاح",
                transferLabel: "مبلغ التحويل",
                scheduledLabel: "تاريخ الجدولة",
                scheduledDate: "15 مارس 2027",
                managerLabel: "مدير المتجر",
                activeLabel: "نشط",
                paymentLinkLabel: "رابط دفع",
                tapToPayLabel: "نقاط البيع",
                ecommerceLabel: "المتاجر الإلكترونية",
                requestType: "نوع الطلب : شكوى",
                requestCategory: "فئة الطلب : مشكلة في تسجيل الدخول",
                supportGreeting: "أهلاً، فيصل",
                supportMessage: "تم تقديم طلبك بنجاح. هذه رسالة تلقائية.",
                supportTime: "02/09/2024 - 12:32 مساءً"
            }
        }
    };

    const t = content[currentLang] || content.EN;

    return (
        <section className={`w-full py-[80px] bg-white ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                        {t.header}
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
                        {t.subHeader}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-3 md:gap-6 md:auto-rows-fr">
                    
                    {/* Card 1: Quick Online Setup (iPhone Plane2) */}
                    <div className={`${t.cards[0].span} rounded-[24px] pt-[20px] pb-[36px] px-[33px] overflow-hidden flex flex-col relative h-[352px] md:h-[390px] lg:h-full border border-[#D9D9D9] bg-gradient-to-b from-[#FFFFFF] to-[#E6FAFF]`}>
                        <div className={`z-10 relative space-y-4 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
                            <h3 className="text-2xl lg:text-2xl font-bold text-gray-900 leading-tight transition-transform duration-300 hover:translate-x-1">{t.cards[0].title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[320px] mx-auto lg:mx-0 text-[15px]">{t.cards[0].desc}</p>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] sm:w-[42%] lg:w-[55%] -mb-4">
                            <img 
                                src={t.cards[0].img} 
                                alt={t.cards[0].title} 
                                className="w-full h-auto drop-shadow-2xl" 
                                style={{
                                    clipPath: isAr ? 'inset(1px 1px 0 1px)' : 'none',
                                    transform: isAr ? 'scale(1.01)' : 'none',
                                    transformOrigin: 'bottom'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Card 2 & Card 3 */}
                    <div className="md:col-span-12 lg:col-span-7 flex flex-col gap-2 lg:gap-6 lg:justify-between">
                        {/* Card 2: Fair Pricing (Coins Plane1) */}
                        <div className={`bg-gradient-to-b from-[#FFFFFF] to-[#E6FAFF] rounded-[20px] md:rounded-[24px] p-6 lg:p-6 border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center md:justify-between relative h-[352px] md:h-[160px] mb-[-1px]`}>
                            <div className="z-10 relative flex flex-col gap-[11px] w-full md:w-[60%] lg:w-1/2">
                                <h3 className="text-[16px] lg:text-2xl font-bold text-gray-900">{t.cards[1].title}</h3>
                                <p className="text-gray-500 leading-relaxed text-[13px] md:text-[14px] max-w-[240px]">{t.cards[1].desc}</p>
                            </div>
                            <div className={`relative md:absolute mt-4 mb-8 md:mb-0 md:mt-0 md:top-0 ${isAr ? 'md:left-0' : 'md:right-0'} w-48 md:w-36 lg:w-48 rotate-[-5deg] pointer-events-none opacity-80 md:opacity-100`}>
                                <img src={t.cards[1].img} alt={t.cards[1].title} className="w-full h-auto" />
                            </div>
                        </div>

                        {/* Card 3: Paid with a Tap (QR Plane3) */}
                        <div className={`mt-0 bg-gradient-to-b from-[#FFFFFF] to-[#E6FAFF] rounded-[20px] md:rounded-[24px] p-6 lg:p-6 border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center md:justify-between relative h-[352px] md:h-[160px]`}>
                            <div className="z-10 relative flex flex-col gap-[11px] w-full md:w-[60%] lg:w-1/2">
                                <h3 className="text-[16px] lg:text-2xl font-bold text-gray-900 leading-tight">{t.cards[2].title}</h3>
                                <p className="text-gray-500 leading-relaxed text-[13px] md:text-[14px] max-w-[240px]">{t.cards[2].desc}</p>
                            </div>
                            <div className={`relative md:absolute mt-4 md:mt-0 md:top-1/2 md:-translate-y-1/2 ${isAr ? 'md:left-0' : 'md:right-0'} w-40 md:w-28 lg:w-32 z-0 transform transition-transform duration-500 hover:scale-110`}>
                                <img src={t.cards[2].img} alt={t.cards[2].title} className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Bottom row */}

                    {/* Card 4: Bank Payouts (Balance UI) */}
                    <div className={`${t.cards[3].span} rounded-[24px] pt-[20px] px-6 overflow-hidden flex flex-col relative h-[352px] md:h-[280px] border border-[#D3D5D8] bg-gradient-to-b from-[#FFFFFF] to-[#E6FAFF]`}>
                        <div className="z-10 relative space-y-2 mb-4">
                            <h3 className="text-lg font-bold text-gray-900">{t.cards[3].title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{t.cards[3].desc}</p>
                        </div>
                        
                        {/* Balance Card UI */}
                        <div className="mt-auto bg-white rounded-2xl p-4 shadow-lg border border-gray-100/50 flex flex-col gap-3 transform -translate-y-4">
                             <div className="space-y-1">
                                <span className="text-[10px] text-gray-400 font-medium lowercase tracking-tight">{t.mockups.balanceLabel}</span>
                                <div className={`flex items-center gap-2 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                                    <span className="text-2xl font-black text-gray-900">120,500</span>
                                    <span className="text-2xl font-black text-gray-900">{isAr ? 'ريال' : 'SAR'}</span>
                                </div>
                             </div>
                             <div className="h-[1px] bg-gray-100 w-full border-dashed border-t"></div>
                             <div className="flex justify-between items-end">
                                <div className="space-y-0.5">
                                    <span className="text-[9px] text-gray-400 block">{t.mockups.transferLabel}</span>
                                    <span className="text-xs font-bold text-gray-900">{isAr ? '110,000.00 ريال' : 'SAR 110,000.00'}</span>
                                </div>
                                <div className="space-y-0.5 text-right">
                                    <span className="text-[9px] text-gray-400 block">{t.mockups.scheduledLabel}</span>
                                    <span className="text-xs font-bold text-gray-900">{t.mockups.scheduledDate}</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Card 5: Sub-Accounts (Outline Plane4 + List) */}
                    <div className={`${t.cards[4].span} rounded-[24px] pt-[20px] px-6 overflow-hidden flex flex-col relative h-[352px] md:h-[280px] border border-[#D3D5D8] bg-gradient-to-b from-[#FFFFFF] to-[#E6FAFF]`}>
                        <div className="z-10 relative space-y-2 mb-4">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">{t.cards[4].title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed leading-[1.6]">{t.cards[4].desc}</p>
                        </div>
                        
                        <div className="relative mt-auto h-[160px] transform -translate-y-6">
                            {/* iPhone Outline background */}
                            <img src={t.cards[4].img} alt="Phone Outline" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto opacity-30 mix-blend-multiply" />
                            
                            {/* Nested UI List */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex flex-col gap-2">
                                <div className={`flex items-center justify-between border-b border-gray-50 pb-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                                    <div className={`flex flex-col ${isAr ? 'items-end' : ''}`}>
                                        <span className="font-bold text-[11px] text-gray-900">{t.mockups.managerLabel}</span>
                                        <div className={`flex items-center gap-1 ${isAr ? 'flex-row-reverse' : ''}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[8px] w-[8px] text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 1a1 1 0 100 2 1 1 0 000-2zM8 4a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-[9px] text-gray-400">596 - 21232 - 123112</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[8px] text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full font-bold">{t.mockups.activeLabel}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-2.5 w-2.5 text-gray-300 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex justify-between items-center px-1 ${isAr ? 'flex-row-reverse' : ''}`}>
                                    <div className={`flex items-center gap-1 grayscale opacity-70 scale-90 ${isAr ? 'flex-row-reverse origin-right' : 'origin-left'}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        <span className="text-[8px] font-bold text-gray-600">{t.mockups.paymentLinkLabel}</span>
                                    </div>
                                    <div className={`flex items-center gap-1 scale-90 ${isAr ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span className="text-[8px] font-bold text-gray-600">{t.mockups.tapToPayLabel}</span>
                                    </div>
                                    <div className={`flex items-center gap-1 scale-90 ${isAr ? 'flex-row-reverse origin-left' : 'origin-right'}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        <span className="text-[8px] font-bold text-gray-600">{t.mockups.ecommerceLabel}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Stacked cards below */}
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[85%] bg-white/60 h-10 rounded-xl -z-10 shadow-sm border border-white/50"></div>
                            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80%] bg-white/40 h-10 rounded-xl -z-20 shadow-sm border border-white/30"></div>
                        </div>
                    </div>

                    {/* Card 6: Support (Chat UI) */}
                    <div className={`${t.cards[5].span} rounded-[24px] pt-[20px] px-6 overflow-hidden flex flex-col relative h-[352px] md:h-[280px] border border-[#D3D5D8] bg-gradient-to-b from-[#FFFFFF] to-[#E6FAFF]`}>
                        <div className="z-10 relative space-y-2 mb-4">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">{t.cards[5].title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{t.cards[5].desc}</p>
                        </div>
                        
                        {/* Chat UI */}
                        <div className="mt-auto flex flex-col gap-2 -mb-2 relative transform -translate-y-8">
                            {/* Blurred Background Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-gray-100 flex flex-col gap-1.5 opacity-40 scale-95 origin-bottom translate-y-2">
                                <div className={`flex justify-between items-center text-[9px] text-gray-400 ${isAr ? 'flex-row-reverse' : ''}`}>
                                    <span className="font-medium">{t.mockups.requestType}</span>
                                </div>
                                <div className={`flex justify-between items-center text-[9px] text-gray-400 border-t border-gray-50 pt-1.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                                    <span className="font-medium">{t.mockups.requestCategory}</span>
                                </div>
                            </div>
                            
                            {/* Main Chat Bubble */}
                            <div className={`relative flex items-start gap-3 pb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
                                {/* Double Arrow Icon */}
                                <div className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-50 flex items-center justify-center flex-shrink-0 z-20 translate-y-1">
                                    <div className="flex -space-x-1">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={isAr ? 'rotate-180' : ''}>
                                            <polyline points="13 17 18 12 13 7"></polyline>
                                            <polyline points="6 17 11 12 6 7"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                
                                <div className={`bg-white rounded-[18px] ${isAr ? 'rounded-tr-none' : 'rounded-tl-none'} p-4 shadow-xl border border-gray-50 flex-grow z-10 ${isAr ? 'text-right' : 'text-left'}`}>
                                    <div className="space-y-1">
                                        <p className="text-[13px] font-bold text-gray-900">{t.mockups.supportGreeting}</p>
                                        <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                                            {t.mockups.supportMessage}
                                        </p>
                                        <span className="text-[8px] text-gray-400 block pt-0.5 font-medium italic">{t.mockups.supportTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Business;
