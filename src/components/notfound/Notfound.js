import React from "react";

import "./notfound.css";
import { Link } from "react-router";
import Navsub from "../../components/navsub/Navsub";
import Navbar from "../../components/navbar/Navbar";

export default function Notfound() {
  return (
    <>
      <Navsub />
      <Navbar />
      <div class="vazir">
        <section class="page_404">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                  <div class="four_zero_four_bg gif-img">
                    <h1 class="text-center ">404</h1>
                  </div>

                  <div class="contant_box_404">
                    <h3 class="h2">به نظر میاد که گم شده‌اید</h3>

                    <p>صفحه مورد نظر شما در دسترس نیست!</p>

                    <Link className="links" to="/">
                      به خانه بروید
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
