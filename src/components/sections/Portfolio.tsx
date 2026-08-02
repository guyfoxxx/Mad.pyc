"use client";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";
import { ExternalLink, Folder } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          نمونه <span className="text-purpleGlow">کارها</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(176,38,255,0.15)] transition-all duration-300"
            >
              <div className="h-48 bg-darkNavy relative overflow-hidden">
                {/* Placeholder for image, in real project use next/image with unoptimized */}
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlack to-transparent z-10" />
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Folder className="w-16 h-16 text-softGray/50" />
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-medium text-electricBlue mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-electricBlue transition-colors">{project.title}</h3>
                <p className="text-softGray mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded-md text-softGray">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={`/projects/${project.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-electricBlue transition-colors"
                >
                  مشاهده جزئیات پروژه
                  <ExternalLink className="w-4 h-4 mr-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
