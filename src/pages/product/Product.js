import React, { useEffect } from "react";
import Header from "../../code/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Navsub from "../../components/navsub/Navsub";
import Productcard from "../../components/Productcard/Productcard";
import Cardproduct from "../../components/cardproduct/Cardproduct";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";

export default function Product() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navsub />
      <Navbar />
      <About title={"تمامی محصولات"} titlebtn={"مشاهده بیشتر"} />
      <Cardproduct />
      <Footer />
    </>
  );
}
