"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, NavFeatureCard, ProductItem } from "./ui/navbar-menu";
import Image from "next/image";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="w-full md:flex items-center justify-center hidden ">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="text-sm grid grid-cols-2 gap-4 p-2">
            <div className="flex flex-col justify-end p-4 rounded-xl bg-secondary/50">
              <Image src='/ai-icon.png' alt="✨" width={100} height={100}/>
              <NavFeatureCard
                title="AI-Powered Automation"
                titleClass="text-xl"
                description="Streamline your workflow with intelligent automation."
              />
            </div>
            <div className="flex flex-col space-y-2">
              <NavFeatureCard
                title="Task Automation"
                description="Automate repetitive tasks and save time."
              />
              <NavFeatureCard
                title="Workflow Optimization"
                description="Optimize your processes with AI- driven insights"
              />
              <NavFeatureCard
                title="Intelligent Scheduling"
                description="AI-powered scheduling for maximum efficiency."
              />
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>

        <HoveredLink href="/about">About</HoveredLink>
      </Menu>
    </div>
  );
}





