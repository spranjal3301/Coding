import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TechStack from "@/components/tech-stack";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BackgroundPaths from "./background-paths";

export default async function Hero() {
  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 md:py-14">
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">

              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1
                  className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                    "text-balance text-left font-semibold tracking-tighter md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
                  )}
                >
                  UI library for Design Engineers
                </h1>
              </div>

              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                50+ free and open-source animated components built with{" "}
                <b>React</b>, <b>Typescript</b>, <b>Tailwind CSS</b>, and{" "}
                <b>Framer Motion</b>
                .
                <br />
                Perfect companion for <b>shadcn/ui</b>.
              </p>

              <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  <Link
                    href="/components"
                    className={cn(
                      buttonVariants({
                        variant: "rainbow",
                        size: "lg",
                      }),
                      "w-full gap-2",
                    )}
                  >
                    Browse Components
                    <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "rainbow-outline",
                      }),
                      "w-full gap-2",
                    )}
                  >
                    Browse Templates
                    <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-56 items-center justify-center">
            <TechStack
              className="mx-auto flex w-full items-center justify-between"
              technologies={[
                "react",
                "typescript",
                "tailwindcss",
                "framermotion",
                "shadcn",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero1 () {
  return <BackgroundPaths />
}