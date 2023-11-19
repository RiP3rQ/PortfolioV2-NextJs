import Link from "next/link";
import { useEffect, useState } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Path from "@/components/path";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "@/components/themeToogle";

export default function Home() {
  return (
    <main
      className="dark:bg-[#030014] dark:text-white bg-slate-200 text-gray-700  h-screen overflow-scroll 
    z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative"
    >
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about">
        <About />
      </section>
      {/* PATH */}
      <section id="path">
        <Path />
      </section>
      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>
      {/* ALL PROJECTS */}
      <section id="projects">
        <Projects />
      </section>
      {/* CONTACT ME */}
      <section id="contact">
        <Contact />
      </section>

      <footer className="sticky bottom-5 w-full">
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
