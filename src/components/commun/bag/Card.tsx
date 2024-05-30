/*
| Developed by Hasni
| Filename: Card.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import Image from "next/image";
import React from "react";
import { AnimatedText, MotionText } from "..";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardProps {
  children?: React.ReactNode;
  image_src?: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const style = {
  container: {
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    paddingBottom: 5,
    gap: "2rem",
    margin: "1rem 0",
  },
  cardInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
  } as React.CSSProperties,
  paragraphCommon: {
    fontSize: "1rem",
    fontFamily: "Satoshi",
    fontWeight: 500,
  },
  paragraphDescription: {
    fontSize: "0.9rem",
    fontFamily: "Satoshi",
    fontWeight: 400,
    textTransform: "none",
    textAlign: "left",
  } as React.CSSProperties,
  price: {
    textAlign: "right",
    width: "100%",
  } as React.CSSProperties,
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Card: React.FC<CardProps> = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div
      style={style.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.8,
      }}
    >
      <Image
        src="/images/0.jpg"
        width={70}
        height={60}
        alt="image product"
        style={{ objectFit: "cover" }}
      />
      <div style={style.cardInfos}>
        <p style={style.paragraphCommon}>
          <AnimatedText text="Product name" delay={2} />
        </p>
        <p style={style.paragraphDescription}>
          <MotionText
            delay={5}
            text={`Lorem ipsum dolor, sit amet consectetur \n adipisicing elit.`}
          />
        </p>
        <p style={{ ...style.paragraphCommon, ...style.price }}>
          <AnimatedText text="600€" delay={6} />
        </p>
      </div>
    </motion.div>
  );
};
