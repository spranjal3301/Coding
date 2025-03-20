"use client"
import { NextPage } from 'next'
import Logo from "../logo";
import Itmes from "./sidebar-itmes";
import { Separator } from "../../ui/separator";
import { HelpDuoToneWhite } from "@/icons";
import ClerkAuthState from "./clerk-auth-state";
import SubscriptionPlan, { UpgradeCard } from "@/components/global/dashboard-layout/subscription";
import SidebarToggle from './sidebar-toggle';
import useSidebar from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';

interface Props {
    slug: string;
    page: string;
    onItemClick?: () => void;
    className?:string;
}

const SidebarContent: NextPage<Props> = ({page ,slug,onItemClick,className}) => {
  const {isSidebarOpen} = useSidebar();

  return (
    <div
        className={cn(
          "flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e]  bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl pb-10 rounded-xl  ",
          className
        )}
      >
        <div className={cn("flex items-center scale-90",
          isSidebarOpen ? "gap-x-2 py-5 px-3" : "py-2",
        )}>
          <SidebarToggle/>
          <Logo className={cn("h-7",
            "transition-[transform,opacity,display] ease-in-out duration-300",
            isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0 hidden"
          )} />
        </div>

        <div className="flex flex-col py-3">
          <Itmes page={page} slug={slug} onItemClick={onItemClick}/>
        </div>

        <div className={cn("",
            isSidebarOpen ? "px-16" : "flex justify-center items-center" ,
         )}>
            {
              isSidebarOpen ?
              (<Separator
                orientation="horizontal"
                className="bg-[#333336] "
            /> ) :
              (<Ellipsis className="h-5 w-5 text-[#cbcbcb]" />)
            }
        </div>

        <div className={cn("flex flex-col gap-y-5",
              isSidebarOpen ? "px-3" : "" ,
            )} >

          <div className={cn("flex ",
              isSidebarOpen ? "gap-x-2" : "justify-center" ,
            )} >
            <ClerkAuthState />
            <p className={cn("text-[#9B9CA0] text-sm",
              isSidebarOpen ? "" : "hidden" ,
            )}>
              Profile
            </p>
          </div>
          
          <Link href={"/help"} className={cn("flex ",
              isSidebarOpen ? "gap-x-3" : "justify-center" ,
            )} >
            <HelpDuoToneWhite />
            <p className={cn("text-[#9B9CA0] text-sm",
              isSidebarOpen ? "" : "hidden" ,
            )}>
              Help
            </p>
          </Link>
        </div>


        <SubscriptionPlan >
          <div
            className={cn("hidden md:flex flex-1 flex-col justify-end ",
              isSidebarOpen ? "" : "md:hidden" ,
            )} 
         >
            <UpgradeCard/>
          </div>
        </SubscriptionPlan>  


      </div>
  );
}

export default SidebarContent