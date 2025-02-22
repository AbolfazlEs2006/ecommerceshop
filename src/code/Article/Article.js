import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Timer
import Timer from "../../components/Timer/Timer";

// datas
import ProductCarddata from "../../components/Productcard/Productcarddata";

// icons
import StarIcon from "@mui/icons-material/Star";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall";

// css file
import "./article.css";

const Article = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="swiper-article"
    >
      {ProductCarddata.map((article) => (
        <SwiperSlide className="swiper-slide-article">
          <div className="article">
            <img src={article.img} alt={article.title} />
            <div className="article-info">
              <h3>{article.description}</h3>
              <p className="favorit-people">
                ({article.likes} نفر) 4.2 <StarIcon />
              </p>
              <div className="line-hr">
                <hr />
              </div>
              <div className="info-product">
                <div>
                  <h5>
                    <del>{article.discount}</del>
                    <span>25%</span> تومان
                  </h5>
                  <h5> {article.price} تومان</h5>
                </div>
                <div className="article-timer">
                  <Timer />
                </div>
              </div>

              <div class="line-container">
                <div class="line-filled"></div>
              </div>
            </div>
            <div className="article-device">
              <span className="info-device">
                <BatteryFullIcon />
                <span>mAh 5000</span>
              </span>
              <span className="info-device">
                <CameraAltIcon />
                <span>MP 08</span>
              </span>
              <span className="info-device">
                <PhoneIphoneIcon />
                <span>6.7</span>
              </span>
              <span className="info-device">
                <MissedVideoCallIcon />
                <span>GB 12</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Article;
