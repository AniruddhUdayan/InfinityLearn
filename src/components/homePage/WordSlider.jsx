"use client";
import React from "react";
import { useState, useEffect } from "react";
// If you're using a separate CSS file

const words = ["learning", "academic"];
const duration = 2000; // Duration in milliseconds for each word

function WordSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimating(true);
      }, 1000); // waits for the animation to complete
    }, duration + 1000); // adds the animation duration to the waiting duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container z-0 h-24 max-md:h-12 max-md:pl-3 max-md:text-5xl text-yellow-400 flex items-center justify-start text-7xl font-bold">
      <div className={animating ? "word-entering z-0" : " z-0 word-exiting"}>
        {words[currentIndex]}
      </div>
    </div>
  );
}

export default WordSlider;
