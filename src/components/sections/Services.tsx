"use client";
import { motion } from "framer-motion";
import servicesData from "@/data/services.json";
import { Globe, Smartphone, Search, Bot, Server, Lightbulb } from "lucide-react";

const iconMap: Record<string, any> = { Globe, Smartphone, Search, Bot, Server, Lightbulb };

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-darkNavy/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-16">
          خدمات <span className="text-purpleGlow">تخصصی</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl group hover:border-electricBlue/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-electricBlue/10 rounded-full blur-2xl group-hover:bg-electricBlue/20 transition-all" />
                <Icon className="w-12 h-12 text-electricBlue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-softGray group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 bg-purpleGlow rounded-full ml-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
