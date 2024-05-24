/*
| Developed by Hasni
| Filename: Page.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PageProps {
  children: React.ReactNode;
}

/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const transition = {
  duration: 1.1,
  ease: [0.87, 0, 0.13, 1],
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Page: React.FC<PageProps> = ({ children }) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      <>{children}</>
      <motion.div
        className="in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ ...transition }}
      />
      <motion.div
        className="out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ ...transition }}
      />
    </>
  );
};
