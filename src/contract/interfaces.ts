import { StaticImageData } from "next/image";

export interface Data {
  id: number;
  with: number;
  height: number;
  color: string;
  bgColor: string;
  image: StaticImageData;
}
