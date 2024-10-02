import { NextPage } from 'next'
import { SparklesCore } from './ui/sparkles';
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import TechStack from './tech-stack';

interface Props {

}

const Landing: NextPage<Props> = ({}) => {
  return (
        <section id="hero">
          <div className="h-full py-5 md:py-14">
            <div className="z-10 flex flex-col">
              <div className="mt-10 grid grid-cols-1 md:mt-20">
                <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
                  <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                    <h1
                      className={cn(
                        "text-black dark:text-white",
                        "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                        "text-left tracking-tighter text-balance md:text-center font-semibold",
                        "md:text-7xl lg:text-7xl sm:text-7xl text-5xl",
                      )}
                    >
       
                    Digital Wallet for Everyday Payments
              
                    </h1>
                  </div>
    
                  <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                  Our app allows users and merchants to securely{" "}
                    <b>add funds</b>, <b>send money</b>, <b>manage transactions</b>, and{" "}
                    <b>receive payments</b>
                    .
                    <br />
                    anywhere, with ease and security.
                  </p>
    
                  <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                      <Link
                        href="https://github.com/spranjal3301"
                        className={cn(
                          buttonVariants({
                            variant: "default",
                            size: "lg",
                          }),
                          "gap-2 whitespace-pre md:flex",
                          "group relative w-full gap-1 rounded-xl text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50",
                        )}
                      >
                        Source Code
                        <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/home"
                        className={cn(
                          buttonVariants({
                            size: "lg",
                            variant: "outline",
                          }),
                          "gap-2 whitespace-pre md:flex",
                          "group relative w-full gap-1 overflow-hidden rounded-xl text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black ",
                        )}
                      >
                        Get Started
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
                    "nextjs",
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

export default Landing