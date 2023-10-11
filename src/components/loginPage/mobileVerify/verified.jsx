"use client";
import React, { useEffect, useState } from "react";
import Tick from "./tick";
import SlideWord from "./slideWord";
function Verified() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="inset-0 h-4/5  max-md:z-50 bg-white flex items-center justify-center">
      <div className="relative max-md:h-full max-md:rounded-none  max-md:w-screen flex items-center bg-white p-8 rounded">
        <div
          className={`verified-text text-black absolute transform translate-x-6 transition-transform ${
            showText ? "-translate-x-full" : "translate-x-0"
          }`}
          // If showText is true, it translates fully to its width to the left
          // Otherwise, it stays in its initial position (right of Tick)
        >
          verified
        </div>

        <Tick />
      </div>
    </div>
  );
}

export default Verified;
