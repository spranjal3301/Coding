import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Modal } from "./ui/animated-modal";



interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center  scroll-smooth bg-background antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Modal>
        {children}
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default Providers;
