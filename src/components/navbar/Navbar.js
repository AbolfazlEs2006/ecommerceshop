import React, { useContext, useEffect, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// css file
import "./navbar.css";

import Context from "../../context/Context";

export default function Navbar() {
  const [openbasket, setOpenbasket] = useState(true);
  const { basket, setBasket } = useContext(Context);

  const removeproductforbasket = (id) => {
    const updatebasket = basket.filter((item) => item.id !== id);
    setBasket(updatebasket);
  };

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
            onClick={() => {
              setOpenbasket((prev) => !prev);
            }}
            type="button"
            className="basket-btn-add"
          >
            <ShoppingBasketOutlinedIcon />
            سبد خرید<span>{basket.length}</span>
          </button>
        </div>
      </div>
      <div className={`basket-style ${openbasket && "not-basket"}`}>
        <div className="close-basket">
          <h4>سبد خرید({basket.length} مورد)</h4>
          <button onClick={() => setOpenbasket(true)}>
            <CloseOutlinedIcon />
          </button>
        </div>
        {basket.map((baskets) => (
          <>
            <div className="userinfo-basket">
              <div>
                <img src={baskets.img} />
              </div>
              {basket.length === 0 ? (
                <div className="nothing-img-basket">
                  <img src="/assets/img/nothingby.png" height={200} />
                </div>
              ) : (
                <div className="info-basketstyle">
                  <p>{baskets.description}</p>
                  <div className="userinfo-price">
                    <h4>{baskets.discount} تومان</h4>
                    <h5>{baskets.price} تومان</h5>
                  </div>
                  <div className="remove-basket">
                    <p> تعداد: {baskets.count} </p>
                    <button onClick={() => removeproductforbasket(baskets.id)}>
                      <CloseOutlinedIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
