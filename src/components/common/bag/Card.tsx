/*
| Developed by Hasni
| Filename: Card.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import Image from "next/image";
import React from "react";
import { AnimatedText, MotionText, Trash } from "..";
import { motion } from "framer-motion";
import { BagType, StyleType } from "@/contract";
import { AppContext } from "@/pages/_app";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardProps {
  children?: React.ReactNode;
  item: BagType;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const style: StyleType = {
  container: {
    borderBottom: "1.5px solid rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    paddingBottom: 10,
    gap: "2rem",
    margin: "1rem auto",
  },
  cardInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
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
  },
  price: {
    textAlign: "right",
    width: "100%",
  },
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Card: React.FC<CardProps> = ({ item }) => {
  const context = React.useContext(AppContext);
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
        src={item.image}
        width={70}
        height={60}
        alt="image product"
        style={{ objectFit: "cover" }}
      />
      <div style={style.cardInfos}>
        <p style={style.paragraphCommon}>
          <AnimatedText text={item.name} delay={2} />
        </p>
        <p style={style.paragraphDescription}>
          <MotionText
            delay={5}
            text={`Lorem ipsum dolor, sit amet consectetur \n adipisicing elit.`}
          />
        </p>
        <p style={{ ...style.paragraphCommon, ...style.price }}>
          <AnimatedText text={`${item.price.toString()}€`} delay={6} />
        </p>
      </div>
      <div
        style={{ width: "1rem", cursor: "pointer" }}
        onClick={() =>
          context?.setBag(context.bag.filter((el) => el.id !== item.id))
        }
      >
        <Trash />
      </div>
    </motion.div>
  );
};
