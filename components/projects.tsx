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
      className="min-h-screen"
    >
      <h3
        className="uppercase tracking-[10px] text-[#8950ff] dark:text-white text-5xl w-full 
      text-center mb-10"
      >
        Projekty
      </h3>

      {/* Project Cards */}
      <div className="z-20 flex flex-col items-center justify-center sm:space-y-6 mb-auto w-full">
        {projects?.map((project: Projects, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Background */}
      {/* <div className="w-full absolute top-[30%] bg-[#50adff]/10 left-0 h-[500px] -skew-y-12" /> */}
    </motion.div>
  );
};

export default Projects;
