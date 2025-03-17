import React from "react";

import "./cardproduct.css";

import ProductCarddata from "../Productcard/Productcarddata";

//icons
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import { Link } from "react-router";

export default function Cardproduct() {
  return (
    <>
      <div className="cardproduct">
        {ProductCarddata.map((card) => (
          <div key={card.id}>
            <Link to={`${card.id}`} className="products">
              <div className="product-cards-detail">
                <div className="product-card">
                  <div className="card-icons">
                    <ShuffleOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <RemoveRedEyeOutlinedIcon />
                  </div>
                  <div className="details-cards">
                    <img src={card.img} alt={card.title} />
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
          </div>
        ))}
      </div>
    </>
  );
}
