/*
| Developed by Hasni
| Filename: Navbar.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { navbarList } from "@/contract";
import { getBemClassName } from "@/utils";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarProps {
  children?: React.ReactNode;
}
/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const style = getBemClassName("navbar", ["main"]);
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Navbar: React.FC<NavbarProps> = (props) => {
  const router = useRouter();
  // Render
  //--------------------------------------------------------------------------
  return (
    <nav className={style.main}>
      <p onClick={() => router.push("/")}>Saphir</p>
      <ul>
        {navbarList.map((item) => (
          <li key={item.id}>
            <motion.span
              whileHover={{ y: -17 }}
              onClick={() => router.push(item.path)}
            >
              <span>{item.name}</span>
              <span>{item.name}</span>
            </motion.span>
          </li>
        ))}
      </ul>
      <div>
        <span>Bag</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{
            width: "1rem",
            height: "1rem",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </nav>
  );
};
