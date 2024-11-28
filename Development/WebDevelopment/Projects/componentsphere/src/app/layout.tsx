import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import type { Viewport } from "next";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//-TODO
export const metadata: Metadata = {
  title: "Component-Sphere",
  description: "Beautiful components and templates to make your landing page look stunning.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
