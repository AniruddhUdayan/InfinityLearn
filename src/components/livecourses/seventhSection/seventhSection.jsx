"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import "./liveCourses.css";
import { Button, LinearProgress } from "@mui/material";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import "./seventhSection.css";
import { Card } from "@/components/homePage/fifthSection/fifthSection";
import { ReviewsSmall } from "@/components/homePage/fifthSection/fifthSection";
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
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 1,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 2,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 21,
    score: 700,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 3,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 21,
    score: 700,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 4,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 5,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 6,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 7,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
  {
    id: 8,
    name: "Brijesh",
    city: "Kochi , Kerla",
    air: 256,
    score: 671,
    color: "#FBDD5A",
    photo: "/../livecourses/rankers.webp",
  },
];

function Reviews() {
  const carousel = useRef(null);
  const carouselEle = useRef(null);
  const [progress, setProgress] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const reviewsLength = reviews.length; // Assuming `reviews` is defined in scope
  const [autoScrollTimer, setAutoScrollTimer] = useState(null);
  const scrollRecordedLeft = () => {
    console.log("tjtjyd");
    carousel.current.scrollTo({
      left: -carousel.current.scrollWidth,
      behavior: "smooth",
    });
  };

  const scrollRecordedRight = () => {
    carousel.current.scrollTo({
      left: carousel.current.scrollWidth,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="flex reviews-large flex-col overflow-hidden   pt-20 relative 
    bottom-5  max-md:px-2 no-scrollbar"
    >
      <div className="flex w-full mb-7 lg:hidden gap-2 items-center mt-2">
        <div>01</div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="w-1/2"
        />
        <div>{reviews?.length}</div>
      </div>
      <div
        ref={carousel}
        className=" max-md:hidden gap-[20px] snap-x lg:snap-none 
         flex overflow-x-auto 
        max-md:w-fit max-md:overflow-y-hidden no-scrollbar"
      >
        {reviews.map((review, index) => (
          <Card key={index} data={review} />
        ))}
      </div>
      <div className="flex space-x-2 relative w-full max-md:hidden justify-end max-md:justify-start">
        <button
          onClick={scrollRecordedLeft}
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
          onClick={scrollRecordedRight}
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
  const carousel = useRef(null);
  const carouselEle = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 4 - 1) {
        setActiveIndex(0);
        carousel.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else if (activeIndex == 0) {
        setActiveIndex(activeIndex + 1);
        if (
          carouselEle.current.offsetWidth <
          carousel.current.offsetWidth / 2
        ) {
          carousel.current.scrollTo({
            left:
              carousel.current.scrollLeft + carouselEle.current.offsetWidth * 3,
            behavior: "smooth",
          });
        } else {
          carousel.current.scrollTo({
            left:
              carousel.current.scrollLeft + carouselEle.current.offsetWidth * 3,
            behavior: "smooth",
          });
        }
      } else {
        setActiveIndex(activeIndex + 1);
        carousel.current.scrollTo({
          left:
            carousel.current.scrollLeft + carouselEle.current.offsetWidth * 3,
          behavior: "smooth",
        });
      }
    }, 300000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="flex flex-col   justify-center h-mx bg-blue-2">
      <div className="result-main">
        <div className="result-div no-scrollbar" ref={carousel}>
          {rankers?.map((result, i) => (
            <ResultCard
              key={`result-${i}`}
              result={result}
              ref2={carouselEle}
            />
          ))}
        </div>
        <div className="result-index-div">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className={`result-index ${
                index === activeIndex ? "active" : "inactive"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ResultCard = ({ result, ref2 }) => {
  return (
    <div className="relative max-md:mx-2  flex-shrink-0 " ref={ref2}>
      <div
        className="relative flex flex-col w-52 whitespace-nowrap   font-bold  left-0
         max-md:bottom-28 top-3 rounded-t-[25px] gap- text-black"
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
      <div className="p-2 flex rounded-xl   bg-white  shadow-[0px_4px_20px_0px_#0083E833] w-[20rem] min-w-[20rem] relative mb-4 gap-4 z-20">
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
      <div className="bgwhite rr  px-[112px]">
        <Reviews />
        {/* <div> */}
        <ReviewsSmall />
        {/* </div> */}
        <Rankers />
      </div>
    </div>
  );
}
export default SeventhSection;
