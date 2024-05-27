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
    title: "Pink Combo",
    price: 699,
    width: 20,
    height: 30,
    image: imgOne,
  },
  {
    id: 1,
    title: "Brown Turtleneck",
    price: 350,
    width: 21,
    height: 32,
    image: imgTwo,
  },
  {
    id: 2,
    title: "Sweat Sweet",
    price: 580,
    width: 30,
    height: 24,
    image: imgThree,
  },
  {
    id: 3,
    title: "Mood Grey",
    price: 1120,
    width: 14,
    height: 30,
    image: imgFour,
  },
  {
    id: 4,
    title: "Glasses Blue",
    price: 250,
    width: 20,
    height: 36,
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
