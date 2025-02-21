import React from "react";
import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";
import Navswiper from "../../code/navswiper/Navswiper";
import Header from "../../code/header/Header";
import Category from "../../code/Category/Category";
import Footer from "../../components/footer/Footer";

document.title = "Es shop";

export default function Main() {
  return (
    <>
      <Navsub />
      <Navbar />
      <Navswiper />
      <Header />
      <Category />
      <Footer />
    </>
  );
}
