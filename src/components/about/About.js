import React from "react";

// icons
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";

// css file
import "./about.css";
import { Link } from "react-router";

export default function About({ title, href }) {
  return (
    <>
      <div className="about">
        <div>
          <GrainOutlinedIcon />
          <h3>{title}</h3>
        </div>
        <div>
          <Link>
            <button>مشاهده همه</button>
          </Link>
        </div>
      </div>
    </>
  );
}
