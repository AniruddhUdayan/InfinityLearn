"use client";
import React from "react";

function Tick() {
  return (
    <div>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/200/svg"
        viewBox="0 0 52 52"
      >
        <circle className="verified-badge" cx="26" cy="26" r="25" fill="none" />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
}
export default Tick;
