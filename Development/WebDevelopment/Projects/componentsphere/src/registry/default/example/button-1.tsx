"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useEffect } from "react";



export default function Btn1Demo({}) {
    return (
        <Btn1 link="/login" actionBtn="L">Login</Btn1>
    )
}

interface Props {
    className?: string;
    children: React.ReactNode;
    actionBtn?:string;
    link:string;
}

const Btn1: NextPage<Props> = ({children,actionBtn,link}) => {
  return (
    <Link href={link}>
      <Button variant="outline" className="gap-2">
        {children}
        <KBtn className="hidden md:block" backlit={true} actionBtn={actionBtn}>
          <span className="block">{actionBtn}</span>
        </KBtn>
      </Button>
    </Link>
  );
};

const KBtn = ({
  className,
  children,
  childrenClassName,
  actionBtn,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  actionBtn?:string; 
  backlit?: boolean;
}) => {
  const router = useRouter();
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === actionBtn?.toLowerCase() &&
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
