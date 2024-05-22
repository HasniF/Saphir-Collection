/*
| Developed by Hasni
| Filename: MyPage.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { NextPage, GetStaticPropsContext } from "next";
import { Data, data } from "@/contract";
import { useRouter } from "next/router";
import { getBemClassName } from "@/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText, MotionText, Page } from "@/components";
/*
|--------------------------------------------------------------------------
| Interface
|--------------------------------------------------------------------------
*/
interface ProductProps {
  product: Data;
}

/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const style = getBemClassName("product", [
  "container",
  "image_container",
  "infos_container",
]);

/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const variants = {
  initial: { y: 200 },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.05,
    },
  }),
  exit: (i: number) => ({
    y: 200,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: i * -0.05,
    },
  }),
};

const slider = {
  initial: { scaleX: 1 },
  animate: {
    scaleX: 0,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    scaleX: 1,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 0.6,
    },
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Product: NextPage<ProductProps> = ({ product }) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <Page>
      <div className={style.container}>
        <div className={style.image_container}>
          <Image src={product.image} alt="product" fill placeholder="blur" />
        </div>
        <div className={style.infos_container}>
          <div>
            <h3>
              <AnimatedText text={product.title} variants={variants} />
            </h3>
            <p className="price">
              <AnimatedText text={`${product.price} €`} variants={variants} />
            </p>
            <p>
              <MotionText
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.\nQuaerat, ipsam animi veniam placeat ea eligendi quasi officiis\nnatus tenetur saepe reiciendis iste earum, modi neque ratione\ndelectus quia quae possimus.`}
                lineHeigh={1.6}
              />
            </p>
          </div>
          <div className="container_btn">
            <button className="button">Add to cart</button>
            <motion.div
              className="revealing_slider"
              variants={slider}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Product;

export const getStaticPaths = async () => {
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  if (!params) return { redirect: { destination: "/", permanent: false } };

  const product = data.find(
    (product) => product.id === parseInt(params.id as string)
  );

  if (!product) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: { product } };
};
