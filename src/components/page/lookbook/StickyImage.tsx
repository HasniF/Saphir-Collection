/*
| Developed by Hasni
| Filename: StickyImage.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StickyImageProps {
  children?: React.ReactNode;
  src: StaticImageData;
  className: string;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StickyImage: React.FC<StickyImageProps> = ({ src, className }) => {
  // Render
  //--------------------------------------------------------------------------
  const element = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: element });

  return (
    <div className={className}>
      <motion.div
        className="image_container"
        style={{ scale: scrollYProgress }}
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
