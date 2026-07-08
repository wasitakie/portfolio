import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <footer className="py-8 text-center border-t border-zinc-900">
        <p className="text-gray-500 text-sm">
          Designed & Built by Wasita Tan &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
