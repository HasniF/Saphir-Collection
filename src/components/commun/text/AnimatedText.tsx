/*
| Developed by Hasni
| Filename: AnimatedText.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AnimatedTextProps {
  children?: React.ReactNode;
  text: string;
  className: string;
}
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const variants = {
  initial: { y: 200 },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.05,
    },
  }),
  exit: (i: number) => ({
    y: 200,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
      delay: i * -0.06,
      // play animation in reverse
    },
  }),
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <span
      style={{
        display: "block",
        overflow: "hidden",
        lineHeight: "1.2",
      }}
    >
      {text.split("").map((letter, index) => (
        <span key={index}>
          <motion.span
            className={className}
            variants={variants}
            custom={index}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
