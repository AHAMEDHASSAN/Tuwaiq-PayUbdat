"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import AnimatedBackground from "../../Components/AnimatedBackground";
import BlogCard from "../../Components/BlogCard";
import Footer from "../../Components/Footer/Page";
import Header from "../../Components/Header/page";

function BlogsContent() {
  const searchParams = useSearchParams();
  const [currentLang, setCurrentLang] = useState('EN');
  const [visibleCount, setVisibleCount] = useState(6);

  // Initial language sync from URL
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'AR' || lang === 'EN') {
      handleLanguageChange(lang);
    }
  }, [searchParams]);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (langCode === 'AR') {
      document.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  };

  const blogPostsData = {
    EN: [
      {
        id: 1,
        image: "/Plogs1.png",
        title: "Payment Gateway for Startups with Tuwaiq\nPay Faster Growth and Smart Financial Control",
        description: "Every startup begins with a dream and an idea that tells you, 'I have something different, something that changes the game.' The journey begins, the excitement in...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%af%d9%81%d8%b9-%d9%84%d9%84%d8%b4%d8%b1%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d9%86%d8%a7%d8%b4%d8%a6%d8%a9-tuwaiq-pay/"
      },
      {
        id: 2,
        image: "/Plogs2.png",
        title: "Tuwaiq Pay for Freelancers: Easy Financial Control that Lets You Focus on Your Work",
        description: "In the life of a freelancer, every day has its own flavor. Tuwaiq Pay for freelancers is your companion from the start, understanding the pressure of your day.",
        link: "https://blog.tuwaiqpay.com.sa/%d8%aa%d8%b7%d8%a8%d9%8a%d9%82-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-%d9%84%d9%84%d9%81%d8%b1%d9%8a%d9%84%d8%a7%d9%86%d8%b3%d8%b1/"
      },
      {
        id: 3,
        image: "/Plogs3.png",
        title: "How Tuwaiq Pay Gateway Helped Increase E-commerce Sales in Saudi Arabia?",
        description: "From elegant design to shocking losses: What happened? Imagine a Saudi startup in modern fashion. Its team started with enthusiasm...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%af%d9%81%d8%b9-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa/"
      },
      {
        id: 4,
        image: "/Plogs4.png",
        title: "Why Don't Visitors Complete Registration? 5 Reasons Why They Leave Before the Final Step",
        description: "Have you ever noticed that many people start registering on your site or app, but only a few actually complete...",
        link: "https://blog.tuwaiqpay.com.sa/%d9%84%d9%8a%d8%b4-%d8%a7%d9%84%d8%b2%d9%88%d8%a7%d8%b1-%d9%85%d8%a7-%d9%8a%d9%83%d9%85%d9%84%d9%88%d9%86-%d8%a7%d9%84%d8%aa%d8%b3%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%a3%d8%b3%d8%a8%d8%a7%d8%a8-%d9%88/"
      },
      {
        id: 5,
        image: "/Plogs5.png",
        title: "Payment Gateways in Saudi Arabia and the Gulf: Which is Best for Your Business?",
        description: "The best payment gateway in Saudi Arabia… your key to an unforgettable shopping experience in the fast-paced world of e-commerce, where success no longer depends...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a3%d9%81%d8%b6%d9%84-%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%af%d9%81%d8%b9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a%d8%a9-%d8%ad%d9%84%d9%88%d9%84-%d8%af%d9%81%d8%b9-%d8%a2%d9%85%d9%86/"
      },
      {
        id: 6,
        image: "/Plogs6.png",
        title: "How to Improve Payment Experience to Increase Conversion Rate in Your Store",
        description: "In the fast-paced world of e-commerce, it is not enough to have a beautiful site or great products; you must provide...",
        link: "https://blog.tuwaiqpay.com.sa/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d8%a7%d9%84%d8%af%d9%81%d8%b9-%d9%84%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d9%85%d8%b9%d8%af%d9%84-%d8%a7%d9%84/"
      },
      {
        id: 7,
        image: "/Plogs7.png",
        title: "Integrating Tuwaiq Pay API in E-commerce Stores: A Guide to Improving Sales",
        description: "A step-by-step guide to integrating Tuwaiq Pay API to increase your store's sales and improve the payment experience in the modern e-commerce world...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%af%d9%84%d9%8a%d9%84-%d8%af%d9%85%d8%ac-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-api-%d9%84%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa-%d9%85%d8%aa%d8%ac%d8%b1%d9%83/"
      },
      {
        id: 8,
        image: "/Plogs8.png",
        title: "How to Choose the Right Payment Gateway for Your Online Store Easily",
        description: "You have excellent products and catching design... but suddenly, you notice customers reach the shopping cart but don't finish...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a3%d9%81%d8%b6%d9%84-%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%af%d9%81%d8%b9-%d9%85%d9%86%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d9%85%d8%aa%d8%ac%d8%b1%d9%83-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88/"
      },
      {
        id: 9,
        image: "/Plogs9.png",
        title: "Step by Step: How to Register and Use Tuwaiq Pay for Freelancers",
        description: "Are you looking for a better option for receiving and sending your financial payments? Tired of typical options...",
        link: "https://blog.tuwaiqpay.com.sa/how-to-register-in-tawfiqpay-for-freelancers/"
      },
      {
        id: 10,
        image: "/Plogs10.png",
        title: "Introduction to Tuwaiq Pay: What is it and How does it Serve Freelancers in Saudi Arabia?",
        description: "We are witnessing an amazing acceleration of all entrepreneurial and even freelance businesses in Saudi Arabia today. In the midst of this, the financial scene...",
        link: "https://blog.tuwaiqpay.com.sa/introduction-to-tuwaiqpay/"
      },
      {
        id: 11,
        image: "/Plogs11.png",
        title: "Commercial Awareness and Payment Acceptance: The Key to Success in the Modern Business World",
        description: "In the fast-evolving business world, commercial awareness is no longer just an extra advantage, but a necessity for success. This awareness includes...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a7%d9%84%d9%88%d8%b9%d9%8a-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a-%d9%88%d9%82%d8%a8%d9%88%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%81%d9%88%d8%b9%d8%a7%d8%aa-%d9%85%d9%81%d8%aa%d8%a7%d8%ad-%d8%a7/"
      },
      {
        id: 12,
        image: "/Plogs12.png",
        title: "Tuwaiq Pay: Your Window to the World of Digital Payments and Sustainable Development",
        description: "Welcome to the Tuwaiq Pay blog, the leading platform in the world of digital payments seeking to empower individuals and companies alike...",
        link: "https://blog.tuwaiqpay.com.sa/%d9%85%d8%af%d9%88%d9%86%d8%a9-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-%d9%86%d8%a7%d9%81%d8%b0%d8%aa%d9%83-%d8%a5%d9%84%d9%89-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d9%85%d8%af%d9%81%d9%88%d8%b9/"
      },
      {
        id: 13,
        image: "/Plogs13.png",
        title: "International Remittance Guide: How to Facilitate Your Financial Operations?",
        description: "How does Tuwaiq Pay help you receive international remittances at the best cost? With the enormous development of e-commerce, especially in the Kingdom...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%af%d9%84%d9%8a%d9%84-%d8%a7%d8%b3%d8%aa%d9%82%d8%a8%d8%a7%d9%84-%d8%a7%d9%84%d8%ad%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%af%d9%88%d9%84%d9%8a%d8%a9-%d9%83%d9%8a%d9%81-%d8%aa%d8%aa%d9%85/"
      },
      {
        id: 14,
        image: "/Plogs14.png",
        title: "What is the Instant Payment Processing Mechanism of the Tuwaiq Pay System?",
        description: "The need to receive money is increasing and accelerating greatly, and it is a basic thing in the daily life of merchants and consumers alike; That's why...",
        link: "https://blog.tuwaiqpay.com.sa/%d9%85%d8%a7-%d8%a2%d9%84%d9%8a%d8%a9-%d9%85%d8%b9%d8%a7%d9%84%d8%ac%d8%a9-%d8%a7%d9%84%d9%85%d8%af%d9%81%d9%88%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d9%88%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d9%8a/"
      },
      {
        id: 15,
        image: "/Plogs15.png",
        title: "Advanced Payment Solutions Provided by Tuwaiq Pay Suitable for Local Business",
        description: "Local trade in Saudi Arabia has witnessed remarkable development in recent years, supported by the Kingdom's Vision 2030, which aims to diversify...",
        link: "https://blog.tuwaiqpay.com.sa/%d8%ad%d9%84%d9%88%d9%84-%d8%a7%d9%84%d8%af%d9%81%d8%b9-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d9%84%d8%aa%d9%8a-%d8%aa%d9%82%d8%af%d9%85%d9%87%d8%a7-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8/"
      }
    ],
    AR: [
      {
        id: 1,
        image: "/Plogs1.png",
        title: "بوابة دفع للشركات الناشئة مع Tuwaiq\nPay نمو أسرع وتحكم مالي ذكي",
        description: "كل مشروع ناشئ يبدأ بحلم، وفكرة تقول في بالك: “أنا عندي شيء مختلف، شيء بيغير اللعبة.” تبدأ الرحلة، الحماس في…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%af%d9%81%d8%b9-%d9%84%d9%84%d8%b4%d8%b1%d9%83%d8%a7%d8%aa-%d8%a7%d9%84%d9%86%d8%a7%d8%b4%d8%a6%d8%a9-tuwaiq-pay/"
      },
      {
        id: 2,
        image: "/Plogs2.png",
        title: "تطبيق طويق باي للفريلانسر: تحكم مالي سهل يخليك تركز على شغلك مو على التحصيل",
        description: "في حياة الفريلانسر، كل يوم له طعمه الخاص. تطبيق طويق باي للفريلانسر يكون من البداية رفيقك اللي يفهم ضغط يومك.",
        link: "https://blog.tuwaiqpay.com.sa/%d8%aa%d8%b7%d8%a8%d9%8a%d9%82-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-%d9%84%d9%84%d9%81%d8%b1%d9%8a%d9%84%d8%a7%d9%86%d8%b3%d8%b1/"
      },
      {
        id: 3,
        image: "/Plogs3.png",
        title: "كيف ساعدت بوابة الدفع طويق باي على زيادة مبيعات متجر إلكتروني في السعودية؟",
        description: "من تصميم أنيق إلى خسائر صادمة: ماذا حدث? تخيّل معي متجرًا سعوديًا ناشئًا في مجال الأزياء العصرية. بدأ فريقه بحماس…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%a7%d9%84%d8%af%d9%81%d8%b9-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa/"
      },
      {
        id: 4,
        image: "/Plogs4.png",
        title: "ليش الزوار ما يكملون التسجيل؟ 5 أسباب تخليهم يطلعون قبل الخطوة الأخيرة",
        description: "هل لاحظت يومًا أن عدد الناس اللي يبدؤون التسجيل في موقعك أو تطبيقك كبير، لكن القليل فقط هم اللي يكملون…",
        link: "https://blog.tuwaiqpay.com.sa/%d9%84%d9%8a%d8%b4-%d8%a7%d9%84%d8%b2%d9%88%d8%a7%d8%b1-%d9%85%d8%a7-%d9%8a%d9%83%d9%85%d9%84%d9%88%d9%86-%d8%a7%d9%84%d8%aa%d8%b3%d8%ac%d9%8a%d9%84-%d8%a7%d9%84%d8%a3%d8%b3%d8%a8%d8%a7%d8%a8-%d9%88/"
      },
      {
        id: 5,
        image: "/Plogs5.png",
        title: "بوابات الدفع في السعودية والخليج: أيها الأنسب لعملك؟",
        description: "أفضل بوابة دفع في السعودية… مفتاحك لتجربة شراء لا تُنسى في عالم التجارة الإلكترونية المتسارع، لم يعد نجاح المتجر يعتمد…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a3%d9%81%d8%b6%d9%84-%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%af%d9%81%d8%b9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a%d8%a9-%d8%ad%d9%84%d9%88%d9%84-%d8%af%d9%81%d8%b9-%d8%a2%d9%85%d9%86/"
      },
      {
        id: 6,
        image: "/Plogs6.png",
        title: "كيفية تحسين تجربة الدفع لزيادة معدل التحويل في متجرك",
        description: "في عالم التجارة الإلكترونية المتسارع، لا يكفي أن يكون لديك موقع جميل أو منتجات رائعة فقط، بل يجب أن توفّر…",
        link: "https://blog.tuwaiqpay.com.sa/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d8%a7%d9%84%d8%af%d9%81%d8%b9-%d9%84%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d9%85%d8%b9%d8%af%d9%84-%d8%a7%d9%84/"
      },
      {
        id: 7,
        image: "/Plogs7.png",
        title: "دمج طويق باي API في المتاجر الإلكترونية: دليل تحسين تجربة الدفع وزيادة المبيعات",
        description: "دليل دمج طويق باي API لزيادة مبيعات متجرك وتحسين تجربة الدفع خطوة بخطوة في عالم التجارة الإلكترونية الحديث، باتت…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%af%d9%84%d9%8a%d9%84-%d8%af%d9%85%d8%ac-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-api-%d9%84%d8%b2%d9%8a%d8%a7%d8%af%d8%a9-%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa-%d9%85%d8%aa%d8%ac%d8%b1%d9%83/"
      },
      {
        id: 8,
        image: "/Plogs8.png",
        title: "كيف تختار بوابة دفع مناسبة لمتجرك الإلكتروني وتزيد مبيعاتك بسهولة",
        description: "عندك منتجات ممتازة، تصميم متجرك يشدّ العين، والحملات الإعلانية تجيب زيارات…لكن فجأة، تلاحظ شيء غريب، الزبائن يوصلون لعربة التسوق، بس…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a3%d9%81%d8%b6%d9%84-%d8%a8%d9%88%d8%a7%d8%a8%d8%a9-%d8%af%d9%81%d8%b9-%d9%85%d9%86%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d9%85%d8%aa%d8%ac%d8%b1%d9%83-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88/"
      },
      {
        id: 9,
        image: "/Plogs9.png",
        title: "خطوة بخطوة: كيفية التسجيل واستخدام طويق باي للمستقلين",
        description: "هل تبحث عن خيار أفضل لاستقبال وإرسال مدفوعاتك المالية والتي غالبًا ما تأخذ وقتًا أكثر من المعتاد؟ وقد مللت الخيارات…",
        link: "https://blog.tuwaiqpay.com.sa/how-to-register-in-tawfiqpay-for-freelancers/"
      },
      {
        id: 10,
        image: "/Plogs10.png",
        title: "مقدمة إلى طويق باي: ما هي وكيف تخدم المستقلين في السعودية؟",
        description: "نشهد تسارعًا مدهشًا لجميع الأعمال الريادية وحتى المستقلة على مستوى المملكة العربية السعودية حاليًا، في خضم ذلك يبدو المشهد المالي…",
        link: "https://blog.tuwaiqpay.com.sa/introduction-to-tuwaiqpay/"
      },
      {
        id: 11,
        image: "/Plogs11.png",
        title: "الوعي التجاري وقبول المدفوعات: مفتاح النجاح في عالم الأعمال الحديث",
        description: "في عالم الأعمال المتسارع التطور، لم يعد الوعي التجاري مجرد ميزة إضافية، بل هو ضرورة حتمية للنجاح. يشمل هذا الوعي…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%a7%d9%84%d9%88%d8%b9%d9%8a-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a-%d9%88%d9%82%d8%a8%d9%88%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%81%d9%88%d8%b9%d8%a7%d8%aa-%d9%85%d9%81%d8%aa%d8%a7%d8%ad-%d8%a7/"
      },
      {
        id: 12,
        image: "/Plogs12.png",
        title: "طويق باي: نافذتك إلى عالم المدفوعات الرقمية والتنمية المستدامة",
        description: "مرحباً بكم في مدونة طويق باي، المنصة الرائدة في عالم المدفوعات الرقمية التي تسعى إلى تمكين الأفراد والشركات على حد…",
        link: "https://blog.tuwaiqpay.com.sa/%d9%85%d8%af%d9%88%d9%86%d8%a9-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%8a-%d9%86%d8%a7%d9%81%d8%b0%d8%aa%d9%83-%d8%a5%d9%84%d9%89-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d9%85%d8%af%d9%81%d9%88%d8%b9/"
      },
      {
        id: 13,
        image: "/Plogs13.png",
        title: "دليل استقبال الحوالات الدولية: كيف تتمكن من تسهيل عملياتك المالية؟",
        description: "كيف تساعدك طويق باي على استقبال الحوالات الدولية بأفضل تكلفة؟ مع تطور عالم التجارة الإلكترونية تطورا هائلا، خاصة في المملكة…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%af%d9%84%d9%8a%d9%84-%d8%a7%d8%b3%d8%aa%d9%82%d8%a8%d8%a7%d9%84-%d8%a7%d9%84%d8%ad%d9%88%d8%a7%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%af%d9%88%d9%84%d9%8a%d8%a9-%d9%83%d9%8a%d9%81-%d8%aa%d8%aa%d9%85/"
      },
      {
        id: 14,
        image: "/Plogs14.png",
        title: "ما آلية معالجة المدفوعات الفورية التي يتميز بها نظام طويق باي؟",
        description: "تتزايد الحاجة لاستقبال الأموال وتتسارع تسارعا كبيرا، وتعد شيئا أساسيا في اليوميّ من حياة التجار والمستهلكين على حدٍّ سواء؛ ولهذا…",
        link: "https://blog.tuwaiqpay.com.sa/%d9%85%d8%a7-%d8%a2%d9%84%d9%8a%d8%a9-%d9%85%d8%b9%d8%af%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%81%d9%88%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d9%88%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d9%8a/"
      },
      {
        id: 15,
        image: "/Plogs15.png",
        title: "حلول الدفع المتقدمة التي تقدمها طويق باي وتتناسب مع تجارتك المحلية",
        description: "شهدت التجارة المحلية في المملكة العربية السعودية تطورًا ملحوظًا في السنوات الأخيرة، مدعومةً برؤية المملكة 2030 التي تهدف إلى تنويع…",
        link: "https://blog.tuwaiqpay.com.sa/%d8%ad%d9%84%d9%88%d9%84-%d8%a7%d9%84%d8%af%d9%81%d8%b9-%d8%a7%d9%84%d9%85%d8%aa%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d9%84%d8%aa%d9%82%d8%af%d9%85%d9%87%d8%a7-%d8%b7%d9%88%d9%8a%d9%82-%d8%a8/"
      }
    ]
  };

  const blogPosts = blogPostsData[currentLang as keyof typeof blogPostsData] || blogPostsData.EN;

  const content = {
      EN: {
          title: "Smart Payment Solutions for Freelancers and Businesses in Saudi Arabia",
          desc: "Just your mobile number or email — no paperwork needed.",
          sectionTitle: "Latest Blog Posts",
          loadMore: "Load More Posts"
      },
      AR: {
          title: "حلول دفع ذكية للمستقلين والشركات في المملكة العربية السعودية",
          desc: "فقط رقم هاتفك أو بريدك الإلكتروني — لا حاجة لأوراق.",
          sectionTitle: "أحدث المقالات",
          loadMore: "مشاهدة المزيد من المقالات"
      }
  };

  const t = content[currentLang as keyof typeof content] || content.EN;
  const isAr = currentLang === 'AR';

  return (
    <main className="pt-20 min-h-screen">
      <Header currentLang={currentLang} onLanguageSwitch={handleLanguageChange} />
      
      {/* Blog Hero Section - Professional Dark Theme */}
      <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
          
          {/* Animated Background */}
          <AnimatedBackground />

          <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
              <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.2] md:leading-[1.1] text-white tracking-tight drop-shadow-2xl whitespace-pre-line">
                  {t.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-medium max-w-3xl drop-shadow-md">
                  {t.desc}
              </p>
          </div>

          {/* Animated Scroll Arrow */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
            <svg 
              className="w-8 h-8 text-blue-400 opacity-80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </div>
      </section>

      {/* Blog Cards Grid Section - Professional White Section */}
      <section className="relative z-20 bg-white py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <div className="mb-20 flex flex-col items-center">
                <h2 className={`group relative inline-block text-4xl md:text-6xl font-black text-gray-900 mb-6 cursor-default tracking-tighter ${isAr ? 'text-right' : 'text-left'}`}>
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-gray-800 group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-700">
                    {t.sectionTitle}
                  </span>
                  {/* Subtle "Button-like" glow for title on white bg */}
                  <div className="absolute -inset-x-8 -inset-y-2 bg-blue-50 rounded-2xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 -z-10"></div>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {blogPosts.slice(0, visibleCount).map((post) => (
                    <BlogCard 
                      key={post.id}
                      image={post.image}
                      title={post.title}
                      description={post.description}
                      link={post.link}
                      isAr={isAr}
                    />
                  ))}
              </div>

              {visibleCount < blogPosts.length && (
                <div className="mt-16 flex justify-center">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 3)}
                    className="group relative px-10 py-4 bg-[#0a1128] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-blue-500/30 hover:border-blue-500/60"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {t.loadMore}
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 ${isAr ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </div>
              )}
          </div>
      </section>

      <Footer currentLang={currentLang} />
    </main>
  );
}

export default function Blogs() {
  return (
    <Suspense fallback={null}>
      <BlogsContent />
    </Suspense>
  );
}
