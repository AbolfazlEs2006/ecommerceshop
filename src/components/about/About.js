import React from "react";

// icons
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";

import Button from "../button/Button";

// css file
import "./about.css";

export default function About({ title, titlebtn, link }) {
  return (
    <>
      <div className="about">
        <div>
          <GrainOutlinedIcon />
          <h3>{title}</h3>
        </div>
        <Button title={titlebtn} link={link} />
      </div>
    </>
  );
}
