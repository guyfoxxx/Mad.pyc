"use client";
import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-radial from-purpleGlow/10 via-deepBlack to-deepBlack opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electricBlue/20 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-electricBlue border border-electricBlue/30 rounded-full glass-card">
            <Code2 className="inline w-4 h-4 ml-2" />
            توسعه‌دهنده فول‌استک و معمار نرم‌افزار
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-softGray to-white">
              مجید فکرمند
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-softGray mb-10 max-w-2xl mx-auto leading-relaxed">
            ساخت وب‌سایت‌های مدرن، اپلیکیشن‌های مقیاس‌پذیر، سیستم‌های خودکارسازی و راهکارهای دیجیتال بهینه‌شده برای سئو و عملکرد.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-electricBlue text-deepBlack font-bold rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all"
            >
              مشاهده پروژه‌ها
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              تماس با من
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-8 h-8 text-softGray" />
      </motion.div>
    </section>
  );
}
