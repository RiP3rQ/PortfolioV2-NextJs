import Link from "next/link";
import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Path from "@/components/path";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "@/components/themeToogle";

export default function Home() {
  return (
    <main
      className=" h-screen overflow-scroll overflow-x-hidden scrollbar z-30
      scrollbar-track-gray-400/20 scrollbar-thumb-[#8950ff]/80 relative"
    >
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section id="hero" className="w-full min-h-screen bg-transparent">
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about" className="w-full min-h-screen bg-transparent">
        <About />
      </section>
      {/* PATH */}
      <section id="path" className="w-full min-h-screen bg-transparent">
        <Path />
      </section>
      {/* SKILLS */}
      <section id="skills" className="w-full min-h-screen bg-transparent">
        <Skills />
      </section>
      {/* ALL PROJECTS */}
      <section id="projects" className="w-full min-h-screen bg-transparent">
        <Projects />
      </section>
      {/* CONTACT ME */}
      <section id="contact" className="w-full min-h-screen bg-transparent">
        <Contact />
      </section>

      <footer className="sticky bottom-5 w-full z-50">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <div
              className="h-12 w-8 rounded-full filter hover:bg-[#2a0e61] cursor-pointer 
            border border-white flex items-center justify-center bg-gray-300"
            >
              <ArrowLongUpIcon className="h-8 w-8 text-white" />
            </div>
          </Link>
        </div>
      </footer>

      <div className="fixed bottom-4 right-6 z-50">
        <ModeToggle />
      </div>
    </main>
  );
}
