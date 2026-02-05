"use client";

function Terms({ currentLang }) {
    const isAr = currentLang === 'AR';

    const content = {
        EN: {
            title: "Terms and Conditions",
            sections: [
                {
                    title: "Introduction",
                    content: "These terms and conditions represent your implicit and explicit agreement to the correct method we declare - we Tuwaiq Pay - for using our website. Your agreement to this document is considered acceptance of all terms and conditions contained therein. If you find that one or all of these terms do not suit you in any way, or if you do not agree to them, or to any part of them, you must refrain from using the Tuwaiq Pay payment gateway."
                },
                {
                    title: "Intellectual Property Rights and Licensing",
                    content: "We alone own all intellectual property rights for this website and all published and existing materials on it. You have the right – as a user of the site – to download any of the displayed materials for temporary storage or viewing and personal use only according to the restrictions stipulated in the terms and conditions document of the Tuwaiq Pay website, which includes: not publishing any of the Tuwaiq Pay website materials explicitly through any other publishing method, whether digital via the internet or printed publishing or any other method. You are not entitled to sell any of the Tuwaiq Pay website materials or services provided on it or activate sub-subscriptions between you and any other party. It is forbidden to display any of the private and confidential materials from the Tuwaiq Pay website to the general non-subscriber users in the website services. It is strictly forbidden to copy, transfer, or repeat any material from the Tuwaiq Pay website content and exploit it in any commercial form for personal gain or for public publishing without official permission from Tuwaiq Pay management. Violation of any of the items of the previous policies or violation of any policy from the previously clarified policies is considered a clear violation of the terms and conditions of the Tuwaiq Pay payment gateway. We have the right, upon suspicion of any attempt of fraud, to stop, suspend, or delete the user account that violates these terms without returning to him, and without giving reasons."
                },
                {
                    title: "Direct Harm Infliction",
                    content: "It is forbidden to manipulate our website codes or the mobile applications belonging officially to Tuwaiq Pay, or to perform any illegal hacking attempts without our permission (for technical testing purposes only which require official written approval from us), otherwise the violator will be subject to legal accountability and its resulting financial claims and legal rights. Any practice that would inflict harm on our website, including electronic hacking in its various forms, such as using any materials containing Spywares, Computer Viruses, worm, Trojan Horse, Keystroke Logger, Rootkit, or any other computer programs characterized as fraudulent or for control and corruption, is strictly forbidden. We have the right to take legal actions that would pursue you and reach you and claim the necessary legal rights. It is also strictly forbidden to reproduce, store, transfer, host, send, publish or distribute any of the materials on the Tuwaiq Pay website in any form except after returning to Tuwaiq Pay and obtaining explicit written approval or an official permit from Tuwaiq Pay management via the official email. Also, you do not have the right to use our site for any purposes related to marketing or promoting our services, except after obtaining explicit written approval from Tuwaiq Pay management via the official email."
                },
                {
                    title: "Access Characteristics",
                    content: "Tuwaiq Pay policy includes restricting access to certain parts of the website. We have the absolute right to restrict or allow any user to access one of the parts of the website at our discretion. Every user has a login ID (username – password) that allows him to access certain areas of the website allowed for him to be in. Access layers to the depth of the website differ according to the user account, and according to our personal discretion of the granted access capabilities. If we give a user access to one of the parts or layers of the website and he misuses it, we have the right to disable the user's access according to our personal discretion, and without referring to the user, or giving him notice, or granting him an explanation."
                },
                {
                    title: "Limited Warranties",
                    content: "We strive in Tuwaiq Pay to ensure the correctness of the information contained in this site to the maximum extent possible. But we do not guarantee its accuracy or comprehensiveness, nor do we commit to ensuring that the site remains available, or that the materials on it remain constantly updated. We exclude from that the applicable limit by law regarding the parts that must appear with a certain level of quality, harmony and compatibility with the purpose for which the website was created, with a reasonable amount of care and skill that allows using the site without any obstacles that stop it from performing its specific task for which it was created."
                },
                {
                    title: "Limitations of Liability",
                    content: "We do not exclude the occurrence of any damages resulting from negligence or omission on our part, which may cause tangible harm such as fraud or physical injuries or death or any other damage. Accordingly, we deny any liability that may fall on us as a result of using our website resulting in this tangible harm. Accordingly, we emphasize the limited nature of our liability for any error resulting from using our website as follows: We are not responsible for any loss in revenue, income, profits, savings, contracts, business, commercial goodwill, commercial reputation, information or data. We are not responsible for any direct or indirect subsequent loss resulting from using our website. We are not responsible for damages arising from causes or events outside our reasonable control."
                },
                {
                    title: "Indemnity",
                    content: "You hereby undertake to indemnify us against any damages, losses, costs, liabilities and expenses (including but not limited to: legal expenses or any judicial settlements or dispute based on the guidance of our legal advisors) incurred on our part and resulting from a breach on your part of one or more of the provisions of these terms and conditions."
                },
                {
                    title: "Breach of Terms and Conditions",
                    content: "Under these terms and conditions – and without prejudice to our other rights – we may, in case of your breach of any of these terms and conditions in any way and proving your involvement in that beyond a doubt, take the necessary actions against you that we see as appropriate, which may include disabling your access to the website or some pages from our website, or preventing you completely from entering by blocking your account, or blocking the computer/computers that use your IP address to the site, or communicating with your internet service provider to request blocking your access to the site or reporting illegal practices for the internet service, or filing lawsuits against you as seen by our legal advisors."
                },
                {
                    title: "Freedom to Change Terms and Conditions",
                    content: "We may modify these terms and conditions by reviewing one, some or all of its clauses from time to time, and applying the updated terms and conditions to the use of our website starting from the date of their publication on the Tuwaiq Pay website. Therefore, please make sure to review this page regularly to ensure your awareness of the current updated version."
                },
                {
                    title: "Assignment",
                    content: "We in Tuwaiq Pay may sub-contract, assign or otherwise deal with all our rights and/or obligations under these terms and conditions without notifying you or obtaining your consent. On your part, you may not sub-contract, assign or otherwise deal with your rights and/or obligations under these terms and conditions."
                },
                {
                    title: "Severability of Terms and Conditions",
                    content: "If a competent authority or court issues a decision of non-validity and/or illegality of any text of these terms and conditions, the rest of the terms and conditions remain valid. Even if any non-valid and/or illegal text would become valid and legal if part of it were deleted, that deleted part of the text is considered canceled from the terms and conditions and the rest of the terms and conditions continue to be valid."
                },
                {
                    title: "Exclusion of Third Party Benefit",
                    content: "These terms and conditions were set fundamentally for our benefit and your benefit and the goal is not to benefit any third party or to be applied by them. Our exercise of our rights and your rights regarding these terms and conditions is not subject to the approval of any third party."
                },
                {
                    title: "Legal and Judicial Jurisdiction",
                    content: "These terms and conditions are subject to the law of the Kingdom of Saudi Arabia and are interpreted accordingly. In case of any dispute or disagreement (God forbid) about the interpretation or application of the terms and conditions, it is resolved by friendly methods. If it is not possible to resolve the dispute by friendly methods, the territorial jurisdiction for its consideration shall be for the courts of Dammam city."
                }
            ]
        },
        AR: {
            title: "الشروط والأحكام",
            sections: [
                {
                    title: "المقدمة",
                    content: "تفيد هذه الشروط والأحكام موافقتك الضمنية والصريحة على الطريقة الصحيحة التي نقرها – نحن طويق باي – لاستخدام موقعنا الإلكتروني. ويُعد موافقتك على هذه الوثيقة قبولاً بجميع الشروط والأحكام الواردة فيها. فإذا وجدت أن أحد أو كل هذه الشروط لا تتوافق معك بأي شكل من الأشكال، أو لم تكن موافقًا عليها، أو على أي جزء منها، يجب عليك الامتناع عن استخدام بوابة دفع طويق باي."
                },
                {
                    title: "حقوق الملكية الفكرية والترخيص",
                    content: "نمتلك وحدنا جميع حقوق الملكية الفكرية لهذا الموقع الإلكتروني وجميع المواد المنشورة والموجودة عليه. ولك الحق – كمستخدم للموقع – أن تقوم بتحميل وتنزيل أي من المواد المعروضة عليه لغرض التخزين المؤقت أو الاطلاع والاستخدام الشخصي فقط وفق التقييدات المنصوص عليها في وثيقة الشروط والأحكام الخاصة بموقع طويق باي والتي تشمل: عدم نشر أي من مواد موقع طويق باي صراحة عبر أي وسيلة نشر أخرى، سواء وسيلة رقمية عبر الإنترنت أو وسيلة نشر مطبوعة أو أي وسيلة نشر أخرى لا يحق لك بيع أي من مواد موقع طويق باي أو الخدمات المقدمة عليه أو تفعيل اشتراكات من الباطن بينك وبين أي جهة أخرى ممنوع عرض أي مادة من المواد الخاصة والسرية من موقع طويق باي لعموم المستخدمين غير المشتركين في خدمات الموقع ممنوع منعًا باتًا نسخ أو نقل أو تكرار أي مادة من مواد ومحتوى موقع طويق باي واستغلالها بأي شكل تجاري للتكسب الشخصي أو للنشر العام بدون مقابل إلا بإذن رسمي من إدارة طويق باي مخالفة أي بند من البنود السابقة أو انتهاك أي سياسة من السياسات السابق توضيحها يعتبر مخالفة صريحة للشروط والأحكام الخاصة ببوابة دفع طويق باي. ويحق لنا عند الاشتباه في أي محاولة للاحتيال إيقاف، تعليق، حذف حساب المستخدم الذي ينتهك هذه الشروط بدون العودة إليه، وبدون إبداء أسباب."
                },
                {
                    title: "إلحاق الضرر المباشر",
                    content: "ممنوع التلاعب بأكواد موقعنا البرمجية أو تطبيقات الجوال التابعة رسميًا إلى طويق باي، أو إجراء أي محاولات اختراق غير قانونية بدون إذننا (لدواعي اختبار تقنية فقط والتي يلزم لإجراءها موافقة خطية رسمية من قبلنا) وإلا تعرض صاحب الانتهاك إلى المساءلة القانونية وما يترتب عليه من مطالبات وحقوق قانونية. فأي ممارسة من شأنها إلحاق الضرر بموقعنا الإلكتروني، بما في ذلك الاختراق الإلكتروني بطرقه المتعددة، مثل استخدام أي مواد تحتوي على برامج تجسس Spywares، أو فيروسات كمبيوتر Computer Viruses، أو دودة إنترنت worm، أو حصان طروادة Trojan Horse، أو مسجل ضغطة المفتاح Keystroke Logger، أو التحكم الخفي في الكمبيوتر Rootkit، أو أي برامج كمبيوتر أخرى تتسم بالاحتيالية أو التحكم والإفساد، ممنوعة منعًا باتًا ويحق لنا اتخاذ الإجراءات القانونية التي من شأنها ملاحقتك والوصول إليك والمطالبة بالحقوق القانونية اللازمة. كذلك ممنوع منعًا باتًا استنساخ أو تخزين أو نقل أو استضافة أو إرسال أو نشر أو توزيع أي مادة من المواد الموجودة على موقع طويق باي بأي صورة من الصور إلا بعد العودة إلى طويق باي والحصول على موافقة خطية صريحة أو تصريح رسمي من إدارة طويق باي عبر البريد الإلكتروني الرسمي. كذلك لا يحق لك استخدام موقعنا لأي أغراض تتعلق بالتسويق أو ترويج خدماتنا، إلا بعد الحصول على موافقة خطية صريحة من إدارة طويق باي عبر البريد الإلكتروني الرسمي."
                },
                {
                    title: "خصائص الوصول",
                    content: "تشمل سياسة طويق باي تقييد الوصول إلى أجزاء معينة من الموقع الإلكتروني. ولنا مطلق الحق في تقييد أو السماح لأحد من المستخدمين بالوصول إلى أحد أجزاء الموقع الإلكتروني وفق تقديرنا. فكل مستخدم له هوية دخول (اسم مستخدم – كلمة مرور) تسمح له بالولوج إلى مناطق معينة من الموقع الإلكتروني مسموح له بالتواجد فيها. وتختلف طبقات الوصول لعمق الموقع الإلكتروني حسب حساب المستخدم، وحسب تقديرنا الشخصي لإمكانات الوصول الممنوحة. فإذا أعطينا أحد المستخدمين حق الوصول إلى أحد أجزاء أو طبقات الموقع الإلكتروني وأساء الاستخدام، يحق لنا تعطيل دخول المستخدم وفقًا لتقديرنا الشخصي، وبدون الرجوع إلى المستخدم، أو إعطائه إخطار، أو منحه تفسير."
                },
                {
                    title: "محدودية الضمانات",
                    content: "نجتهد في طويق باي للتأكد من صحة المعلومات الواردة في هذا الموقع إلى أقصى حد ممكن. ولكن لا نضمن دقتها أو شموليتها، ولا نلتزم بضمان أن يظل الموقع متاحًا، أو أن تبقى المواد التي عليه محدثة باستمرار. ونستثني من ذلك الحد واجب التطبيق من قبل القانون فيما يتعلق بالأجزاء التي يجب أن تظهر بمستوى معين من الجودة والانسجام والتوافق مع الغرض الذي من أجله تم إنشاء الموقع الإلكتروني، بقدر معقول من العناية والمهارة يسمح باستخدام الموقع بدون أي معوقات تعطله عن أداء مهمته المحددة التي من أجلها تم إنشاؤه."
                },
                {
                    title: "قيود المسئولية",
                    content: "لا نستبعد حدوث أي أضرار ناتجة عن تقصير أو إهمال من جانبنا، قد يتسبب في إيذاء ملموس كالاحتيال أو الإصابات الجسدية أو الوفاة أو أي ضرر آخر. وعليه ننفي أي مسئولية قد تقع علينا نتيجة استخدام موقعنا الإلكتروني يحدث على إثرها هذا الإيذاء الملموس. وعليه فنؤكد محدودية مسئوليتنا عن أي خطأ ناتج عن استخدام موقعنا الإلكتروني على النحو التالي: لا يترتب علينا مسئولية عن أي خسارة في الإيرادات أو الدخل أو الأرباح أو المدخرات أو العقود أو الأعمال التجارية أو الشهرة التجارية أو السمعة التجارية أو المعلومات أو البيانات لا يترتب علينا أي مسئولية عن خسارة لاحقة مباشرة أو غير مباشرة ناتجة عن استخدام موقعنا الإلكتروني لا يترتب علينا أي مسئولية عن أضرار تنشأ عن أسباب أو أحداث خارجة عن سيطرتنا المنطقية أو المعقولة"
                },
                {
                    title: "التعويض",
                    content: "بموجب هذا يتعين عليك التعهد بتعويضنا ضد أي أضرار أو خسائر أو تكاليف والتزامات ومصاريف (على سبيل المثال لا الحصر: المصاريف القانونية أو أي تسويات قضائية أو نزاع بناءً على توجيهات مستشارينا القانونيين) تحملناها من جانبنا ونجمت عن إخلال من جانبك بنص أو أكثر من نصوص هذه الشروط والأحكام."
                },
                {
                    title: "الإخلال بالشروط والأحكام",
                    content: "بموجب هذه الشروط والأحكام – ودون المساس بحقوقنا الأخرى – يجوز لنا في حال إخلالك بأي من هذه الشروط والأحكام بأي طريقة من الطرق وإثبات تورطك في ذلك بما لا يدع مجالاً للشك أن نتخذ الإجراءات اللازمة ضدك والتي نراها مناسبة، والتي قد تتضمن تعطيل وصولك إلى الموقع الإلكتروني أو بعض الصفحات من الموقع الإلكتروني الخاص بنا، أو منعك تمامًا من الدخول بحظر حسابك، أو حظر الحاسوب/الحواسيب التي تستخدم عنوان المعرف IP الخاص بك إلى الموقع، أو التواصل مع مزود خدمة الإنترنت الخاص بك لطلب حظر وصولك إلى الموقع أو التبليغ عن ممارسات غير قانونية لخدمة الإنترنت، أو رفع دعاوى قضائي ضدك حسب ما يراه مستشارينا القانونيين."
                },
                {
                    title: "حرية تغيير الشروط والأحكام",
                    content: "يجوز لنا تعديل هذه الشروط والأحكام بإعادة النظر في أحد أو بعض أو كل بنودها من وقت لآخر، وتطبيق الأحكام والشروط المحدثة على استخدام موقعنا الإلكتروني بدءًا من تاريخ نشرها على موقع طويق باي. لذلك، نرجو أن تتأكد من مراجعة هذه الصفحة بانتظام لضمان اطلاعك على النسخة المحدثة الحالية."
                },
                {
                    title: "التنازل",
                    content: "يجوز لنا في طويق باي التعاقد من الباطن أو التنازل أو ما هو خلاف ذلك التعامل مع كامل حقوقنا و/أو التزاماتنا بموجب هذه الشروط والأحكام دون إخطارك أو الحصول على موافقتك. ومن جانبك لا يجوز لك التعاقد من الباطن أو التنازل أو ما هو خلاف ذلك التعامل مع حقوقك و/أو التزاماتك بموجب هذه الشروط والأحكام."
                },
                {
                    title: "قابلية الفصل في الشروط والأحكام",
                    content: "إذا قامت سلطة مختصة أو محكمة بإصدار قرار بعدم سريان و/أو مشروعية أي نص من نصوص هذه الشروط والأحكام، فإن بقية الشروط والأحكام تظل سارية، وإن كان من شأن أي نص غير ساري و/أو غير مشروع أن يصبح ساريًا ومشروعًا لو حُذِفَ منه جزء، يعتبر ذلك الجزء المحذوف من النص ملغي من الشروط والأحكام وتستمر باقي الشروط والأحكام في السريان."
                },
                {
                    title: "استبعاد منفعة الطرف الثالث",
                    content: "تم وضع هذه الشروط والأحكام في الأساس لمنفعتنا ولمنفعتك وليس الهدف منها نفع أي طرف ثالث أو أن تُطَبَّق من قبله، ولا تخضع ممارستنا لحقوقنا وحقوقك فيما يتعلق بهذه الشروط والأحكام لموافقة أي طرف ثالث."
                },
                {
                    title: "الاختصاص القانوني والقضائي",
                    content: "تخضع هذه الشروط والأحكام لقانون المملكة العربية السعودية وتُفسر بموجبها، وفي حالة حدوث أي نزاع أو خلاف (لا سمح الله) حول تفسير أو تطبيق الشروط والأحكام فيتم حلها بالطرق الودية، فإذا تعذر حل الخلاف بالطرق الودية، فيكون الاختصاص المكانى بمحاكم مدينة الدمام."
                }
            ]
        }
    };

    const t = content[currentLang] || content.EN;

    return (
        <section className={`w-full bg-white py-12 md:py-20 overflow-hidden ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div 
                    className="relative overflow-hidden rounded-[40px] px-8 md:px-16 lg:px-24 py-16 md:py-20 min-h-[600px] flex flex-col items-center"
                    style={{
                        background: 'linear-gradient(108.46deg, #E6F7FF 0%, #F5F8FF 51.56%, #E0EAFF 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.6)'
                    }}
                >
                    {/* Glow Effects */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-[#7811FE] opacity-[0.05] blur-[120px] rounded-full" />
                        <div className="absolute -left-20 -top-20 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.05] blur-[100px] rounded-full" />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-16 z-10">
                        <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6">
                            {t.title}
                        </h1>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="w-full z-10 space-y-12">
                        {t.sections.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-[#2563EB]">
                                    {section.title}
                                </h2>
                                <p className="text-[#475569] leading-relaxed text-base md:text-lg font-medium whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-20 text-center text-gray-400 text-sm z-10">
                        © 2026 Tuwaiq Pay. All rights reserved.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Terms;
