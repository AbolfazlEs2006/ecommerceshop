import React from "react";

// css file
import "./footer.css";

// icon
import EdgesensorLowOutlinedIcon from "@mui/icons-material/EdgesensorLowOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "react-router";
import Scrollbtn from "../../code/scrollbtn/Scrollbtn";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-title">
          <h2></h2>
          <h1>
            فروشگاه <br />
            اینترنتی <br />
            ای اس شاپ
          </h1>
          <h2></h2>
        </div>
        <div className="footer-description">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد،
          </p>
        </div>
        <div className="footer-info">
          <div className="footer-section">
            <div>
              <EdgesensorLowOutlinedIcon />
            </div>
            <div>
              <h5>شماره تماس</h5>
              <span>1234567 021 </span>
            </div>
          </div>

          <div className="footer-section">
            <div>
              <AccessAlarmOutlinedIcon />
            </div>
            <div>
              <h5>ساعت کاری</h5>
              <span>24 ساعت شبانه روز </span>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <div className="footer-link-title">
              <FiberManualRecordIcon />
              <h3>ای اس شاپ</h3>
            </div>
            <div className="footer-link-links">
              <Link>اپلیکیشن</Link>
              <Link>ارز های جهانی</Link>
              <Link>مستنداد api</Link>
              <Link>کسب درآمد</Link>
              <Link>حریم خصوصی</Link>
            </div>
          </div>
          <div className="footer-link">
            <div className="footer-link-title">
              <FiberManualRecordIcon />
              <h3>خدمات ما</h3>
            </div>
            <div className="footer-link-links">
              <Link>پنل فروشندگان</Link>
              <Link>ضمانت بازگشت وجه</Link>
              <Link>ارسل پیشتاز</Link>
              <Link>مرجوعی راحت</Link>
              <Link>پشتیبانی 24 ساعته</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-namad">
        <img src="/assets/enamad.png" alt="test" width={100} />
        <img src="/assets/namad-01.png" alt="test" width={100} />
        <img src="/assets/namad-02.png" alt="test" width={100} />
        <img src="/assets/namad-03.png" alt="test" width={100} />
        <img src="/assets/rezi.png" alt="test" width={100} />
      </div>
      <div className="developer-info">
        <h2>
          کلی حقوق این سایت متعلق به <span> ابوالفضل استیری </span> &copy;
          میباشد
        </h2>
        <Scrollbtn />
        <div className="footer-icons">
          <Link to={"https://www.instagram.com/e.abolfazl.s/"}>
            <InstagramIcon />
          </Link>
          <Link to={"https://t.me/Prekium"}>
            <TelegramIcon />
          </Link>
          <Link to={"https://www.linkedin.com/in/abolfazl-estiri-a0b8b12b6/"}>
            <LinkedInIcon />
          </Link>
          <Link to={"https://github.com/AbolfazlEs2006"}>
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
