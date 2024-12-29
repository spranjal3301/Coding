"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useEffect } from "react";

interface Props {}

export const Testbtn2: NextPage<Props> = ({}) => {
  return (
    <Link prefetch href={"/login"}>
      <Button variant="outline" className="gap-2">
        Log in
        <KBtn className="hidden md:block" backlit={true}>
          <span className="block">L</span>
        </KBtn>
      </Button>
    </Link>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  const router = useRouter();
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "l" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        router.push("/login");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[4px] shadow-sm ",
        backlit ? "bg-white/[0.2] shadow-gray-200" : "border border-input bg-background text-foreground",
        className
      )}
    >
      <div
        className={cn(
          "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center"
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 h-9 px-4 py-2 w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};




