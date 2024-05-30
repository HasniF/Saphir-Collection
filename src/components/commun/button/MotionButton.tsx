/*
| Developed by Hasni
| Filename: Button.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ButtonProps {
  children?: React.ReactNode;
  text: string;
  onClick?: () => void;
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const style = {
  container: {
    position: "relative",
    width: "100%",
  } as React.CSSProperties,
  btn: {
    minWidth: "fit-content",
    width: "100%",
    height: "3rem",
    backgroundColor: "black",
    border: "none",
    color: "white",
    fontFamily: "satoshi ,sans-serif",
    fontWeight: "300",
    fontSize: "1rem",
    textTransform: "uppercase",
    cursor: "pointer",
    overflow: "hidden",
  } as React.CSSProperties,
  slider: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: "1",
    transformOrigin: "right",
  } as React.CSSProperties,
};
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const slider = {
  initial: { scaleX: 1 },
  animate: {
    scaleX: 0,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    scaleX: 1,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 0.6,
    },
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MotionButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <div style={style.container}>
      <button style={style.btn} onClick={onClick}>
        {text}
      </button>
      <motion.div
        style={style.slider}
        variants={slider}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </div>
  );
};
