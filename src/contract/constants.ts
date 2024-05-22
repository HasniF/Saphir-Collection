import { Data } from ".";
import imgOne from "../../public/images/0.jpg";
import imgTwo from "../../public/images/1.jpg";
import imgThree from "../../public/images/2.jpg";
import imgFour from "../../public/images/3.jpg";
import imgFive from "../../public/images/4.jpg";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const data: Data[] = [
  {
    id: 0,
    with: 250,
    height: 250,
    color: "#dd5b5b",
    bgColor: "#f0e3e3",
    image: imgOne,
  },
  {
    id: 1,
    with: 350,
    height: 250,
    color: "#ffffff",
    bgColor: "#ceb7a3",
    image: imgTwo,
  },
  {
    id: 2,
    with: 150,
    height: 180,
    color: "#f4d8a6",
    bgColor: "#2d2720",
    image: imgThree,
  },
  {
    id: 3,
    with: 190,
    height: 200,
    color: "#f16120",
    bgColor: "#ededed",
    image: imgFour,
  },
  {
    id: 4,
    with: 250,
    height: 250,
    color: "#c6feff",
    bgColor: "#192327",
    image: imgFive,
  },
];
const navbarList = [
  {
    id: 1,
    name: "lookbook",
    path: "/lookbook",
  },
  {
    id: 2,
    name: "about",
    path: "/about",
  },
  {
    id: 3,
    name: "contact",
    path: "/contact",
  },
];

export { hiddenMask, visibleMask, data, navbarList };
