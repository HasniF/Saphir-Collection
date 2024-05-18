/*
| Developed by Hasni
| Filename: product.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Data } from "@/contract/interfaces";
import { useRouter } from "next/router";
import { getBemClassName } from "@/utils";

/*
|--------------------------------------------------------------------------
| Contract
|--------------------------------------------------------------------------
*/
export interface ProductProps {
  children?: React.ReactNode;
  product: Data;
  setSelectProduct: React.Dispatch<React.SetStateAction<Data | null>>;
}

/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const style = getBemClassName("product", ["container", "wrapper"]);
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Product: React.FC<ProductProps> = ({ product, setSelectProduct }) => {
  const router = useRouter();
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div className={style.container}>
      <button onClick={() => setSelectProduct(null)}>RETOUUUUR</button>
      <div className={style.wrapper}>
        <motion.div
          layoutId={`${product.id}`}
          transition={{
            duration: 0.3,
            delay: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <Image src={product.image} alt="Product" width={500} height={550} />
        </motion.div>
        <div>
          <p>PRODUCT NAME</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </motion.div>
  );
};
export default Product;
