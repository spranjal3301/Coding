"use client";
import { NextPage } from "next";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@/components/analytics";

interface Props {
  children: React.ReactNode;
}

const Providers: NextPage<Props> = ({ children }) => {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          {children}
          <Toaster />
          <Analytics />
        </TooltipProvider>
      </NextThemesProvider>
    </>
  );
};

export default Providers;
