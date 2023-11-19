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
    <main className="min-h-screen w-full bg-transparent relative">
      {/* Navbar */}
      <Navbar />

      {/* MIDDLE NAVBAR BLACKHOLE */}
      <div className="w-full h-[1000px] flex flex-col opacity-0 dark:opacity-100 absolute top-0">
        <div className="h-full w-full relative">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-450px] w-full h-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="w-full min-h-screen z-40 relative">
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about" className="w-full min-h-screen z-40 relative">
        <About />
      </section>
      {/* PATH */}
      <section id="path" className="w-full min-h-screen z-40 relative">
        <Path />
      </section>
      {/* SKILLS */}
      <section id="skills" className="w-full min-h-screen z-40 relative">
        <Skills />
      </section>
      {/* ALL PROJECTS */}
      <section id="projects" className="w-full min-h-screen z-40 relative">
        <Projects />
      </section>
      {/* CONTACT ME */}
      <section id="contact" className="w-full min-h-screen z-40 relative">
        <Contact />
      </section>

      <footer className="sticky bottom-5 w-full z-50">
        <div className="flex items-center justify-center">
          <Link href="#hero" scroll={true}>
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
