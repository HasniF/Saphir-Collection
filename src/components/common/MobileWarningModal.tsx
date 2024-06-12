/*
| Developed by Hasni
| Filename: MobileWarningModal.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useEffect, useRef, useState } from "react";
import { AnimatedText, MotionText } from ".";
import { motion } from "framer-motion";
import { StyleType } from "@/contract";

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MobileWarningModal: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.clientHeight);
    }
  }, []);

  // Style
  //--------------------------------------------------------------------------

  const style: StyleType = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.8)",
      zIndex: -1,
      overflowY: "hidden",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      position: "fixed",
    },
    modal: {
      width: "90%",
      height: "50%",
      background: "rgba(255,255,255,1)",
      padding: "2rem",
      borderRadius: "1rem",
      position: "relative",
    },
    title: {
      fontSize: "2.75rem",
      fontFamily: "Ambidexter, serif",
      textAlign: "center",
    },
    paragraph: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "1rem",
      textAlign: "center",
      position: "absolute",
      top: `calc(50% + ${titleHeight / 2}px)`,
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
    },
  };
  // Render
  //--------------------------------------------------------------------------
  return (
    <div style={style.container}>
      <motion.div
        style={style.modal}
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.87, 0, 0.13, 1],
        }}
      >
        <h1 ref={titleRef} style={style.title}>
          <AnimatedText text="Saphir" />
        </h1>
        <p style={style.paragraph}>
          <MotionText
            text={`This site has been designed for use on larger \n devices to provide a better user experience. \n Please visit us on a desktop or laptop computer. \n Thank you !`}
            lineHeigh={1.7}
            delay={6.8}
          />
        </p>
      </motion.div>
    </div>
  );
};
