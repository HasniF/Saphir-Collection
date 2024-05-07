import React, { createContext } from "react";
import type { AppProps } from "next/app";
import { Navbar } from "@/components";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

/*
|--------------------------------------------------------------------------
| App Context
|--------------------------------------------------------------------------
*/
export interface AppContextType {
  appColor: {
    background: string;
    text: string;
  };
  setAppColor: React.Dispatch<
    React.SetStateAction<{
      background: string;
      text: string;
    }>
  >;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  // State
  //--------------------------------------------------------------------------

  const [appColor, setAppColor] = React.useState({
    background: "#fff",
    text: "#000",
  });
  // Render
  //--------------------------------------------------------------------------
  return (
    <React.Fragment>
      <AppContext.Provider value={{ appColor, setAppColor }}>
        <AnimatePresence mode="wait">
          <Navbar />
          <Component {...pageProps} />
        </AnimatePresence>
      </AppContext.Provider>
    </React.Fragment>
  );
}
