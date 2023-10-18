"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

// import "./letssee.css";
const courses = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },

  {
    id: 3,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image1.png",
  },
  {
    id: 4,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image1.png",
  },
  {
    id: 5,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image2.png",
  },
  {
    id: 6,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
  {
    id: 7,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
  {
    id: 8,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
  {
    id: 9,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
  {
    id: 10,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
  {
    id: 11,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
  {
    id: 12,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "/courses/image3.png",
  },
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
      className={`flex-shrink-0 justify-start  text-start py-7 h-full ${
        props.data.id == 1 || props.data.id == 0 || props.data.id == 2
          ? " w-96 bg-blue-200  "
          : "bg-white"
      }  rounded-2xl mx-4 max-md:w-[335px]  max-md:h-[382px]  px-4 max-md:mx-5 flex flex-col items-center`}
    >
      <div className="">
        {props.data.id != 0 && props.data.id != 1 && props.data.id != 2 && (
          <Image
            src={props.data?.svg}
            height={238}
            width={svgWidth}
            // Ensures the image maintains its aspect ratio
            className="border-2   border-blue-200"
            alt="cards svg"
          />
        )}
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
      <div className="text-start max-md:w-full max-md:ml-4 justify-start max-2xl:mb-4 flex-grow border-b-2 ">
        <div className="text-black  font-bold text-lg">{props.data.name}</div>
        <div className="text-black  w-full max-md:text-sm  mb-2 ">
          {props.data?.about}
        </div>
      </div>
      <div className="max-2xl:mt-3 max-md:mt-0  max-md:ml-0 flex max-md:space-x-11 justify-between items-center space-x-20">
        {" "}
        <div className="text-black font-bold mb-2">{props.data?.price}</div>
        {props.data.id != 0 && props.data.id != 1 && props.data.id != 2 && (
          <div className=" flex text-blue-500">
            <div className=" text-xs text-blue-500 text-center  cursor-pointer">
              See More{" "}
            </div>
            <IoIosArrowDown />
          </div>
        )}
      </div>
    </div>
  );
}

function ScrollableDiv() {
  const scrollRef = useRef(null);
  const [activeDash, setActiveDash] = useState(0);
  const [cardWidth, setCardWidth] = useState(400);

  useEffect(() => {
    // setCardWidth(window.innerWidth <= 768 ? window.innerWidth : 368);

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += cardWidth;
        setActiveDash((prevActiveDash) => (prevActiveDash + 1) % 5);

        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  useEffect(() => {
    const handleScroll = () => {
      setActiveDash(Math.round(scrollRef.current.scrollLeft / cardWidth) % 5);
    };

    scrollRef.current.addEventListener("scroll", handleScroll);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [cardWidth]);

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        className="h-auto flex px-4 items-center max-md:gap-5 max-2xl:gap-10 max- no-scrollbar overflow-x-scroll whitespace-nowrap"
        style={{ scrollBehavior: "smooth", width: cardWidth }}
      >
        {courses
          .filter((course) => course.id >= 3 && course.id <= 7)
          .map((course) => (
            <Card key={course.id} data={course} />
          ))}
      </div>
      <div className="flex justify-center mt-10">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className={`dash h-1 rounded-full mx-2 ${
              index === activeDash
                ? "active w-16 bg-blue-500 "
                : "bg-blue-300 w-10"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
// function ScrollableDiv() {
//   const scrollRef = useRef(null);
//   const [activeDash, setActiveDash] = useState(0);
//   const [cardWidth, setCardWidth] = useState(368);

//   useEffect(() => {
//     setCardWidth(window.innerWidth <= 768 ? window.innerWidth : 368);

//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollLeft += cardWidth;
//         setActiveDash((prevActiveDash) => (prevActiveDash + 1) % 5);

//         if (
//           scrollRef.current.scrollLeft >=
//           scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
//         ) {
//           scrollRef.current.scrollLeft = 0;
//         }
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [cardWidth]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setActiveDash(Math.round(scrollRef.current.scrollLeft / cardWidth) % 5);
//     };

//     scrollRef.current.addEventListener("scroll", handleScroll);

//     return () => {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       // scrollRef.current.removeEventListener("scroll", handleScroll);
//     };
//   }, [cardWidth]);

//   return (
//     <div className="md:hidden">
//       <div
//         ref={scrollRef}
//         className="h-auto flex px-10 items-center gap-12 no-scrollbar overflow-x-scroll whitespace-nowrap"
//         style={{ scrollBehavior: "smooth", width: cardWidth }}
//       >
//         {courses
//           .filter((course) => course.id >= 3 && course.id <= 7)
//           .map((course) => (
//             <Card key={course.id} data={course} />
//           ))}
//       </div>
//       <div className="flex justify-center mt-10">
//         {Array.from({ length: 5 }, (_, index) => (
//           <div
//             key={index}
//             className={`dash h-1 rounded-full mx-2 ${
//               index === activeDash
//                 ? "active w-16 bg-blue-500 "
//                 : "bg-blue-300 w-10"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
function Courses() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeDash, setDashCard] = useState(0);

  const dashWidth = [50, 50, 50, 50, 50];
  useEffect(() => {
    const maxScroll = courses.length - 5; // total cards minus visible cards
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
    <div className="flex max-md:hidden flex-col justify-center w-full items-center h-ull bg-blue-200">
      <div className="overflow-hidden h-auto relative   w-5/6">
        <div
          className="flex transition-transform  duration-1000 "
          style={{ transform: `translateX(-${scrollPos * 5}%)` }} // Adjust based on card width and margin
        >
          {courses.map((course) => (
            <Card key={course.id} data={course} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        {Array.from({ length: 5 }, (_, index) => (
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

// function Courses() {
//   const [scrollPos, setScrollPos] = useState(0);
//   const [activeDash, setDashCard] = useState(0);

//   const dashWidth = [50, 50, 50, 50, 50];
//   useEffect(() => {
//     const maxScroll = courses.length - 5; // total cards minus visible cards
//     const interval = setInterval(() => {
//       if (scrollPos >= maxScroll) {
//         setScrollPos(0);
//         setDashCard(0);
//       } else {
//         setScrollPos((prev) => prev + 2);
//         setDashCard((activeDash + 1) % 5);
//       }
//     }, 1500);

//     return () => clearInterval(interval);
//   }, [scrollPos, activeDash]);

//   return (
//     <div className="flex max-md:hidden flex-col justify-center w-full items-center h-ull bg-blue-200">
//       <div className="overflow-hidden h-auto relative   w-5/6">
//         <div
//           className="flex transition-transform   duration-1000 "
//           style={{ transform: `translateX(-${scrollPos * 5}%)` }} // Adjust based on card width and margin
//         >
//           {courses.map((course) => (
//             <Card key={course.id} data={course} />
//           ))}
//         </div>
//       </div>
//       <div className=" flex justify-center mt-10">
//         {Array.from({ length: 5 }, (_, index) => (
//           <div
//             key={index}
//             className={`dash h-1 rounded-full mx-2 b ${
//               index === activeDash
//                 ? "active w-16 bg-blue-500 "
//                 : " bg-blue-300 w-10"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
function FourthSection() {
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

  const dashWidth = [50, 50, 50, 50, 50];

  return (
    <div>
      <div
        className="w-full max-md:border-t-4 border-blue-400 py-10  overflow-hidden 
      mx-auto bg-blue-200 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-10">
            <Image
              src="fire.svg"
              className=" w-auto h-auto"
              height={40}
              width={40}
              fit="contain"
              alt=" fire.svg"
            />
            <div className="mt-8 max-md:mb-4 max-md:text-3xl max-md:font-extrabold text-6xl font-bold text-black">
              new and
              <span className="text-6xl ml-2 max-md:ml-2 max-md:text-3xl max-md:font-extrabold font-bold text-[#007BFF]">
                trending
              </span>
            </div>
          </div>
          {/* <div className="flex max-w-screen-xl no-scrollbar  overflow-x-auto mt-8"> */}
          <Courses />
          <ScrollableDiv />
          {/* </div> */}
          <div className="dash-indicators">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className={`dash bg-blue-500 ${
                  index === dashIndex ? "active" : ""
                }`}
                style={{ width: `${dashWidth[index]}px` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
