"use client";
import React, { useState } from "react";
import Image from "next/image";

import { BsDownload } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
function AnimatedButton({ color, imageSrc, text, altText }) {
  const [animation, setAnimation] = useState("");

  const handleArrowAnimation = () => {
    setAnimation(
      animation === ""
        ? "transition duration-250 ease-in-out transform translate-x-4"
        : ""
    );
  };

  return (
    <button
      onMouseEnter={handleArrowAnimation}
      onMouseLeave={handleArrowAnimation}
      className={`hover:border-2 hover:border-${color}-300 items-center bg-${color}-300 bg-opacity-30 gap-7 p-7 max-md:p-3 border-2 rounded-2xl flex justify-between`}
    >
      <div className="flex gap-7 items-center">
        <Image src={imageSrc} width={60} height={60} alt={altText} />
        <div className="font-semibold">{text}</div>
      </div>
      <BsArrowRight className={` max-m ${animation}`} size={20} />
    </button>
  );
}
function FifthSection() {
  const [animation, setAnimation] = useState("");
  function handleArrowAnimation() {
    setAnimation(
      animation == ""
        ? " transition duration-250 ease-in-out translate-x-5 "
        : ""
    );
  }
  console.log(animation, "jker");
  return (
    <div className=" w-full">
      <div className=" flex trans  max-md:flex-col  w-full justify-between text-black">
        <div className=" w-1/2 max-md:w-full max-md:text-center max-md:flex-col max-md:  py-6 flex items-cener justify-center bg-blue-100">
          <div className="  md:hidden font-extrabold text-4xl">
            <span className=" text-blue-600">IL books</span> for NEET
          </div>
          <Image
            src="./livecourses/fifthSection/books/book1.svg"
            width={436}
            height={580}
            alt="books"
            className=" mr-9"
          />
        </div>
        <div className=" w-1/2 max-md:w-full max-md:pt-10 max-md:items-start max-md:px-6 justify-center gap-4 px-28  flex flex-col bg-[#FEF8DE]">
          <div className=" max-md:hidden pb-12 font-extrabold text-4xl">
            <span className=" text-blue-600">IL books</span> for NEET
          </div>
          <div className=" max-md:mb-4">
            <span className=" font-bold text-2xl"> Botany Class 11</span>{" "}
            <span className=" opacity-50">(12 Books)</span>
          </div>
          <div className=" flex gap-3 flex-col ">
            <div className=" flex gap-2">
              <Image src="./tick.svg" width={24} height={24} alt="books" />
              <div>Based on latest NEET Pattern</div>
            </div>
            <div className=" flex gap-2">
              <Image src="./tick.svg" width={24} height={24} alt="books" />
              <div>Concise Theory + Practice Questions</div>
            </div>
            <div className=" flex gap-2">
              <Image src="./tick.svg" width={24} height={24} alt="books" />
              <div>Topic-wise Detailed MCQs for revision</div>
            </div>
          </div>
          <div className=" max-md:w-full max-md:py-4  max-md:text-center max-md:items-center">
            <button className=" mt-10 max-md:mt-0   w-80 border-2 border-black border-opacity-50 bg-[#FEF8DE]  text-black  rounded-xl p-3">
              <div className=" gap-5 flex justify-center font-semibold">
                <div>download sample pdf</div>

                <BsDownload size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-full max-md:px-4 justify-center mt-10 text-black">
        <div className=" text-center font-extrabold mb-9 mt-4  text-4xl">
          syllabus
        </div>
        <div className=" flex max-md:flex-col gap-12 mb-12 justify-center ">
          <AnimatedButton
            color="red"
            imageSrc="./livecourses/fifthSection/syllabus/chemistry.svg"
            text="Chemistry"
            altText="chemistry icon"
          />
          <AnimatedButton
            color="orange"
            imageSrc="./livecourses/fifthSection/syllabus/physics.svg"
            text="Physics"
            altText="physics icon"
          />
          <AnimatedButton
            color="green"
            imageSrc="./livecourses/fifthSection/syllabus/biology.svg"
            text="Biology"
            altText="biology icon"
          />
        </div>
      </div>
    </div>
  );
}
export default FifthSection;
