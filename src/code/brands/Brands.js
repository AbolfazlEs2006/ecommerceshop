import React from "react";

import Brandsdata from "./Brandsdata";

export default function Brands() {
  return (
    <>
      <div>
        {Brandsdata.map((brands) => (
          <img src={brands.img} alt={brands.alt} />
        ))}
      </div>
    </>
  );
}
