/*
| Developed by Hasni
| Filename: Bag.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
import { AnimatedText, Cross, MotionButton } from "..";
import { Card } from "./Card";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface BagProps {
  children?: React.ReactNode;
  openBag: boolean;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Bag: React.FC<BagProps> = ({ openBag, setOpenBag }) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { delay: 1.5 },
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.6)",
        zIndex: 5,
        overflowY: "hidden",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      //   onClick={() => setOpenBag(false)}
    >
      <motion.div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "35%",
          minHeight: "200%",
          background: "#fff",
          zIndex: 10,
          padding: "3rem 3rem",
        }}
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
        }}
        exit={{
          x: "100%",
          transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.8 },
        }}
      >
        <h3
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            fontFamily: "Satoshi",
            textAlign: "center",
          }}
        >
          <AnimatedText text="Bag" />
        </h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <div
          style={{
            textAlign: "right",
            margin: "1.5rem 0",
          }}
        >
          <p
            style={{
              fontFamily: "Satoshi",
              fontWeight: 400,
              fontSize: "1.2rem",
            }}
          >
            TOTAL : 1000€
          </p>
        </div>
        <MotionButton text="Checkout" />
      </motion.div>
      {/* Corss */}
      <motion.div
        onClick={() => setOpenBag(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.5 },
        }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.6, delay: 0.2 } }}
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          cursor: "pointer",
          zIndex: 10,
          width: "1.5rem",
        }}
      >
        <Cross />
      </motion.div>
    </motion.div>
  );
};
