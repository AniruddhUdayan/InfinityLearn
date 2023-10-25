"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./fourthSection.css";
import "../liveCourses.css";
import { Button, LinearProgress } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { GoArrowUpRight } from "react-icons/go";
// import { log } from "console";
function TopperIcon({
  width = 12,
  height = 16,
  fill = "#169C38",
  stroke = "#D6F4DE",
  strokeWidth = 0.2,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.40156 8.75313L5.00313 6.85313L3.42188 5.61979H5.38125L6 3.75313L6.61875 5.61979H8.57812L6.97969 6.85313L7.58125 8.75313L6 7.56979L4.40156 8.75313ZM1.875 14.9531V9.80313C1.43958 9.33646 1.10156 8.80313 0.860938 8.20312C0.620313 7.60313 0.5 6.96424 0.5 6.28646C0.5 4.79757 1.03281 3.53646 2.09844 2.50313C3.16406 1.46979 4.46458 0.953125 6 0.953125C7.53542 0.953125 8.83594 1.46979 9.90156 2.50313C10.9672 3.53646 11.5 4.79757 11.5 6.28646C11.5 6.96424 11.3797 7.60313 11.1391 8.20312C10.8984 8.80313 10.5604 9.33646 10.125 9.80313V14.9531L6 13.6198L1.875 14.9531ZM6 10.2865C7.14583 10.2865 8.11979 9.89757 8.92188 9.11979C9.72396 8.34201 10.125 7.39757 10.125 6.28646C10.125 5.17535 9.72396 4.2309 8.92188 3.45312C8.11979 2.67535 7.14583 2.28646 6 2.28646C4.85417 2.28646 3.88021 2.67535 3.07812 3.45312C2.27604 4.2309 1.875 5.17535 1.875 6.28646C1.875 7.39757 2.27604 8.34201 3.07812 9.11979C3.88021 9.89757 4.85417 10.2865 6 10.2865ZM3.25 12.9698L6 12.2865L8.75 12.9698V10.9031C8.34896 11.1253 7.91641 11.3003 7.45234 11.4281C6.98828 11.5559 6.50417 11.6198 6 11.6198C5.49583 11.6198 5.01172 11.5559 4.54766 11.4281C4.08359 11.3003 3.65104 11.1253 3.25 10.9031V12.9698Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

const teacher = [
  {
    id: 0,
    name: "Prerana AR",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "/teacher1.webp",
  },
  {
    id: 1,
    name: "Anirudh",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "/faculty2.webp",
  },
  {
    id: 2,
    name: "Aparna",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "/faculty3.webp",
  },
];
function NewLevelShower(props) {
  const length = props.length;
  console.log(props.length);
  // const [currentLevel, setCurrentLevel] = useState(1);
  // const totalLevels = 3; // Total number of levels based on the number of cards
  // const cardsRefs = [];

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5, // When 50% of the element is in view
  //   };

  //   const handleIntersection = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // Find the index of the intersecting card
  //         const index = cardsRefs.indexOf(entry.target);
  //         if (index >= 0) {
  //           setCurrentLevel(index + 1);
  //         }
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(
  //     handleIntersection,
  //     observerOptions
  //   );
  //   cardsRefs.forEach((ref) => {
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [cardsRefs]);

  return (
    <div className="max-md:w-64 md:hidden max-lg:px-0 max-xl:">
      <div className="flex items-center">
        <div className="w-4 h-4 mr-4 font-semibold text-white">01</div>
        <div className={`${"w-[95px]"} h-0.5 mt-2 bg-black`}></div>
        <div className="w-4 h-4 ml-4 font-semibold text-black">
          {/* {currentLevel < 10 ? `0${currentLevel}` : currentLevel} */}
        </div>
      </div>
      <div
        className={` w-${props.length} relative bottom-2 left-8 bg-blue-500 h-2 `}
        // style={{ width: `${(currentLevel / totalLevels) * 100}%` }}
      ></div>
    </div>
  );
}

function Card(props) {
  return (
    <div
      ref={props.ref2}
      className="card max-md:flex-shrink-0 max-md:h-[450px] max-md:w-[323px]  md:py-2 max-md:p-[12px] font-[#080E14] "
    >
      <Image
        src={props.data.image}
        className=""
        height={210}
        width={370}
        alt="teacher"
      />
      <div className="card-name ">{props.data.name}</div>
      <div className="font-light gap-2 tracking-wide flex">
        <div className="border-r-2 card-info px-2 ">
          {props.data.experience}
        </div>
        <div className="card-info">{props.data.college}</div>
      </div>
      <div className="card-sub max-md:mt-[24px] ">
        <div className="card-subject">{props.data.subject}</div>
        <div className="card-topper">
          <div>
            <TopperIcon />
          </div>
          <div>{props.data.aluminiTaught}</div>
        </div>
      </div>
    </div>
  );
}

function FourthSection() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [cardsRefs, setCardsRefs] = useState([]);
  const normalise = (value) => ((value - 0) * 100) / (teacher.length - 0);
  const containerRef = useRef();
  const { ref, inView } = useInView();
  const inViewRef = useRef();
  const [cardsInView, setCardsInView] = useState([]);
  const [progress, setProgress] = useState(normalise);
  const carousel = useRef(null);
  const carouselEle = useRef(null);
  const firstCardRef = useRef();

  // useEffect(() => {
  //   if (window.innerWidth >= 1024) return;
  //   const interval = setInterval(() => {
  //     if (progress === teacher.length - 1) {
  //       setProgress(0);
  //       carousel.current.scrollTo({
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     } else if (progress === 0) {
  //       setProgress(progress + 1);
  //       if (
  //         carouselEle.current.offsetWidth <
  //         carousel.current.offsetWidth / 2
  //       ) {
  //         carousel.current.scrollTo({
  //           left:
  //             carousel.current.scrollLeft +
  //             carouselEle.current.offsetWidth +
  //             40,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         carousel.current.scrollTo({
  //           left:
  //             carousel.current.scrollLeft +
  //             carouselEle.current.offsetWidth +
  //             15,
  //           behavior: "smooth",
  //         });
  //       }
  //     } else {
  //       setProgress(progress + 1);
  //       carousel.current.scrollTo({
  //         left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [progress]);
  const [autoScrollTimer, setAutoScrollTimer] = useState(null);
  useEffect(() => {
    setProgress(1);
  }, []);
  const handleScroll = () => {
    const container = carousel.current;
    const cardWidth = carouselEle.current.offsetWidth;
    const currentScrollLeft = container.scrollLeft;

    // Calculate the number of cards scrolled
    const cardsScrolled = Math.ceil(currentScrollLeft / cardWidth);

    // Calculate the progress as a fraction of total cards
    const normalizedProgress = (cardsScrolled / teacher.length) * 100;

    setProgress(normalizedProgress);

    // Clear the auto-scroll timer when the user manually scrolls
    clearTimeout(autoScrollTimer);

    // If the user has scrolled to the end, set a timer to scroll back to the first card after 10 seconds
    if (cardsScrolled === teacher.length) {
      const timer = setTimeout(() => {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        // Reset the progress to 0% as it loops back to the first card
        setProgress(0);
      }, 10000); // 10 seconds delay

      // Store the timer ID in state to be able to clear it later
      setAutoScrollTimer(timer);
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    // Attach the scroll event listener to the carousel container
    const container = carousel.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when component unmounts
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollFacultiesLeft = () => {
    carousel.current.scrollTo({
      left: carousel.current.scrollWidth,
      behavior: "smooth",
    });
  };

  const scrollFacultiesRight = () => {
    carousel.current.scrollTo({
      left: -carousel.current.scrollWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="no-scrollbar flex flex-col bg-gray-100 max-md:px-9 items-center py-8">
      <div className=" text-[#080e14] thirdSectionHeading  ">
        Learn from the <span className="text-[#abb3bc]">Best Faculty</span>
      </div>
      <div className="fourthSectionSubHeading">
        Our mentors are there with you at every step to help you create a
        personalised study plan for your success!
      </div>
      {/* <NewLevelShower
        length={length}
        currentIndex={currentLevel}
        totalLevels={3}
      /> */}
      <div className="flex w-full mb-7 lg:hidden gap-2 items-center mt-2">
        <div>01</div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="w-1/2"
        />
        <div>{teacher?.length}</div>
      </div>
      {/* <div
        className="max-w-full no-scrollbar max-md:overflow-x-auto md:mx-auto max-md:gap-[12px] max-md:mx-0 gap-6 mb-6"
        // ref={inViewRef}
      > */}
      {/* <div

        ref={carousel}
        className="flex max-w-full  mt-6 lg:mt-10 md:mx-[112px] justify-start no-scrollbar gap-6 mb-6
        w-full overflow-x-scroll snap-x lg:snap-none"
      >
        {teacher.map((item, index) => (
          <Card
            key={index}
            data={item}
            cardsRefs={cardsRefs}
            ref2={carouselEle}
            // firstCardRef={index === 0 ? firstCardRef : null}
            // ref={(el) => (cardsRefs.current[index] = el)}
            // handleLength={handleLength}
          />
        ))}
      </div> */}
      <div
        className="max-w-full flex  no-scrollbar max-md:overflow-x-auto md:mx-auto max-md:gap-[12px] max-md:mx-0 gap-6 mb-6"
        // ref={inViewRef}
        ref={carousel}
      >
        {/* <div className="flex max-md:flex-nowrap space-x-4"> */}
        {teacher.map((item, index) => (
          <Card
            key={index}
            data={item}
            cardsRefs={cardsRefs}
            ref2={carouselEle}
            // firstCardRef={index === 0 ? firstCardRef : null}
            // ref={(el) => (cardsRefs.current[index] = el)}
            // handleLength={handleLength}
          />
        ))}
        <div className=" w-3"></div>
        {/* </div> */}
      </div>
      {/* </div> */}
      {/* <button
        onClick={() =>
          firstCardRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        Scroll to First Card
      </button> */}
    </div>
  );
}
export default FourthSection;
