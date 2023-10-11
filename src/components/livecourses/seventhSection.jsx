"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { blue } from "@mui/material/colors";
const reviews = [
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: true,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image1.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image3.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "reviews/image3.svg",
  },
];
function Card(props) {
  const check = props.data.video;

  if (check) {
    return (
      <div
        className="flex mb-12  h-min  
      max-md:h-full max-md:py-4  max-xl:w96 max-w-[392px]  shadow-lg max-md:w-full   
      flex-col px-3  flex-shrink-0
       my-4 rounded-2xl w-1/3 bg-white text-black "
      >
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={120}
          width={200}
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
          className=" w-[15%] bottom-12 max-md:left-[310px] opacity-75 left left64 left-[315px]  relative"
        />
        <div className=" flex  items-center ">
          <div className="flex z-50 ml-4  flex-col flex-grow">
            <div className=" font-bold">{props.data.name}</div>
            <div className="  font-medium opacity-50">{props.data.place}</div>
          </div>
          <div className=" max-md:ml-8  text-orange-400">
            {props.data.batch}
          </div>
        </div>
      </div>
    ); // or you can return some default component or <></> for nothing.
  }

  return (
    <div
      className="flex mb-12 max-w-[392px] max-xl:w-96 max-md:w-full h-fi px-6 gap-4 shadow-lg flex-col max-md:px-2 flex-shrink-0 py-5
  my-4 rounded-2xl w-full md:w-1/3 bg-white text-black "
    >
      <div className="flex  items-center gap-6 max-md:gap-2 px-7 max-md:px-2 ">
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
          <div className=" font-bold mb-3">{props.data.name}</div>
          <div className="  font-medium opacity-50">{props.data.place}</div>
          <div className="  text-orange-400">{props.data.batch}</div>
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
  const [scrollPos, setScrollPos] = useState(0);

  const handleScrollLeft = () => {
    setScrollPos((prev) => Math.max(prev - 1, 0));
  };

  const handleScrollRight = () => {
    setScrollPos((prev) => Math.min(prev + 1, reviews.length - 1));
  };

  const leftArrowClasses =
    scrollPos > 0 ? "bg-blue-500 text-white" : "bg-blue-200 text-blue-500";
  const rightArrowClasses =
    scrollPos < reviews.length - 1
      ? "bg-blue-500 text-white"
      : "bg-blue-200 text-blue-500";

  return (
    <div className="flex max-md:w-fit max-md:px-2  relative no-scrollbar bottom-5 flex-col items-center p-20">
      <div className="flex overflow-x-auto max-md:w-fit max-md:overflow-y-hidden no-scrollbar mb-">
        <div
          className="flex gap-6 transition-transform duration-1000"
          style={{ transform: `translateX(-${scrollPos * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <Card key={index} data={review} />
          ))}
        </div>
      </div>
      <div className="flex relative max-md:justify-start  w-full max-md:w-screen space-x-2 justify-end ">
        <button
          onClick={handleScrollLeft}
          className={` rounded-full b  ${
            scrollPos > 0
              ? "bg-blue-400 text-blue-200"
              : "bg-blue-300 text-blue-100"
          }`}
        >
          <BsFillArrowLeftSquareFill size={30} />
        </button>
        <button
          onClick={handleScrollRight}
          className={` rounded-full text-blue-200 ${
            scrollPos < reviews.length - 3
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

function SeventhSection() {
  return (
    <div className="mb-56 bg-[#00364E] py-16 max-md:w-screen md:h-[500px]  w-full h-[600px]  ">
      <div className="bg-[#00364E] flex flex-col items-center justify-center text-white ">
        <h2 className="text-5xl mb-9 max-md:text-4xl font-extrabold">
          reviews and <span className="text-yellow-300">results</span>
        </h2>
        <div className="flex max-md:flex-col max-md:gap-3 max-md:justify-start max-md:w-full  gap-7 text-sm">
          <p className="flex gap-3">
            <Image
              src="/livecourses/seventhSection/star.svg"
              alt="star"
              width={24}
              height={24}
            />
            31 Infinity Learners in top 100
          </p>
          <p className="flex gap-3">
            <Image
              src="/livecourses/seventhSection/star.svg"
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
      </div>
    </div>
  );
}
export default SeventhSection;
