"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./liveCourses.css";
import { Button, LinearProgress } from "@mui/material";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
// import { blue } from "@mui/material/colors";
const reviews = [
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: true,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "/../reviews/image1.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "/../reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "/../reviews/image3.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "/../reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "/../reviews/image3.svg",
  },
];
const rankers = [
  {
    id: 0,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 21,
    score: 700,
    color: "#FBDD5A",
    photo: "/../images/result-guy-1.svg",
  },
  {
    id: 1,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../images/result-guy-2.svg",
  },
  {
    id: 2,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 21,
    score: 700,
    color: "#FBDD5A",
    photo: "/../images/result-guy-3.svg",
  },
  {
    id: 3,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 21,
    score: 700,
    color: "#FBDD5A",
    photo: "/../images/result-guy-1.svg",
  },
  {
    id: 4,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../images/result-guy-2.svg",
  },
  {
    id: 5,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../images/result-guy-3.svg",
  },
  {
    id: 6,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../images/result-guy-1.svg",
  },
  {
    id: 7,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../images/result-guy-2.svg",
  },
  {
    id: 8,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../images/result-guy-3.svg",
  },
];
// function Card(props) {
//   const check = props.data.video;

//   if (check) {
//     return (
//       <div
//         className="flex  max-2xl:w-[365px] max-2xl:h-[365px] max-2xl:mb-5 mx-auto  max-md:h-fll
//       max-md:py-4  max-2xl:my-4 shadow-md max-md:w-[355px] max-md:h-full justify-evenly max-md:gap-     flex-col px-2
//       flex-shrink-0   rounded-2xl w-/4 bg-white text-[#080E14]"
//       >
//         <Image
//           src={props.data.image}
//           // className=" rounded-full"
//           height={161}
//           width={292}
//           className="  max-md:mt-1 max-2xl:mt-20  w-[100%] h-[100%]"
//           fit="contain"
//           alt="cards svg"
//         />
//         <div className="  max-md:px-1 max-md:mt-5 max-2xl:mt-4 max-md:text-base max-md:w-full  text-start">
//           {props.data.review}
//         </div>

//         <Image
//           src="/reviews/invertedCommas2.svg"
//           height={52}
//           width={40}
//           alt="inverted commas "
//           className=" w-[15%] max-md:bottom-0 max-2xl:bottom-6  max-xl:bottom-10 max-xl:left-[305px] max-md:left-[283px] opacity-75 left-72  relative"
//         />
//         <Image
//           src="/reviews/video.svg"
//           height={52}
//           width={40}
//           alt="video svg "
//           className=" w-[15%] bottom-[220px] max-md:bottom-[240px] max-2xl:left-[150px] max-md:left-[150px] opacity-75   relative"
//         />
//         <div
//           className=" flex max-2xl:bottom-20 max-2xl:right-2 max-md:ml-1 max-md:gap-3 max-md:justify-start max-md:flex-col
//        relative max-md:right-40 max-md:bottom-2    max-md:items-center "
//         >
//           <div className="flex z-50 ml-4 max-md:gap-1  flex-col flex-grow">
//             <div className=" font-bold">{props.data.name}</div>
//             <div className="  font-medium opacity-50">{props.data.place}</div>
//           </div>
//           <div className=" max-md:ml-20  text-orange-400">
//             {props.data.batch}
//           </div>
//         </div>
//       </div>
//     ); // or you can return some default component or <></> for nothing.
//   }

//   return (
//     <div
//       className="flex mb-12  max-2xl:w-[392px] max-2xl:h-[365px] max-md:h-[391px] max-md:w-[335px]
//       shadow-md  flex-col max-md:gap-12 px-5 max-md:px-4
//     flex-shrink-0 py-8 my-4 rounded-2xl w-1/4 bg-white text-[#080E14] "
//     >
//       <div className="flex  items-center gap- gap-5 px-7 max-md:px-2 ">
//         <Image
//           src={props.data.image}
//           // className=" rounded-full"
//           height={120}
//           width={120}
//           className=" w-auto h-auto "
//           fit="contain"
//           alt="cards svg"
//         />
//         <div className="flex z-50  flex-col flex-grow">
//           <div className=" font-bold mb-3">{props.data.name}</div>
//           <div className="  font-medium opacity-50">{props.data.place}</div>
//           <div className="  text-orange-400">{props.data.batch}</div>
//         </div>
//       </div>
//       <Image
//         src="/reviews/invertedcommas.svg"
//         height={52}
//         width={40}
//         alt="inverted commas"
//         className=" w-[15%]"
//       />
//       <div className=" max-md:text-base  text-start">{props.data.review}</div>
//     </div>
//   );
// }
function Card(props) {
  const check = props.data.video;

  if (check) {
    return (
      <div
        ref={props.ref2}
        className="flex mb-12  h-min 
      max-md:h-fll max-md:p-[12px] max-md:h-[371px]  max-xl:w96 max-w-[392px]  shadow-lg max-md:w-full   
      flex-col max-2xl:px-3  flex-shrink-0 
       my-4 rounded-2xl w-1/3 bg-white font-[#080E14] "
      >
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={161}
          width={292}
          className="   mt-6 max-md:mt-1  w-[100%] h-[100%]"
          fit="contain"
          alt="cards svg"
        />
        <div className=" mt-3  max-md:text-base  text-start">
          {props.data.review}
        </div>

        <Image
          src="reviews/invertedCommas2.svg"
          height={52}
          width={40}
          alt="inverted commas "
          className=" w-[15%] bottom-7 max-md:left-[310px] opacity-75 left left64 left-[315px]  relative"
        />
        <Image
          src="/../reviews/video.svg"
          height={52}
          width={40}
          alt="video svg "
          className=" w-[15%] bottom-[220px] max-md:bottom-[240px] max-2xl:left-[150px] max-md:left-[150px] opacity-75   relative"
        />
        <div
          className=" flex max-2xl:bottom-6 max-2xl:right-2 max-md:ml-1 max-md:gap-3
          max-md:justify-start max-md:flex-col max-md:w-[316px] 
       relative max-md:right-40 max-md:bottom-24    max-md:items-center "
        >
          <div className="flex z-50 ml-4 max-md:gap-1  flex-col flex-grow">
            <div className=" text-[#080E14] text-[16px] font-[600]">
              {props.data.name}
            </div>
            <div className="text-[#080E14]  font-medium ">
              {props.data.place}
            </div>
          </div>
          <div className=" max-md:ml-20  text-[#FF7A00]">
            {props.data.batch}
          </div>
        </div>
      </div>
    ); // or you can return some default component or <></> for nothing.
  }

  return (
    <div
      ref={props.ref2}
      className="flex mb-12 max-w-[392px] max-xl:w-96 max-md:w-full
       h-fi px-6 gap-4 shadow-lg flex-col max-md:p-5 flex-shrink-0 py-5
  my-4 rounded-2xl justify-evenly w-full md:w-1/3 bg-white font-[#080E14] "
    >
      <div className="flex max-md:jus  items-center gap-6 max-md:gap-5 px-7 max-md:px-2 ">
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={120}
          width={120}
          className=" w-auto h-auto "
          fit="contain"
          alt="cards svg"
        />
        <div className="flex z-50  flex-col flex-grow">
          <div className=" text-[#080E14] text-[16px] font-[600] mb-3">
            {props.data.name}
          </div>
          <div className="  text-[#080E14]  font-medium ">
            {props.data.place}
          </div>
          <div className="  text-[#FF7A00]">{props.data.batch}</div>
        </div>
      </div>
      <Image
        src="reviews/invertedcommas.svg"
        height={52}
        width={40}
        alt="inverted commas"
        className=" w-[15%]"
      />
      <div className=" max-md:text-base text-lg w-fit  text-start">
        {props.data.review}
      </div>
    </div>
  );
}

function Reviews() {
  const carousel = useRef(null);
  const carouselEle = useRef(null);
  const [progress, setProgress] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const reviewsLength = reviews.length; // Assuming `reviews` is defined in scope
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
    const normalizedProgress = (cardsScrolled / reviews.length) * 100;

    setProgress(normalizedProgress);

    // Clear the auto-scroll timer when the user manually scrolls
    clearTimeout(autoScrollTimer);

    // If the user has scrolled to the end, set a timer to scroll back to the first card after 10 seconds
    if (cardsScrolled === reviews.length) {
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
  const handleScrollLeft = () => {
    setScrollPos((prev) => {
      const newPos = Math.max(prev - 1, 0);
      console.log("Left Button Clicked. New Position:", newPos);
      return newPos;
    });
  };

  const handleScrollRight = () => {
    setScrollPos((prev) => {
      const newPos = Math.min(prev + 1, reviews.length - 1);
      console.log("Right Button Clicked. New Position:", newPos);
      return newPos;
    });
  };

  return (
    <div className="flex flex-col items-center px-20 pt-20 relative bottom-5  max-md:px-2 no-scrollbar">
      <div className="flex w-full mb-7 lg:hidden gap-2 items-center mt-2">
        <div>01</div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="w-1/2"
        />
        <div>{reviews?.length}</div>
      </div>
      {/* <div
        ref={carousel}
        className="mb- flex  gap-10 transition-transform duration-1000 overflow-x-auto 
         max-md:overflow-y-hidden no-scrollbar"
      > */}
      <div
        className=" md:hidden max-w-full flex  no-scrollbar overflow-x-auto md:mx-auto max-md:gap-[12px] max-md:mx-0 gap-6 mb-6"
        // ref={inViewRef}

        ref={carousel}
      >
        {/* <div
          className="flex gap-10 transition-transform duration-1000"
          // style={{ transform: `translateX(-${scrollPos * 100}%)` }}
          ref={carousel}
        > */}
        {reviews.map((review, index) => (
          <Card key={index} data={review} ref2={carouselEle} />
        ))}
        {/* </div> */}
      </div>
      <div className=" max-md:hidden flex overflow-x-auto max-md:w-fit max-md:overflow-y-hidden no-scrollbar">
        <div
          className="flex gap-10 transition-transform duration-1000"
          style={{ transform: `translateX(-${scrollPos * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <Card key={index} data={review} />
          ))}
        </div>
      </div>
      <div className="flex space-x-2 relative w-full max-md:hidden justify-end max-md:justify-start">
        <button
          onClick={handleScrollLeft}
          aria-label="Scroll Left"
          className={`rounded-full ${
            scrollPos > 0
              ? "bg-blue-400 text-blue-200"
              : "bg-blue-300 text-blue-100"
          }`}
        >
          <BsFillArrowLeftSquareFill size={30} />
        </button>
        <button
          onClick={handleScrollRight}
          aria-label="Scroll Right"
          className={`rounded-full ${
            scrollPos < reviewsLength - 3
              ? "bg-blue-400 text-blue-200"
              : "bg-blue-300 text-blue-100"
          }`}
        >
          <BsFillArrowRightSquareFill size={30} />
        </button>
      </div>
    </div>
  );
}

function Rankers() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeDash, setActiveDash] = useState(0);
  const maxScroll = rankers.length - 4; // total cards minus visible cards
  const totalDashes = Math.ceil(rankers.length / 2) - 1; // total number of dashes
  const [scrollPos1, setScrollPos1] = useState(0);
  const maxScroll1 = rankers.length; // Total number of cards
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const interval = setInterval(() => {
      if (scrollPos >= maxScroll) {
        setScrollPos(0);
        setActiveDash(0);
      } else {
        setScrollPos((prev) => prev + 2);
        setActiveDash((prev) => (prev + 1) % totalDashes);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [scrollPos, activeDash]);

  const scrollAmount = 1; // Adjust the scroll amount for smoother or faster scrolling
  const scrollInterval = 50; // Adjust the interval duration for smoother or faster scrolling

  useEffect(() => {
    if (window.innerWidth > 1024) return;
    if (!containerRef.current) return;

    const scrollContainer = containerRef.current;

    const scroll = () => {
      scrollContainer.scrollLeft += scrollAmount;

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col  h-fit justify-center h-mx items-center bg-blue-2">
      <div className="overflow-hidden h-fit relative w-full">
        <div
          className=" max-md:hidden flex transition-transform max-md:overflow-x-auto gap-[100px] max-md:mt-0 max-md:gap-[10px] mt-10 duration-1000"
          style={{ transform: `translateX(-${(scrollPos * 100) / 4}%)` }}
        >
          {rankers.map((ranker, index) => (
            <div key={index} className="min-w-[240px] mx-2">
              <ResultCard result={ranker} />
            </div>
          ))}
        </div>
        <div
          ref={containerRef}
          className=" personal  md:hidden no-scrollbar flex transition-transform max-md:overflow-x-auto 
          gap-[0px] max-md:mt-0 max-md:gap-[10px] mt-10 duration-1000"
        >
          {rankers.map((ranker, index) => (
            <div key={index} className="">
              <ResultCard result={ranker} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-md:hidden justify-center mt-10">
        {Array.from({ length: totalDashes }, (_, index) => (
          <div
            key={index}
            className={`dash h-1 rounded-full mx-2 ${
              index === activeDash ? "w-16 bg-blue-500" : "w-10 bg-blue-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

const ResultCard = ({ result }) => {
  return (
    <div className="relative max-md:mx-2 mx-9 flex-shrink-0 ">
      <div
        className="absolute flex flex-col w-52 whitespace-nowrap   font-bold  left-0
         bottom-32 max-md:bottom-28 rounded-t-[25px] gap- text-black"
        style={{ backgroundColor: result.color }}
      >
        <div className="flex gap-2 one px-2 pt-3 w-44 z-10 relative">
          <Image
            src="/../images/crown-air-icon.svg"
            alt="air"
            width={20}
            height={0}
          />
          <div>
            AIR {result.air} <span>•</span> score {result.score}
          </div>
        </div>
        <div
          style={{ backgroundColor: result.color }}
          className="h-5 two w-60 relative"
        ></div>
      </div>
      <div className="p-2 flex rounded-xl   bg-white mt-10 shadow-[0px_4px_20px_0px_#0083E833] w-[20rem] min-w-[20rem] relative mb-4 gap-4 z-20">
        <div>
          <Image
            src={result.photo}
            alt={result.name}
            width={120}
            height={0}
            className="w-[90px] lg:w-[120px]"
          />
        </div>
        <div className="p-4 flex flex-col">
          <div className="text-[#080E14] text-lg font-bold">{result.name}</div>
          <div className="flex">
            <Image
              src="/../images/location-icon.svg"
              alt="location"
              width={20}
              height={0}
            />
            <div className="text-[#6B6E72] text-sm">{result.city}</div>
          </div>
          <div className="text-[#FF7A00] mt-auto">NEET 2022</div>
        </div>
      </div>
    </div>
  );
};

function SeventhSection() {
  return (
    <div className="mb-56 bg-[#00364E] m h-ax py-16 max-md:w-screen max-md:h-[419px] md:h-[500px]  w-full h-[958px]  ">
      <div className="bg-[#00364E] flex flex-col items-center justify-center text-white ">
        <h2 className="text-5xl mb-9 max-md:text-[32px] font-extrabold">
          reviews and <span className="text-[#FCDE5A]">results</span>
        </h2>
        <div
          className="flex max-md:flex-col max-md:gap-5
         max-md:justify-start max-md:w-full max-md:px-[20px]
           gap-7 text-sm"
        >
          <p className="flex gap-3">
            <Image
              src="/../livecourses/seventhSection/star.svg"
              alt="star"
              width={24}
              height={24}
            />
            31 Infinity Learners in top 100
          </p>
          <p className="flex gap-3">
            <Image
              src="/../livecourses/seventhSection/star.svg"
              alt="star"
              width={24}
              height={24}
            />
            234 Infinity Learners in top 1000
          </p>
        </div>
      </div>
      <div className="bgwhite">
        <Reviews />
        <Rankers />
      </div>
    </div>
  );
}
export default SeventhSection;
