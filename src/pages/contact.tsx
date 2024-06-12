/*
| Developed by Hasni
| Filename: contact.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { NextPage } from "next";
import { AnimatedText, MotionText, MyHead, Page } from "@/components";
import { motion } from "framer-motion";
import { getBemClassName } from "@/utils";
import { StyleType } from "@/contract";
/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const styleBem = getBemClassName("contact", ["span"]);

const style: StyleType = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 4.68rem)",
    width: "100vw",
  },
  introText: {
    marginTop: "10vh",
    fontSize: "2.5vw",
    fontFamily: "Satoshi, sans-serif",
    fontWeight: 300,
    textAlign: "center",
  },
  paragraphWrapper: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    overflow: "hidden",
    width: "100%",
    whiteSpace: "nowrap",
  },
  paragraph: {
    userSelect: "none",
    fontSize: "8vw",
    fontFamily: "Satoshi , sans-serif",
    fontWeight: 500,
    textTransform: "uppercase",
  },
  socialMediasContainer: {
    position: "absolute",
    bottom: "5vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 3.5rem",
  },
  socialMediasWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
  },
  socialMediasWrapperTwo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "end",
    gap: "3rem",
  },
};

/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const motionFooter = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.6,
      duration: 0.6,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

const motionWord = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      duration: 11,
      ease: "linear",
      repeat: Infinity,
      delay: 2.8,
    },
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
    <>
      <MyHead currentPath="Contact">
        <meta property="og:image" content="/images/lookbook/0.jpg" />
      </MyHead>
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
                variants={motionWord}
                animate="animate"
              >
                <AnimatedText
                  text={`Saphir✨elegance✨Chic✨Unique✨`}
                  delay={19}
                />
              </motion.p>
            ))}
          </div>
          {/* Contact & social medias */}
          <motion.div
            style={style.socialMediasContainer}
            variants={motionFooter}
            initial="initial"
            animate="animate"
          >
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
    </>
  );
};
export default Contact;
