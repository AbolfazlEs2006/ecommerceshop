import React from "react";

import { Link } from "react-router";

import "./button.css";

export default function Button({ title, classstyle }) {
  return (
    <>
      <div className={`button ${classstyle}`}>
        <Link>
          <button>{title}</button>
        </Link>
      </div>
    </>
  );
}
