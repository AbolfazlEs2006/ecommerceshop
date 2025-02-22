import React from "react";

//css files
import "./banner.css";

export default function Banner({ src, srcs, srcss }) {
  return (
    <div className="banner">
      <div>
        <img className="Banner-1" src={src} alt="banner-img" width={100} />
      </div>
      <div>
        <img className="Banner-2" src={srcs} alt="banner-img" width={100} />
      </div>
      {srcss ? (
        <div>
          <img className="Banner-2" src={srcss} alt="banner-img" width={100} />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
