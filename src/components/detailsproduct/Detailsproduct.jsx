import React from "react";
import { useParams } from "react-router";
import ProductCarddata from "../Productcard/Productcarddata";

// css file
import "./detailsproduct.css";

export default function Detailsproduct() {
  const params = useParams();
  const product = ProductCarddata.find(
    (details) => params.detailsproduct == details.id
  );
  return (
    <>
      <section className="details-product">
        <img src={product.img} />
      </section>
    </>
  );
}
