"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "../components/ui/toaster";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <SessionProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster />
        </NextThemesProvider>
      </SessionProvider>
    </RecoilRoot>
  );
};
