"use client";
import "./secondSection.css";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import styles from "../css/styles.module.css";
import Link from "next/link";
const std = [" 11 to 12 +", "9 to 10", " 4 to 8 ", " 1 to 3 "];
import items from "@/utils/infoSecSection";
import { Col } from "react-bootstrap";
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
      console.log(typeof tabsRefs.current[selectedTab].offsetWidth, "nikal");
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
      <div className={styles.switchTabContainer}>
        {data.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabsRefs.current[index] = el)}
            className={`${styles.tabButton} ${
              selectedTab === index ? styles.selected : styles.default
            }`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </div>
        ))}
        <span
          className={styles.switchTabDash}
          style={{ left, width: tabWidth }}
        />
      </div>
    </div>
  );
};

const Card3 = ({ svg1, svg2, altText, titleLineOne, titleLineTwo }) => {
  const [svgWidth, setSvgWidth] = useState(90);
  const [src, setSrc] = useState(svg1);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setSrc(svg2);
  const handleMouseOut = () => setSrc(svg1);

  const updateWidth = () => {
    if (window.innerWidth < 768) {
      setSvgWidth(36);
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
      setSvgWidth(60);
    } else {
      setSvgWidth(100);
    }
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
      className={styles.card3}
    >
      <Image src={src} height={svgWidth} width={svgWidth} alt={altText} />
      <div className={styles.card3Sec}>
        <div className={`${styles.card3Text}`}>{titleLineOne}</div>
        <div className={`${styles.card3Text}`}>{titleLineTwo}</div>
      </div>
    </div>
  );
};

function Card0(props) {
  const [svgWidth, setSvgWidth] = useState(100);
  const dispatch = useDispatch();
  const updateWidth = () => {
    if (window.innerWidth < 768) {
      setSvgWidth(36);
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
      setSvgWidth(60);
    } else {
      setSvgWidth(100);
    }
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
      className={styles.card0}
    >
      <Image src={svg} width={svgWidth} height={svgWidth} alt="secondSec.svg" />
      <Col>
        <h1
          className={`" ${isHovered ? "text-white" : "text-[#080E14]"}  " ${
            styles.card0Heading
          }`}
        >
          {props.data.name}
        </h1>
        <div
          className={`" ${isHovered ? "text-white" : "text-[#6B6E72]"} " ${
            styles.card0SubHeading
          }`}
        >
          {props.data.subItemAbout}
        </div>
      </Col>
      <div
        className={`" text-[#007BFF] ${
          isHovered ? "text-white" : ""
        } max-md:w-full " ${styles.card0ExamTime}`}
      >
        {props.data.examTime}
      </div>
    </div>
  );
}
const Card2 = ({ svg1, svg2, altText, title, subtitle, stdbound }) => {
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
    if (window.innerWidth < 768) {
      setSvgWidth(36);
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
      setSvgWidth(60);
    } else {
      setSvgWidth(100);
    }
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
      className={styles.card2}
    >
      <Image src={src} width={svgWidth} height={svgWidth} alt={altText} />
      <div className=" text-center">
        <div
          className={`${isHovered ? "text-white" : ""} ${styles.card2Heading}`}
        >
          {title}
        </div>
        <div
          className={`${isHovered ? "text-white" : ""} ${
            styles.card2SubHeading
          }`}
        >
          {subtitle}
        </div>
        <div
          className={` ${styles.card2Class} ${
            isHovered ? "text-white" : " text-[#007BFF] "
          } `}
        >
          {stdbound}
        </div>
      </div>
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
    if (window.innerWidth < 768) {
      setSvgWidth(36);
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
      setSvgWidth(60);
    } else {
      setSvgWidth(100);
    }
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
      className={styles.card1}
    >
      <Image
        src={src}
        height={svgWidth} // Adjust according to your needs
        width={svgWidth} // Adjust according to your needs
        alt={altText}
      />
      <div
        className={`" ${isHovered ? "text-white" : "text-black"}" ${
          styles.card1Heading
        }`}
      >
        {text}
      </div>
    </div>
  );
};

function Class11to12() {
  return (
    <div className={`${styles.class11to12} max-lg:w-scr"`}>
      <div className={styles.competitiveExamDiv}>competitive exam</div>
      <div className={` ${styles.class11to12Items} no-scrollbar  "`}>
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
          infinity learn tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div
          className="  no-scrollbar    
        max-md:overflow-x-auto max-md:gap-[11px] max-md:px-0 w-full 
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
            stdbound="class 8 only"
          />
        </div>
        <div className="max-md:ml-4 max-md:text-2xl font-bold text-4xl text-black">
          infinity learn tutions{" "}
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
            infinity learn futurz{" "}
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
          infinity learn futurz
        </div>
        <div className="max-md:px-3 flex max-md:overflow-x-auto gap-6">
          <Card3
            svg1="/../homepage/secondSection/Black/IIT.svg"
            svg2="/../homepage/secondSection/White/IIT.svg"
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
    <div className={`${styles.secondSectionWrapper} poppins`}>
      <div className={styles.secondSectionContent}>
        <div className={styles.stats1Wrapper}>
          <div className="text-[black] flex flex-col ">
            <div className="text-left font-normal text-2xl text-[#080E14]">
              Learners
            </div>
            <div className="font-[600] text-[36px] text-left">50k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-[#080E14]  flex text-left flex-col border-black">
            <div className="text-left font-normal text-2xl ">Cities</div>
            <div className="font-[600] text-[36px]">60k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-[#080E14]  text-start flex flex-col">
            <div className="text-left font-normal text-2xl  flex-grow">
              Classes Conducted
            </div>
            <div className="font-[600] text-[36px]">9200+</div>
          </div>
        </div>

        <h1 className={styles.secondSectionHeadingWrapper}>
          select your learning
          <span className=" text-[#007BFF] "> goal </span>
          grade-wise
        </h1>
        <h1 className={styles.secondSectionMobHeadingWrapper}>
          <div className=" text-[#080E14]">select your learning</div>
          <div className="">
            <span className=" text-[#007BFF]"> goal </span>
            grade-wise
          </div>
        </h1>
        <div className={styles.switchTabWrapper}>
          <SwitchTabs data={std} onTabChange={handleTabChange} />
        </div>
        <div className="">
          {activeTab === 0 && <Class11to12 />}
          {activeTab === 1 && <Class9to10 />}
          {activeTab === 2 && <Class4to8 />}
          {activeTab === 3 && <Class1to3 />}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
