import React from "react";
import { Link } from "react-router";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./subnav.css";

export default function Navsub() {
  return (
    <div className="sub-nav">
      <div className="sublinks-nav">
        <div>
          <button>
            <PersonOutlineOutlinedIcon />
            وارد شوید <span>|</span>
          </button>
        </div>

        <div>
          <Link to={"/"}>صفحه اصلی</Link>
          <Link to={"/products"}>فروشگاه</Link>
          <Link to={"/amazing"}>شگفت انگیز شو</Link>
          <Link to={"/report"}>گزارش</Link>
          <Link to={"/question"}>سوالات متداول</Link>
          <Link to={"/blog"}>وبلاگ</Link>
          <Link to={"/about"}>درباره ما</Link>
          <Link to={"/contact-us"}>تماس با ما</Link>
        </div>
      </div>
      <div className="contanct-us-nav">
        <p>
          هفت روز هفته، 24 ساعت شبانه‌روز پاسخگوی شما 021<span>12345678</span>
        </p>
      </div>
      <div className="logo-nav">
        <Link to={"/"}>
          <img src="/assets/logo.jpg" width={120} height={80} />
        </Link>
      </div>
    </div>
  );
}
