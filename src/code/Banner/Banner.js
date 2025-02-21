import React from "react";

//css files
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <img className="Banner-1" src="/assets/banner-1.png" />
      </div>
      <div>
        <img className="Banner-2" src="/assets/banner-2.png" />
      </div>
    </div>
  );
}
