"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
function LevelShower(props) {
  return (
    <div className=" max-md:w-64   max-lg:px-0 max-xl:">
      <div className="flex max-md:ml-0 max-2xl:ml-10items-center">
        <div className="w-4 h-4 mr-6 font-semibold">01</div>
        <div className=" w-48 max-md:w-28 h-0.5 mt-2 bg-white"></div>
        <div className="w-4 h-4 font-semibold ml-6">05</div>
      </div>
      <div
        className={`relative bottom-2  ${props.data}  left-10 bg-blue-500 h-2`}
      ></div>
    </div>
  );
}
function Card(props) {
  const check = props.data.video;

  if (check) {
    return (
      <div
        className="flex  max-2xl:w-[365px] max-2xl:h-[365px] max-2xl:mb- mx-auto  max-md:h-fll 
      max-md:py-4  max-2xl:my-5 shadow-md max-md:w-[355px] max-md:h-full justify-evenly max-md:gap-     flex-col px-2
      flex-shrink-0   rounded-2xl w-/4 bg-white text-[#080E14]"
      >
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={161}
          width={292}
          className="  max-md:mt-1 max-2xl:mt-20  w-[100%] h-[100%]"
          fit="contain"
          alt="cards svg"
        />
        <div className="  max-md:px-1 max-md:mt-5 max-2xl:mt-4 max-md:text-base max-md:w-full  text-start">
          {props.data.review}
        </div>

        <Image
          src="/reviews/invertedCommas2.svg"
          height={52}
          width={40}
          alt="inverted commas "
          className=" w-[15%] max-md:bottom-0 max-2xl:bottom-6  max-xl:bottom-10 max-xl:left-[305px] max-md:left-[283px] opacity-75 left-72  relative"
        />
        <Image
          src="/reviews/video.svg"
          height={52}
          width={40}
          alt="video svg "
          className=" w-[15%] bottom-[220px] max-md:bottom-[240px] max-2xl:left-[150px] max-md:left-[150px] opacity-75   relative"
        />
        <div
          className=" flex max-2xl:bottom-20 max-2xl:right-2 max-md:ml-1 max-md:gap-3 max-md:justify-start max-md:flex-col 
       relative max-md:right-40 max-md:bottom-2    max-md:items-center "
        >
          <div className="flex z-50 ml-4 max-md:gap-1  flex-col flex-grow">
            <div className=" font-bold">{props.data.name}</div>
            <div className="  font-medium opacity-50">{props.data.place}</div>
          </div>
          <div className=" max-md:ml-20  text-orange-400">
            {props.data.batch}
          </div>
        </div>
      </div>
    ); // or you can return some default component or <></> for nothing.
  }

  return (
    <div
      className="flex mb-12  max-2xl:w-[392px] max-2xl:h-[365px] max-md:h-[391px] max-md:w-[335px]  
      shadow-md  flex-col max-md:gap-12 px-5 max-md:px-4 
    flex-shrink-0 py-8 my-4 rounded-2xl w-1/4 bg-white text-[#080E14] "
    >
      <div className="flex  items-center gap- gap-5 px-7 max-md:px-2 ">
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
        src="/reviews/invertedcommas.svg"
        height={52}
        width={40}
        alt="inverted commas"
        className=" w-[15%]"
      />
      <div className=" max-md:text-base  text-start">{props.data.review}</div>
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
            isLargeScreen ? "w-[200px]" : "w-[95px]"
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

function Reviews() {
  const [lineWidth, setLineWidth] = useState(" w-4 ");
  const [cN, setCN] = useState(3);
  const [pN, setPN] = useState(4);
  const [sN, setSN] = useState(10);

  const updateWidth = () => {
    setLineWidth(window.innerWidth <= 768 ? 35 : 48);
    setCN(window.innerWidth <= 768 ? 1 : 3);
    setPN(window.innerWidth <= 768 ? 1 : 4);
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
      if (scrollPos >= maxScroll) {
        setScrollPos(0);
        setLineLength(" w-4 ");
      } else {
        setScrollPos((prev) => prev + pN);
        setLineLength(` w-48  max-md:w-28 `);
      }
      return () => clearInterval(interval);
    }, 150000);

    return () => clearInterval(interval);
  }, [scrollPos]);

  return (
    <div>
      <div
        className=" bg-[#00364E]  max-lg:w-full max-lg:px-0 
      max-xl:w-full max-xl:px-10
       max-xl: px-36 max-md:px-6 max-md:mt-12  "
      >
        <NewLevelShower currentIndex={scrollPos} />
      </div>
      <div className="  flex relative  max-md:h-full max-md:top-7 top-10 flex-col justify-center items-center ">
        <div className="overflow-hidden no-scrollbar max-md:overflow-x-auto w-screen  relative w-5/">
          <div
            className="flex gap-8 max-md:gap-[70px] max-md:px-5 transition-transform duration-1000"
            style={{ transform: `translateX(-${scrollPos * sN}%)` }}
          >
            {reviews.map((review, index) => (
              <Card key={index} data={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function FifthSection() {
  return (
    <div className=" mb-40  max-md:h-[450px] h-[782px]  w-full bg-[#00364E]">
      <div
        className=" bg-[#00364E]  flex max-md:pt-10  justify-evenly max-md:ml-3
       max-md:justify-start text-start items-start pt-20 "
      >
        <div
          className=" flex max-2xl:px-28 max-md:item-center max-md:px-5 
          max-md:py-0 max-2xl:w-1/2 font-[700] text-[32px] max-md:w-full
         h-max max-2xl:py-24 flex-col justify-between justify-cnter"
        >
          <div className=" text-white text-6xl max-md:text-4xl ">
            inspiring
            <span className=" md:hidden ml-2">stories of</span>
          </div>
          <div className="text-white max-md:hidden text-6xl">
            stories of our{" "}
          </div>
          <div className=" text-6xl max-md:text-4xl  text-[#FCDE5A]">
            <span className=" md:hidden mr-2">our</span>toppers{" "}
          </div>
        </div>
        <Image
          src="/../homepage/fifthSection/topper.svg"
          className="max-md:hidden max-xl:mr-5 "
          height={400}
          width={600}
          alt="topper.svg"
        />
      </div>
      <Reviews />
    </div>
  );
}
export default FifthSection;
