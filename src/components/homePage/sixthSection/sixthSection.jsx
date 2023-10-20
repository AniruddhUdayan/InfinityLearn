"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./sixthSection.css";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "../../../store/mobVeriSlice";
import { setComponentToShow } from "../../../store/modalToShow";
import { GoArrowUpRight } from "react-icons/go";

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
    dispatch(setComponentToShow("SendOtp"));
    dispatch(showOverlayMode(!showOverlay));
  };

  return (
    <div className=" flex sixthsection flex-col max-md:pt-28 pt-[74px] justify-center">
      <div className=" w-full flex h-min justify-center items-center ">
        <button
          onClick={startLearning}
          className="text-white mt-6 items-center h-[52px] max-md:mt-8  
          hover:space-x-2 w-80 max-md:w-[340px] lff hover:bg-blue-600 
           bg-[#007BFF] rounded-2xl"
        >
          <div className=" flex justify-center gap-2">
            <div className=" text-[16px] font-[600]">
              start learning for free{" "}
            </div>
            <div>
              <GoArrowUpRight size={24} />
            </div>
          </div>
        </button>
      </div>

      <div className=" h-min bg-gray-200 max-md:mt-[32px] mt-[80px] ">
        <div className=" max-w-screen-xl mx-auto md:px-4 flex max-md:flex-col  justify-between relative">
          <div className=" flex flex-col max-md:justify-end text-ss font-[700] text-[64px] max-xl:text-[54px] max-md:text-[32px]  mt-20  ">
            <div className=" text-c   max-md:px-5 whitespace-nowrap      text-[#007BFF]">
              best study
              <span className="text-[#007BFF] ml-2 md:hidden  mb-4 ">
                material,{" "}
              </span>
            </div>
            <div className="text-[#007BFF]  max-md:px-5   max-md:hidden   ">
              material,{" "}
              <span className="text-[#080E14] font-[700] ">now at</span>
            </div>
            <div className=" text-[#080E14] max-md:px-5  text-c whitespace-nowrap   md:mb-10 max-md:mb-1 ">
              <span className="  md:hidden text-black  ">now at</span> your
              finger <span className=" max-md:hidden">tips!</span>
            </div>
            <div className=" text-[#080E14] max-md:px-5 text-c whitespace-nowrap md:hidden   md:mb-10 max-md:mb-6">
              tips!
            </div>
            <div className="flex max-md:px-5 text-c max-xl:flex-col flex-wrap">
              <div className="w-1/2 whitespace-nowrap font-normal max-md:text-[14px] max-2xl:text-[18px] text-[#6B6E72]  max-md:w-full p-2">
                <div className="flex items-center space-x-4 mb-[20px] max-md:mb-[23px] ">
                  <Image
                    src="/../homepage/sixthSection/tick.svg"
                    height={svgWidth1}
                    width={svgWidth1}
                    alt="tick.svg"
                    className=""
                  />
                  <div className="">live classes</div>
                </div>
                <div className="flex items-center space-x-4 mb-[20px] max-md:mb-[20px] ">
                  <Image
                    src="/../homepage/sixthSection/tick.svg"
                    height={svgWidth1}
                    width={svgWidth1}
                    alt="tick.svg"
                    className=""
                  />
                  <div className="">progress tracking</div>
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
                  <div className="max-md:text-[14px] font-normal whitespace-nowrap max-2xl:text-[18px] text-[#6B6E72] ">
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
                    src="/../images/apple.svg"
                    height={80}
                    width={196}
                    alt="Download on the Apple App Store"
                    className=" aspect-[18/5] mb-"
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
                    width={206}
                    alt="playsto.svg"
                    className=" aspect-[18/5]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-end">
            <div className=" md:mt-10 mt-3 relative">
              <Image
                src="/homepage/sixthSection/sixthSec1.webp"
                alt="Sixth Section Background"
                height={730}
                width={491}
                className="aspect-[2/3]"
              />
            </div>
          </div>
          <div className="download md:hidden  py-6  flex flex-col text-start">
            <div className="mb-4 ml- text-black text-center text-4xl font-bold">
              download the app
            </div>
            <div className="flex max-md:w-  max-md:justify-center items-center  justify-between">
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
                  className="  mb- bg-url()  hover:cursor-pointer"
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
                  className=" mb- hover:cursor-pointer"
                />
              </a>
            </div>
          </div>
          {/* <MyComponent /> */}
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
