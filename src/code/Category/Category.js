// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Link
import { Link } from "react-router";

//icons
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//datas
import Categorydata from "./Categorydata";

import "./category.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Category() {
  return (
    <div className="category">
      <div class="container">
        <span class="text">دسته بندی محصولات</span>
        <div class="line"></div>
        <button class="category-btn">
          مشاهده همه <ArrowBackIosNewOutlinedIcon />
        </button>
      </div>
      <div className="category-slide">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            360: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {Categorydata.map((category) => (
            <Link key={category.alt} to={category.href}>
              <SwiperSlide className="swiper-slide-category">
                <img src={category.img} alt={category.title} />
                <h3>{category.title}</h3>
              </SwiperSlide>
            </Link>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
