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
  "/images/book4.svg",
  "/images/book3.svg",
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
        setImagePath("/images/book3.svg");
      } else {
        setImagePath("/images/book4.svg");
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
      <div className="books-first-sec-container">
        <div className="books-first-sec-container2 ">
          <div className="books-first-sec-box1">
            <div className="flex h-full flex-col ">
              <div>
                <div className="books-first-sec-books">
                  <div className="books-first-sec-left-arrow-box ">
                    <div
                      className={`books-first-sec-left-arrow `}
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
                  <div className={`books-first-sec-image-box`}>
                    <Image
                      src={imagePath}
                      alt="Your Logo"
                      width={332}
                      height={442}
                    />
                  </div>
                  <div className="books-first-sec-image-box-mob">
                    <div className="relative top-10 left-4">
                      <Image
                        src={imagePath}
                        alt="Your Logo"
                        width={250}
                        height={250}
                      />
                    </div>
                    <div className="books-arrow-container">
                      {" "}
                      <div className="books-back-arrow">
                        <Image
                          src="/images/backArrow.png"
                          alt="Your Logo"
                          width={16}
                          height={11}
                        />
                      </div>
                      <div className="books-right-arrow">
                        <Image
                          src="/images/rightArrow.png"
                          alt="Your Logo"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:h-auto sm:flex sm:flex-col sm:justify-center relative ">
                    <div className="books-back-arrow2">
                      <Image
                        src="/images/backArrow.png"
                        alt="Your Logo"
                        width={16}
                        height={11}
                      />
                    </div>
                    <div
                      className={`books-first-sec-left-arrow relative bottom-5  transform rotate-180 `}
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
                  <div className="books-first-sec-mob-bar">
                    <div className="books-first-sec-mob-bar-text">01</div>
                    <div className="books-first-sec-mob-bar-base bg-gray-400">
                      {imagePath === "/images/book4.svg" ? (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] bg-[#E6E7E8] max-sm:bg-[#007BFF]"></div>
                      ) : (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] "></div>
                      )}
                      {imagePath === "/images/book3.svg" ? (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] bg-[#E6E7E8] max-sm:bg-[#007BFF]"></div>
                      ) : (
                        <div className="flex flex-row w-[33.5px] border-gray-400 h-[4px] rounded-[4px] "></div>
                      )}
                      {imagePath === "/images/book.svg" ? (
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
              <div className="books-first-sec-whats-box sm:bg-gradient-to-r from-[#00364E] to-[#2B636B] ">
                <div>{`what's in it for you?`}</div>
                <div className="books-first-sec-see-now">
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
                <div className="books-first-sec-button-box">
                  <div className="books-first-sec-download-btn transform hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-row gap-2 ">
                      <div
                        className={`${poppins600.className} books-first-sec-download-btn-text`}
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
                  <div className="books-first-sec-buy-now-btn transform hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-row gap-2">
                      <div
                        className={`${poppins600.className} books-first-sec-buy-now-btn-text`}
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
          <div className="books-first-sec-box2 sm:overflow-scroll custom-scrollbar">
            <div
              className={`${poppins700.className} books-first-sec-box2-head`}
            >
              <div> IL books for</div>
              <div className="sm:h-[72px] h-[36px] overflow-hidden sm:w-[500px] relative">
                <span
                  className={`text-[#007BFF]  inline-block transition-transform transform duration-[1000ms] ${
                    isSlideDown ? "translate-y-0" : "-translate-y-full"
                  }`}
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  {params.course[0]} FOUNDATION -
                </span>
              </div>
              <span className={`${poppins400.className} sm:text-[32px]`}>
                {" "}
                class {params.course[1]} , {params.course[2]} &{" "}
                {params.course[3]}
              </span>
            </div>
            <div className="books-first-sec-box2-btns">
              <div className="books-first-sec-box2-book-now transform hover:scale-105 transition-transform duration-300">
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
              <div className="flex flex-row w-[80%]">
                <div className="flex h-auto justify-center items-center">
                  <Image
                    src="/images/phone2.png"
                    alt="Your Logo"
                    width={58}
                    height={58}
                  />
                </div>
                <div className="books-first-sec-box2-download border-[1px] border-solid border-[#9C9FA1] transform hover:scale-105 transition-transform duration-300">
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
            <div className="books-first-sec-box2-ratings">
              <div
                className={`${poppins600.className} books-first-sec-box2-ratings`}
              >
                4.5
              </div>
              <div className="flex flex-row gap-4">
                {" "}
                <div className="flex flex-row gap-1">
                  <div className="books-first-sec-box2-star">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="books-first-sec-box2-star">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="books-first-sec-box2-star">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="books-first-sec-box2-star">
                    <Image
                      src="/images/star.png"
                      alt="Your Logo"
                      width={15}
                      height={14}
                    />
                  </div>
                  <div className="books-first-sec-box2-star">
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
                  className={`${poppins.className} books-first-sec-box2-ratings-text`}
                >
                  171 Reviews
                </div>
              </div>
            </div>
            <div className="books-first-sec-package">
              <div className="books-first-sec-package-box1 transform hover:scale-105 transition-transform duration-300 ">
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
                    className={`${poppins600.className} books-first-sec-package-class-text`}
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
              <div className="books-first-sec-package-box2 transform hover:scale-105 transition-transform duration-300">
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
              <div className="books-first-sec-package-box3 transform hover:scale-105 transition-transform duration-300 top-[14px]">
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
            <div className="books-first-sec-list">
              <div className={`${poppins.className} books-first-sec-list-text`}>
                Biology 24 Books
              </div>
              <div className="books-first-sec-blue-circle"></div>
              <div className={`${poppins.className} books-first-sec-list-text`}>
                Physics 12 Books
              </div>
              <div className="books-first-sec-blue-circle"></div>
              <div className={`${poppins.className} books-first-sec-list-text`}>
                Chemistry 12 Books
              </div>
            </div>
            <div className="books-first-sec-checklist-box">
              <div className="flex flex-row gap-3">
                <Image
                  src="/images/checklist.png"
                  alt="Your Logo"
                  width={24}
                  height={24}
                />
                <div
                  className={` ${poppins400.className} text-[#52565B] text-[14px]`}
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
                  className={` ${poppins400.className} text-[#52565B] text-[14px]`}
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
                  className={` ${poppins400.className} text-[#52565B] text-[14px]`}
                >
                  topic-wise Detailed MCQs for revision
                </div>
              </div>
            </div>
            <div className="sm:w-[688px] max-sm:hidden">
              <Review />
            </div>
          </div>
        </div>
      </div>
      <div className="books-first-sec-container3">
        <div className="books-first-sec-books-name-box">
          <Image
            src="/images/books3.webp"
            alt="Your Logo"
            width={335}
            height={231}
          />
          <div className="books-first-sec-books-names">
            <div className={`${poppins.className} books-first-sec-books-name`}>
              Biology 24 books
            </div>
            <div className=" flex flex-row">
              <div className="h-[42px] border-l border-[#99CAFF] "></div>
            </div>
            <div className={`${poppins.className} books-first-sec-books-name`}>
              Physics 24 books
            </div>
            <div className=" flex flex-row">
              <div className="h-[42px] border-l border-[#99CAFF] "></div>
            </div>
            <div className={`${poppins.className} books-first-sec-books-name`}>
              Chemistry 24 books
            </div>
          </div>
        </div>
        <div className="books-first-sec-books-checklist1">
          {" "}
          <div className="books-first-sec-books-checklist2">
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
          <div className="books-first-sec-books-checklist2">
            <Image
              src="/images/checklist1.png"
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
          <div className="books-first-sec-books-checklist2">
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
        <div className=" bg-gradient-to-r from-[#00364E] to-[#2B636B] books-first-sec-books-whats-in-box">
          <div className="books-first-sec-books-checklist1">
            <div
              className={`${poppins600.className} books-first-sec-books-whats-in-box-text`}
            >{`what’s in it for you?`}</div>
            <div className="flex flex-row gap-3">
              {" "}
              <button className="books-first-sec-books-whats-see">
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
          <div className="relative h-auto w-auto bottom-[45px]">
            <Image
              src="/images/teacher.png"
              alt="Your Logo"
              width={140}
              height={160}
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex justify-center">
        <Review />
      </div>
      <div className="books-first-sec-test-series">
        <div
          className={`${poppins700.className} books-first-sec-test-series-text-box text-[#FFF] sm:text-[48px] text-[30px] flex flex-col `}
        >
          <div className=" flex justify-center ">
            boost your revision{" "}
            <span className="text-[#FCDE5A] ml-4">{` with IL test`}</span>{" "}
          </div>
          <div className="flex justify-center text-[#FCDE5A]">
            {" "}
            series for {params.course[0]} !
          </div>
        </div>
        <div
          className={`${poppins700.className} books-first-sec-test-series-text-box-mob`}
        >
          <div className="flex flex-col text-[#FFF] sm:text-[48px] text-[30px] ">
            <div>boost your Revision</div>
            <div>
              {" "}
              with <span className="text-[#FCDE5A]">IL Test Series for</span>
            </div>
            <div className="text-[#FCDE5A]">{params.course[0]} !</div>
          </div>
        </div>
        <div className="books-first-sec-test-series-content-box">
          <div className="books-first-sec-test-series-checklist">
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
            <div className="books-first-sec-test-series-btn transform hover:scale-105 transition-transform duration-300">
              <div
                className={`${poppins600.className} books-first-sec-test-series-btn-text`}
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
