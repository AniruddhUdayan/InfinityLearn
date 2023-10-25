"use client";
import "./secondSection.css";
import React, { useState, useEffect, useRef } from "react";
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

export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);
  const tabsRefs = useRef([]);

  useEffect(() => {
    // On component mount or when data changes, update the width and position
    if (tabsRefs.current[selectedTab]) {
      setTabWidth(tabsRefs.current[selectedTab].offsetWidth);
      setLeft(tabsRefs.current[selectedTab].offsetLeft);
    }
  }, [selectedTab, data]);

  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  return (
    <div>
      <div
        className="rounded-[20px] bg-gray-200 text-[#080E14]"
        // style={{ height: 34 }}
      >
        <div className="h-full mt-1 gap-12  max-md:gap-3 flex items-center relative">
          {data.map((tab, index) => (
            <div
              key={index}
              ref={(el) => (tabsRefs.current[index] = el)}
              className={`max-md:py-3 h-[40px] font-[600] max-md:text-[14px] 
                w-[95px] max-md:w-auto  max-md:px-4
               switchtabs max-md:h-[37px] py-[10px] 
               text-center cursor-pointer whitespace-nowrap
              ${
                selectedTab === index
                  ? " bg-yellow-300  text-[#080E14] z-20"
                  : " text-[#080E14] bg-white "
              } rounded-[20px] mt-2 justify-center text-[16px] items-center`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </div>
          ))}
          <span
            className="h-10 z-0 max-md:h-[37px] bg-yellow-300 text-black absolute 
            transition-all  duration-300 rounded-2xl mt-2"
            style={{ left, width: tabWidth }}
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
    setSvgWidth(window.innerWidth < 768 ? 50 : 90);
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
      className="card3"
    >
      <Image src={src} height={svgWidth} width={svgWidth} alt={altText} />
      <div className=" card3-sec">
        <div className="card3-text">{titleLineOne}</div>
        <div className="card3-text">{titleLineTwo}</div>
      </div>
    </div>
  );
};

function Card0(props) {
  const [svgWidth, setSvgWidth] = useState(100);
  const dispatch = useDispatch();
  const updateWidth = () => {
    setSvgWidth(window.innerWidth < 768 ? 36 : 100);
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
      className={`card0`}
    >
      <Image src={svg} width={svgWidth} height={svgWidth} alt="secondSec.svg" />
      <div className="  flex flex-col">
        <h1
          className={`" ${
            isHovered ? "text-white" : ""
          } text-[24px] text-[#080E14] max-md:text-xl font-[600] mt-4  sm:mt-2 sm:text-[18px] "`}
        >
          {props.data.name}
        </h1>
        <div
          className={`" ${
            isHovered ? "text-white" : ""
          } text-[#6B6E72] font-[500] lg:text-[18px] text-sm lg:mb-5  max-md:mb-3 sm:mb-2 "`}
        >
          {props.data.subItemAbout}
        </div>
      </div>
      <div
        className={`" text-[#007BFF] ${
          isHovered ? "text-white" : ""
        } max-2xl:font-semibold max-md:w-full max-md:text-sm text-lg  "`}
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
    setSvgWidth(window.innerWidth < 768 ? 50 : 90);
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
      className={` card2 `}
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
    setSvgWidth(window.innerWidth < 768 ? 50 : 96.74);
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
      className={`card1`}
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
        }  font-semibold text-2xl "`}
      >
        {text}
      </div>
    </div>
  );
};

function Class11to12() {
  return (
    <div className=" class11to12 max-lg:w-scr ">
      <div className=" competitiveExamDiv ">competitive exam</div>
      <div className="class11to12-items md:w-full max-xl:h-full no-scrollbar  ">
        {items[0]?.subItems[0]?.lists?.map((item, index) => (
          <Card0 data={item} key={index} />
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
    updateWidth();
    window.addEventListener("resize", updateWidth);
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
            <Card0 data={item} key={index} />
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
              <Card0 data={item} key={index} />
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
    <div className="items-center h-full poppins  bg-[#E5E7EB]">
      <div className="max-w-[1010px] max-2xl:px-4 max-md:px-3   max-lg: max-md:w-[100%] mx-[auto]">
        <div className="flex stat justify-evenly  p-6 text-center max-md:hidden font-bold text-4xl gap-4 relative bottom-[4.5rem] mx-auto flex-row items-center h-36 bg-yellow-300 px-4 rounded-2xl">
          <div className="text-[black] flex flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Learners
            </div>
            <div className="font-[600] text-[36px] text-center">50k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black items-center flex text-center flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Cities
            </div>
            <div className="font-[600] text-[36px]">60k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black   text-start flex flex-col">
            <div className="text-center font-normal text-2xl text-[#080E14] flex-grow">
              Classes Conducted
            </div>
            <div className="font-[600] text-[36px]">9200+</div>
          </div>
        </div>

        <h1
          className="ss-head max-md:hidden max-md:mx-3
          max-md:py-10 md:mb-6 max-md:w-full 
        max-md:text-start max-md:justify-start max-md:tracking-normal max-md:text-[32px] res1  "
        >
          select your learning
          <span className=" text-blue-500 "> goal </span>
          grade-wise
        </h1>
        <h1 className="ss-head1   ">
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
