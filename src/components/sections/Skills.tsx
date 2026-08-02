"use client";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Cloud, Search, Network } from "lucide-react";

const skillCategories = [
  {
    title: "فرانت‌اند",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "بک‌اند",
    icon: Server,
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "RESTful APIs"],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "موبایل",
    icon: Smartphone,
    skills: ["Android", "Java", "Kotlin", "TDLib", "JNI"],
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "دواپس",
    icon: Cloud,
    skills: ["Linux", "Docker", "Cloudflare", "Git", "CI/CD"],
    color: "from-orange-500 to-red-400"
  },
  {
    title: "سئو و عملکرد",
    icon: Search,
    skills: ["Technical SEO", "Core Web Vitals", "Search Architecture", "Schema Markup"],
    color: "from-yellow-500 to-amber-400"
  },
  {
    title: "شبکه",
    icon: Network,
    skills: ["Network Administration", "Server Management", "Security Planning"],
    color: "from-indigo-500 to-violet-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-darkNavy/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          اکوسیستم <span className="text-electricBlue">تکنولوژی‌ها</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl group cursor-default"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-softGray group-hover:text-white group-hover:border-electricBlue/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
