"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Review from "@/components/Review&Detail/Review";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
});
const imagePaths = [
  "/images/book.webp",
  "/images/bio.webp",
  // Add more image paths as needed
];

const FirstSection = ({ params }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("left");
  const [text, setText] = useState("NEET Foundation");
  const [isSlideDown, setIsSlideDown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagePath, setImagePath] = useState(imagePaths[currentImageIndex]);

  useEffect(() => {
    // Define the interval (in milliseconds) to change the image (e.g., every 5 seconds)
    const interval = setInterval(() => {
      // Calculate the next image index (loop back to the first image if needed)
      const nextIndex = (currentImageIndex + 1) % imagePaths.length;
      setCurrentImageIndex(nextIndex);
      setImagePath(imagePaths[nextIndex]);
    }, 2000); // Change image every 5000 milliseconds (5 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);
  const toggleImage = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (animationDirection === "left") {
      setAnimationDirection("right");
    } else {
      setAnimationDirection("left");
    }

    setTimeout(() => {
      if (imagePath === "/images/book.webp") {
        setImagePath("/images/bio.webp");
      } else {
        setImagePath("/images/book.webp");
      }

      setIsAnimating(false);
    }, 2000); // Adjust the delay duration as needed
  };

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    const slideDown = () => {
      setIsSlideDown(true);
      timeout = setTimeout(() => {
        setIsSlideDown(false);
        setTimeout(() => {
          slideDown();
          // Repeat the animation
        }, 2000);
        // Stay for 2 seconds before sliding down
      }, 2000);
      // Slide down duration
    };

    slideDown(); // Start the animation

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="h-full bg-[#FFF]  pb-[61px] flex justify-center ">
        <div className="sm:flex sm:flex-col sm:mx-[112px] max-sm:w-auto lg:flex-row sm:gap-[40px]  sm:pt-[28px] ">
          <div className="flex flex-col gap-[20px] max-sm:bg-[#E6F2FF] max-sm:min-h-[446px]">
            <div className="flex h-full flex-col ">
              <div className="">
                <div className="flex flex-col sm:flex-row gap-[55px] justify-center w-full  sm:h-[510px] sm:bg-[#D4E9FF] sm:rounded-[20px] z-0 mb-[20px]">
                  <div className="hidden sm:h-auto sm:flex sm:flex-col sm:justify-center relative right-6">
                    <div
                      className={`h-[32px] w-[32px] bg-white rounded-[8px] transform ${
                        animationDirection === "left"
                          ? "translate-x-[50px]"
                          : "translate-x-0"
                      } transition-transform`}
                      onClick={toggleImage}
                    >
                      <Image
                        src="/images/left.png"
                        alt="Your Logo"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div
                    className={`max-sm:hidden h-auto flex justify-center items-center  sm:left-2 sm:top-0  overflow-hidden`}
                  >
                    <Image
                      src={imagePath}
                      alt="Your Logo"
                      width={332}
                      height={442}
                    />
                  </div>
                  <div className="sm:hidden relative  flex flex-col justify-center items-center top-14 mt-[32px] rounded-[20px]  bg-[#E6F2FF] bg-opacity-0 py-[16px] mx-[20px]">
                    <Image
                      src={imagePath}
                      alt="Your Logo"
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className="hidden sm:h-auto sm:flex sm:flex-col sm:justify-center relative right-6">
                    <div
                      className={`h-[32px] w-[32px] bg-white rounded-[8px] transform rotate-180 ${
                        animationDirection === "right"
                          ? "translate-x-[50px]"
                          : "translate-x-0"
                      } transition-transform`}
                      onClick={toggleImage}
                    >
                      <Image
                        src="/images/left.png"
                        alt="Your Logo"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="sm:hidden flex  justify-center gap-[14px] items-center">
                    <div className="text-[#FFF] max-sm:text-[#000] text-[12px] font-semibold">
                      01
                    </div>
                    <div className="flex flex-row w-[93.5px] border-gray-400 h-[4px] rounded-[4px] bg-gray-400">
                      {imagePath === "/images/book.webp" ? (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] bg-[#E6E7E8] max-sm:bg-[#007BFF]"></div>
                      ) : (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] "></div>
                      )}
                      {imagePath === "/images/bio.webp" ? (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] bg-[#E6E7E8] max-sm:bg-[#007BFF]"></div>
                      ) : (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] "></div>
                      )}
                      {imagePath === "/images/bio2.svg" ? (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] bg-[#E6E7E8] max-sm:bg-[#007BFF]"></div>
                      ) : (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] "></div>
                      )}
                    </div>
                    <div className="text-[#FFF] max-sm:text-[#000] text-[12px] font-semibold">
                      03
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:w-[588px] sm:h-[60px] sm:rounded-[12px] sm:bg-gradient-to-r from-[#00364E] to-[#2B636B] sm:flex sm:justify-center sm:items-center sm:text-[#FFF] sm:text-[16px] sm:font-normal sm:flex-row gap-[20px]">
                <div>{`what's in it for you?`}</div>
                <div className="flex justify-center items-center  rounded-[12px] bg-[#007BFF] text-[12px] font-[500] px-[8px] py-[4px] gap-1">
                  <Image
                    src="/images/play.png"
                    alt="Your Logo"
                    width={15}
                    height={15}
                  />
                  see now
                </div>
              </div>
              <div className="w-full">
                <div className="hidden w-full sm:flex sm:flex-row sm:gap-3 sm:mt-[30px]">
                  <div className="flex w-full px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] border-[1px] border-solid border-[#9C9FA1] hover:bg-[#007BFF]-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-row gap-2 ">
                      <div
                        className={`${poppins600.className} text-[#080E14] text-[16px] font-[600]`}
                      >
                        download sample
                      </div>
                      <Image
                        src="/images/download2.svg"
                        alt="Your Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="flex w-full px-[62px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] bg-[#007BFF] transform hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-row gap-2">
                      <div
                        className={`${poppins600.className} text-[#FFF] text-[16px] font-[600]`}
                      >
                        buy now
                      </div>
                      <Image
                        src="/images/buy2.svg"
                        alt="Your Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mx-[20px] max-sm:mt-[70px] sm:flex sm:flex-col sm:max-h-[684px] sm:min-w-[410px] w-auto overflow-scroll custom-scrollbar">
            <div
              className={`${poppins700.className} w-auto text-[#080E14] sm:text-[48px] text-[20px] font-bold leading-60 mx-[20px]`}
            >
              <div> IL books for</div>
              <div className="sm:h-[72px] h-[36px] overflow-hidden w-auto relative">
                <span
                  className={`text-[#007BFF]  inline-block transition-transform transform duration-[1000ms] ${
                    isSlideDown ? "translate-y-0" : "-translate-y-full"
                  }`}
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  {params.course[0]} FOUNDATION
                </span>
              </div>
              <span className={`${poppins400.className} sm:text-[32px]`}>
                {" "}
                - class {params.course[1]} , {params.course[2]} &{" "}
                {params.course[3]}
              </span>
            </div>
            <div className="sm:hidden flex flex-col gap-3 py-[20px] px-[12px]">
              <div className="flex w-full px-[62px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] bg-[#007BFF] transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-row gap-2">
                  <div
                    className={`${poppins600.className} text-[#FFF] text-[16px] font-[600]`}
                  >
                    buy now
                  </div>
                  <Image
                    src="/images/buy2.svg"
                    alt="Your Logo"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[48px] h-[48px] flex justify-center items-center">
                  <Image
                    src="/images/phone2.png"
                    alt="Your Logo"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex w-full px-[32px] py-[12px] justify-center items-center gap-[10px] rounded-[12px] border-[1px] border-solid border-[#9C9FA1] hover:bg-[#007BFF]-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-row gap-2 ">
                    <div
                      className={`${poppins600.className} text-[#080E14] text-[16px] font-[600]`}
                    >
                      download sample
                    </div>
                    <Image
                      src="/images/download2.svg"
                      alt="Your Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-[8px] gap-2 w-auto flex-wrap mx-[20px]">
              <div
                className={`${poppins600.className} text-[14px] sm:text-[18px] text-[#080E14] font-[600]`}
              >
                4.5
              </div>
              <div className="flex flex-row gap-4">
                {" "}
                <div className="flex flex-row gap-1">
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="h-full w-full flex items-center">
                    <Image
                      src="/images/star_half.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                </div>
                <div className=" flex flex-row">
                  <div className="h-auto border-l border-gray-300 "></div>
                </div>
                <div
                  className={`${poppins.className} text-[#080E14] text-[12px] sm:text-[14px] font-[500]`}
                >
                  171 Reviews
                </div>
              </div>
            </div>
            <div className="sm:ml-3 flex flex-row max-sm:flex-col max-sm:justify-center items-start max-sm:gap-[22px] flex-wrap mt-[25.5px] w-auto gap-3">
              <div className="flex w-[295px] h-[76px]  sm:w-[188px]  sm:h-[134px] sm:flex-col justify-between items-start py-2 px-[14px] rounded-[12px] bg-[#FFF] border-[2px] border-solid hover:border-[#007BFF] sm:gap-[10px] transform hover:scale-105 transition-transform duration-300 ">
                <div>
                  {" "}
                  <div className="relative right-[21.5px]">
                    {" "}
                    <Image
                      src="/images/Tags.png"
                      alt="Your Logo"
                      width={132}
                      height={26}
                    />
                  </div>
                  <div
                    className={`${poppins600.className} text-[#080E14] text-[14px] font-[600]`}
                  >
                    class 8, 9 & 10
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    className={`${poppins600.className} text-[#06AA2F] text-[14px] font-[600]`}
                  >
                    save 33%
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <div
                      className={`${poppins700.className} text-[#007BFF] text-[18px] font-[700]`}
                    >
                      ₹ 8,660
                    </div>
                    <div className="h-[21px] flex justify-center items-center">
                      <Image
                        src="/images/price.png"
                        alt="Your Logo"
                        width={53}
                        height={21}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[295px] h-[76px]   flex justify-between max-sm:h-auto sm:w-[188px] sm:h-[118px] sm:flex-col sm:items-start py-2 px-[14px] rounded-[12px] bg-[#FFF] border-[2px] border-solid hover:border-[#007BFF]  transform hover:scale-105 transition-transform duration-300 top-[14px]">
                <div
                  className={`${poppins600.className} text-[#080E14] text-[14px] font-[600]`}
                >
                  class 8 & 9
                </div>
                <div>
                  {" "}
                  <div
                    className={`${poppins600.className} text-[#06AA2F] text-[14px] font-[600]`}
                  >
                    save 12%
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <div
                      className={`${poppins700.className} text-[#080E14] text-[18px] font-[700]`}
                    >
                      ₹ 6,660
                    </div>
                    <div className="h-[21px] flex justify-center items-center">
                      <Image
                        src="/images/price.png"
                        alt="Your Logo"
                        width={53}
                        height={21}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[295px] h-[64px]  flex  md:h-[118px] sm:w-[188px] sm:h-[118px] sm:flex-col justify-between items-start py-2 px-[14px] rounded-[12px] bg-[#FFF] border-[2px] border-solid hover:border-[#007BFF] gap-[10px] transform hover:scale-105 transition-transform duration-300 top-[14px]">
                <div
                  className={`${poppins600.className} text-[#080E14] text-[14px] font-[600]`}
                >
                  class 8
                </div>
                <div>
                  {" "}
                  <div
                    className={`${poppins600.className} text-[#06AA2F] text-[14px] font-[600]`}
                  ></div>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <div
                      className={`${poppins600.className} text-[#080E14] sm:text-[18px] text-[16px] font-semibold  sm:font-[700] `}
                    >
                      ₹ 5,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:mt-[20px] sm:flex-wrap sm:max-w-[588px] sm:flex sm:flex-row sm:w-auto sm:justify-center sm:items-center sm:gap-[6px] sm:rounded-[12px] sm:bg-[#F1F2F6] sm:px-[12px]">
              <div
                className={`${poppins.className} py-[8px] px-[16px] text-[#080E14] text-[14px] font-[500]`}
              >
                Biology 24 Books
              </div>
              <div className="w-[8px] h-[8px] rounded-[50px] bg-[#007BFF]"></div>
              <div
                className={`${poppins.className} py-[8px] px-[16px] text-[#080E14] text-[14px] font-[500]`}
              >
                Physics 12 Books
              </div>
              <div className="w-[8px] h-[8px] rounded-[50px] bg-[#007BFF]"></div>
              <div
                className={`${poppins.className} py-[8px] px-[16px] text-[#080E14] text-[14px] font-[500]`}
              >
                Chemistry 12 Books
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-row sm:gap-[20px] sm:flex-wrap sm:mt-[32px]">
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins400.className} text-[#52565B] text-[14px] font-normal`}
                >
                  based on latest neet pattern
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins400.className} text-[#52565B] text-[14px] font-normal`}
                >
                  concise theory + practice questions
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins400.className} text-[#52565B] text-[14px] font-normal`}
                >
                  topic-wise Detailed MCQs for revision
                </div>
              </div>
            </div>
            <div className="sm:w-[688px] ">
              <Review />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F2F6] h-auto py-[32px] px-[20px sm:hidden flex flex-col items-center gap-[36px]">
        <Image
          src="/images/books3.webp"
          alt="Your Logo"
          width={335}
          height={231}
        />
        <div className="flex flex-col gap-3">
          {" "}
          <div className="flex flex-row gap-3">
            <Image
              src="/images/checklist.png"
              alt="Your Logo"
              width={18}
              height={18}
            />
            <div
              className={` ${poppins400.className} text-[#000] text-[14px] font-normal`}
            >
              based on latest neet pattern
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src="/images/checklist.png"
              alt="Your Logo"
              width={18}
              height={18}
            />
            <div
              className={` ${poppins400.className} text-[#000] text-[14px] font-normal`}
            >
              concise theory + practice questions
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src="/images/checklist.png"
              alt="Your Logo"
              width={18}
              height={18}
            />
            <div
              className={` ${poppins400.className} text-[#000] text-[14px] font-normal`}
            >
              topic-wise Detailed MCQs for revision
            </div>
          </div>
        </div>
        <div className="h-[124px] w-[335px] bg-gradient-to-r from-[#00364E] to-[#2B636B] rounded-[20px] px-[16px] py-[20px] flex flex-row">
          <div className="flex flex-col gap-3">
            <div
              className={`${poppins600.className} text-[20px] font-semibold text-[white]`}
            >{`what’s in it for you?`}</div>
            <div className="flex flex-row gap-3">
              {" "}
              <button className="flex justify-center items-center gap-1 px-[8px] py-[4px] bg-[#007BFF] w-auto rounded-[12px]">
                <Image
                  src="/images/play.png"
                  alt="Your Logo"
                  width={16}
                  height={16}
                />
                <div className={`${poppins.className} text-[12px] font-n[500]`}>
                  see now
                </div>
              </button>
              <Image
                src="/images/swing.svg"
                alt="Your Logo"
                width={32}
                height={26}
              />
            </div>
          </div>
          <div className="relative bottom-[45px]">
            <Image
              src="/images/teacher.webp"
              alt="Your Logo"
              width={130}
              height={160}
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#00364E] flex flex-col justify-center items-center sm:py-[80px] py-[32px] gap-[40px]">
        <div
          className={`${poppins700.className} text-[#FFF] sm:text-[48px] text-[30px] font-[700] px-[20px]`}
        >
          boost your revision with{" "}
          <span className="text-[#FCDE5A]">
            IL test series for {params.course[0]} !
          </span>
        </div>
        <div className="flex sm:flex-row flex-col max-sm:gap-[32px] justify-evenly w-full max-sm:px-[20px]">
          <div className="max-sm:hidden flex-col flex gap-[16px]">
            <div className="flex gap-[16px]">
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={32}
                height={32}
              />
              <div className="text-[#FFF] text-lg flex items-center">
                test your skills
              </div>
            </div>
            <div className="flex gap-[16px]">
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={32}
                height={32}
              />
              <div className="text-[#FFF] text-lg flex items-center">
                expertly crafted questions
              </div>
            </div>
            <div className="flex gap-[16px]">
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={32}
                height={32}
              />
              <div className="text-[#FFF] text-lg flex items-center">
                progress analysis
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-row gap-[12px]">
              <Image
                src="/images/testseries.svg"
                alt="check"
                width={96}
                height={48}
              />
              <div className="flex flex-col">
                <div
                  className={`${poppins700.className} text-[#FFF] sm:text-[18px] text-[14px] `}
                >
                  32.4K Students
                </div>
                <div
                  className={`${poppins400.className} text-[#FFF] sm:text-[16px] text-[14px] font-normal`}
                >
                  Revise with IL Mock Tests
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 bg-[#007BFF] rounded-[12px] py-[12px] sm:px-[64px] px-[34px] transform hover:scale-105 transition-transform duration-300">
              <div
                className={`${poppins600.className} text-[16px] text-[#FFF] font-[600]`}
              >
                explore test series
              </div>
              <Image
                src="/images/explore.svg"
                alt="Your Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
