import React, { useContext, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// css file
import "./navbar.css";

import Context from "../../context/Context";

export default function Navbar() {
  const [openbasket, setOpenbasket] = useState(true);
  const { basket, setBasket } = useContext(Context);

  return (
    <>
      <div className="Navbar">
        <div>
          <button className="mega-tab">
            <DashboardOutlinedIcon />
            مگاتب منو
          </button>
        </div>
        <div className="basket-nav">
          <div className="search-nav">
            <input type="text" placeholder="جستجو" />
          </div>
          <button
            onClick={() => setOpenbasket((prev) => !prev)}
            type="button"
            className="basket-btn-add"
          >
            <ShoppingBasketOutlinedIcon />
            سبد خرید<span>0</span>
          </button>
        </div>
      </div>
      {basket && (
        <div className={`basket-style ${openbasket && "not-basket"}`}>
          <div className="close-basket">
            <h4>سبد خرید({basket.lenght} مورد)</h4>
            <button onClick={() => setOpenbasket(true)}>
              <CloseOutlinedIcon />
            </button>
          </div>
          <div className="userinfo-basket">
            <div>
              <img src={basket.img} />
            </div>
            <div className="info-basketstyle">
              <p>{basket.description}</p>
              <div className="userinfo-price">
                <h4>{basket.discount} تومان</h4>
                <h5>{basket.price} تومان</h5>
              </div>
              <div className="remove-basket">
                <p> تعداد: {basket.count} </p>
                <button>
                  <CloseOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
