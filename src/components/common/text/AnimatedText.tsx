/*
| Developed by Hasni
| Filename: AnimatedText.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { TargetAndTransition, motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AnimatedTextProps {
  children?: React.ReactNode;
  text: string;
  delay?: number;
  className?: string;
  variants?: {
    initial: TargetAndTransition;
    animate: (i: number) => TargetAndTransition;
    exit: (i: number) => TargetAndTransition;
  };
}
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const variantsDefault = {
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
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.03,
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
  variants,
  delay,
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
            variants={variants || variantsDefault}
            custom={delay ? index + delay : index}
            animate="animate"
            initial="initial"
            exit="exit"
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
