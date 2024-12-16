import React from "react";
import { ThemeProvider } from "./theme-provider";



interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background  antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Providers;
