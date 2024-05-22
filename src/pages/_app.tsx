import React, { createContext } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/product.css";
import { Navbar } from "@/components";

/*
|--------------------------------------------------------------------------
| App Context
|--------------------------------------------------------------------------
*/
export interface AppContextType {
  playHomeAnimation: boolean;
  setPlayHomeAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function App({ Component, pageProps, router }: AppProps) {
  // State
  //--------------------------------------------------------------------------

  const [playHomeAnimation, setPlayHomeAnimation] = React.useState(true);
  // Render
  //--------------------------------------------------------------------------
  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          playHomeAnimation,
          setPlayHomeAnimation,
        }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AppContext.Provider>
    </React.Fragment>
  );
}
