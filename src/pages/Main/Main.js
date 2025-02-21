import React from "react";
import { useState } from "react";
import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";
import Navswiper from "../../code/navswiper/Navswiper";
import Header from "../../code/header/Header";
import Category from "../../code/Category/Category";
import ProductCard from "../../components/Productcard/Productcard";
import Banner from "../../code/Banner/Banner";
import Footer from "../../components/footer/Footer";

//Product card datas

document.title = "Es shop";

export default function Main() {
  return (
    <>
      <Navsub />
      <Navbar />
      <Navswiper />
      <Header />
      <Category />
      <ProductCard />
      <Banner />
      <Footer />
    </>
  );
}
