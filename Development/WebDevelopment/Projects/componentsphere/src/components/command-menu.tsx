"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
    CircleIcon,
    FileIcon,
    LaptopIcon,
    MoonIcon,
    SunIcon,
  } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command";
import { NextPage } from 'next'

interface Props {}

const CommandMenu: NextPage<Props> = ({}) => {
  return <div></div>
}

export default CommandMenu