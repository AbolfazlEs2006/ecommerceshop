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
      <Swiper className="mySwiper" slidesPerView={9} spaceBetween={-5}>
        {Swiperdata.map((data) => (
          <SwiperSlide>
            <Link to={data.href}>
              <img src={data.img} alt={data.alt} width={80} height={80} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
