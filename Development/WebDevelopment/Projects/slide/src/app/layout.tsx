import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slide',
  description: 'Automate DMs and comments on instagram',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body suppressHydrationWarning
          className={GeistSans.className}
          >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}