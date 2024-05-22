/*
| Developed by Hasni
| Filename: MyPage.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import { NextPage, GetStaticPropsContext } from "next";
import React, { useEffect } from "react";
import { Data, data } from "@/contract";
import { useRouter } from "next/router";
import { getBemClassName } from "@/utils";
import Image from "next/image";

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
| Component
|--------------------------------------------------------------------------
*/
const Product: NextPage<ProductProps> = ({ product }) => {
  const router = useRouter();
  // Render
  //--------------------------------------------------------------------------
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <Image src={product.image} alt="product" fill placeholder="blur" />
      </div>
      <div className={style.infos_container}>
        <div>
          <h3>Olivia jacket</h3>
          <p className="price">300 €</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            ipsam animi veniam placeat ea eligendi quasi officiis natus tenetur
            saepe reiciendis iste earum, modi neque ratione delectus quia quae
            possimus.
          </p>
        </div>
        <button className="button">Add to cart</button>
      </div>
    </div>
  );
};
export default Product;

export const getStaticPaths = async () => {
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: true };
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
