import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center text-electricBlue hover:underline mb-8">
          <ArrowRight className="w-4 h-4 ml-2" /> بازگشت به نمونه‌کارها
        </Link>
        
        <h1 className="text-5xl font-black mb-6">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-electricBlue">{tech}</span>
          ))}
        </div>

        <div className="glass-card p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purpleGlow">چشم‌انداز پروژه</h2>
          <p className="text-softGray text-lg leading-relaxed">{project.description}</p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-electricBlue">ویژگی‌های کلیدی</h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-center text-softGray">
                <span className="w-2 h-2 bg-electricBlue rounded-full ml-3" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
