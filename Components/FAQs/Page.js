"use client";
import { useState } from 'react';

const FAQs = ({ currentLang }) => {
    const isAr = currentLang === 'AR';
    const [activeCategory, setActiveCategory] = useState('general');
    const [openIndex, setOpenIndex] = useState(0);

    const content = {
        EN: {
            title: "Frequently Asked Questions",
            categories: [
                { id: 'general', label: 'General' },
                { id: 'registration', label: 'Account Registration' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'transaction', label: 'Transaction' },
                { id: 'support', label: 'Support' }
            ],
            questions: {
                general: [
                    {
                        q: "Is Tuwaiq Pay secure?",
                        a: "Go to the Home screen and tap \"Generate Bill\". Enter customer details and amount, then share the link."
                    },
                    {
                        q: "Can I use Tuwaiq Pay for receiving payments from outside KSA?",
                        a: "Yes, Tuwaiq Pay supports international payments from various global card networks."
                    },
                    {
                        q: "Is there a mobile app for Tuwaiq Pay?",
                        a: "Yes, we have a mobile app available on both iOS App Store and Google Play Store."
                    },
                    {
                        q: "How can I update my payment method or bank account information?",
                        a: "You can update your business and bank details through the profile settings in the app or dashboard."
                    }
                ],
                registration: [
                    {
                        q: "How do I register a new account?",
                        a: "You can register fully online through our app or website by providing your commercial registration and basic business details."
                    },
                    {
                        q: "How long does activation take?",
                        a: "Account activation usually takes between 24 to 48 hours after submitting all required documents."
                    }
                ],
                pricing: [
                    {
                        q: "Are there any setup fees?",
                        a: "No, Tuwaiq Pay has zero setup fees. You only pay per transaction."
                    },
                    {
                        q: "What are the transaction fees?",
                        a: "Fees start from 1% + 1 SAR for Mada and 2.5% + 1 SAR for Visa/Mastercard. Check our pricing section for full details."
                    }
                ],
                transaction: [
                    {
                        q: "When do I receive my payouts?",
                        a: "Payouts are processed daily and transferred to your bank account within T+1 or T+2 business days."
                    },
                    {
                        q: "Can I issue refunds?",
                        a: "Yes, you can easily issue full or partial refunds directly from the Tuwaiq Pay dashboard."
                    }
                ],
                support: [
                    {
                        q: "How can I contact support?",
                        a: "You can reach our support team via in-app chat, WhatsApp, or email at info@tuwaiqpay.com.sa."
                    },
                    {
                        q: "What are the support hours?",
                        a: "Our technical support team is available 24/7 to assist you with any issues."
                    }
                ]
            }
        },
        AR: {
            title: "الأسئلة الشائعة",
            categories: [
                { id: 'general', label: 'عام' },
                { id: 'registration', label: 'تسجيل الحساب' },
                { id: 'pricing', label: 'الأسعار' },
                { id: 'transaction', label: 'العمليات' },
                { id: 'support', label: 'الدعم' }
            ],
            questions: {
                general: [
                    {
                        q: "هل طويق باي آمن؟",
                        a: "اذهب إلى الشاشة الرئيسية واضغط على \"إنشاء فاتورة\". أدخل تفاصيل العميل والمبلغ، ثم شارك الرابط."
                    },
                    {
                        q: "هل يمكنني استخدام طويق باي لاستلام المدفوعات من خارج المملكة؟",
                        a: "نعم، يدعم طويق باي المدفوعات الدولية من مختلف شبكات البطاقات العالمية."
                    },
                    {
                        q: "هل يوجد تطبيق جوال لطويق باي؟",
                        a: "نعم، لدينا تطبيق متوفر على متجري App Store و Google Play."
                    },
                    {
                        q: "كيف يمكنني تحديث طريقة الدفع أو معلومات الحساب البنكي؟",
                        a: "يمكنك تحديث بيانات عملك والبنك من خلال إعدادات الملف الشخصي في التطبيق أو لوحة التحكم."
                    }
                ],
                registration: [
                    {
                        q: "كيف يمكنني تسجيل حساب جديد؟",
                        a: "يمكنك التسجيل بالكامل عبر الإنترنت من خلال تطبيقنا أو موقعنا الإلكتروني عن طريق تقديم السجل التجاري وتفاصيل عملك الأساسية."
                    },
                    {
                        q: "كم يستغرق تفعيل الحساب؟",
                        a: "يستغرق تفعيل الحساب عادةً ما بين 24 إلى 48 ساعة بعد تقديم جميع المستندات المطلوبة."
                    }
                ],
                pricing: [
                    {
                        q: "هل توجد رسوم تأسيس؟",
                        a: "لا، طويق باي ليس لديه رسوم تأسيس. أنت تدفع فقط مقابل كل عملية."
                    },
                    {
                        q: "ما هي رسوم العمليات؟",
                        a: "تبدأ الرسوم من 1% + 1 ريال لمدى و 2.5% + 1 ريال لفيزا/ماستركارد. راجع قسم الأسعار لمزيد من التفاصيل."
                    }
                ],
                transaction: [
                    {
                        q: "متى استلم مستحقاتي؟",
                        a: "يتم معالجة التسويات يومياً وتحويلها إلى حسابك البنكي خلال يوم أو يومي عمل (T+1 أو T+2)."
                    },
                    {
                        q: "هل يمكنني إجراء عمليات استرداد؟",
                        a: "نعم، يمكنك بسهولة إجراء عمليات استرداد كاملة أو جزئية مباشرة من لوحة تحكم طويق باي."
                    }
                ],
                support: [
                    {
                        q: "كيف يمكنني التواصل مع الدعم الفني؟",
                        a: "يمكنك التواصل مع فريق الدعم لدينا عبر الدردشة داخل التطبيق، أو واتساب، أو عبر البريد الإلكتروني info@tuwaiqpay.com.sa."
                    },
                    {
                        q: "ما هي ساعات الدعم الفني؟",
                        a: "فريق الدعم الفني لدينا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في أي مشكلة."
                    }
                ]
            }
        }
    };

    const t = content[currentLang] || content.EN;

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleCategoryChange = (catId) => {
        setActiveCategory(catId);
        setOpenIndex(0); // Reset accordion to first item when switching category
    };

    return (
        <section className={`w-full py-12 md:py-24 bg-[#F8F9FA] min-h-screen pt-[120px] ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-blue-600 mb-12 text-center md:text-left rtl:md:text-right">
                    {t.title}
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    
                    {/* Sidebar Categories */}
                    <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
                        {t.categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`whitespace-nowrap lg:whitespace-normal px-6 py-2.5 lg:flex-1 rounded-2xl text-sm font-bold transition-all duration-300 border flex items-center justify-center lg:justify-start ${
                                    activeCategory === cat.id 
                                    ? 'bg-[#E6F0FF] text-blue-600 border-blue-200 shadow-md' 
                                    : 'bg-white text-gray-500 border-transparent hover:bg-gray-50 shadow-sm'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area - Accordion */}
                    <div className="w-full lg:flex-1 bg-white rounded-3xl p-5 md:p-7 shadow-sm border border-gray-100 min-h-[300px]">
                        <div className="space-y-3">
                            {t.questions[activeCategory].map((item, index) => (
                                <div 
                                    key={index}
                                    className="border-b border-gray-100 last:border-0 pb-3 last:pb-0"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between py-3 text-left rtl:text-right group"
                                    >
                                        <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                                            {item.q}
                                        </span>
                                        <svg 
                                            className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQs;
