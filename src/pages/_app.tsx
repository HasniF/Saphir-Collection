import React, { createContext, useEffect } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Bag, MobileWarningModal, Navbar } from "@/components";
import { ReactLenis } from "lenis/react";
import { BagType } from "@/contract";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/product.css";
import "@/styles/lookbook.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/*
|--------------------------------------------------------------------------
| App Context
|--------------------------------------------------------------------------
*/
export interface AppContextType {
  bag: BagType[];
  setBag: React.Dispatch<React.SetStateAction<BagType[]>>;
  openBag: boolean;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export default function App({ Component, pageProps, router }: AppProps) {
  // State
  //--------------------------------------------------------------------------
  const [bag, setBag] = React.useState<BagType[]>([]);
  const [openBag, setOpenBag] = React.useState(false);
  const isMobile = useMediaQuery(768);

  // Effect
  //--------------------------------------------------------------------------
  useEffect(() => {
    if (openBag) setOpenBag(false);
  }, [router.route]);

  useEffect(() => {
    const storageBag = localStorage.getItem("bag");
    if (storageBag !== null && JSON.parse(storageBag).length > 0)
      setBag(JSON.parse(storageBag) as BagType[]);
  }, []);

  useEffect(() => localStorage.setItem("bag", JSON.stringify(bag)), [bag]);

  // Render
  //--------------------------------------------------------------------------
  return (
    <React.Fragment>
      {!isMobile ? (
        <AppContext.Provider
          value={{
            bag,
            setBag,
            openBag,
            setOpenBag,
          }}
        >
          <Navbar itemsCount={bag.length} />
          <AnimatePresence mode="wait">
            {openBag && <Bag setOpenBag={setOpenBag} bag={bag} />}
          </AnimatePresence>
          <ReactLenis root options={{ lerp: 0.05 }}>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </ReactLenis>
        </AppContext.Provider>
      ) : (
        <MobileWarningModal />
      )}
    </React.Fragment>
  );
}
