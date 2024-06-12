/*
| Developed by Hasni
| Filename: Bag.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
import { AnimatedText, Cross, MotionButton, MotionText } from "..";
import { Card } from "./Card";
import { BagType, StyleType } from "@/contract";
import { useRouter } from "next/router";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface BagProps {
  children?: React.ReactNode;
  setOpenBag: React.Dispatch<React.SetStateAction<boolean>>;
  bag: BagType[];
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const style: StyleType = {
  container: {
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
  },
  wrapper: {
    position: "fixed",
    right: 0,
    top: 0,
    width: "35%",
    height: "100%",
    background: "#fff",
    zIndex: 10,
    padding: "1.5rem 3rem",
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    fontFamily: "Satoshi",
    textAlign: "center",
  },
  emtyContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  firstParagraph: {
    fontFamily: "Satoshi",
    fontWeight: 400,
    textTransform: "uppercase",
    fontSize: "2.5rem",
  },
  lastParagraph: {
    fontFamily: "Satoshi",
    fontWeight: 200,
    fontSize: "1rem",
  },
  corss: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    cursor: "pointer",
    zIndex: 10,
    width: "1.5rem",
  },
};

/*
|--------------------------------------------------------------------------
| Animations
|--------------------------------------------------------------------------
*/
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, trasnition: { duration: 0.3 } },
  exit: {
    opacity: 0,
    transition: { delay: 1.5, duration: 0.3 },
  },
};

const wrapperVariants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.8 },
  },
};

const corssVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.5 },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.6, delay: 0.2 } },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Bag: React.FC<BagProps> = ({ setOpenBag, bag }) => {
  const router = useRouter();
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div
      style={style.container}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div style={style.wrapper} variants={wrapperVariants}>
        <h3 style={style.title}>
          <AnimatedText text="Bag" />
        </h3>
        {bag.length > 0 ? (
          <React.Fragment>
            {bag.map((item) => (
              <Card key={item.id} item={item} />
            ))}
            <div style={{ textAlign: "right", margin: "1.5rem 0" }}>
              <p
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                }}
              >
                <AnimatedText
                  text={`TOTAL : ${bag
                    .reduce((acc, item) => acc + item.price, 0)
                    .toFixed(2)} €`}
                />
              </p>
            </div>
            <MotionButton
              text="Checkout"
              onClick={() => router.push("/contact")}
            />
          </React.Fragment>
        ) : (
          <div style={style.emtyContainer}>
            <p style={style.firstParagraph}>
              <MotionText text="Your bag is empty" delay={9} />
            </p>
            <p style={style.lastParagraph}>
              <MotionText text="Please add some items" delay={9} />
            </p>
          </div>
        )}
      </motion.div>
      {/* Corss */}
      <motion.div
        onClick={() => setOpenBag(false)}
        style={style.corss}
        variants={corssVariants}
      >
        <Cross />
      </motion.div>
    </motion.div>
  );
};
