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
    <div className=" max-md:w-64">
      <div className="flex items-center">
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
      <div className="flex mb-12 mx-auto  max-md:h-full max-md:py-4 shadow-lg max-md:w-full   flex-col md:px-9 flex-shrink-0  my-4 rounded-2xl w-1/4 bg-white text-black ">
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={120}
          width={200}
          className="  mt-6 max-md:mt-1  w-[100%] h-[100%]"
          fit="contain"
          alt="cards svg"
        />
        <div className=" ml-4 max-md:text-base  text-start">
          {props.data.review}
        </div>

        <Image
          src="reviews/invertedCommas2.svg"
          height={52}
          width={40}
          alt="inverted commas "
          className=" w-[15%] bottom-12 max-md:left-[299px] opacity-75 left left64 left-[265px]  relative"
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
    <div className="flex mb-12 max-md:w-80 shadow-lg gap-5  flex-col px-5 max-md:px-2 flex-shrink-0 py-8 my-4 rounded-2xl w-1/4 bg-white text-black ">
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
      <div className=" max-md:text-base  text-start">{props.data.review}</div>
    </div>
  );
}

function Reviews() {
  const [lineWidth, setLineWidth] = useState(" w-4 ");
  const [cN, setCN] = useState(3);
  const [pN, setPN] = useState(4);
  const [sN, setSN] = useState(10);

  const updateWidth = () => {
    setLineWidth(window.innerWidth <= 768 ? 20 : 48);
    setCN(window.innerWidth <= 768 ? 1 : 3);
    setPN(window.innerWidth <= 768 ? 1 : 4);
    setSN(window.innerWidth <= 768 ? 95 : 15);
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
    }, 1500);

    return () => clearInterval(interval);
  }, [scrollPos]);

  return (
    <div>
      <div className=" bg-[#00364E] px-36 max-md:px-6 max-md:mt-12  ">
        <LevelShower data={lineLength} />
      </div>
      <div className="  flex relative  max-md:h-full top-40 flex-col justify-center items-center ">
        <div className="overflow-hidden no-scrollbar max-md:overflow-x-auto w-screen  relative w-5/">
          <div
            className="flex gap-8 max-md:gap-16 max-md:px-5 transition-transform duration-1000"
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
    <div className=" mb-40 max-md:h-min w-full bg-[#00364E]">
      <div className=" bg-[#00364E] flex max-md:pt-10  justify-evenly max-md:ml-3 max-md:justify-start text-start items-start pt-20 ">
        <div className=" flex max-md:ml- flex-col">
          <div className=" text-6xl max-md:text-4xl font-extrabold">
            inspring
            <span className=" md:hidden ml-2">stories of</span>
          </div>
          <div className=" max-md:hidden text-6xl font-extrabold">
            stories of{" "}
          </div>
          <div className=" text-6xl max-md:text-4xl font-extrabold text-yellow-300">
            <span className=" md:hidden mr-2">our</span>toppers{" "}
          </div>
        </div>
        <img
          src="/homePage/fifthSection/topper.svg"
          className="max-md:hidden "
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
