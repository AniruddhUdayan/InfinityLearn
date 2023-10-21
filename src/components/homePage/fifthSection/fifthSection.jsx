"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Carousel, ProgressBar, CarouselItem } from "react-bootstrap";
import "./fifthSection.css";
function VideoOverlay({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className=" bg-black"
        style={{
          position: "relative",
          width: "80%",
          height: "80%",
          padding: "24px",
          border: "1px solid ",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YCiIdIXx-7Q?start=199"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",

            padding: "5px 10px",
            borderRadius: "50%",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <IoMdClose size={24} color="white" />
        </button>
      </div>
    </div>
  );
}

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

function Card({ data, onMouseEnter, onMouseLeave }) {
  const check = data.video;

  if (check) {
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex  max-w-[392px] max-md:h-[371px] hover:cursor-pointer h-[365px] 
      max-md:py-5  my-6 shadow-md items-center  justify-evenly 
        flex-col px-2
      flex-shrink-0   rounded-2xl  bg-white text-[#080E14]"
      >
        <div class="image-container">
          <Image
            src={data.image}
            alt="Video Background"
            class="background-image"
            width={365}
            height={161}
            className=""
          />
          <img
            src="/reviews/video.svg"
            alt="Play Button Logo"
            class="play-button"
          />
        </div>
        <div className="  max-md:px-1  max-md:text-[12px] text-[#52565B] max-md:mt-5 mt-4 max-md:text-base max-md:w-full  text-start">
          {data.review}
        </div>
        <div className=" w-full flex justify-end">
          <Image
            src="/reviews/invertedCommas2.svg"
            height={52}
            width={40}
            alt="inverted commas "
            className=" "
          />
        </div>

        <div
          className=" flex  justify-around  max-md:gap-3 w-full
          max-md:justify-start  max-md:flex-col 
          "
        >
          <div className="flex z-50  max-md:gap-1  flex-col flex-grow">
            <div className=" font-bold">{data.name}</div>
            <div className="  font-medium opacity-50">{data.place}</div>
          </div>
          <div className="   text-[#FF7A00]">{data.batch}</div>
        </div>
      </div>
    ); // or you can return some default component or <></> for nothing.
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex mb-12 max-h-[365px]  hover:cursor-pointer   max-w-[392px] 
      max-md:h-[371px]  justify-evenly   max-md:w-[316px]
      shadow-md  flex-col max-md:gap-10 px-5 max-md:px-4 
    flex-shrink-0 py-8 my-4 rounded-2xl  bg-white text-[#080E14] "
    >
      <div className="flex justify-evenly  items-center gap- gap-5 px-7 max-md:px-2 ">
        <Image
          src={data.image}
          // className=" rounded-full"
          height={120}
          width={120}
          className=" w-auto h-auto "
          fit="contain"
          alt="cards svg"
        />
        <div className="flex z-10  flex-col flex-grow">
          <div className=" font-bold mb-3">{data.name}</div>
          <div className="  font-medium opacity-50">{data.place}</div>
          <div className="  text-[#FF7A00]">{data.batch}</div>
        </div>
      </div>
      <Image
        src="/reviews/invertedcommas.svg"
        height={52}
        width={40}
        alt="inverted commas"
        className=" w-[15%]"
      />
      <div className=" max-md:text-[12px] text-[#52565B]  text-start">
        {data.review}
      </div>
    </div>
  );
}
function NewLevelShower({ currentIndex }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 1024);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const partWidth = isLargeScreen ? 40 : 19; // 200px or 95px divided by 5 respectively
  const filledWidth = (currentIndex + 1) * partWidth;

  return (
    <div className="max-md:w-64 max-lg:px-0 max-xl:">
      <div className="flex items-center">
        <div className="w-4 h-4 mr-4 font-semibold text-white">01</div>
        <div
          className={`${
            isLargeScreen ? "w-[110px]" : "w-[95px]"
          } h-0.5 mt-2 bg-white`}
        ></div>
        <div className="w-4 h-4 ml-4 font-semibold text-white">05</div>
      </div>
      <div
        className="relative bottom-2 left-8 bg-blue-500 h-2"
        style={{ width: `${filledWidth}px` }}
      ></div>
    </div>
  );
}
function ReviewsSmall() {
  const [scrollPos, setScrollPos] = useState(0);
  function handleSlide() {
    const maxScroll = reviews.length - 1;
    if (scrollPos >= maxScroll) {
      setScrollPos(0);
    } else {
      setScrollPos((prev) => prev + 1);
    }
  }

  return (
    <div className=" RS ">
      <div className="nls">
        <NewLevelShower currentIndex={scrollPos} />
      </div>

      <Carousel
        controls={false}
        className=" carous"
        interval={2000}
        onSlide={handleSlide}
      >
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div
              className="d-flex justify-content-center align-items-center mx-3"
              style={{ height: "100%" }}
            >
              <Card data={review} />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}

function Reviews() {
  const [isHovering, setIsHovering] = useState(false);
  const [lineWidth, setLineWidth] = useState(" w-4 ");
  const [cN, setCN] = useState(3);
  const [pN, setPN] = useState(2);
  const [sN, setSN] = useState(10);

  const updateWidth = () => {
    setLineWidth(window.innerWidth <= 768 ? 35 : 48);
    setCN(window.innerWidth <= 768 ? 1 : 3);
    setPN(window.innerWidth <= 768 ? 1 : 2);
    if (window.innerWidth <= 768) {
      setSN(100);
    } else if (window.innerWidth <= 1024) {
      setSN(35);
    } else {
      setSN(25);
    }
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const [scrollPos, setScrollPos] = useState(0);
  const [lineLength, setLineLength] = useState(9);
  useEffect(() => {
    const maxScroll = reviews.length - cN;
    const interval = setInterval(() => {
      if (!isHovering) {
        if (scrollPos >= maxScroll) {
          setScrollPos(0);
          setLineLength(" w-4 ");
        } else {
          setScrollPos((prev) => prev + pN);
          setLineLength(` w-48  max-md:w-28 `);
        }
      }
      return () => clearInterval(interval);
    }, 20000000);

    return () => clearInterval(interval);
  }, [scrollPos, isHovering]);
  // console.log(isHovering);

  return (
    <div className=" Reviews">
      <div className=" nlss max-xl:px-10">
        <NewLevelShower currentIndex={scrollPos} />
      </div>
      <div className=" rev">
        <div className="carouss no-scrollbar overflow-x-auto ">
          <div
            className="carouss-item "
            style={{ transform: `translateX(-${scrollPos * sN}%)` }}
          >
            {reviews.map((review, index) => (
              <Card
                key={index}
                data={review}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FifthSection() {
  const [svgWidth, setSvgWidth] = useState(592);
  const [showOverlay, setShowOverlay] = useState(false);
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 1024 ? 400 : 592);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div className=" fifthSection">
      <div
        className=" bg-[#00364E]  flex max-md:pt-10  justify-evenly max-md:ml-3
       max-md:justify-start text-start items-start pt-20 max-xl: "
      >
        <div className=" fsh ">
          <div className=" text-white fshc ">
            inspiring
            <span className=" sm:hidden ml-2">stories of</span>
          </div>
          <div className="text-white max-sm:hidden fshc">stories of our </div>
          <div className=" fshc  text-[#FCDE5A]">
            <span className=" image-tomp mr-2">our</span>toppers{" "}
          </div>
        </div>
        <Image
          src="/homepage/fifthSection/topper.webp"
          className="image-tomp hover:cursor-pointer max-xl:mr-5 aspect-[3/2]"
          height={400}
          width={600}
          alt="topper.svg"
          onClick={() => setShowOverlay(true)}
        />
      </div>
      <Reviews />
      <ReviewsSmall />

      {showOverlay ? (
        <VideoOverlay onClose={() => setShowOverlay(false)} />
      ) : null}
    </div>
  );
}
export default FifthSection;
