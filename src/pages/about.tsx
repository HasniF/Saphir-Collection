/*
| Developed by Hasni
| Filename: about.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useRef } from "react";
import { NextPage } from "next";
import { Page } from "@/components";
import Image from "next/image";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MotionImage = motion(Image);
const About: NextPage = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({ target: element });

  const position = useTransform(scrollYProgress, [0, 1], [50, -90]);
  // Render
  //--------------------------------------------------------------------------
  return (
    <Page>
      <h1>About</h1>
      <div
        ref={element}
        style={{
          width: "100vw",
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 550,
            height: 550,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MotionImage
            src="/images/lookbook/1.jpg"
            fill
            alt="lookbook"
            style={{ objectFit: "cover", y: position }}
          />
        </div>
      </div>
    </Page>
  );
};
export default About;
