import React from "react";
import Header from "../../code/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Navsub from "../../components/navsub/Navsub";
import Productcard from "../../components/Productcard/Productcard";
import Cardproduct from "../../components/cardproduct/Cardproduct";
import About from "../../components/about/About";

export default function Product() {
  return (
    <>
      <Navsub />
      <Navbar />
      <About title={"جدید ترین گوشی ها"} titlebtn={"مشاهده بیشتر"} />
      <Productcard />
      <About title={"تمامی محصولات"} titlebtn={"مشاهده بیشتر"} />
      <Cardproduct />
    </>
  );
}
