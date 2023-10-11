"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, InputBase } from "@mui/material";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storePhoneNumber } from "@/store/mobVeriSlice";
import LoginPage from "../loginPage";
import LoginPopup from "../LoginPopup";
const words = ["learning", "academic"];
const duration = 2000; // Duration in milliseconds for each word
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
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
    <div
      className="slider-container tracking-wide  max-md:pl-5  font-  z-0 h-24 max-md:h-12 max-md:p max-md:text-[44px] text-[#FCDE5A]
     flex items-center justify-start text-7xl font-bold"
    >
      <div className={animating ? "word-entering z-0" : " z-0 word-exiting"}>
        {words[currentIndex]}
      </div>
    </div>
  );
}

function Trial() {
  return (
    <div
      className="flex mt-10 max-lg:w-full mb-6 max-lg:mx-10
     max-lg:h-24 justify-evenly text-[#007BFF] p-6  text-center  font-bold text-base gap-3 mx-auto
     flex-row items-center h-20 bg-white px-4 rounded-2xl"
    >
      <div className=" flex flex-col   border-opacity-20 ">
        <div className="text-center font-[400] text-[12px] ">learners</div>
        <div className="font-[600] text-[18px] text-center">50k+</div>
      </div>
      <div className="border-r-2 border-[#007BFF] opacity-20 h-full" />
      <div className=" items-center flex text-center flex-col border-black">
        <div className="text-center font-[400] text-[12px]  ">cities</div>
        <div className="font-[600] text-[18px]  text-center">60k+</div>
      </div>
      <div className="border-r-2 border-[#007BFF] opacity-20 h-full" />
      <div className="  items-center text-center flex flex-col">
        <div className="text-center font-[400] text-[12px]  flex    flex-grow">
          <div className=" mr-1">classes</div> conducted
        </div>
        <div className="font-[600] text-[18px]  text-center">9200+</div>
      </div>
    </div>
  );
}
function FirstSection() {
  const [query, setQuery] = useState("");
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (/^\d+$/.test(e.target.value) && e.target.value.length <= 10) {
      setQuery(e.target.value);
    }
  };

  const handleToggleOverlay = () => {
    if (query.length === 10) {
      dispatch(storePhoneNumber(query));
      dispatch(showOverlayMode(!showOverlay));
    } else {
      console.error("Phone number should be 10 digits!");
    }
  };
  if (showOverlay) {
    return (
      <div>
        <LoginPopup />
      </div>
    );
  }
  return (
    <div
      className="flex pb-32 max-md:pt-16 max-md:px-0 poppins max-2xl:px-10  
      max-md:pb-8 w-full max-md:min-h-screen 
      items-center justify-around bg-[#007BFF]
      
     max-md:flex-col max-md:h-fit"
    >
      <div className=" text-white max-md:w-full max-2xl:w-1/2 flex flex-col">
        <div className=" flex flex-col max-md:w-full max-md:px-5 text-start justify-enter itemscenter">
          <div className="max-md:pt-6 pt-9   max-md:pl-5 tracking-wide   text-7xl max-md:text-[44px] font-bold">
            power up your
          </div>
          <WordSlider />
          <div className="   tracking-wide  max-md:pl-5    max-md:text-[44px] text-7xl font-bold">
            journey with
          </div>
          <div className="  tracking-wide  max-md:pl-5    max-md:text-[44px] text-7xl font-bold">
            infinity learn
          </div>
        </div>
        <div className="mt-12 lg:ml-7 pr-0 md:hidden">
          <Image
            className="my-image"
            src="/homepage/firstSection/imageRes.png"
            width={600}
            height={350}
            alt="firstSectionRes"
          />
        </div>
        <div className=" max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <div className="flex flex-col max-2xl:mt-16 max-md:w-[335px]  gap-2 justify-center">
            <div className="mb-1 items-stretch flex">
              <div
                className="rounded-s-2xl rounded-e-none 
             border-[1px] border-r-0
            max-2xl:bg-transparent max-md:bg-white px-4 py-2 max-md:text-[#080E14] text-white pe-2 flex justify-center items-center"
              >
                +91
              </div>
              <input
                className="rounded--2xl max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 bg-[#007BFF]
                placeholder-text:ml-3

                 placeholder-[#F0F0F0]
                text-black max-md:w-96 h-10 border-l-0
                md:h-12 pl-4 md:pl-6 text-base md:text-lg border-[1px] "
                type="text"
                placeholder="enter your mobile number"
                value={query}
                onChange={handleInputChange}
              />
              <button
                onClick={handleToggleOverlay}
                className="md:w-32 max-md:w-40 text-black max-md:rounded-r-3xl rounded-r-2xl bg-[#FCDE5A]"
              >
                join for free
              </button>
            </div>
            <div className="max-md:text-sm font-normal max-md:px-6">
              we will send an otp for verification
            </div>
          </div>
        </div>
      </div>
      <div className="  md:hidden max-md:w-full items-center flex justify-center">
        <Trial />
      </div>
      <div className="mt-5 max-md:hidden">
        <Image
          className=""
          src="/homepage/firstSection/firstSection.png"
          width={700}
          height={600}
          alt="firstSection"
        />
      </div>
    </div>
  );
}

export default FirstSection;
