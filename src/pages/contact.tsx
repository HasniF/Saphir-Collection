/*
| Developed by Hasni
| Filename: contact.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { NextPage } from "next";
import { AnimatedText, MotionText, Page } from "@/components";
import { motion } from "framer-motion";
import { getBemClassName } from "@/utils";
/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const styleBem = getBemClassName("contact", ["span"]);

const style = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 4.68rem)",
    width: "100vw",
  } as React.CSSProperties,
  introText: {
    marginTop: "10vh",
    fontSize: "2.5vw",
    fontFamily: "Satoshi, sans-serif",
    fontWeight: 300,
    textAlign: "center",
  } as React.CSSProperties,
  paragraphWrapper: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    overflow: "hidden",
    width: "100%",
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  paragraph: {
    userSelect: "none",
    fontSize: "8vw",
    fontFamily: "Satoshi , sans-serif",
    fontWeight: 500,
    textTransform: "uppercase",
  } as React.CSSProperties,
  socialMediasContainer: {
    position: "absolute",
    bottom: "5vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 3.5rem",
  } as React.CSSProperties,
  socialMediasWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
  } as React.CSSProperties,
  socialMediasWrapperTwo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "end",
    gap: "3rem",
  } as React.CSSProperties,
};

/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const variant = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 1.5,
    delay: 1,
    ease: [0.76, 0, 0.24, 1],
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Contact: NextPage = () => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <Page>
      <div style={style.container}>
        {/* Intro */}
        <p style={style.introText}>
          <MotionText
            text={`Thanks for your interest in our project ! Please note this is a demo site \n only  you cannot buy anything here.  It showcases our skills in \n web development and design.`}
            delay={5}
          />
        </p>
        {/* Animated Text */}
        <div style={style.paragraphWrapper}>
          {Array.from({ length: 2 }).map((_, index) => (
            <motion.p
              key={index}
              style={style.paragraph}
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 11,
                ease: "linear",
                repeat: Infinity,
                delay: 2.8,
              }}
            >
              <AnimatedText
                text={`Saphir✨elegance✨Chic✨Unique✨`}
                delay={19}
              />
            </motion.p>
          ))}
        </div>
        {/* Contact & social medias */}
        <motion.div style={style.socialMediasContainer}>
          <div style={style.socialMediasWrapper}>
            <span className={styleBem.span}>
              <a>hasni-fodeilla99@hotmail.com</a>
            </span>
            <span className={styleBem.span}>06 58 96 00 40</span>
          </div>
          <div style={style.socialMediasWrapperTwo}>
            <span className={styleBem.span}>
              <a>X (Twitter)</a>
            </span>
            <span className={styleBem.span}>
              <a>Linkedin</a>
            </span>
            <span className={styleBem.span}>
              <a>Github</a>
            </span>
          </div>
          <div style={style.socialMediasWrapperTwo}>
            <span className={styleBem.span}>
              <a>MADE BY : HASNI ©2024</a>
            </span>
          </div>
        </motion.div>
      </div>
    </Page>
  );
};
export default Contact;
