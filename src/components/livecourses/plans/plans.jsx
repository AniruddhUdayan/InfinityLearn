"use client";
import Image from "next/image";
// import React from "react";
import React, { useState, useRef, useEffect } from "react";
// import { GoArrowUpRight } from "react-icons/go";
import "../liveCourses.css";
import "./plans.css";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import {
  RiArrowDropRightLine,
  RiArrowDropLeftFill,
  RiArrowDropLeftLine,
} from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
const plans = [
  {
    id: 0,
    ppm: 3750,
    price: 90000,
    cutprice: 120000,
    nose: "42.1k",
    duration: 24,
    discount: "43%",
    mostrecommended: true,
  },
  {
    id: 1,
    ppm: 5000,
    price: 60000,
    cutprice: 90000,
    nose: "42.1k",
    duration: 12,
    discount: "22%",
    mostrecommended: false,
  },
  {
    id: 2,
    ppm: 5000,
    price: 60000,
    cutprice: 90000,
    nose: "42.1k",
    duration: 12,
    discount: "22%",
    mostrecommended: false,
  },
];
function Cards(props) {
  console.log(props.key);
  return (
    <div>
      <div
        className={` ${
          props.item.id == props.clickCount
            ? " h-[350px] max-md:h-[291px]  "
            : " max-md:h-[291px]   h-[300px] "
        } rounded-2xl plan-card hover:cursor-pointer  bg-white max-md:w-[335px] 
         w-[377px] justify-evenly max-md:px-3 max-md:p-1 p-[20px] flex flex-col `}
      >
        {props.item.mostrecommended && (
          <Image
            src="/../livecourses/plan/recommended.svg"
            className=" relative bottom-0 right-8"
            width={190}
            height={52}
            alt="recommended"
          />
        )}
        <div className=" my-2 flex plan-content gap-[47px]">
          <div className=" flex  flex-col">
            <div className="rounded-2xl p-[24px]   items-center bg-[#00364E] ">
              <div className=" flex flex-col  text-white ">
                <p className="m-0 text-2xl text-white font-bold">
                  {props.item.duration}
                </p>
                <p className="m-0 text-md ">months</p>
              </div>
            </div>
            <div
              className=" relative bottom-3 left-5  rounded-3xl    bg-yellow-300 flex justify-center 
            items-center  h-[20px] w-[70px]
             /pt-[8px] /px-[16px]
            text-[10px] font-[500] bg-[#FCDE5A"
            >
              <div className=" ">Save {props.item.discount}</div>
            </div>
          </div>
          <div className="flex  flex-col">
            <div className=" flex gap-2 items-center">
              <div className=" text-[20px] font-[400]">₹</div>
              <div className="plan-ppm font-bold text-[40px] text-[#007BFF]">
                {props.item.ppm}
              </div>
              <div className=" font-[500] text-[16px] ">/month</div>
            </div>
            <div className=" top-12 font-[400] text-[16px]">
              total <span className=" font-[600]">₹{props.item.price}</span>
            </div>
            <div className=" font-[400] line-through  opacity-60 text-[16px]">
              ₹{props.item.cutprice}
            </div>
          </div>
        </div>
        <div className=" mb-4 items-center gap-3 flex">
          <Image
            src="/livecourses/plan/image1.png"
            width={83}
            height={41}
            alt="public"
          />
          <div className=" text-[14px] font-[500]">
            {props.item.nose} students enrolled
          </div>
        </div>
        <button
          className=" plan-button text-white items-center h-[52px]   hover:space-x-2 
        w-[335px] max-md:w-[295px] hover:bg-blue-600  bg-[#007BFF] rounded-2xl"
        >
          <div className=" flex justify-center gap-2">
            <div className="">enroll </div>
            <div>
              <GoArrowUpRight size={24} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
function Plans() {
  const containerRef = useRef(null);
  const handleScaling = () => {
    const container = containerRef.current;
    const cards = Array.from(container.children).slice(0, -2); // Excluding spacer divs

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.x < 100 && rect.x > 0) {
        card.style.transform = `scale(${1 - rect.x / 500})`; // Adjust scaling
        card.style.opacity = `${1 - rect.x / 500}`; // Adjust opacity
      } else {
        card.style.transform = "scale(1)";
        card.style.opacity = "1";
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScaling);

    return () => {
      container.removeEventListener("scroll", handleScaling);
    };
  }, []);
  const [leftClickCount, setLeftClickCount] = useState(0);
  const [rightClickCount, setRightClickCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const handleLeftClick = (index) => {
    if (clickCount == 0) {
      return;
    }
    setClickCount((prev) => (prev - 1) % 3);
    scroll(index);
    // Additional functionality for left button click...
  };

  const handleRightClick = (index) => {
    if (index == 2) {
      return;
    }

    setClickCount((prev) => (prev + 1) % 3);
    scroll(index);
    // Additional functionality for right button click...
  };

  const scroll = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
    handleScaling();
  };
  console.log(clickCount);
  return (
    <div className="max-2xl:pb-[80px] max-md:pb-[31px] min-h-full bg-[#F3F3F3]  flex-col">
      <div className=" flex justify-evenly pt-32 max-md:pt-[32px] max-md:flex-col">
        <div className="  pl-[112px] max-md:pl-0 max-md:items-center max-md:w-full max-2xl:w-1/3 max-md:mt-0 mt-10 flex flex-col">
          <div className=" font-bold max-md:text-center text-[48px] max-md:text-[32px] text-[#080E14]">
            multiyear{" "}
            <span className="text-[#007BFF] md:hidden ">benefits</span>
          </div>
          <div className=" max-md:hidden text-[#007BFF] text-[48px] font-bold">
            benefits
          </div>
          <div className="text-[20px] max-md:text-[14px] max-2xl:whitespace-nowrap font-[400] text-[#52565B] ">
            choose your plan accordingly
          </div>
          <div className="flex max-md:hidden space-x-2 mt-[40px] relative w-full max-md:w-screen justify-start max-md:justify-start">
            <button
              onClick={() => handleLeftClick(-410)}
              aria-label="Scroll Left"
              className={` nav-button1 ${
                clickCount > 0
                  ? "bg-blue-400 text-blue-200"
                  : "bg-blue-300 text-blue-100"
              }`}
            >
              <RiArrowDropLeftLine size={30} />
            </button>
            <button
              onClick={() => handleRightClick(+410)}
              aria-label="Scroll Right"
              className={`nav-button1 ${
                clickCount < 2
                  ? "bg-blue-400 text-blue-200"
                  : "bg-blue-300 text-blue-100"
              }`}
            >
              <RiArrowDropRightLine size={30} />
            </button>
          </div>
        </div>
        <div
          // ref={containerRef}
          className=" pl-32 max-md:w-full max-md:items-center max-md:pl-0 max-md:mt-[32px]   w-3/4"
        >
          <div
            ref={containerRef}
            className=" scroll-container max-md:flex-col 
            max-md:overflow-hidden max-sm:items-center
             items-end max-md:px-6 px-3 no-scrollbar flex-nowrap gap-[40px]  overflow-x-auto flex "
          >
            {plans.map((item, index) => (
              <Cards key={index} item={item} clickCount={clickCount} />
            ))}
            <div className="max-md:hidden spacer"></div>{" "}
          </div>
        </div>
      </div>
      <div
        className=" max-xl:mx-[20px] max-2xl:mx-[112px] max-md:mx-[20px] max-2xl:mt-[80px] rounded-xl
       bg-[#D4E9FF] text-white max-md:flex-col flex w-fll"
      >
        <div
          className="  image-inside flex  max-md:w-full max-md:pl-0   
              justify-center items-center flex-col w-1/2"
        >
          <div className=" md:hidden px-5 pt-6 w-full flex   flex-col">
            <div className="  text-[#080E14]  font-extrabold text-[30px]  mb-1">
              mind over matter
            </div>
            <div className="text-[#080E14]  mb-[32px] font-extrabold text-[30px] ">
              with<span className=" pl-1 text-[#007BFF]">mentors</span>
            </div>

            <div className=" text-[#52565B] text-[14px] font-[400] flex flex-col">
              <div>Our mentors will guide you through every </div>
              <div>step of the journey in the Rankers </div>
              <div>program, and help you build a strong and </div>
              <div>positive mindset.</div>
            </div>
            <div className=" md:hidden w-[100%]  flex justify-center">
              <button className="  bg-[#007BFF] mt-[32px] text-white w-[100%] px-12  rounded-xl p-3">
                <div className=" flex justify-center gap-2">
                  <div className="">lets plan together </div>
                  <div>
                    <GoArrowUpRight size={24} />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div
            className="  max-md:bottom-16 flex 
              flex-col items-center justify-center w-full"
          >
            <Image
              src="/../livecourses/livecourse.png"
              layout="fill"
              className="image-fill w-[100%]"
              alt="eigthsection"
            />
          </div>
        </div>
        <div className=" w-1/ max-md:hidden  flex p-12 gap-  flex-col">
          <div className=" plansHeading  mb-1">mind over matters</div>
          <div className="plansHeading   mb-6">
            with <span className=" text-[#007BFF]">mentors</span>
          </div>
          <div className=" plansSubHeading ">
            {"We’ll guide you in making a study plan that helps"}
          </div>
          <div className=" plansSubHeading">
            {"you study efficiently and in a balanced manner!"}
          </div>
          <button className=" lptg">
            <div className=" flex justify-center gap-2">
              <div className="">lets plan together </div>
              <div>
                <GoArrowUpRight size={24} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Plans;
