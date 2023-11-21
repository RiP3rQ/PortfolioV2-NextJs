"use client";

import { Projects } from "../typings";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectButtons from "./projectButtons";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div
        className="bg-gray-300 hover:bg-gray-200 max-w-4xl border border-[#8950ff] rounded-lg overflow-hidden transition
       dark:text-white dark:bg-white/10 dark:hover:bg-white/20 grid grid-cols-2 relative"
      >
        <div className="pt-4 pb-7 px-5 flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 mb-2 leading-relaxed text-gray-700 dark:text-white/70">
            {project.summary}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.technologies.map((tech, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tech.title}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={project.imageThumbnail}
          alt="Project I worked on"
          className="absolute hidden sm:block top-0 left-[500px] rounded-t-lg w-full h-full
            object-fill transition mt-4
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            [&>*:nth-child(5)]:h-[800px]
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2"
        />

        {/* Github and modal popup buttons */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <ProjectButtons project={project} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
