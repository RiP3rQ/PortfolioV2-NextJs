"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { useMobileNavbar } from "@/hooks/use-mobile-navbar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import NavigationButton from "../navigationButton";
import Image from "next/image";
import { Separator } from "../ui/separator";

const MobileNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  const navigate = (id: string) => () => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  const onOpen = useMobileNavbar((state) => state.onOpen);
  const onClose = useMobileNavbar((state) => state.onClose);
  const isOpen = useMobileNavbar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2 text-[#808080]"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-4 w-[200px] text-center">
          <div className="h-auto w-full p-2 flex items-center justify-center">
            <Image src="/images/hero.png" alt="logo" width={40} height={50} />
            <span className="font-bold text-xl text-[#808080] ml-2">
              RiP3rQ
            </span>
          </div>
          <Separator className="my-2" />
          <NavigationButton text="O mnie" href="#about" navigate={navigate} />
          <br />
          <NavigationButton text="Ścieżka" href="#path" navigate={navigate} />
          <br />
          <NavigationButton
            text="Umiejętności"
            href="#skills"
            navigate={navigate}
          />
          <br />
          <NavigationButton
            text="Projekty"
            href="#projects"
            navigate={navigate}
          />
          <br />
          <NavigationButton
            text="Kontakt"
            href="#contact"
            navigate={navigate}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
