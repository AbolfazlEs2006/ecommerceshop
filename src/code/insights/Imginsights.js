import React from "react";

// css file
import "./insights.css";

export default function Imginsights({ img }) {
  return (
    <>
      <div className="insights">
        <div className="img-insights">
          <img src={img} alt="insights" width={350} height={380} />
        </div>
      </div>
    </>
  );
}
