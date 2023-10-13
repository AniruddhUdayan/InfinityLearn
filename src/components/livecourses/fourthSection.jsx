"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./liveCourses.css";
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
    image: "livecourses/fourthSection/teachers/image1.svg",
  },
  {
    id: 1,
    name: "Anirudh",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "./livecourses/fourthSection/teachers/image2.svg",
  },
  {
    id: 2,
    name: "Aparna",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "./livecourses/fourthSection/teachers/image3.svg",
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
// function lenghtHandler() {
//   const card = [];
// }

function Card(props) {
  // Create a ref to the card element
  const cardRef = useRef();
  // Use the useInView hook to detect when the card is in view
  const { ref, inView } = useInView();

  // This effect handles tracking when a card is in view
  useEffect(() => {
    if (inView) {
      // Here, you can set the current level or perform other actions
      // based on whether the card is in view.
      // props.cardsRefs.push(cardRef);

      console.log(props.cardsRefs, "cardRefs");
      console.log("hello");
      console.log(cardRef);
      props.handleLength();
    }
  }, [inView]);

  return (
    <div
      className="max-md:flex-shrink-0 max-md:h-[450px] max-md:w-[323px] shadow-md md:py-2 p-2 max-md:p-[12px] rounded-3xl gap-3 justify-evenly bg-white flex flex-col w-1/3 font-font-[#080E14] items-center"
      // Attach the card's ref and use the ref provided by useInView
      ref={(node) => {
        if (props.firstCardRef) {
          props.firstCardRef.current = node;
        }
        cardRef.current = node; // Store the card's ref in your array
        ref(node); // Attach the ref provided by useInView
      }}
    >
      {/* Your card content remains the same */}
      <Image
        src={props.data.image}
        className=""
        height={310}
        width={370}
        alt="teacher"
      />
      <div className="tracking-wide text-xl font-bold ">{props.data.name}</div>
      <div className="font-light gap-2 tracking-wide flex">
        <div className="border-r-2 border-opacity-40 border-black px-2 ">
          {props.data.experience}
        </div>
        <div>{props.data.college}</div>
      </div>
      <div className="flex items-center max-md:mt-[24px] gap-2 mb-3">
        <div className="text-[#FF7A00] max-md:text-[12px] bg-[#FF7A00] border-[#FF7A00] max-md:h-[26px] rounded-xl max-md:rounded-lg bg-opacity-30 p-2 max-md:p-1 max-md:px-4 text-sm border-2 bg-">
          {props.data.subject}
        </div>
        <div className="text-[#169C38] bg-[#169C38] border-[#169C38] max-md:h-[26px] bg-opacity-30 max-md:rounded-lg p-1 max-md:text-[12px] max-md:px-4 rounded-xl items-center gap-2 flex border-2 bg-">
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
  const containerRef = useRef();
  const { ref, inView } = useInView();
  const inViewRef = useRef();
  const [cardsInView, setCardsInView] = useState([]);

  const firstCardRef = useRef();

  useEffect(() => {
    if (inView) {
      // Here, you can set the current level or perform other actions
      // based on whether the card is in view.
      console.log("hello");
      // props.handleLength();
    }
  }, [inView]);
  const [length, setLength] = useState(4);
  const handleLength = () => {
    setLength(length + 2);
    console.log("nikjkb");
  };
  const handleAddCardRef = (newRef) => {
    //setCardsRefs((prevRefs) => [...prevRefs, newRef]);
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const isScrolledToEnd = scrollLeft + clientWidth >= scrollWidth;

    if (isScrolledToEnd) {
      // Option 1: Instant scroll
      containerRef.current.scrollLeft = 0;

      // Option 2: Smooth scroll
      // containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const containerElement = containerRef.current;
    containerElement.addEventListener("scroll", handleScroll);

    return () => {
      containerElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // When the length of cardsInView is 3, scroll the first card into view
    console.log("cardsInView changed: ", cardsInView); // Log cardsInView changes
    if (cardsInView.length === 3) {
      // setTimeout(() => {
      console.log("nii");
      // cardsInView.splice(0, arr.length);

      console.log(firstCardRef.current);
      firstCardRef.current.scrollIntoView({
        behavior: "smooth",
      });
      // }, 200); // A small delay to ensure all refs and DOM nodes are updated
    }
  }, [cardsInView]);
  console.log(cardsInView);
  return (
    <div className="no-scrollbar flex flex-col bg-gray-100 max-md:px-10 items-center py-8">
      <div className="text-4xl mb-12 text-black text-center font-extrabold">
        faculty
      </div>
      {/* <NewLevelShower
        length={length}
        currentIndex={currentLevel}
        totalLevels={3}
      /> */}
      <div
        className="max-w-full no-scrollbar max-md:overflow-x-auto md:mx-auto max-md:gap-[12px] max-md:mx-0 gap-6 mb-6"
        ref={inViewRef}
      >
        <div ref={containerRef} className="flex max-md:flex-nowrap space-x-4">
          {teacher.map((item, index) => {
            <Card
              key={index}
              data={item}
              cardsRefs={cardsRefs}
              firstCardRef={index === 0 ? firstCardRef : null}
              // ref={(el) => (cardsRefs.current[index] = el)}
              handleLength={handleLength}
            />;
          })}
        </div>
      </div>
      <button
        onClick={() =>
          firstCardRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        Scroll to First Card
      </button>
      <button className="w-80 max-mmd:mt-[24px] max-md:h-[48px] text-black px-8 border-2 border-gray-300 rounded-xl p-3">
        <div className="flex justify-center gap-2">
          <div>meet the teachers</div>
          <div>
            <GoArrowUpRight size={24} />
          </div>
        </div>
      </button>
    </div>
  );
}
export default FourthSection;
