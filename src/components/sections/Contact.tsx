"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, User, Briefcase, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در اینجا می‌توانید از Formspree یا EmailJS استفاده کنید
    // مثال: action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
    alert("پیام شما با موفقیت ارسال شد! (این یک نسخه نمایشی است)");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-darkNavy/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          شروع <span className="text-electricBlue">همکاری</span>
        </motion.h2>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-softGray" />
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pr-12 pl-4 text-white placeholder-softGray focus:outline-none focus:border-electricBlue transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-softGray" />
              <input
                type="email"
                placeholder="آدرس ایمیل"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pr-12 pl-4 text-white placeholder-softGray focus:outline-none focus:border-electricBlue transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-softGray" />
              <input
                type="tel"
                placeholder="شماره تماس"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pr-12 pl-4 text-white placeholder-softGray focus:outline-none focus:border-electricBlue transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-softGray" />
              <select
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pr-12 pl-4 text-white focus:outline-none focus:border-electricBlue transition-colors appearance-none"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="" className="bg-deepBlack">نوع پروژه را انتخاب کنید</option>
                <option value="web" className="bg-deepBlack">طراحی وب‌سایت</option>
                <option value="app" className="bg-deepBlack">توسعه اپلیکیشن</option>
                <option value="automation" className="bg-deepBlack">خودکارسازی و ربات</option>
                <option value="seo" className="bg-deepBlack">سئو و بهینه‌سازی</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-softGray" />
            <textarea
              placeholder="توضیحات پروژه..."
              rows={5}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pr-12 pl-4 text-white placeholder-softGray focus:outline-none focus:border-electricBlue transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-electricBlue to-blue-600 text-deepBlack font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all transform hover:scale-[1.02]"
          >
            ارسال پیام
          </button>
        </motion.form>
      </div>
    </section>
  );
}
