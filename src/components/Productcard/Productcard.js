import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//icons
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import { Link } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./productcard.css";
import ProductCarddata from "./Productcarddata";

export default function App({ slidepreview }) {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={slidepreview}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {ProductCarddata.map((card) => (
          <div key={card.id}>
            <SwiperSlide className="swiper-slide-discount">
              <>
                <Link to={`products/${card.id}`} className="products">
                  <div className="product-cards-detail">
                    <div className="product-card">
                      <div className="details-cards">
                        <img src={card.img} alt={card.title} />
                      </div>
                      <div className="card-icons">
                        <ShuffleOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <RemoveRedEyeOutlinedIcon />
                      </div>
                    </div>
                    <div className="card-details">
                      <p className="card-description">{card.description}</p>
                      <div className="price-details">
                        <div className="icon-basket-product">
                          <ShoppingBasketOutlinedIcon />
                        </div>
                        <div className="price-detailsed">
                          <h3>{card.price.toLocaleString()}</h3>
                          <h3 className="discount-price">
                            {card.discount}
                            <span>25%</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
