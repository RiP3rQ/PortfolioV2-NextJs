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
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl xl:px-10 
    justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Moja ścieżka
      </h3>

      <h4 className="absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Główne technologie, które opanowałem do tej pory
      </h4>

      <div className="absolute top-28 left-0 right-0 flex flex-col flex-1">
        <VerticalTimeline>
          {paths?.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Path;
