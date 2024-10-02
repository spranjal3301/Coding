"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconClock,
  IconHome,
  IconMoneybag,
  IconTransfer,
  IconBrandCashapp,
  IconWallet,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../lib/utils";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import SpinnerWithStyles from "./loader";


export function  SidebarLayout({ children }: { children: React.ReactNode }) {

  const [name, setName]:[String,any] = useState("");
  const [image, setImage]:[string,any] = useState("");
  const [open, setOpen] = useState(false);
  const links = [
    {
      label: "Home",
      href: "/home",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Transfer",
      href: "/transfer",
      icon: (
        <IconBrandCashapp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add money",
      href: "/add-money",
      icon: (
        <IconMoneybag className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: (
        <IconClock className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      event: () => signOut(),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const sess = await getSession();
      setName(sess?.user?.name);
      setImage(sess?.user?.image);
    };
    fetchData();
  })

  return (
    <div
      className={cn(
        "flex flex-col border-none md:flex-row w-full flex-1 border overflow-hidden",
        "h-screen" // full screen height
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="w-full justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}          
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: name,
                href: "#",
                icon: (
                  image === "" ? <IconWallet className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> :
                  <Image src={image} alt="User Image" className="h-7 w-7 flex-shrink-0 rounded-full" width={50}  height={50}/>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
      <div className="p-4 md:p-8 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col gap-2 flex-1 w-full h-full">
        {children}
      </div>
    </div>
 
    </div>
  );
}


export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <div className="flex justify-start">
        <IconWallet className="text-black dark:text-white h-5 w-6 flex-shrink-0" />
          Wallet Wave
        </div>
      </motion.span>
    </Link> 
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <IconWallet className="text-black dark:text-white h-5 w-6 flex-shrink-0" />
    </Link>
  );
};






