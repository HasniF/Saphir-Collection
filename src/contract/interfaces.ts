import { StaticImageData } from "next/image";

export type Data = {
  id: number;
  title: string;
  width: number;
  height: number;
  price: number;
  image: StaticImageData;
};
