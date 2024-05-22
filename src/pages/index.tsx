import Head from "next/head";
import { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { data, hiddenMask, visibleMask } from "@/contract";
import { AnimatedText, Page } from "@/components";
import { AppContext } from "./_app";
import { getBemClassName } from "@/utils";
import { useRouter } from "next/router";
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const paragraph = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      ease: [0.5, 1, 0.89, 1],
      duration: 0.8,
    },
  },
  exit: { opacity: 0, y: 20 },
};

const imageVariants = {
  initial: { maskImage: hiddenMask },
  animate: {
    maskImage: visibleMask,
    transition: {
      delay: 1.2,
      duration: 0.6,
      // ease: [0.33, 1, 0.68, 1],
      ease: [0.65, 0, 0.35, 1],
    },
  },
  exit: {
    maskImage: hiddenMask,
    transition: { duration: 0.3, ease: [0.5, 1, 0.89, 1] },
  },
};

/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const style = getBemClassName("home", [
  "main",
  "brand",
  "collection",
  "image_container",
]);
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function Home() {
  const context = useContext(AppContext);
  const router = useRouter();
  const mouse = {
    y: useSpring(useMotionValue(0), { stiffness: 1200, damping: 150 }),
    x: useSpring(useMotionValue(0), { stiffness: 1200, damping: 150 }),
  };

  // Methods
  //--------------------------------------------------------------------------
  const manageMouseMovement = (e: MouseEvent) => {
    mouse.x.set(e.clientX / -55);
    mouse.y.set(e.clientY / -55);
  };

  // UseEffect
  //--------------------------------------------------------------------------
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMovement);
    context?.setPlayHomeAnimation(false);
    return () => {
      window.removeEventListener("mousemove", manageMouseMovement);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <main className={style.main}>
          <h1>
            <AnimatedText text="Saphir" className={style.brand} />
            <AnimatedText text="Collection" className={style.collection} />
          </h1>
          <motion.p
            variants={paragraph}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Issue / <span>01</span>
          </motion.p>
          <div className={style.image_container}>
            {data.map((item, index) => (
              <motion.div
                key={index}
                style={{ x: mouse.x, y: mouse.y }}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => router.push(`/product/${item.id}`)}
              >
                <Image
                  src={item.image}
                  alt="Saphir Collection"
                  width={item.with}
                  height={item.height}
                  placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
        </main>
      </Page>
    </>
  );
}
