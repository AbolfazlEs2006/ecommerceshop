import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import "./navbar.css";

export default function Navbar() {
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
          <button type="button">
            <ShoppingBasketOutlinedIcon />
            سبد خرید<span>0</span>
          </button>
        </div>
      </div>
    </>
  );
}
