"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ViewAll ()  {
    return (
      <Link href={"/transactions"} className="text-blue-600 text-sm font-medium flex items-center">
        View all
        <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    );
  };