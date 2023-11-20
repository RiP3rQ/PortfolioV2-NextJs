"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Paths } from "../typings";
import { useEffect, useState } from "react";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  path: Paths;
};

const PathCard = ({ path }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <VerticalTimelineElement
      visible={true}
      key={path?.title}
      id={path?.title}
      contentStyle={{ background: "rgb(148 163 184 / 0.1)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(148 163 184 / 0.1)" }}
      date={`${path?.startingDate} - ${path?.endingDate}`}
      iconStyle={{ background: "rgb(148 163 184 / 0.1)" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={path?.image}
            alt="framework_logo"
            className="w-full h-full rounded-full object-contain z-50 bg-slate-600"
          />
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{path?.title}</h3>
        <p
          className="text-[#8950ff] text-lg font-semibold"
          style={{ margin: 0 }}
        >
          {path?.description}
        </p>
        <div
          className="sm:flex sm:flex-row sm:items-center sm:justify-center space-x-1 
        grid grid-cols-10"
        >
          {path?.technologies?.map((tech, index) => (
            <img
              key={index}
              src={tech.image}
              alt="tech_img"
              className="h-8 w-8 object-contain rounded-full"
            />
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default PathCard;
