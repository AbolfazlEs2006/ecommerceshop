import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ProductCarddata from "../Productcard/Productcarddata";

import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";

// Timer
import Timer from "../../components/Timer/Timer";

// icons
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BrowserNotSupportedOutlinedIcon from "@mui/icons-material/BrowserNotSupportedOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Circle from "../circle/Circle";

// css file
import "./detailsproduct.css";

export default function Detailsproduct() {
  const [size, setSize] = useState("md");
  const [menuesize, setMenuesize] = useState(false);
  const [count, setCount] = useState(1);
  const [chosecolorred, setChosecolorred] = useState(false);
  const [chosecolorblack, setChosecolorblack] = useState(false);
  const [chosecolorgreen, setChosecolorgreen] = useState(false);
  const [chosecolorblue, setChosecolorblue] = useState(false);
  const params = useParams();
  const product = ProductCarddata.find(
    (details) => params.detailsproduct == details.id
  );
  document.title = product.description;
  const clicksizeHandeler = () => {
    setMenuesize((prev) => !prev);
  };
  const allsize = [
    { id: 1, size: "md" },
    { id: 2, size: "lg" },
    { id: 3, size: "xl" },
    { id: 4, size: "xxl" },
    { id: 5, size: "xxxl" },
  ];
  if (count < 1) {
    setCount(1);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Navsub />
      <Navbar />
      <section className="detailproduct">
        <div className="detailproduct-img">
          <div className="detailproduct-discount">
            <h3>پیشنهاد شگفت انگیز</h3>
            <p>
              فرصت باقی مانده
              <span>
                <Timer style={"Timernotbag"} />
              </span>
            </p>
          </div>
          <div className="img-detailproduct">
            <div className="discount-detailproduct">
              <span>{product.discountpersent}%</span>
            </div>
            <div>
              <img
                className="img"
                src={product.img}
                alt={product.title}
                width={350}
              />
            </div>
            <div className="detailproduct-img-icon">
              <span>
                <QueryStatsOutlinedIcon />
              </span>
              <span>
                <TransformOutlinedIcon />
              </span>
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
              <span>
                <ShareOutlinedIcon />
              </span>
              <span>
                <SlowMotionVideoOutlinedIcon />
              </span>
            </div>
          </div>
          <div></div>
        </div>

        <div className="detailproduct-info">
          <div className="info-devices">
            <h3>{product.description}</h3>
            <p>{product.information}</p>
            <div>
              <span>
                <StarPurple500OutlinedIcon />
                <StarPurple500OutlinedIcon />
                <StarPurple500OutlinedIcon />
                <StarHalfOutlinedIcon />
                <StarBorderOutlinedIcon />
              </span>
              <p>11 دیدگاه</p>
              <h5>3 پرسش</h5>
            </div>
          </div>
          <div className="feature">
            <Circle title={"ویژگی های کالا"} />
            <div>
              <h4>
                نوع اتصال: <span>با سیم</span>
              </h4>
              <h4>
                رابط ها: <span>3.5 میلیمتر</span>
              </h4>
              <h4>
                مقدار رم: <span>8 گیگ</span>
              </h4>
              <h4>
                نوع گوشی: <span>دو گوشی</span>
              </h4>
              <h4>
                نوع اتصال: <span>با سیم</span>
              </h4>
              <h4>
                رابط ها: <span>3.5 میلیمتر</span>
              </h4>
              <h4>
                مقدار رم: <span>8 گیگ</span>
              </h4>
              <h4>
                نوع گوشی: <span>دو گوشی</span>
              </h4>
            </div>
            <div className="feature-info">
              <BrowserNotSupportedOutlinedIcon />
              <p>
                امکان برگشت کالا با دلیل "انصراف از خرید" تنها در صورتی مورد
                قبول است که پلمب کالا باز نشده باشد.
              </p>
            </div>
            <div className="feature-info">
              <CheckCircleOutlineOutlinedIcon />
              <p>
                از سه روش زیر می‌توان با سامانه همتا ارتباط برقرار نموده و
                فرآیند فعال سازی دستگاه موبایل را انجام داد: 1. کد دستوری #۷۷۷۷*
                2. اپلیکشین همتا 3. سایت اینترنتی به آدرس www.hamta.ntsw.ir
              </p>
            </div>
          </div>
        </div>

        <div className="detailproduct-addbasket">
          <div className="info-basket-bime">
            <span>
              <input type="checkbox" />
              <h3>بیمه کالا</h3>
            </span>
            <h5>
              نمایش جزءیات <ArrowBackOutlinedIcon />
            </h5>
          </div>
          <div className="chose-color">
            <Circle title={"انتخاب رنگ کالا"} />
            <div>
              <button
                onClick={() => setChosecolorred((prev) => !prev)}
                className={`red ${chosecolorred ? "border-chose-red" : "red"}`}
                type="button"
              >
                <FiberManualRecordIcon />
                قرمز
              </button>
              <button
                onClick={() => setChosecolorblack((prev) => !prev)}
                className={`${chosecolorblack ? "border-chose-black" : ""}`}
                type="button"
              >
                <FiberManualRecordIcon />
                مشکی
              </button>
              <button
                onClick={() => setChosecolorgreen((prev) => !prev)}
                className={`green ${
                  chosecolorgreen ? "border-chose-green" : "green"
                }`}
                type="button"
              >
                <FiberManualRecordIcon />
                سبز
              </button>
              <button
                onClick={() => setChosecolorblue((prev) => !prev)}
                className={`blue ${
                  chosecolorblue ? "border-chose-blue" : "blue"
                }`}
                type="button"
              >
                <FiberManualRecordIcon />
                آبی
              </button>
            </div>
          </div>
          <div className="chose-size">
            <Circle title={"انتخاب سایز"} />
            <button onClick={clicksizeHandeler}>
              {size} <ArrowDownwardOutlinedIcon />
            </button>
            {menuesize && (
              <>
                <div className="chose-mini-size">
                  {allsize.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => {
                        setSize(size.size);
                        setMenuesize(false);
                      }}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="price-datails">
            <h1>{product.price} تومان</h1>
            <div>
              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
              <h4>{count}</h4>
              <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
            <button>
              <ShoppingBasketOutlinedIcon />
              افزودن به سبد خرید
            </button>
            <Link to={""}>
              درخواست خرید عمده <ArrowBackOutlinedIcon />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
