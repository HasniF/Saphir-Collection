/*
| Developed by Hasni
| Filename: MyPage.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useEffect } from "react";
import { NextPage, GetStaticPropsContext } from "next";
import { Data, data } from "@/contract";
import { getBemClassName } from "@/utils";
import Image from "next/image";
import { AnimatedText, MotionButton, MotionText, Page } from "@/components";
import { AppContext } from "../_app";
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
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const Product: NextPage<ProductProps> = ({ product }) => {
  const [isInBag, setIsInBag] = React.useState(false);
  const context = React.useContext(AppContext);

  useEffect(() => {
    if (context) {
      const isInBag = context.bag.some((item) => item.id === product.id);
      setIsInBag(isInBag);
    }
  }, []);
  // Render
  //--------------------------------------------------------------------------
  return (
    <Page>
      <div className={style.container}>
        <div className={style.image_container}>
          <Image
            src={product.image}
            alt="product"
            placeholder="blur"
            width={480}
            height={580}
            quality={70}
            priority
          />
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
          {/* <MotionButton text="Add to cart" /> */}
          {isInBag ? (
            <MotionButton
              text="Open Bag"
              onClick={() => context?.setOpenBag(true)}
            />
          ) : (
            <MotionButton
              text="Add to cart"
              onClick={() => {
                if (context) {
                  context.setBag([
                    ...context.bag,
                    {
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      image: product.image,
                    },
                  ]);
                  setIsInBag(true);
                  context.setOpenBag(true);
                }
              }}
            />
          )}
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
