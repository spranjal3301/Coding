"use client";
import React from "react";

import { cn } from "@/lib/utils";
interface AnimatedHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any;
}

export function AnimatedHoverButton({
  children,
  className,
  icon,
  ...props
}: AnimatedHoverButtonProps) {
  return (
    <div className="container flex flex-col justify-center items-center ">
      <button
        className={cn(
          "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
          "bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn"
        )}
      >
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          {children}
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          {icon ?? "🖕🏻"}
        </div>
      </button>
    </div>
  );
}
