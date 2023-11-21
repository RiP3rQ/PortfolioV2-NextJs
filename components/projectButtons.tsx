"use client";

import { Projects } from "@/typings";
import React, { useEffect, useState } from "react";
import {
  CodeBracketIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
  project: Projects;
}

const ProjectButtons = ({ project }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full h-full relative hidden group-hover:flex  items-center justify-center rounded-lg space-x-3 text-white">
      <Link
        href={project.linkToGithub}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:bg-[#8950ff] bg-gray-400 w-28 h-28 rounded-full flex flex-col items-center justify-center cursor-pointer"
      >
        <CodeBracketIcon className="w-10 h-10 " />
        <p className="text-xs">Kod źródłowy</p>
      </Link>
    </div>
  );
};

export default ProjectButtons;
