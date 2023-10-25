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

function NewLevelShower({ currentIndex }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 480);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const partWidth = isLargeScreen ? 40 : 19; // 200px or 95px divided by 5 respectively
  const filledWidth = (currentIndex + 1) * partWidth;

  return (
    <div className=" max-lg:px-0 max-xl:">
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
export function ReviewsSmall() {
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
        interval={2000000}
        onSlide={handleSlide}
      >
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <div
              className="d-flex  justify-content-center align-items-center mx-3"
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

function Reviews(props) {
  const [cN, setCN] = useState(props.cN);
  const [pN, setPN] = useState(props.pN);
  const [sN, setSN] = useState(props.sN);
  // console.log(sN);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const maxScroll = reviews.length - Math.ceil(cN);
    const interval = setInterval(() => {
      if (!isHovering) {
        if (scrollPos >= maxScroll) {
          setScrollPos(0);
        } else {
          setScrollPos((prev) => prev + pN);
        }
      }
    }, 2300);

    return () => clearInterval(interval);
  }, [scrollPos, isHovering]);

  return (
    <div className="Reviews">
      <div className="nlss max-xl:px-10">
        <NewLevelShower currentIndex={scrollPos} />
      </div>
      <div className="rev">
        <div className="carouss no-scrollbar overflow-x-auto">
          <div
            className="carouss-item md:mx-[112px]"
            style={{ transform: `translateX(-${scrollPos * sN}%)` }}
          >
            {reviews.map((review, index) => (
              <Card
                ref={index === 0 ? cardRef : null}
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
export const Card = React.forwardRef(
  ({ data, onMouseEnter, onMouseLeave }, ref) => {
    const check = data.video;
    const [svgWidth, setSvgWidth] = useState(365);

    const updateWidth = () => {
      setSvgWidth(window.innerWidth <= 480 ? 292 : 365);
    };
    useEffect(() => {
      // Update width on mount
      updateWidth();

      // Add resize event listener
      window.addEventListener("resize", updateWidth);

      // Cleanup: remove event listener on unmount
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    if (check) {
      return (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="cardVideo  shadow-md  "
        >
          <div className="image-container">
            <Image
              src={data.image}
              alt="Video Background"
              className="background-image"
              width={svgWidth}
              height={161}
              // className=""
            />
            <Image
              src="/reviews/video.svg"
              alt="Play Button Logo"
              className="play-button"
              width={40}
              height={40}
            />
          </div>
          <div className=" z-10 cardVideo-review  ">{data.review}</div>
          <div className=" w-full relative bottom-11 flex justify-end">
            <Image
              src="/reviews/invertedCommas2.svg"
              height={41}
              width={52}
              alt="inverted commas "
              className=" "
            />
          </div>

          <div
            className=" flex  justify-around  w-full
          max-md:justify-start  max-md:flex-col 
          "
          >
            <div className="flex z-50  flex-col flex-grow">
              <div className=" cardVideo-name">{data.name}</div>
              <div className="  cardVideo-place">{data.place}</div>
            </div>
            <div className="   cardVideo-course">{data.batch}</div>
          </div>
        </div>
      ); // or you can return some default component or <></> for nothing.
    }

    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="cardNormal shadow-md "
      >
        <div className="flex justify-evenly cardNormal-head  items-center  px-7 max-md:px-2 ">
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
            <div className=" cardNormal-name mb-2">{data.name}</div>
            <div className=" cardNormal-place mb-[24px]">{data.place}</div>
            <div className=" whitespace-nowrap  cardNormal-course">
              {data.batch}
            </div>
          </div>
        </div>
        <Image
          src="/reviews/invertedcommas.svg"
          height={52}
          width={40}
          alt="inverted commas"
          className=" w-[15%]"
        />
        <div className=" cardNormal-review ">{data.review}</div>
      </div>
    );
  }
);
function FifthSection() {
  const [svgWidth, setSvgWidth] = useState(592);
  const [showOverlay, setShowOverlay] = useState(false);
  const [cN, setCN] = useState(2);
  const [pN, setPN] = useState(4);
  const [sN, setSN] = useState(20);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const maxScroll = reviews.length - Math.ceil(cN / 2);
    const interval = setInterval(() => {
      if (!isHovering) {
        if (scrollPos >= maxScroll) {
          setScrollPos(0);
        } else {
          setScrollPos((prev) => prev + pN);
        }
      }
    }, 2300);

    return () => clearInterval(interval);
  }, [scrollPos, isHovering]);
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 1024 ? 400 : 592);
    console.log("jhv");
    const width = window.innerWidth;

    if (width >= 481 && width <= 576) {
      setCN(1);
      setSN(60);
      setPN(1);
    } else if (width >= 577 && width <= 767) {
      setCN(2);
      setSN(50);
      setPN(1);
      // ... (similar logic as above)
    } else if (width >= 768 && width <= 991) {
      console.log("kj");
      setCN(2);
      setSN(70);
      setPN(1);
    } else if (width >= 992 && width <= 1199) {
      // ... (similar logic as above)
      console.log("tfj");
      setCN(3);
      setSN(40);
      setPN(2);
      console.log("kjrenfre");
    } else if (width >= 1200 && width <= 1400) {
      // ... (similar logic as above)
    }
  };
  // console.log(sN);
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
          <div className="text-white whitespace-nowrap max-sm:hidden fshc">
            stories of our{" "}
          </div>
          <div className=" fshc  text-[#FCDE5A]">
            <span className=" sm:hidden image-tomp mr-2">our</span>toppers{" "}
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
      {/* {useEffect(() => { */}
      <div className="Reviews">
        <div className="nlss ">
          <NewLevelShower currentIndex={scrollPos} />
        </div>
        <div className="rev">
          <div className="carouss no-scrollbar overflow-x-auto">
            <div
              className="carouss-item md:mx-[112px]"
              style={{ transform: `translateX(-${scrollPos * sN}%)` }}
            >
              {reviews.map((review, index) => (
                <Card
                  ref={index === 0 ? cardRef : null}
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
      <ReviewsSmall />
      {showOverlay ? (
        <VideoOverlay onClose={() => setShowOverlay(false)} />
      ) : null}
    </div>
  );
}
export default FifthSection;
