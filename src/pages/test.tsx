/*
| Developed by Hasni
| Filename: MyPage.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
/*

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MyPage: NextPage = () => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.5, ease: [0.5, 1, 0.89, 1], duration: 0.8 }}
      >
        HELLO TEST
      </motion.h1>
    </div>
  );
};
export default MyPage;
