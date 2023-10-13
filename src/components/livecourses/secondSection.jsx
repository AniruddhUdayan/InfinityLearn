"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import "./liveCourses.css";
import { Nav } from "react-bootstrap";
const options = [
  "overview",
  "learn with live classes",
  "revise with recordings",
  "practice mock test",
  "study with IL books",
];
// import React, { useEffect, useRef, useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const [widths, setWidths] = useState([]);
  const tabsRef = useRef([]);
  const activeTab = (tab, index) => {
    setLeft(calculateLeftPosition(index));
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  const calculateLeftPosition = (index) => {
    return widths.slice(0, index).reduce((acc, w) => acc + w, 0);
  };

  useEffect(() => {
    setWidths(tabsRef.current.map((tab) => tab.offsetWidth));
  }, [data]);

  return (
    <div className="max-md:hidden bg-[#F1F2F6] text-black relative">
      <div className="h-full mt-1 whitespace-nowrap  flex items-center">
        {data.map((tab, index) => (
          <span
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`h-full w-full   fle-grow px-4  text-center text-base cursor-pointer 
            ${selectedTab === index ? "text-black" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="border-b-2 border-blue-500 absolute bottom-0 transition-all duration-500"
          style={{ left, width: widths[selectedTab] }}
        ></span>
      </div>
    </div>
  );
};

const SwitchTabs1 = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    onTabChange && onTabChange(data[index]);
  };

  return (
    <div className="bg-[#F1F2F6] md:hidden no-scrollbar font-[500] text-[#080E14] max-md:text-[14px]  h-11 relative w-full">
      <div className="flex space-x-4 whitespace-nowrap overflow-x-auto">
        {data.map((option, index) => (
          <span
            key={index}
            className={`inline-flex items-center justify-center px-4 py-2 cursor-pointer ${
              index === selectedTab
                ? "text-blue-500 border-b-2 border-blue-500"
                : "t"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};
function SecondSection() {
  const [svgWidth, setSvgWidth] = useState(700);
  const [svgheight, setSvgheight] = useState(530);
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 279 : 700);
    setSvgheight(window.innerWidth <= 530 ? 277 : 530);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const [selectedOption, setSelectedOption] = useState(0);

  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const handleClick = (index) => {
    setSelectedOption(index);
  };
  // const windowWidth = useWindowWidth();
  // const isMobileView = typeof windowWidth !== "undefined" && windowWidth <= 768;

  const borderPosition = {
    transform: `translateX(-${(100 / options.length) * selectedOption}%)`,
  };
  return (
    <div className="items-center max-md:h-fit min-h-scree max-md:pb-16 max-mt:mb24 max-md:pt-[31px]  py-16 bg-[#F1F2F6]">
      {/* <div className="w-[70%] max-w-[1000px]  flex flex-col"> */}
      <div className="flex w-full items-center bg-[#F1F2F6] max-md:overflow-x-auto no-scrollbar  justify-center mb-10  h-max relative">
        <SwitchTabs data={options} onTabChange={onTabChange} />
        {/* {isMobileView && ( */}
        <div className=" overflow-x-auto  ">
          <SwitchTabs1 data={options} onTabChange={onTabChange} />
        </div>
      </div>
      {/* </div> */}
      <div
        className="flex justify-evenly md:mt-[60px] max-md:flex-col max-md:ml-0  mx-auto ml-9 
      max-md:items-start  items-center"
      >
        <div className=" md:hidden  mx-auto w-[279px] h-full  mb-7">
          <Image
            src="/../livecourses/secondSection/image1.png"
            height={svgWidth}
            width={svgWidth}
            alt="thirdSection"
          />
        </div>
        <div className="flex pl-10 max-md:pl-8 max-md:gap-4 flex-col">
          <div className="text-5xl font-[700] max-md:text-[32px] text-[#080E14] ">
            all-rounder{" "}
          </div>
          <div className="text-5xl font-[700]  max-md:text-[32px]  text[#007BFF] mb-5 ">
            learning!
          </div>
          <div className="text-base ml-auto max-md:ml-0 gap-5  flex flex-col">
            <div className=" text-[#52565B] text-[14px] font-[400] flex items-center gap-3">
              <Image src="/../tick.svg" height={25} width={25} />
              <div className=" whitespace-nowrap">
                1000+ hrs live{" "}
                <span className=" ml-1 text-[#080E14;] text-[14px] font-[600]">
                  classes{" "}
                </span>
              </div>
            </div>{" "}
            <div className=" text-[#52565B] text-[14px] font-[400] flex items-center gap-3">
              <Image src="/../tick.svg" height={25} width={25} />
              <div>
                3000+ hrs{" "}
                <span className=" text-[#080E14;] text-[14px] font-[600]">
                  recorded content
                </span>
              </div>
            </div>
            <div className=" text-[#52565B] text-[14px] font-[400] flex items-center gap-3">
              <Image src="/../tick.svg" height={25} width={25} />
              <div>
                <span className=" text-[#080E14;] text-[14px] font-[600]">
                  AITS
                </span>
                - 24 biweekly mock tests
              </div>
            </div>
            <div className=" text-[#52565B] text-[14px] font-[400] flex items-center gap-3">
              <Image src="/../tick.svg" height={25} width={25} />
              <div>
                world class
                <span className=" ml-2 text-[#080E14;] text-[14px] font-[600]">
                  IL books
                </span>
                -
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <Image
          src="/../livecourses/secondSection/image1.png"
          height={530}
          width={600}
          alt="thirdSection"
          className="my-image max-md:hidden"
        />
      </div>
    </div>
  );
}
export default SecondSection;
