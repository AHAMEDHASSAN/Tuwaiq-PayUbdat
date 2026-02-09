"use strict";
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

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', phone: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send email');
            }
            
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Form Submission Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className={`w-full bg-white py-12 md:py-20 scroll-mt-24 overflow-hidden ${isAr ? 'font-sans' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className={`flex-1 w-full relative h-[450px] md:h-full flex items-center justify-center lg:justify-start order-2 ${isAr ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative h-full w-full flex items-center justify-center lg:justify-start">
                            {isAr ? <img 
                                src="/SecintArbic4.png"  
                                alt="Tuwaiq Pay Analytics" 
                                className={` scale-[1.3] h-full w-auto object-contain z-10 drop-shadow-[0_35px_60px_rgba(0,0,0,0.2)]`}
                                style={{
                                    transform: isAr ? 'rotate(5deg)' : 'rotate(-5deg)'
                                }}
                            /> : <img 
                                src="/iPhone 15.png" 
                                alt="Tuwaiq Pay Analytics" 
                                className={`scale-110 h-full w-auto object-contain z-10 drop-shadow-[0_35px_60px_rgba(0,0,0,0.2)]`}
                                style={{
                                    transform: isAr ? 'rotate(5deg)' : 'rotate(-5deg)'
                                }}
                            />}
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
            </div>
        </section>
    );
}

export default Contact;
