import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./brands.css";

import Brandsdata from "./Brandsdata";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
      >
        {Brandsdata.map((data) => (
          <SwiperSlide className="swiper-slide-brands">
            <img src={data.img} alt={data.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
