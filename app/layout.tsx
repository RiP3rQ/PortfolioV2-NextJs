import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import StarsCanvas from "@/components/heroBackgroundStars";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RiP3rQ Portfolio",
  description: "Created by RiP3rQ using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "dark:bg-[#030014] dark:text-white bg-slate-200 text-gray-700"
        )}
      >
        <div className="min-h-screen w-full relative">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* MIDDLE NAVBAR BLACKHOLE */}
            <div className="w-full h-full flex flex-col absolute top-[-430px] opacity-0 dark:opacity-100 z-10">
              <video
                autoPlay
                muted
                loop
                className="rotate-180 w-full h-full object-cover"
              >
                <source src="/blackhole.webm" type="video/webm" />
              </video>
            </div>
            <StarsCanvas />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
