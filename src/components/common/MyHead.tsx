/*
| Developed by Hasni
| Filename: MyHead.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import Head from "next/head";
import React from "react";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MyHeadProps {
  children?: React.ReactNode;
  currentPath?: string;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MyHead: React.FC<MyHeadProps> = (props) => {
  const { currentPath } = props;
  // Render
  //--------------------------------------------------------------------------
  return (
    <Head>
      <title>Saphir - {currentPath}</title>
      <meta
        name="description"
        content="Saphir Collection is a brand that offers a variety of products."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Saphir Collection is a brand that offers a variety of products."
      />
      <link rel="icon" href="/vector.ico" />
      {props.children}
    </Head>
  );
};
