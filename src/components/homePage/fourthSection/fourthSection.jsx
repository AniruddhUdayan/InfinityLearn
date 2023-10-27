"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLottie } from "lottie-react";
import { Carousel, CarouselItem } from "react-bootstrap";
import animationData from "../fireanimation.json";
import "./fourthSection.css";
import { BsClockHistory, BsCameraVideo } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
import styles from "../css/styles.module.css";
function Trial() {
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const courses1 = courses.filter((course) => course.id >= 3 && course.id <= 7);

  const [scrollPos, setScrollPos] = useState(0);
  function handleMouseEnter() {
    setIsAutoScroll(false);
  }

  function handleMouseLeave() {
    setIsAutoScroll(true);
  }
  function handleSlide() {
    const maxScroll = courses1.length - 1;
    if (scrollPos >= maxScroll) {
      setScrollPos(0);
    } else {
      setScrollPos((prev) => prev + 1);
    }
  }

  return (
    <div className=" courses2    items-center">
      <Carousel
        controls={false}
        className=" items-center  mxauto w-fit max-w-[380px] top-4"
        interval={isAutoScroll ? 20000000 : null}
        onSlide={handleSlide}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {courses1.map((review, index) => {
          return (
            <CarouselItem key={index}>
              <div
                className="d-flex mb-10 justify-content-center align-items-center mx-3"
                style={{ height: "100%" }}
              >
                <Card data={review} />
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
      <div className="flex justify-center mt-2">
        {courses1.map((_, index) => (
          <span
            key={index}
            onClick={() => setScrollPos(index)}
            className={`mx-1  cursor-pointer ${
              index === scrollPos
                ? "bg-[#007BFF] elongated-dash"
                : "bg-[#99CAFF] regular-dash"
            }`}
            style={{ borderRadius: 2 }}
          ></span>
        ))}
      </div>
    </div>
  );
}

const courses = [
  {
    id: 3,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image1.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 4,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image1.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 5,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image2.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 6,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image3.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 7,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image3.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 8,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image3.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 9,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image3.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  {
    id: 10,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "₹1660/month",
    svg: "/courses/Image3.png",
    duration: "1-2 years",
    noofhours: "1000+ hrs of live classes",
    noofvideos: "5000+ videos | 3000hrs of content",
    nooftest: "24 biweekly test",
  },
  // {
  //   id: 11,
  //   name: "High Order Thinking Skills",
  //   about: "full course coverage revision and test series",
  //   price: "starting at 1660/month",
  //   svg: "/courses/image3.webp",
  // },
  // {
  //   id: 12,
  //   name: "High Order Thinking Skills",
  //   about: "full course coverage revision and test series",
  //   price: "starting at 1660/month",
  //   svg: "/courses/image3.webp",
  // },
];

function Card(props) {
  const [showMore, setShowMore] = useState(false);
  const [svgWidth, setSvgWidth] = useState(368);
  const [decreasedHeight, setDecreasedHeight] = useState(295);

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 311 : 368);
    setDecreasedHeight(window.innerWidth <= 768 ? 100 : 125);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  // console.log(props.data.id);
  return (
    <div className={styles.courseCard}>
      <div style={{ height: showMore ? `${decreasedHeight}px` : "auto" }}>
        <Image
          src={props.data?.svg}
          height={138}
          width={svgWidth}
          className="  border-blue-200"
          alt="cards svg"
        />
      </div>
      <div className={styles.courseCardContentWrapper}>
        <div
          className={`" ${showMore ? "  relative " : " hidden "} top-[10px]  `}
        >
          <div className="relative left-6">
            {props.data.id != 0 && props.data.id != 1 && props.data.id != 2 && (
              <Image
                src="./courses/std.svg"
                height={29}
                width={142}
                className=" w-[40%] h-auto" // Ensures the image maintains its aspect ratio
                alt="courses.svg"
              />
            )}
          </div>
        </div>
        <div className="bg-white">
          <div className={styles.cdc}>
            <div className={styles.courseCardName}>{props.data.name}</div>
            <div className={styles.courseCardSubName}>{props.data?.about}</div>
          </div>
          {/* #080E14 media  #00254C  semi*/}
          <div className={styles.cpc}>
            {" "}
            <div className=" flex gap-1 ">
              <div className={` ${styles.ccp} font-[500]`}>starting from</div>
              <div className={` ${styles.ccp} font-[600] text-[#00254C]`}>
                {props.data?.price}
              </div>
            </div>
            <div
              className=" flex items-center hover:cursor-pointer "
              onClick={() => setShowMore(!showMore)}
            >
              <div className={styles.ccsm}>
                {showMore == false ? (
                  <div> {"see more"}</div>
                ) : (
                  <div> {"see less"}</div>
                )}
              </div>
              {showMore == false ? (
                <IoIosArrowDown color="#007bff" />
              ) : (
                <IoIosArrowDown color="#007bff" />
              )}
            </div>
          </div>

          <div
            className={`${showMore ? " flex " : " hidden "} seeMoreSection `}
          >
            <div className={styles.seeMoreSectionText}>
              <Image
                src="/../courses/pace.svg"
                height={20}
                width={20}
                alt="logos"
              />
              {props.data.duration}
            </div>
            <div className={styles.seeMoreSectionText}>
              <Image
                src="/../courses/school.svg"
                height={20}
                width={20}
                alt="logos"
              />
              {props.data.noofhours}
            </div>
            <div className={styles.seeMoreSectionText}>
              <Image
                src="/../courses/vr.svg"
                height={20}
                width={20}
                alt="logos"
              />

              {props.data.noofvideos}
            </div>
            <div className={styles.seeMoreSectionText}>
              <Image
                src="/../courses/text_snippet.svg"
                height={20}
                width={20}
                alt="logos"
              />
              {props.data.nooftest}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeDash, setDashCard] = useState(0);
  useEffect(() => {
    const maxScroll = courses.length - 2; // total cards minus visible cards
    const interval = setInterval(() => {
      if (scrollPos >= maxScroll) {
        setScrollPos(0);
        setDashCard(0);
      } else {
        setScrollPos((prev) => prev + 2);
        setDashCard((activeDash + 1) % 5);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [scrollPos, activeDash]);

  return (
    <div className="flex max-sm:hidden flex-col justify-center w-full items-center h-ull bg-[#D4E9FF]">
      <div className="overflow-hidden h-auto relative max-xl:w-11/12   w6">
        <div
          className="flex transition-transform  duration-1000 "
          style={{ transform: `translateX(-${scrollPos * 15}%)` }} // Adjust based on card width and margin
        >
          {courses.map((course) => (
            <Card key={course.id} data={course} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className={`dash h-1 rounded-full mx-2 b ${
              index === activeDash
                ? "active w-16 bg-blue-500 "
                : " bg-blue-300 w-10"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function FourthSection() {
  const [svgWidth, setSvgWidth] = useState(90);
  const [svgSvgHeight, setSvgHeight] = useState(90);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeDash, setDashCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [sps, setsps] = useState(30);
  const [cls, setcls] = useState(2);
  const updateWidth = () => {
    const width = window.innerWidth;

    if (width >= 481 && width <= 576) {
      setcls(2);
      setsps(50);
    } else if (width >= 577 && width <= 767) {
      setcls(2);
      setsps(50);
      // ... (similar logic as above)
    } else if (width >= 768 && width <= 991) {
      setcls(2);
      setsps(55);
      // console.log("kj");
    } else if (width >= 992 && width <= 1199) {
      // ... (similar logic as above)\
      setcls(2);
      setsps(50);

      console.log("kjrenfre");
    } else if (width >= 1200 && width <= 1400) {
      // ... (similar logic as above)
    }

    if (window.innerWidth <= 425) {
      setSvgWidth(40);
      setSvgHeight(40);
    }
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  useEffect(() => {
    const maxScroll = courses.length - cls; // total cards minus visible cards
    const interval = setInterval(() => {
      if (!isHovered) {
        if (scrollPos >= maxScroll) {
          setScrollPos(0);
          setDashCard(0);
        } else {
          setScrollPos((prev) => prev + 2);
          setDashCard((activeDash + 1) % 5);
        }
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [scrollPos, activeDash, isHovered]);

  const [activeCard, setActiveCard] = useState(0);
  const [dashIndex, setDashIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
    setDashIndex(0);
  };

  const handleScrollChange = (scrollPosition) => {
    // Calculate the new dash index based on the scroll position
    const newDashIndex = Math.floor(scrollPosition / 2);
    setDashIndex(newDashIndex);
  };
  const options = {
    animationData: animationData,
    loop: true,
    style: {
      width: 70,
      height: 70,
    },
  };

  const { View } = useLottie(options);

  const dashWidth = [50, 50, 50, 50, 50];

  return (
    <div>
      <div className={styles.fourthSection}>
        <div className={styles.fourthSectionHeading}>
          <div>{View}</div>

          <div
            className={` ${styles.fourthSectionHeadingContent} text-[#080e14] "`}
          >
            new and
            <span
              className={` ${styles.fourthSectionHeadingContent} ml-2   text-[#007BFF] `}
            >
              trending
            </span>
          </div>
        </div>

        <div className={`" ${styles.coursesWrapper} bg-[#D4E9FF] `}>
          <div className={styles.courses}>
            <div
              className="flex transition-transform mx-[40px] no-scrollbar  duration-1000 "
              style={{ transform: `translateX(-${scrollPos * sps}%)` }} // Adjust based on card width and margin
            >
              {courses.map((course) => (
                <div
                  className=" flex-shrink-0"
                  key={course.id}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Card key={course.id} data={course} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.dashContainer}>
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className={`${styles.dash} ${
                  index === activeDash ? styles.active : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
        <Trial />
      </div>
    </div>
  );
}

export default FourthSection;
