import { StaticImageData } from "next/image";

export interface Data {
  id: number;
  title: string;
  with: number;
  height: number;
  price: number;
  image: StaticImageData;
}
