"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Review from "@/components/Review&Detail/Review";
import BookDemo from "@/components/BookDemo/BookDemo";
import Download from "@/components/examPage/Download";
import subItem from "@/utils/infoHeader";
import "@/components/bookspage/css/bookspage.css";
import LoginPopup from "@/components/LoginPopup";
import BookSessionPopup from "@/components/bookSessionPopup";
import PackageSubscription from "@/components/PackageSubscription";
import FirstSection from "./firstSection";
// import Review from "@/components/Review&Detail/Review";
// import Bookdemo from "@/components/BookDemo/Bookdemo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
});
const imagePaths = [
  "/images/book.webp",
  "/images/bio.webp",
  // Add more image paths as needed
];
export default function Home({ params }: any) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("left");
  const [text, setText] = useState("NEET Foundation");
  const [isSlideDown, setIsSlideDown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagePath, setImagePath] = useState(imagePaths[currentImageIndex]);

  useEffect(() => {
    // Define the interval (in milliseconds) to change the image (e.g., every 5 seconds)
    const interval = setInterval(() => {
      // Calculate the next image index (loop back to the first image if needed)
      const nextIndex = (currentImageIndex + 1) % imagePaths.length;
      setCurrentImageIndex(nextIndex);
      setImagePath(imagePaths[nextIndex]);
    }, 2000); // Change image every 5000 milliseconds (5 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);
  const toggleImage = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (animationDirection === "left") {
      setAnimationDirection("right");
    } else {
      setAnimationDirection("left");
    }

    setTimeout(() => {
      if (imagePath === "/images/book.webp") {
        setImagePath("/images/bio.webp");
      } else {
        setImagePath("/images/book.webp");
      }

      setIsAnimating(false);
    }, 2000); // Adjust the delay duration as needed
  };

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    const slideDown = () => {
      setIsSlideDown(true);
      timeout = setTimeout(() => {
        setIsSlideDown(false);
        setTimeout(() => {
          slideDown();
          // Repeat the animation
        }, 2000);
        // Stay for 2 seconds before sliding down
      }, 2000);
      // Slide down duration
    };

    slideDown(); // Start the animation

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <Header />
      <FirstSection params={params} />
      <Download />
      <Footer />
      <LoginPopup />
      <BookSessionPopup />
      <PackageSubscription />
    </>
  );
}
