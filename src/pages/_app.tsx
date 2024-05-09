import React, { createContext } from "react";
import type { AppProps } from "next/app";
import { Navbar } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import { useRouter } from "next/router";

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
  playHomeAnimation: boolean;
  setPlayHomeAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // State
  //--------------------------------------------------------------------------

  const [appColor, setAppColor] = React.useState({
    background: "#fff",
    text: "#000",
  });
  const [playHomeAnimation, setPlayHomeAnimation] = React.useState(true);
  // Render
  //--------------------------------------------------------------------------
  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          appColor,
          setAppColor,
          playHomeAnimation,
          setPlayHomeAnimation,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={router.pathname}>
            <Navbar />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </AppContext.Provider>
    </React.Fragment>
  );
}
