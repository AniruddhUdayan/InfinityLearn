"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "../../store/mobVeriSlice";
import LoginPopup from "../LoginPopup";
function SixthSection() {
  const [svgWidth, setSvgWidth] = useState(410);
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const dispatch = useDispatch();
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 662 ? 285 : 410);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const [svgWidth1, setSvgWidth1] = useState(20);
  const updateWidth1 = () => {
    setSvgWidth1(window.innerWidth <= 768 ? 25 : 40);
  };
  useEffect(() => {
    // Update width on mousvgWidth1
    updateWidth1();

    // Add resize event listener
    window.addEventListener("resize", updateWidth1);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth1);
  }, []);
  const startLearning = async () => {
    dispatch(showOverlayMode(!showOverlay));
  };
  if (showOverlay) {
    return (
      <div>
        <LoginPopup />
      </div>
    );
  }

  return (
    <div className=" h-min bg-gray-200  ">
      <div className=" max-w-screen-xl mx-auto px-4 flex max-md:flex-col  justify-between relative">
        <div className=" flex flex-col max-md:justify-end   mt-20  ">
          <div className=" text-[64px] max-md:text-[32px]  max-md:px-5   font-[700]   text-[#007BFF]">
            best study
            <span className="text-[#007BFF] ml-2 max-md:text-[32px] md:hidden  mb-4 font-[700] text-6xl">
              material,{" "}
            </span>
          </div>
          <div className="text-[#007BFF] max-md:px-5  text-[64px]  max-md:hidden max-md:text-[32px]    font-[700] ">
            material,{" "}
            <span className="text-[#080E14] font-[700] max-md:text-[32px]   text-[64px]">
              now at
            </span>
          </div>
          <div className=" text-[#080E14] max-md:px-5  max-md:text-[32px]  font-[700] md:mb-10 max-md:mb-1  text-[64px]">
            <span className=" md:hidden text-black max-md:text-[32px]  text-[64px]  font-[700] ">
              now at
            </span>{" "}
            your finger <span className="max-md:hidden">tips!</span>
          </div>
          <div className=" text-[#080E14] max-md:px-5 md:hidden  max-md:text-[32px] font-[700] md:mb-10 max-md:mb-6  text-6xl">
            tips!
          </div>
          <div className="flex max-md:px-5 max-md:flex-col flex-wrap">
            <div className="w-1/2 max-md:w-full p-2">
              <div className="flex items-center space-x-4 mb-5 ">
                <Image
                  src="/../homepage/sixthSection/tick.svg"
                  height={svgWidth1}
                  width={svgWidth1}
                  alt="tick.svg"
                  className=""
                />
                <div className="max-md:text-[14px] max-2xl:text-[18px] text-[#6B6E72] ">
                  live classes
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-5 ">
                <Image
                  src="/../homepage/sixthSection/tick.svg"
                  height={svgWidth1}
                  width={svgWidth1}
                  alt="tick.svg"
                  className=""
                />
                <div className="max-md:text-[14px] max-2xl:text-[18px] text-[#6B6E72] ">
                  progress tracking
                </div>
              </div>
            </div>

            <div className="w-1/2 max-md:w-full  p-2">
              <div className="flex items-center space-x-4 mb-5 ">
                <Image
                  src="/../homepage/sixthSection/tick.svg"
                  height={svgWidth1}
                  width={svgWidth1}
                  alt="tick.svg"
                  className=""
                />
                <div className="max-md:text-[14px] whitespace-nowrap max-2xl:text-[18px] text-[#6B6E72] ">
                  diverse question bank
                </div>
              </div>
              {/* Add another div here if needed */}
            </div>
          </div>

          <div className="download max-md:hidden py-16  flex flex-col text-start">
            <div className="mb-4 ml-3 tracking-wider text-[24px] font-[600] text-black">
              download the app
            </div>
            <div className="flex items-center justify-start">
              <a
                href="https://apps.apple.com/sg/app/infinity-learn/id1642492194"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/../homepage/sixthSection/apple.svg"
                  height={50}
                  width={180}
                  alt="Download on the Apple App Store"
                  className=" pb-[0.8rem] "
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=apps.infinitylearn.lms.tuition&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/../homepage/sixthSection/playstore.svg"
                  height={50}
                  width={186}
                  alt="playsto.svg"
                  className=" pb-2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-end">
          <div className=" md:mt-10 mt-3 relative">
            <Image
              src="/../homepage/sixthSection/sixthSec1.svg"
              alt="Sixth Section Background"
              height={730}
              width={491}
            />
          </div>
        </div>
        <div className="download md:hidden  py-6  flex flex-col text-start">
          <div className="mb-4 ml- text-black text-center text-4xl font-bold">
            download the app
          </div>
          <div className="flex max-md:w-96 pl-10 max-md:justify-center items-center  justify-between">
            {/* <div className=" bg-black bg-apple rounded-xl w-full  h-fit"> */}

            <a
              href="https://apps.apple.com/sg/app/infinity-learn/id1642492194"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/../homepage/sixthSection/apple1.svg"
                height={20}
                width={160}
                alt="apple1.svg"
                className="  bg-url()  hover:cursor-pointer"
              />
            </a>
            {/* </div> */}
            <a
              href="https://play.google.com/store/apps/details?id=apps.infinitylearn.lms.tuition&hl=en&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/../homepage/sixthSection/playstore1.svg"
                height={20}
                width={150}
                alt="playsto.svg"
                className=" hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/* <MyComponent /> */}
      </div>
    </div>
  );
}

export default SixthSection;
