import React from "react";

// css file
import "./scrollbtn.css";

// icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Scrollbtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll-button">
      <ArrowUpwardIcon />
    </button>
  );
};

export default Scrollbtn;
