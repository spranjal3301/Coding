"use client";
import { NextPage } from 'next'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"


interface Props {
    children: React.ReactNode
}

const Providers: NextPage<Props> = ({children}) => {
  return (
    <>
    <NextThemesProvider 
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
    >
        {children}
    </NextThemesProvider>
    </>
  )
}

export default Providers