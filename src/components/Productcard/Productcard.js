import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//icons
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import { Link } from "react-router";

// data
import Productcarddata from "./Productcarddata";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./productcard.css";
import ProductCarddata from "./Productcarddata";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={4}
        modules={[Navigation]}
        className="mySwiper"
      >
        {ProductCarddata.map((card) => (
          <>
            <SwiperSlide className="swiper-slide-discount">
              <>
                <Link to={`products/${card.id}`} className="products">
                  <div className="product-cards-detail">
                    <div className="product-card">
                      <div className="details-cards">
                        <img src={card.img} />
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
                          <h3>{card.price}</h3>
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
          </>
        ))}
      </Swiper>
    </>
  );
}
