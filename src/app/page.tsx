import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Portfolio />
      {/* می‌توانید بخش‌های About, Services, Timeline, Pricing را به همین ترتیب اضافه کنید */}
      <Contact />
      
      <footer className="py-8 text-center text-softGray text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} مجید فکرمند. تمامی حقوق محفوظ است.</p>
        <p className="mt-2 text-xs">طراحی و توسعه با ❤️ و Next.js</p>
      </footer>
    </main>
  );
}
