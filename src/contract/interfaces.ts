import { StaticImageData } from "next/image";

export type Data = {
  id: number;
  title: string;
  width: number;
  height: number;
  price: number;
  image: StaticImageData;
};

export type BagType = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
};
