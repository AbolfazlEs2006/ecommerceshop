import React from "react";

import { Link } from "react-router";

import "./button.css";

export default function Button({ title, classstyle, link }) {
  return (
    <>
      <div className={`button ${classstyle}`}>
        <Link to={link}>
          <button>{title}</button>
        </Link>
      </div>
    </>
  );
}
