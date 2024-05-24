/*
| Developed by Hasni
| Filename: lookBook.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/
import React from "react";
import { NextPage } from "next";
import { Page } from "@/components";
import { getBemClassName } from "@/utils";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import image1 from "../../public/images/lookbook/0.jpg";
import image2 from "../../public/images/lookbook/1.jpg";
import image3 from "../../public/images/lookbook/2.jpg";
import image4 from "../../public/images/lookbook/3.jpg";
import image5 from "../../public/images/lookbook/4.jpg";
import image6 from "../../public/images/lookbook/5.jpg";
import image7 from "../../public/images/lookbook/6.jpg";

/*
|--------------------------------------------------------------------------
| Contract
|--------------------------------------------------------------------------
*/
interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}
/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const style = getBemClassName("lookbook", ["container", "element"]);

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const text = `Saphir Collection’s LookBook where luxury and elegance unite. Our selection showcases sophisticated fashion with meticulously crafted garments made from the finest fabrics. Each piece exudes class and style, brought to life by our graceful models. Discover the exquisite designs of Saphir Collection and elevate your wardrobe with a touch of opulence. Experience high-end fashion reimagined.`;

const myText = text.split(" ");

console.log("myText", myText);
const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span style={{ margin: "0 5px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.3,
        }}
      >
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const StickyImage: React.FC<{ src: StaticImageData }> = ({ src }) => {
  const element = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: element });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          scale: scrollYProgress,
        }}
      >
        <Image
          src={src}
          alt="lookbook"
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};

const LookBook: NextPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLParagraphElement>(null);

  const images = [image1, image2, image3, image4, image5, image6];
  const stickyImages = [image7, image6, image5, image1];

  const { scrollYProgress } = useScroll({ target: ref });
  // text scroll
  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.5", "start 0.25"],
  });

  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 6.7]),
    useTransform(scrollYProgress, [0, 1], [1, 7.2]),
    useTransform(scrollYProgress, [0, 1], [1, 8.3]),
  ];

  return (
    <Page>
      <div style={{ width: "100vw" }}>
        <div className={style.container} ref={ref}>
          <div className="wrapper">
            <div className="sticky">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className={style.element}
                  style={{ scale: scales[index] }}
                >
                  <div className="image_container">
                    <Image
                      src={src}
                      alt="lookbook"
                      fill
                      placeholder="blur"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            ref={textRef}
            style={{
              fontFamily: "Satoshi",
              fontSize: "3.5vw",
              padding: "0 3%",
              fontWeight: 500,
              lineHeight: 1.6,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {myText.map((word, i) => {
              const start = i / myText.length;
              const end = start + 1 / myText.length;
              return (
                <Word
                  key={i}
                  range={[start, end]}
                  progress={textScrollYProgress}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
        {stickyImages.map((src, index) => (
          <StickyImage key={index} src={src} />
        ))}
      </div>
    </Page>
  );
};

export default LookBook;
