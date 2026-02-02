import { useState } from "react";

function Contact({ currentLang }) {
    const isAr = currentLang === 'AR';

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const content = {
        EN: {
            title: "Contact Us",
            fullName: "Full Name",
            phoneNumber: "Phone Number",
            subject: "Subject",
            body: "Body",
            submit: "Submit",
            loading: "Sending...",
            success: "Sent Successfully!",
            error: "Failed to send. Try again."
        },
        AR: {
            title: "اتصل بنا",
            fullName: "الاسم الكامل",
            phoneNumber: "رقم الهاتف",
            subject: "الموضوع",
            body: "الرسالة",
            submit: "إرسال",
            loading: "جاري الإرسال...",
            success: "تم الإرسال بنجاح!",
            error: "فشل الإرسال. حاول مرة أخرى."
        }
    };

    const t = content[currentLang] || content.EN;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwd01ULm2K55noqP-FL_6d8EOz8RrPdpSXMzku3DMyB_bRSkDMGtXUSHOx6sy0IoreO/exec';

        try {
            // Sending as JSON string to match the user's old script logic (JSON.parse(e.postData.contents))
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain', // Use text/plain to avoid CORS preflight while sending JSON string
                },
                body: JSON.stringify(formData)
            });

            setStatus('success');
            setFormData({ fullName: '', phone: '', subject: '', message: '' });
            
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Form Submission Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className={`w-full bg-white py-12 md:py-20 overflow-hidden ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div 
                    className="relative overflow-hidden rounded-[40px] px-8 md:px-16 lg:px-24 py-12 md:py-0 min-h-[500px] md:h-[580px] flex flex-col lg:flex-row items-center justify-between gap-12"
                    style={{
                        background: 'linear-gradient(108.46deg, #E6F7FF 0%, #F5F8FF 51.56%, #E0EAFF 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.6)'
                    }}
                >
                    {/* Glow Effects */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-[#7811FE] opacity-[0.15] blur-[120px] rounded-full" />
                        <div className="absolute -left-20 -top-20 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.05] blur-[100px] rounded-full" />
                    </div>

                    {/* left: Phone Mockup */}
                    <div className={`flex-1 w-full relative h-[400px] md:h-full flex items-center justify-center lg:justify-start order-2 ${isAr ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative h-[95%] w-full flex items-center justify-center lg:justify-start top-[5%]">
                            <img 
                                src="/iPhone 15.png" 
                                alt="Tuwaiq Pay Analytics" 
                                className={`h-full w-auto object-contain z-10 drop-shadow-[0_35px_60px_rgba(0,0,0,0.2)]`}
                                style={{
                                    transform: isAr ? 'rotate(5deg)' : 'rotate(-5deg)'
                                }}
                            />
                        </div>
                    </div>

                    {/* right: Contact Form */}
                    <div className={`flex-1 w-full z-10 order-1 ${isAr ? 'lg:order-1' : 'lg:order-2'} lg:max-w-[500px]`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8 md:mb-10 text-center lg:text-left">
                            {t.title}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder={t.fullName}
                                className={`w-full px-6 py-4 rounded-[20px] border-none bg-white text-gray-900 placeholder-[#94A3B8] shadow-sm focus:ring-2 focus:ring-[#3B82F6] transition-all ${isAr ? 'text-right' : 'text-left'}`}
                            />
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder={t.phoneNumber}
                                className={`w-full px-6 py-4 rounded-[20px] border-none bg-white text-gray-900 placeholder-[#94A3B8] shadow-sm focus:ring-2 focus:ring-[#3B82F6] transition-all ${isAr ? 'text-right' : 'text-left'}`}
                            />
                            <input 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder={t.subject}
                                className={`w-full px-6 py-4 rounded-[20px] border-none bg-white text-gray-900 placeholder-[#94A3B8] shadow-sm focus:ring-2 focus:ring-[#3B82F6] transition-all ${isAr ? 'text-right' : 'text-left'}`}
                            />
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder={t.body}
                                rows={4}
                                className={`w-full px-6 py-4 rounded-[24px] border-none bg-white text-gray-900 placeholder-[#94A3B8] shadow-sm focus:ring-2 focus:ring-[#3B82F6] transition-all resize-none ${isAr ? 'text-right' : 'text-left'}`}
                            />
                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full py-4.5 py-4 rounded-[20px] font-bold text-lg active:scale-[0.98] transition-all shadow-lg ${
                                    status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 
                                    status === 'success' ? 'bg-green-500 hover:bg-green-600' :
                                    status === 'error' ? 'bg-red-500 hover:bg-red-600' :
                                    'bg-[#2563EB] hover:bg-blue-700 shadow-blue-500/20'
                                } text-white`}
                            >
                                {status === 'loading' ? t.loading : 
                                 status === 'success' ? t.success :
                                 status === 'error' ? t.error :
                                 t.submit}
                            </button>
                        </form>
                    </div>
                </div>

                {/* WhatsApp Icon - Absolute to section layout */}
                <div className="flex justify-end mt-6">
                    <a 
                        href="https://wa.me/966509964000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
                    >
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;

