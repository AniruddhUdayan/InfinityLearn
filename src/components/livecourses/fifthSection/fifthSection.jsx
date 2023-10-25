"use client";
import React, { useState, useEffect, useRef } from "react";
import { Carousel, ProgressBar, CarouselItem } from "react-bootstrap";
import Image from "next/image";
import "./fifthSection.css";
import { useSwipeable } from "react-swipeable";
import { BsDownload } from "react-icons/bs";
import { Button, LinearProgress } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import {
  RiArrowDropRightLine,
  RiArrowDropLeftFill,
  RiArrowDropLeftLine,
} from "react-icons/ri";
const images = [
  {
    id: 0,
    src: "/images/book.webp",
  },
  {
    id: 1,
    src: "/images/book.webp",
  },
  {
    id: 2,
    src: "/images/book.webp",
  },
];
function AnimatedButton({ color, imageSrc, text, altText }) {
  const [animation, setAnimation] = useState("");

  const handleArrowAnimation = () => {
    setAnimation(
      animation === ""
        ? "transition duration-250 ease-in-out transform translate-x-4"
        : ""
    );
  };

  const borderHoverColorClasses = {
    "#FFEDF0": "hover:border-red-300",
    "#FFF3EC": "hover:border-orange-300",
    "#F2FFED": "hover:border-green-300",
  };

  return (
    <div
      onMouseEnter={handleArrowAnimation}
      onMouseLeave={handleArrowAnimation}
      className={`animatedbutton ${borderHoverColorClasses[color]} max-md:p-3 rounded-2xl`}
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-7 items-center">
        <Image src={imageSrc} width={60} height={60} alt={altText} />
        <div className="font-semibold">{text}</div>
      </div>
      <BsArrowRight className={`max-m ${animation}`} size={20} />
    </div>
  );
}

function FifthSection() {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleScrollRight();
      console.log("ljnwefb");
    },
    onSwipedRight: () => {
      handleScrollLeft();
    },
    onSwipedUp: () => console.log("Swiped up!"),
    onSwipedDown: () => console.log("Swiped down!"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false, // Set to true if you want to track mouse swipes
  });

  const [scrollPos, setScrollPos] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleScrollLeft = () => {
    if (currentImageIndex > 0) {
      setTimeout(() => {
        setProgress(currentImageIndex - 1);
        setCurrentImageIndex(currentImageIndex - 1);
      }, 500); // match the transition duration
    }
  };
  function handleSlide() {
    const maxScroll = images.length - 1;
    if (scrollPos >= maxScroll) {
      setScrollPos(0);
      setCurrentImageIndex(0);
    } else {
      setScrollPos((prev) => prev + 1);
      setCurrentImageIndex((prev) => prev + 1);
    }
  }
  const normalise = (value) => ((value - 0) * 100) / (images.length - 0);
  // useEffect(() => {
  //   if (window.innerWidth >= 1024) return;
  //   const interval = setInterval(() => {
  //     if (progress === faculties.length - 1) {
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
  //             carousel.current.scrollLeft + carouselEle.current.offsetWidth / 2,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         carousel.current.scrollTo({
  //           left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
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
  const handleScrollRight = () => {
    if (currentImageIndex < images.length - 1) {
      setTimeout(() => {
        setProgress(currentImageIndex + 1);
        setCurrentImageIndex(currentImageIndex + 1);
      }, 500); // match the transition duration
    }
  };

  return (
    <div className=" w-full">
      <div className=" flex trans  max-md:flex-col  w-full justify-between text-black">
        <div className=" p-item h-full w-1/2  max-md:w-full max-md:text-center max-md:flex-col max-md:  py-6 flex justify-center bg-blue-100">
          <div className="  md:hidden font-extrabold text-4xl">
            <span className=" text-blue-600">IL books</span> for NEET
          </div>
          <div className=" i-c-content flex items-center w-full  flex-col">
            <div className="i-c">
              {images.map((img, index) => (
                <Image
                  key={img.id}
                  src={img.src}
                  width={436}
                  height={580}
                  alt="books"
                  className={`i-item ${
                    index === currentImageIndex
                      ? "current"
                      : index < currentImageIndex
                      ? "rotate-backward"
                      : "rotate-forward"
                  }`}
                />
              ))}
            </div>
            {/* <div
              className="flex gap-[1rem] mx-[112px]
              justify-start  no-scrollbar w-full  
              
             snap-x lg:snap-none"
            >
              <div {...handlers} className="i-c small-media">
                {images.map((items, index) => (
                  <Image
                    key={index}
                    src={items.src}
                    width={436}
                    height={580}
                    alt="books"
                    className={`i-item ${
                      index === currentImageIndex
                        ? "current"
                        : index < currentImageIndex
                        ? "rotate-backward"
                        : "rotate-forward"
                    }`}
                  />
                ))}
              </div>
            </div> */}

            {/* <Carousel
              controls={false}
              className=" carous"
              interval={2000000}
              onSlide={handleSlide}
            >
              {images.map((items, index) => (
                <CarouselItem key={index}>
                  <div
                    className="d-flex  justify-content-center 
                    align-items-center mx-3"
                    style={{ height: "100%" }}
                  >
                    <Image
                      key={index}
                      src={items.src}
                      width={436}
                      height={580}
                      alt="books"
                      className={`i-item ${
                        index === currentImageIndex
                          ? "current"
                          : index < currentImageIndex
                          ? "rotate-backward"
                          : "rotate-forward"
                      }`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </Carousel> */}
            <div className="flex justify-center lg:hidden w-full max-lg:mb-[32px] gap-2 items-center mt-2">
              <div>{progress + 1}</div>
              <LinearProgress
                variant="determinate"
                value={normalise(progress + 1)}
                className="w-1/2"
              />
              <div>{images?.length}</div>
            </div>

            <div className="flex justify-center gap-[13px]">
              <div className="flex  space-x-2 relative w-full  justify-center max-md:justify-start">
                <button
                  onClick={handleScrollLeft}
                  aria-label="Scroll Left"
                  className={` nav-button ${
                    currentImageIndex > 0
                      ? " bg-white text-[#007BFF]"
                      : " opacity-50 text-blue-100"
                  }`}
                >
                  <RiArrowDropLeftLine size={30} />
                </button>
                <button
                  onClick={handleScrollRight}
                  aria-label="Scroll Right"
                  className={`nav-button ${
                    currentImageIndex < images.length - 1
                      ? "bg-white text-[#007BFF]"
                      : "opacity-50 text-blue-100"
                  }`}
                >
                  <RiArrowDropRightLine size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" w-1/2 max-md:w-full max-md:pt-[32px]  max-md:items-start max-md:px-6 
        justify-center gap-4 px-28  flex flex-col bg-[#FEF8DE]"
        >
          <div className=" fifth-heading max-md:hidden pb-12  ">
            <span className=" text-blue-600">IL books</span> for NEET
          </div>
          <div className=" ">
            <span className=" fifth-subject"> Botany Class 11</span>{" "}
            <span className=" fifth-nob">(12 Books)</span>
          </div>
          <div className=" book-features  max-md:mt-[26px] flex gap-3 max-md:gap-[16px] flex-col ">
            <div className=" flex gap-2">
              <Image src="/../tick.svg" width={24} height={24} alt="books" />
              <div>Based on the Latest NEET Exam pattern </div>
            </div>
            <div className="  flex gap-2">
              <Image src="/../tick.svg" width={24} height={24} alt="books" />
              <div>Concise Theory + Practice Questions </div>
            </div>
            <div className="flex gap-2">
              <Image src="/../tick.svg" width={24} height={24} alt="books" />
              <div>Topic-wise Detailed MCQs for revision</div>
            </div>
          </div>
          <div className=" max-md:w-full max-md:py-4  max-md:text-center max-md:items-center">
            <button className=" mt-10 max-md:mt-0 max-md:h-[48px]   w-80 border-2 border-black border-opacity-50 bg-[#FEF8DE]  text-black  rounded-xl p-3">
              <div className=" gap-5 flex justify-center font-semibold">
                <div>download sample pdf</div>

                <BsDownload size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-full max-md:px-4 justify-center mt-10 text-[#080E14]">
        <div className=" animatedbhead  ">syllabus</div>
        <div className="animatedbSub">
          {" "}
          find the latest subject-wise syllabus per NTA guidelines
        </div>

        <div className=" animatedbuttonItems ">
          <AnimatedButton
            color="#FFEDF0"
            imageSrc="/../livecourses/fifthSection/syllabus/chemistry.svg"
            text="Chemistry"
            altText="Chemistry icon"
          />

          <AnimatedButton
            color="#FFF3EC"
            imageSrc="/../livecourses/fifthSection/syllabus/physics.svg"
            text="Physics"
            altText="Physics icon"
          />

          <AnimatedButton
            color="#F2FFED"
            imageSrc="/../livecourses/fifthSection/syllabus/biology.svg"
            text="Biology"
            altText="Biology icon"
          />
        </div>
      </div>
    </div>
  );
}
export default FifthSection;
// margin-left: auto;
//   margin-right: auto;
