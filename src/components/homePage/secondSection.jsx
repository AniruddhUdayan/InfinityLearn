"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const std = [" 11 to 12 +", "9 to 10", " 4 to 8 ", " 1 to 3 "];
import items from "@/utils/infoSecSection";
export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    const multiplier = window.innerWidth <= 640 ? 100 : 148;
    setLeft(index * multiplier);

    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div>
      <div
        className="rounded-2xl bg-gray-200 text-black"
        style={{ height: 34 }}
      >
        <div className="h-full mt-1 gap-12 max-md:gap-3 flex items-center relative">
          {data.map((tab, index) => (
            <div
              key={index}
              className={`h-8 max-md:h-9 max-md:px-1 py-1 max-md:py-2 w-[100px] max-md:w-[70px] text-sm text-center cursor-pointer
              ${
                selectedTab === index
                  ? "bg-yellow-300 text-black"
                  : "bg-white text-black"
              } rounded-2xl mt-2 justify-center items-center`}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 10 : 1 }}
            >
              {tab}
            </div>
          ))}
          <span
            className="h-8 z-0 bg-yellow-300 w-[100px] max-md:w-[5px] text-black absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500 rounded-2xl mt-2"
            style={{ left }}
          />
        </div>
      </div>
    </div>
  );
};

function SecondSecCard(props) {
  const [svgWidth, setSvgWidth] = useState(96.74);

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 45 : 96.74);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`flex hover:cursor-pointer flex-col justify-evenly items-start 
      flex-grow max-md:flex-shrink-0 bg-blue-200 max-md:px-4 md:px-16 
      max-md:py-16 md:w-1/3 rounded-[1.5rem] sm:px-8 sm:py-10 ${
        isHovered ? "text-white bg-blue-500" : "text-black"
      }`}
    >
      <Image
        src={props.data.svg}
        width={svgWidth}
        height={svgWidth}
        alt="secondSec.svg"
      />
      <h1 className=" text-xl max-md:text-2xl mt-4 font-medium sm:mt-2 sm:text-lg">
        {props.data.name}
      </h1>
      <div className=" text-sm mb-5 max-md:mb-3 sm:mb-2">
        {props.data.subItemAbout}
      </div>
      <div className=" max-md:text-sm text-lg sm:text-base">
        {props.data.examTime}
      </div>
    </div>
  );
}
const Card2 = ({ src, altText, title, subtitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex hover:cursor-pointer flex-col p-20 max-md:p-8 gap-3 items-center bg-blue-200 rounded-3xl border-2 w-full ${
        isHovered ? "hover:bg-blue-500 text-white" : "text-black"
      }`}
    >
      <Image src={src} width={100} height={100} alt={altText} />
      <div className="card-text text-2xl font-semibold">{title}</div>
      <div className="card-text opacity-50">{subtitle}</div>
    </div>
  );
};
const Card1 = ({ src, altText, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hover:cursor-pointer max-md:h-32 flex max-md:flex-col max-md:gap-2 max-md:w-1/3 p-7 gap-7 justify-evenly w-full items-center rounded-[2rem] border-black ${
        isHovered ? "bg-blue-500 text-white" : "bg-blue-200 text-black"
      }`}
    >
      <Image
        src={src}
        height={100} // Adjust according to your needs
        width={100} // Adjust according to your needs
        alt={altText}
      />
      <div className="card-text font-semibold text-2xl">{text}</div>
    </div>
  );
};

function Class11to12() {
  return (
    <div className=" flex flex-col   md:px10 max-lg:w-scr   pb-20 justify-start ">
      <div className="  max-md:text-3xl  max-md:ml-4 text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex max-md:px-4 md:w-full    max-md:w-auto max-md:overflow-x-auto no-scrollbar gap-5  ">
        {items[0]?.subItems[0]?.lists?.map((item, index) => (
          <SecondSecCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
function Class9to10() {
  const [svgWidth, setSvgWidth] = useState(90);

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 50 : 90);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div className=" flex  flex-col pb-20 justify-start ">
      <div className=" max-md:text-3xl max-md:ml-4 text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex flex-col gap-8">
        <div className="max-md:px-4  no-scrollbar  flex max-md:overflow-x-auto  w-full gap-5  ">
          {items[0]?.subItems[1]?.lists?.map((item, index) => (
            <SecondSecCard data={item} key={index} />
          ))}
        </div>
        <div className="max-md:ml-4 font-bold text-4xl text-black">
          tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div className="  no-scrollbar    max-md:overflow-x-auto max-md:px-2 w-full max-md:pl-3 max-md:pr-6  flex gap-4">
          <Card1
            src="/homePage/secondSection/math1.svg"
            altText="math"
            text="Math"
          />
          <Card1
            src="/homePage/secondSection/science1.svg"
            altText="english"
            text="Science"
          />
          <Card1
            src="/homePage/secondSection/english1.svg"
            altText="math"
            text="English"
          />
        </div>
      </div>
    </div>
  );
}
function Class4to8() {
  const [svgWidth, setSvgWidth] = useState(96.74);
  const [textColor, settextColor] = useState(true);
  const handleTextColor = () => {
    settextColor(!textColor);
  };
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 45 : 96.74);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div className=" flex  flex-col pb-20 justify-start ">
      <div className=" max-md:text-3xl max-md:ml-4 text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex  w-full gap-5 hover:text-white hover:cursor-pointer max-md:px-4  ">
          <Card2
            src="/header/iit.svg"
            altText="An alternative text for image"
            title="Headstart Program"
            subtitle="english +math +science +coding"
          />
        </div>
        <div className="max-md:ml-4 font-bold text-4xl text-black">
          tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div className=" flex flex-col max-md:pl-3 max-md:pr-6 gap-8">
          <div className="max-md:px-4 no-scrollbar  flex max-md:overflow-x-auto  w-full gap-5  ">
            {items[0].subItems[1].lists.map((item, index) => (
              <SecondSecCard data={item} key={index} />
            ))}
          </div>
          <div className="max-md:ml-4 font-bold text-4xl text-black">
            tutions{" "}
            <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
          </div>
          <div className=" no-scrollbar    max-md:overflow-x-auto  max-md:px-4 w-full max-md:pl-3 max-md:pr-6  flex gap-4">
            <Card1
              src="/homePage/secondSection/math1.svg"
              altText="math"
              text="Math"
            />
            <Card1
              src="/homePage/secondSection/science1.svg"
              altText="english"
              text="Science"
            />
            <Card1
              src="/homePage/secondSection/english1.svg"
              altText="math"
              text="English"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Class1to3() {
  return (
    <div className=" flex flex-col pb-20 justify-start ">
      <div className=" text-4xl text-black mb-6 max-md:ml-4 max-md:text-3xl  font-semibold ">
        program for kids
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex  w-full gap-5 max-md:px-4   ">
          <Card2
            src="/header/iit.svg"
            altText="An alternative text for image"
            title="Headstart Program"
            subtitle="english +math +science +coding"
          />
        </div>
        <div className=" font-semibold text-4xl  max-md:ml-4 max-md:text-3xl text-black">
          infinity futurz
        </div>
        <div className="max-md:px-3 flex max-md:overflow-x-auto gap-6">
          <div className=" hover:cursor-pointer hover:bg-blue-500 flex max-md:flex-col p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image
              src="/homePage/secondSection/math1.svg"
              height={90}
              width={90}
              alt="math"
            />
            <div className=" flex flex-col">
              <div className="card-text font-semibold text-2xl max-md:text-lg text-black ">
                Young Product
              </div>
              <div className="card-text font-semibold max-md:text-lg text-2xl text-black ">
                {` Designer's Program`}
              </div>
            </div>
          </div>

          <div className=" hover:cursor-pointer   hover:bg-blue-500 max-md:flex-col flex p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image
              src="/homePage/secondSection/hots1.svg"
              height={70}
              width={70}
              alt="science"
            />
            <div className=" flex flex-col">
              <div className="card-text font-semibold text-2xl max-md:text-lg text-black ">
                High Order thinking
              </div>
              <div className="card-text font-semibold text-2xl max-md:text-lg text-black ">
                Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SecondSection() {
  const [endpoint, setEndpoint] = useState("day");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tab, index) => {
    setActiveTab(index);
  };
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="items-center md:min-h-screen max-md:-full  bg-gray-200">
      <div className="max-w-[1000px] px-4   max-lg: max-md:w-[100%] mx-auto">
        <div className="flex justify-evenly p-6 text-center max-md:hidden font-bold text-4xl gap-4 relative bottom-[4.5rem] mx-auto flex-row items-center h-36 bg-yellow-300 px-4 rounded-2xl">
          <div className="text-black flex flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Learners
            </div>
            <div className="font-bold text-center">50k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black items-center flex text-center flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Cities
            </div>
            <div className="font-bold text-center">60k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black  items-center text-center flex flex-col">
            <div className="text-center font-normal text-2xl text-[#080E14] flex-grow">
              Classes Conducted
            </div>
            <div className="font-bold text-center">9200+</div>
          </div>
        </div>

        <h1 className=" text-black max-xl:text-center mx-auto max-md:mx-3 max-md:py-5 md:mb-6 max-md:w-full max-md:text-center tracking-wide max-md:tracking-normal  text-center text-5xl max-md:text-3xl font-black">
          select your learning <span className=" text-blue-500 "> goal </span>
          grade-wise
        </h1>
        <div className=" h-full flex max-lg:w-full justify-center mb-9   items-center">
          {/* {std.map((item) => (
            <button className=" bg-white rounded-3xl px-4 py-2 mx-3 text-black hover:bg-yellow-300">
              {item}
            </button>
          ))} */}
          <SwitchTabs data={std} onTabChange={handleTabChange} />
        </div>
        {/* {"empty"} */}
        <div className="">
          {activeTab === 0 && <Class11to12 />}
          {activeTab === 1 && <Class9to10 />}
          {activeTab === 2 && <Class4to8 />}
          {activeTab === 3 && <Class1to3 />}
        </div>
        {/* <Class11to12 /> */}
      </div>
    </div>
  );
}

export default SecondSection;
