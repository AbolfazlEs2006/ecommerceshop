import React from "react";
import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";
import Navswiper from "../../code/navswiper/Navswiper";
import Header from "../../code/header/Header";
import Category from "../../code/Category/Category";
import ProductCard from "../../components/Productcard/Productcard";
import Banner from "../../components/Banner/Banner";
import Article from "../../code/Article/Article";
import Insights from "../../code/insights/Insights";
import About from "../../components/about/About";
import Discount from "../../code/Discount/Discount";
import Brands from "../../code/brands/Brands";
import Information from "../../code/information/Information";
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
      <ProductCard slidepreview={4} />
      <Banner
        src={"/assets/img/banner-2.png"}
        srcs={"/assets/img/banner-1.png"}
      />
      <Article />
      <About title={"گوشی بر اساس ویژگی"} titlebtn={"مشاهده بیشتر"} />
      <Insights style={""} img={"/assets/img/product_cover_1.png"} />
      <Banner
        src={"/assets/img/banner-3.jpg"}
        srcs={"/assets/img/banner-4.jpg"}
        srcss={"/assets/img/banner-5.jpg"}
      />
      <About title={"گوشی بر اساس ویژگی"} titlebtn={"مشاهده بیشتر"} />
      <Insights
        style={"insights-style-reverce"}
        img={"/assets/img/product_cover_2.png"}
      />
      <About title={"گوشی بر اساس ویژگی"} titlebtn={"مشاهده بیشتر"} />
      <ProductCard slidepreview={4} />
      <Discount />
      <About title={"محبوب ترین برند ها"} titlebtn={"مشاهده بیشتر"} />
      <Brands />
      <Information />
      <Footer />
    </>
  );
}
