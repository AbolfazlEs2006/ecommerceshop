import React from "react";

// product card components
import Productcard from "../../components/Productcard/Productcard";

// img insights
import Imginsights from "./Imginsights";

// css
import "./insights.css";

export default function Insights({ style, img }) {
  return (
    <div className={`insights-style ${style}`}>
      <Imginsights img={img} />
      <Productcard slidepreview={3} />
    </div>
  );
}
