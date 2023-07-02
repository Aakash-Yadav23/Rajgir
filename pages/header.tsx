import Head from "next/head";

import React from "react";

interface headerProps{
    title:string
}

const header:React.FC<headerProps> = ({title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Rest of your page content */}
    </>
  );
};

export default header;
