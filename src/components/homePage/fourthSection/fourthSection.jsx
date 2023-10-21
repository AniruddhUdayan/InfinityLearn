"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Lottie, { useLottie } from "lottie-react";
import { Carousel, ProgressBar, CarouselItem } from "react-bootstrap";
// import LottieAnimation from "./fireAnimation.jsx";
import animationData from "../fireanimation.json";
import "./fourthSection.css";
// import "./letssee.css";
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
    <div className=" sm:hidden   items-center">
      <Carousel
        controls={false}
        className=" items-center  mxauto w-fit max-w-[380px] top-4"
        interval={isAutoScroll ? 2000 : null}
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
    price: "starting at 1660/month",
    svg: "/courses/image1.webp",
  },
  {
    id: 4,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image1.webp",
  },
  {
    id: 5,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image2.webp",
  },
  {
    id: 6,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.webp",
  },
  {
    id: 7,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.webp",
  },
  {
    id: 8,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.webp",
  },
  {
    id: 9,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.webp",
  },
  {
    id: 10,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.webp",
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
  const [svgWidth, setSvgWidth] = useState(368);

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 311 : 368);
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
    <div
      className={`card  ${
        props.data.id == 1 || props.data.id == 0 || props.data.id == 2
          ? " w-96 bg-blue-200 h-0  "
          : "bg-white"
      }   hover:cursor-pointer cc  `}
    >
      <div className="">
        <Image
          src={props.data?.svg}
          height={238}
          width={svgWidth}
          // Ensures the image maintains its aspect ratio
          className="border-2   border-blue-200"
          alt="cards svg"
        />

        <div className="relative bottom-4 left-6">
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
      <div className=" cdc ">
        <div className="  font-bold text-lg">{props.data.name}</div>
        <div className="  w-full max-md:text-sm  mb-2 ">
          {props.data?.about}
        </div>
      </div>
      <div className="cpc flex max-md:space-x-11 space-x-20">
        {" "}
        <div className="text-[#080E14] ccp font-[500] mb-2">
          {props.data?.price}
        </div>
        <div className=" flex text-[#007BFF]">
          <div className=" text-xs  text-center  cursor-pointer">See More </div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

function Courses() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeDash, setActiveDash] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null); // ref to measure the width of a card
  useEffect(() => {
    if (cardRef.current) {
      // Adjust initial scroll position to keep the first card fully visible
      setScrollPos(cardRef.current.offsetWidth);
    }
  }, [cardRef]);
  function animateCards() {
    let cardsToScroll;
    switch (activeDash) {
      case 0:
        cardsToScroll = 1; // scroll one card
        break;
      case 1:
        cardsToScroll = 2; // scroll three cards in total
        break;
      case 2:
        cardsToScroll = 4; // scroll all the cards
        break;
      default:
        cardsToScroll = 0; // reset
        break;
    }

    let totalScrollWidth = 0;
    if (cardRef.current) {
      totalScrollWidth = cardsToScroll * cardRef.current.offsetWidth;
    }

    if (activeDash >= 3) {
      setScrollPos(0);
      setActiveDash(0);
    } else {
      setScrollPos(totalScrollWidth);
      setActiveDash((prev) => prev + 1);
    }
  }

  function handleHover(eventType) {
    if (eventType === "enter") {
      setIsHovered(true);
    } else if (eventType === "leave") {
      setIsHovered(false);
      animateCards();
    }
  }

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(animateCards, 1500);

    return () => clearInterval(interval);
  }, [scrollPos, activeDash, isHovered]);

  return (
    <div className="flex max-md:hidden flex-col justify-center w-full items-center h-full ">
      <div className="overflow-x-auto h-auto  relative">
        <div
          onMouseEnter={() => handleHover("enter")}
          onMouseLeave={() => handleHover("leave")}
          className="flex transition-transform  duration-1000"
          style={{ transform: `translateX(-${scrollPos}px)` }}
        >
          {courses.map((course) => (
            <div className="flex-shrink-0" key={course.id} ref={cardRef}>
              <Card key={course.id} data={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className={`dash h-1 rounded-full mx-2 ${
              index === activeDash
                ? "active w-16 bg-blue-500"
                : "bg-blue-300 w-10"
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
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 1024 ? 60 : 90);
    setSvgHeight(window.innerWidth <= 1024 ? 60 : 90);
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
      width: svgWidth,
      height: svgSvgHeight,
    },
  };

  const { View } = useLottie(options);

  const dashWidth = [50, 50, 50, 50, 50];

  return (
    <div>
      <div className="fourthSection ">
        <div className=" fous-text-ch ">
          {View}

          <div className=" focus-text-content text-[#080e14]  text-head1   ">
            new and
            <span className="focus-text-content ml-2 text-head1 max-md:ml-2  text-[#007BFF]">
              trending
            </span>
          </div>
        </div>

        <Courses />
        <Trial />
      </div>
    </div>
  );
}

export default FourthSection;