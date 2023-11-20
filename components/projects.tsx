"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";
import { projects } from "@/lib/data";
import { Projects } from "../typings";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-[#8950ff] dark:text-white text-5xl">
        Projekty
      </h3>

      {/* Project Cards */}
      <div
        className="absolute top-56 bottom-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8950ff]/80 text-center"
      >
        {projects?.map((project: Projects, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Background */}
      <div className="w-full absolute top-[30%] bg-[#50adff]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
