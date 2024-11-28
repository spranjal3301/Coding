import { NextPage } from "next";
import React from "react";
import { docsConfig } from "@/config/docs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full pr-6">
          <Sidebar items={docsConfig.sidebarNav} />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
};

export default Layout;
