import React from "react";
import { useParams } from "react-router";
import ProductCarddata from "../Productcard/Productcarddata";

import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";

// css file
import "./detailsproduct.css";

export default function Detailsproduct() {
  const params = useParams();
  const product = ProductCarddata.find(
    (details) => params.detailsproduct == details.id
  );
  return (
    <>
      <Navsub />
      <Navbar />
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </>
  );
}
