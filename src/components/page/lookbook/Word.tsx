/*
| Developed by Hasni
| Filename: Word.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const opacitySmooth = useSpring(opacity, { stiffness: 800, damping: 100 });
  // Render
  //--------------------------------------------------------------------------
  return (
    <span className="span_container">
      <span className="span_absolute">{children}</span>
      <motion.span style={{ opacity: opacitySmooth }}>{children}</motion.span>
    </span>
  );
};
