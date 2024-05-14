/*
| Developed by Hasni
| Filename: Product.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useContext } from "react";
import style from "@/styles/pages/Product.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppContext } from "../_app";
import { useRouter } from "next/router";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ProductProps {
  children?: React.ReactNode;
}
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Product: React.FC<ProductProps> = (props) => {
  const context = useContext(AppContext);
  const router = useRouter();

  // Render
  //--------------------------------------------------------------------------
  return (
    <div
      className={style.container}
      style={{
        background: context?.appColor.background,
        color: context?.appColor.text,
      }}
    >
      <div className={style.wrapper}>
        <motion.div
          layoutId={`myImage${router.query.id}`}
          transition={{
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          <Image
            src={`/images/${router.query.id}.jpg`}
            alt="Product"
            width={500}
            height={550}
          />
        </motion.div>
        {/* <div>
          <p>PRODUCT NAME</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptate dolor voluptas voluptatem blanditiis, ratione repellendus
            recusandae maiores vel quaerat perferendis id doloribus dolore eos
            expedita, corrupti beatae rerum quod!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
