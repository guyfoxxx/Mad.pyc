"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "پروژه موفق", value: 50, suffix: "+" },
  { label: "تکنولوژی مسلط", value: 25, suffix: "+" },
  { label: "سال تجربه", value: 7, suffix: "+" },
  { label: "راهکار دیجیتال", value: 100, suffix: "+" },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card aspect-square rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/20 to-purpleGlow/20" />
            <div className="text-center z-10">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-electricBlue to-purpleGlow mb-6 flex items-center justify-center text-5xl font-black text-deepBlack">
                م.ف
              </div>
              <h3 className="text-2xl font-bold">مجید فکرمند</h3>
              <p className="text-electricBlue mt-2">معمار نرم‌افزار و توسعه‌دهنده فول‌استک</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">درباره <span className="text-electricBlue">من</span></h2>
          <p className="text-softGray text-lg leading-relaxed mb-8">
            من یک توسعه‌دهنده فول‌استک با تمرکز بر معماری سیستم‌های مقیاس‌پذیر، سئو تکنیکال و ایجاد تجربه‌های کاربری لوکس هستم. فلسفه من ترکیب هنر طراحی با مهندسی دقیق نرم‌افزار است. من کد نمی‌نویسم؛ من راهکارهای دیجیتال می‌سازم که کسب‌وکارها را متحول می‌کنند.
          </p>
          
          <div ref={ref} className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl font-black text-electricBlue mb-2">
                  <CountUp target={stat.value} inView={isInView} />
                  {stat.suffix}
                </div>
                <div className="text-softGray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
