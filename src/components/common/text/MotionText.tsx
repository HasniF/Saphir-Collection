/*
| Developed by Hasni
| Filename: MotionText.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MotionTextProps {
  children?: React.ReactNode;
  delay?: number;
  text: string;
  lineHeigh?: number;
}

/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const spanStyle = {
  display: "block",
  overflow: "hidden",
};
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const spanVariants = {
  initial: { y: 150 },
  animate: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
  exit: (i: number) => ({
    y: 150,
    transition: {
      delay: 0.08,
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MotionText: React.FC<MotionTextProps> = ({
  text,
  lineHeigh,
  delay,
}) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      {text.split("\n").map((letter, index) => (
        <span
          key={index}
          style={{
            ...spanStyle,
            lineHeight: lineHeigh ? lineHeigh : 1.2,
          }}
        >
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={delay ? index + delay : index}
            style={{
              ...spanStyle,
              lineHeight: lineHeigh ? lineHeigh : 1.2,
            }}
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </>
  );
};
