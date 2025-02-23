import React from "react";

// css file
import "./information.css";

import Button from "../../components/button/Button";

export default function Information() {
  return (
    <div className="information">
      <div>
        <video
          src="/assets/video.mp4"
          autoPlay={true}
          controls={true}
          loop={true}
          muted={true}
          typeof="video/mp4"
          width={600}
          className="video-information"
        />
      </div>
      <div>
        <h2>درباره فروشگاه ای اس شاپ</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className="information-button">
          <Button title={"بیشتر بدانید"} classstyle={"blue-button"} />
          <Button title={"سوالات متداول"} />
        </div>
      </div>
    </div>
  );
}
