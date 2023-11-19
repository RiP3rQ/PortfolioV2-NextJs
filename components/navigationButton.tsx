import React from "react";
import { Button } from "./ui/button";

interface Props {
  text: string;
  href: string;
  navigate: (id: string) => () => void;
}

const NavigationButton = ({ text, href, navigate }: Props) => {
  return (
    <Button
      onClick={navigate(href)}
      variant={"ghost"}
      className="hover:bg-[#2a0e61]"
    >
      {text}
    </Button>
  );
};

export default NavigationButton;
