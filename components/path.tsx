"use client";

import PathCard from "./pathCard";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { paths } from "@/lib/data";

const Path = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row
       max-w-7xl xl:px-10 justify-center mx-auto items-center xl:space-y-0 mb-[600px] md:mb-96"
    >
      <h3
        className="absolute top-24 uppercase tracking-[10px] text-[#8950ff] dark:text-white 
      text-xl sm:text-3xl lg:text-5xl"
      >
        Moja ścieżka
      </h3>

      <h4
        className="absolute top-40 uppercase tracking-[3px] text-gray-500 
        text-xs sm:text-sm lg:text-base"
      >
        Główne technologie, które opanowałem do tej pory
      </h4>

      <div className="absolute top-56 left-0 right-0 flex flex-col flex-1">
        <VerticalTimeline lineColor="white">
          {paths?.map((path, index) => (
            <PathCard key={index} path={path} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Path;
