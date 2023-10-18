"use client";
import "./secondSection.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const std = [" 11 to 12 +", "9 to 10", " 4 to 8 ", " 1 to 3 "];
import items from "@/utils/infoSecSection";
import {
  setShowGradePopup,
  setSelectedExam,
  setGrades,
} from "../../../store/HomePage/examGradeSelection";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
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
        className="rounded-2xl ove bg-gray-200 text-[#080E14]"
        style={{ height: 34 }}
      >
        <div className="h-full  mt-1 gap-12 max-md:gap-3 flex items-center relative">
          {data.map((tab, index) => (
            <div
              key={index}
              className={` max-md:py-3  h-[40px] font-[600] max-md:text-[14px] 
               max-md:px-1 p  w-[100px] 
              max-md:w-[87px]  max-md:h-[37px] py-[10px] 
              text-sm text-center cursor-pointer
              ${
                selectedTab === index
                  ? "bg-yellow-300 text-[#080E14]"
                  : "bg-white text-[#080E14]"
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
const Card3 = ({ svg1, svg2, altText, titleLineOne, titleLineTwo }) => {
  const [svgWidth, setSvgWidth] = useState(90);
  const [src, setSrc] = useState(svg1);
  function handleMouseEnter() {
    setSrc(svg2);
  }
  function handleMouseOut() {
    setSrc(svg1);
  }

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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      className="hover:cursor-pointer hover:text-white text-blac hover:bg-blue-500 flex
       max-md:flex-col p-7 bg-blue-200 gap-7 max-md:px-2 max-md:rounded-2xl max-md:py-6
    justify-evenly w-full max-md:w-1/2 items-center rounded-[2rem] border-black"
    >
      <Image src={src} height={svgWidth} width={svgWidth} alt={altText} />
      <div className="flex flex-col">
        <div className="card-text font-semibold text-2xl max-md:text-lg k">
          {titleLineOne}
        </div>
        <div className="card-text font-semibold max-md:text-lg text-2xl t">
          {titleLineTwo}
        </div>
      </div>
    </div>
  );
};

function SecondSecCard(props) {
  const [svgWidth, setSvgWidth] = useState(100);
  const dispatch = useDispatch();
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 36 : 100);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const [svg, setSvg] = useState(props.data.svg);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
    setSvg(svg == props.data.svg ? props.data.svg2 : props.data.svg);
  };

  const openPopup = () => {
    console.log(props.data);
    dispatch(setShowGradePopup(true));
    dispatch(setGrades(props?.data?.grades));
    dispatch(setSelectedExam(props?.data?.targetExam));
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={openPopup}
      className={`flex hover:cursor-pointer hover:bg-blue-500 hover:text-white 
      flex-col justify-evenly items-start 
      max-2xl:h-[318px] py-20 px-6
      flex-grow max-md:flex-shrink-0  bg-blue-200 
      max-md:px-3 max-md:py-5 max-2xl:px max-md:w-[161px] max-md:h-[209px] 
      max-2xl:w-[318px] rounded-[1.5rem]  ${
        // isHovered ? "text-white bg-blue-500" : "text-black"
        ""
      }`}
    >
      <Image src={svg} width={svgWidth} height={svgWidth} alt="secondSec.svg" />
      <h1 className=" lg:text-xl max-md:text-xl font-semibold mt-4  sm:mt-2 sm:text-lg">
        {props.data.name}
      </h1>
      <div className=" text-sm lg:mb-5 max-md:text-opacity-50 max-md:mb-3 sm:mb-2">
        {props.data.subItemAbout}
      </div>
      <div
        className={`" text-[#007BFF] ${
          isHovered ? "text-white" : ""
        } max-2xl:font-bold max-md:w-full max-md:text-sm text-lg  "`}
      >
        {props.data.examTime}
      </div>
    </div>
  );
}
const Card2 = ({ svg1, svg2, altText, title, subtitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [svgWidth, setSvgWidth] = useState(90);
  const [src, setSrc] = useState(svg1);
  function handleMouseEnter() {
    setIsHovered(true);
    setSrc(svg2);
  }
  function handleMouseOut() {
    setIsHovered(false);
    setSrc(svg1);
  }
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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      className={`flex hover:cursor-pointer flex-col p-20 max-md:px-1 max-md:py-10 h-min 
      gap-3 items-center bg-blue-200 rounded-3xl
       border-2 w-full hover:bg-blue-500 hover:text-white
      `}
    >
      <Image src={src} width={svgWidth} height={svgWidth} alt={altText} />
      <div className="card-text text-2xl font-semibold">{title}</div>
      <div className={`" opacity-50"`}>{subtitle}</div>
    </div>
  );
};
const Card1 = ({ svg1, svg2, altText, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [svgWidth, setSvgWidth] = useState(96.74);
  // if (isHovered == true) {
  //   setSrc(svg1);
  // } else {
  //   setSrc(svg2);
  // }
  const [src, setSrc] = useState(svg1);
  function handleMouseEnter() {
    setIsHovered(true);
    setSrc(svg2);
  }
  function handleMouseOut() {
    setIsHovered(false);
    setSrc(svg1);
  }
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 50 : 96.74);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      className={`hover:cursor-pointer flex max-md:flex-col 
      max-md:gap-2 max-md:w-1/3  gap-7 justify-evenly bg-blue-200 text-black
      w-full items-center  py-4
       max-2xl:h-[150px]
        max-md:rounded-2xl  rounded-[2rem] hover:text-white  hover:bg-blue-500 `}
    >
      <Image
        src={src}
        height={svgWidth} // Adjust according to your needs
        width={svgWidth} // Adjust according to your needs
        alt={altText}
      />
      <div
        className={`" ${
          isHovered ? "text-white" : "text-black"
        } max-md:text-2xl font-semibold xl:text-2xl "`}
      >
        {text}
      </div>
    </div>
  );
};

function Class11to12() {
  return (
    <div
      className=" flex flex-col max-xl:h-max  
     md:px10 max-lg:w-scr   pb-20 justify-start "
    >
      <div
        className="  max-md:text-3xl  max-md:ml-4 
      text-4xl text-black mb-6 font-semibold "
      >
        competitive exam
      </div>
      <div
        className=" flex max-md:px-1 md:w-full max-md:gap-[12px] gap-[20px]
       max-md:w-auto max-md:overflow-x-auto
        max-xl:h-full 
       no-scrollbar  "
      >
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
    setSvgWidth(window.innerWidth <= 768 ? 70 : 90);
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
    <div className=" flex md:px10 max-lg:w-scr  flex-col pb-20 justify-start ">
      <div className=" max-md:text-3xl max-md:ml-4 text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex flex-col gap-8">
        <div
          className=" flex max-md:px-1 md:w-full max-md:gap-[12px] gap-[20px]
       max-md:w-auto max-md:overflow-x-auto
        max-xl:h-full 
       no-scrollbar  "
        >
          {items[0]?.subItems[1]?.lists?.map((item, index) => (
            <SecondSecCard data={item} key={index} />
          ))}
        </div>
        <div className="max-md:ml-4 font-bold text-4xl text-black">
          tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div
          className="  no-scrollbar    
        max-md:overflow-x-auto max-md:gap-1 max-md:px-0 w-full 
        max-2xl:h-max
        max-md:p max-md:-6  flex gap-[16px] "
        >
          <Card1
            svg1="/../homepage/secondSection/Black/Math.svg"
            svg2="/../homepage/secondSection/White/Math.svg"
            altText="math"
            text="Math"
          />
          <Card1
            svg1="/../homepage/secondSection/Black/Science.svg"
            svg2="/../homepage/secondSection/White/Science.svg"
            altText="english"
            text="Science"
          />
          <Card1
            svg1="/../homepage/secondSection/Black/English.svg"
            svg2="/../homepage/secondSection/White/English.svg"
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
            svg1="/../homepage/secondSection/Black/Foundation.svg"
            svg2="/../homepage/secondSection/White/Foundation.svg"
            altText="An alternative text for image"
            title="Foundation"
            subtitle="engineering + medical "
          />
        </div>
        <div className="max-md:ml-4 max-md:text-2xl font-bold text-4xl text-black">
          tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div className=" flex flex-col gap-8">
          <div
            className=" flex max-md:px-1 md:w-full max-md:gap-[12px] gap-[20px]
       max-md:w-auto max-md:overflow-x-auto
        max-xl:h-full
       no-scrollbar  "
          >
            {items[0]?.subItems[0]?.lists?.map((item, index) => (
              <SecondSecCard data={item} key={index} />
            ))}
          </div>
          <div className="max-md:ml-4 font-bold max-md:text-2xl text-4xl text-black">
            infinity futurz{" "}
            <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
          </div>
          <div className=" gap-[16px] no-scrollbar    max-md:overflow-x-auto max-md:gap-[4px] max-md:px-0 w-full max-md:p max-md:-6  flex xl:gap-[16px]">
            <Card1
              svg1="/../homepage/secondSection/Black/Math.svg"
              svg2="/../homepage/secondSection/White/Math.svg"
              altText="math"
              text="Math"
            />
            <Card1
              svg1="/../homepage/secondSection/Black/Science.svg"
              svg2="/../homepage/secondSection/White/Science.svg"
              altText="english"
              text="Science"
            />
            <Card1
              svg1="/../homepage/secondSection/Black/English.svg"
              svg2="/../homepage/secondSection/White/English.svg"
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
            svg1="/../homepage/secondSection/Black/Headstart.svg"
            svg2="/../homepage/secondSection/White/Headstart.svg"
            altText="An alternative text for image"
            title="Headstart Program"
            subtitle="english +math +science +coding"
          />
        </div>
        <div className=" font-semibold text-4xl  max-md:ml-4 max-md:text-3xl text-black">
          infinity futurz
        </div>
        <div className="max-md:px-3 flex max-md:overflow-x-auto gap-6">
          <Card3
            svg1="/../homepage/secondSection/Black/DesignersProgram.svg"
            svg2="/../homepage/secondSection/White/DesignersProgram.svg"
            altText="math"
            titleLineOne="Young Product"
            titleLineTwo="Designer's Program"
          />
          <Card3
            svg1="/../homepage/secondSection/Black/ThinkingSkills.svg"
            svg2="/../homepage/secondSection/White/ThinkingSkills.svg"
            altText="science"
            titleLineOne="High Order thinking"
            titleLineTwo="Skills"
          />
          {/* Additional Cards as needed */}
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
    // <div>
    //   <Container>
    //     <Col>
    //     </Col>
    //   </Container>
    // </div>
    <div className="items-center h-full  bg-gray-200">
      <div className="max-w-[1000px] max-2xl:px-4 max-md:px-3   max-lg: max-md:w-[100%] mx-auto">
        <div className="flex stat justify-evenly  p-6 text-center max-md:hidden font-bold text-4xl gap-4 relative bottom-[4.5rem] mx-auto flex-row items-center h-36 bg-yellow-300 px-4 rounded-2xl">
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

        <h1
          className=" max-md:hidden text-[#080E14] max-2xl:text-center mx-auto max-md:mx-3
          max-md:py-10 md:mb-6 max-md:w-full 
        max-md:text-start max-md:justify-start tracking-wide max-md:tracking-normal
        text-5xl max-md:text-[32px] res1 font-extrabold "
        >
          select your learning
          <span className=" text-blue-500 "> goal </span>
          grade-wise
        </h1>
        <h1
          className="md:hidden flex flex-col  max-2xl:text-center mx-auto max-md:mx-3
          max-md:py-10 md:mb-6 max-md:w-full 
        max-md:text-start max-md:justify-start tracking-wide max-md:tracking-normal
        text-5xl max-md:text-[28px] font-extrabold "
        >
          <div className=" whitespace-nowrap text-[#080E14]">
            select your learning
          </div>
          <div className="  ">
            <span className=" text-[#007BFF]"> goal </span>
            grade-wise
          </div>
        </h1>
        <div className=" h-full flex max-md:px-4 max-lg:w-full justify-center mb-9   items-center">
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
