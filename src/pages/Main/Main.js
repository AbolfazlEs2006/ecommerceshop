import React from "react";
import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";
import Navswiper from "../../code/navswiper/Navswiper";
import Footer from "../../components/footer/Footer";
import Header from "../../code/header/Header";

document.title = "Es shop";

export default function Main() {
  return (
    <>
      <Navsub />
      <Navbar />
      <Navswiper />
      <Header />
      <Footer />
    </>
  );
}
