"use client";




function AppFeaturesGrid({ currentLang }) {
  const isAr = currentLang === "AR";

  const features = [
    {
      id: 1,
      icon: "/Sign3.png",
      EN: {
        title: "In-App Support",
        description: "Get assistance whenever you need it through built-in support for inquiries, issues, and technical help.",
      },
      AR: {
        title: "الدعم الفني داخل التطبيق",
        description: "احصل على المساعدة متى احتجت إليها من خلال الدعم المدمج للاستفسارات والمشكلات والمساعدة الفنية.",
      }
    },
    {
      id: 2,
      icon: "/Sign2.png",
      EN: {
        title: "Instant Payment Tracking & Notifications",
        description: "Track payment status in real time and receive instant notifications for all transactions.",
      },
      AR: {
        title: "تتبع فوري للمدفوعات وإشعارات",
        description: "تتبع حالة الدفع في الوقت الفعلي وتلقى إشعارات فورية لجميع العمليات.",
      }
    },
    {
      id: 3,
      icon: "/Sign1.png",
      EN: {
        title: "Bank Account Management",
        description: "Manage one or multiple bank accounts directly from the app and control how and where funds are transferred.",
      },
      AR: {
        title: "إدارة الحسابات البنكية",
        description: "إدارة حساب مصرفي واحد أو أكثر مباشرة من التطبيق والتحكم في كيفية ومكان تحويل الأموال.",
      }
    },
    {
      id: 4,
      icon: "/Sign6.png",
      EN: {
        title: "Transfers Tracking",
        description: "Monitor all fund transfers with full visibility into status, dates, and amounts.",
      },
      AR: {
        title: "تتبع التحويلات",
        description: "مراقبة جميع تحويلات الأموال مع رؤية كاملة للحالة والتواريخ والمبالغ.",
      }
    },
    {
      id: 5,
      icon: "/Sign5.png",
      EN: {
        title: "Fast Settlements",
        description: "Enjoy quick transfers for settled payments, improving cash flow and business liquidity with full settlement status tracking.",
      },
      AR: {
        title: "تسويات سريعة",
        description: "استمتع بتحويلات سريعة للمدفوعات المسواة، مما يحسن التدفق النقدي وسيولة الأعمال مع تتبع كامل لحالة التسوية.",
      }
    },
    {
      id: 6,
      icon: "/Sign4.png",
      EN: {
        title: "Sub-Users & Branch Management",
        description: "Add sub-users and business branches with full control:",
        items: [
          "User and branch creation & ",
          "management",
          "Sales and transaction reports " ,
          "by branch or user"
        ]
      },
      AR: {
        title: "إدارة الفروع والمستخدمين الفرعيين",
        description: "إضافة مستخدمين فرعيين وفروع أعمال مع تحكم كامل:",
        items: [
          "إنشاء وإدارة المستخدمين والفروع",
          "تقارير المبيعات والمعاملات حسب الفرع أو المستخدم"
        ]
      }
    },
    {
      id: 7,
      icon: "/Sign8.png",
      EN: {
        title: "Reports & Analytics",
        description: "Access detailed dashboards and reports covering:",
        items: [
          "Payment status",
          "Payment methods",
          "Transaction volumes",
          "Business performance insights"
        ]
      },
      AR: {
        title: "التقارير والتحليلات",
        description: "الوصول إلى لوحات معلومات وتقارير مفصلة تغطي:",
        items: [
          "حالة الدفع",
          "طرق الدفع",
          "أحجام المعاملات",
          "رؤى أداء الأعمال"
        ]
      }
    },
    {
      id: 8,
      icon: "/Sign7.png",
      EN: {
        title: "Statements",
        description: "Add sub-users and business branches with full control:",
        items: [
          "Download comprehensive statements for:",
          "Transactions",
          "Transfers",
          "Settlement history",
          "Ideal for accounting, reconciliation, and audits.",
          "and branch creation & management",
          "Sales and transaction reports by branch or user"
        ]
      },
      AR: {
        title: "كشوفات الحساب",
        description: "إضافة مستخدمين فرعيين وفروع أعمال مع تحكم كامل:",
        items: [
          "تحميل كشوفات حساب شاملة لـ:",
          "المعاملات",
          "التحويلات",
          "سجل التسوية",
          "مثالي للمحاسبة والتسوية والمراجعة.",
          "وإنشاء وإدارة الفروع",
          "تقارير المبيعات والمعاملات حسب الفرع أو المستخدم"
        ]
      }
    }
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          dir={isAr ? 'rtl' : 'ltr'}
        >
          {features.map((feature, idx) => {
            const t = feature[currentLang] || feature.EN;
            const isLastTwo = idx >= 6;
            
            return (
              <div 
                key={feature.id}
                className={`relative pt-3 md:pt-5 px-8 pb-8 rounded-[32px] overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl ${isLastTwo && idx === 7 ? 'lg:col-span-2' : ''} ${idx >= 6 ? 'min-h-[480px] md:min-h-[280px]' : 'min-h-[280px]'}`}
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #E6FAFF 100%)',
                  border: '1px solid #F0F9FF'
                }}
              >
                <div className="z-10 relative -mt-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-600 mb-2">
                    {t.title}
                  </h3>
                  <p className={`text-gray-500 text-[13px] lg:text-[14px] leading-relaxed mb-2 ${idx >= 6 ? 'max-w-full' : 'max-w-[60%]'}`}>
                    {t.description}
                  </p>
                  
                  {t.items && (
                    <ul className={`space-y-1 md:space-y-2 list-none p-0 ${idx >= 6 ? 'max-w-full' : 'max-w-[60%]'}`}>
                      {t.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-[12px] lg:text-[13px] leading-relaxed whitespace-nowrap">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className={`absolute bottom-4 ${isAr ? 'left-4' : 'right-4'} ${idx >= 6 ? 'w-48 h-48' : 'w-36 h-36 lg:w-32 lg:h-32'} ${idx === 7 ? 'lg:w-48 lg:h-48' : 'lg:w-32 lg:h-32'} pointer-events-none`}>
                  <img 
                    src={feature.icon} 
                    alt={t.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

export default AppFeaturesGrid;
