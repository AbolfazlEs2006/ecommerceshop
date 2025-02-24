// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// datas
import Swiperdata from "./Swiperdata";

// import Links
import { Link } from "react-router";

// Import Swiper styles
import "swiper/css";

import "./navswiper.css";

export default function Navswiper() {
  return (
    <>
      <Swiper
        className="mySwiper nav-swipers"
        slidesPerView={3}
        spaceBetween={-5}
        breakpoints={{
          360: {
            slidesPerView: 4,
            spaceBetween: -5,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: -5,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: -5,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: -5,
          },
        }}
      >
        {Swiperdata.map((data, index) => (
          <SwiperSlide key={index}>
            <Link to={data.href}>
              <img src={data.img} alt={data.alt} width={80} height={80} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
