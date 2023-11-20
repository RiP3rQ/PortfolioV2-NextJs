import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ScrollUpButton = () => {
  return (
    <Link href="#hero" scroll={true}>
      <Button variant="outline" size="icon">
        <ChevronDoubleUpIcon className="h-8 w-8 text-gray-500 dark:text-white" />
      </Button>
    </Link>
  );
};

export default ScrollUpButton;
