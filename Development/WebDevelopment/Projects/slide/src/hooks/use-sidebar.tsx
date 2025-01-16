'use client'
import React, { createContext, useContext, useState } from 'react'


type SidebarContextType = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({children}:{children:React.ReactNode}){
    const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(true);
    return (
        <SidebarContext.Provider value={{isSidebarOpen,setIsSidebarOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}

function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
      throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}

export default useSidebar