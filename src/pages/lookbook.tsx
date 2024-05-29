/*
| Developed by Hasni
| Filename: lookBook.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowUp, Page } from "@/components";
import { getBemClassName } from "@/utils";
import { StickyImage, Word } from "@/components/page";
import Image from "next/image";
import image1 from "../../public/images/lookbook/0.jpg";
import image2 from "../../public/images/lookbook/1.jpg";
import image3 from "../../public/images/lookbook/2.jpg";
import image4 from "../../public/images/lookbook/3.jpg";
import image5 from "../../public/images/lookbook/4.jpg";
import image6 from "../../public/images/lookbook/5.jpg";
import image7 from "../../public/images/lookbook/6.jpg";
import image8 from "../../public/images/lookbook/7.jpg";
import image9 from "../../public/images/lookbook/8.jpg";
import image10 from "../../public/images/lookbook/9.jpg";
import image11 from "../../public/images/lookbook/10.jpg";
import image12 from "../../public/images/lookbook/11.jpg";
import image13 from "../../public/images/lookbook/12.jpg";

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const style = getBemClassName("lookbook", [
  "container",
  "element",
  "stickyImage",
  "paragraph",
  "scrool_top",
]);

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const text = `Saphir Collection’s LookBook where luxury and elegance unite. Our selection showcases sophisticated fashion with meticulously crafted garments made from the finest fabrics. Each piece exudes class and style, brought to life by our graceful models. Discover the exquisite designs of Saphir Collection and elevate your wardrobe with a touch of opulence. Experience high-end fashion reimagined.`;
const myText = text.split(" ");

const LookBook: NextPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLParagraphElement>(null);

  const images = [image1, image2, image3, image4, image5, image6];
  const stickyImages = [
    image10,
    image7,
    image12,
    image8,
    image11,
    image13,
    image9,
  ];

  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.5", "start 0.05"],
  });
  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 4.8]),
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
                      // fill
                      width={index === 0 ? 800 : 500}
                      height={index === 0 ? 800 : 100}
                      placeholder="blur"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* paragraph section */}
        <div className={style.paragraph}>
          <p ref={textRef}>
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
        {/* sticky Images section */}
        {stickyImages.map((src, index) => (
          <StickyImage key={index} src={src} className={style.stickyImage} />
        ))}
      </div>

      {/* scrool to top */}
      <div
        className={style.scrool_top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp width="1.5vw" height="1.5vw" />
      </div>
    </Page>
  );
};

export default LookBook;
