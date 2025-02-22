import React from "react";

import "./discount.css";

import { Link } from "react-router";

// data
import Discountdata from "./Discountdata";

import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";

export default function Discount() {
  return (
    <>
      <div className="discount">
        {Discountdata.map((data) => (
          <Link>
            <div className="discount-style">
              <div className="discount-img">
                <img src={data.img} alt={data.alt} width={80} />
              </div>
              <div className="discount-info">
                <div>
                  <h3>{data.title}</h3>
                </div>
                <div className="discount-details">
                  <span>
                    {data.discount}%
                    <DiscountOutlinedIcon />
                  </span>
                  <h5>{data.price.toLocaleString()} تومان</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
