import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const items = [
  {
    imageSrc: "/images/details.png",
    title: "48",
    subtitle: "no. of books",
  },
  {
    imageSrc: "/images/math.png",
    title: "10003",
    subtitle: "pages",
  },
  {
    imageSrc: "/images/layer.png",
    title: "English",
    subtitle: "language",
  },
  {
    imageSrc: "/images/layer.png",
    title: "Infinity Learn",
    subtitle: "publisher",
  },
  {
    imageSrc: "/images/layer.png",
    title: "January 2023",
    subtitle: "publication date",
  },
  {
    imageSrc: "/images/layer.png",
    title: "21 x 15.2 x 4 cm",
    subtitle: "dimensions",
  },
];

const Review = () => {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("left");
  const scrollSpeed = 1; // You can adjust the speed as needed
  const scrollInterval = 10; // Interval in milliseconds

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (scrollDirection === "left") {
        container.scrollLeft += scrollSpeed;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          setScrollDirection("right");
        }
      } else {
        container.scrollLeft -= scrollSpeed;
        if (container.scrollLeft <= 0) {
          setScrollDirection("left");
        }
      }
    };

    const interval = setInterval(scroll, scrollInterval);

    return () => {
      clearInterval(interval);
    };
  }, [scrollDirection]);

  return (
    <div className="bg-[#007BFF] sm:bg-white flex flex-col-reverse gap-[42px] justify-start pt-[21px] h-full pb-[50px] max-w-[688px]  flex-wrap-reverse ">
      <div className="flex flex-col w-auto sm:mx-[22px] max-sm:max-w-[375px]">
        <div
          className={`${poppins700.className} w-full flex justify-start text-[#080E14] text-[32px] font-bold py-[20px]`}
        >
          reviews
        </div>
        <div className="flex flex-col w-auto h-auto border-[1px] border-solid border-[#CECFD0] rounded-[12px] bg-white">
          <div className="p-[30px] flex flex-row">
            <div className="flex-col justify-center w-auto">
              <div
                className={`${poppins700.className} text-[#080E14]  sm:text-[48px] text-[36px] font-[700]`}
              >
                4.8
              </div>
              <div className="max-sm:hidden">
                <Image
                  src="/images/star2.svg"
                  alt="Your Logo"
                  width={102}
                  height={24}
                />
              </div>
              <div className="sm:hidden">
                <Image
                  src="/images/star4.svg"
                  alt="Your Logo"
                  width={94}
                  height={14}
                />
              </div>
              <div
                className={`${poppins.className}  sm:w-[112px] text-[14px] font-[500] text-[#52565B] mt-[12px]`}
              >
                369 ratings & 42 reviews
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="h-[150px] border-l border-gray-300 "></div>
            </div>
            <div className="flex flex-col pl-[20px] gap-[12px]">
              <div className="flex flex-row justify-center items-center sm:gap-[27px] gap-1">
                <div
                  className={`${poppins.className} text-[#6B6E72] text-[14px] font-[500] min-w-[42px]`}
                >
                  5 star
                </div>
                <div className="sm:w-[304px] w-[124px] h-[4px] rounded-[4px] bg-[#E6E7E8]">
                  <div className="w-[101px] sm:w-[191px] h-[4px] rounded-[4px] bg-[#06AA2F]"></div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center sm:gap-[27px] gap-1">
                <div
                  className={`${poppins.className} text-[#6B6E72] text-[14px] font-[500]`}
                >
                  4 star
                </div>
                <div className="sm:w-[304px] w-[124px] h-[4px] rounded-[4px] bg-[#E6E7E8]">
                  <div className="sm:w-[160px] w-[86px] h-[4px] rounded-[4px] bg-[#34C759]"></div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center sm:gap-[27px] gap-1">
                <div
                  className={`${poppins.className} text-[#6B6E72] text-[14px] font-[500]`}
                >
                  3 star
                </div>
                <div className="sm:w-[304px] w-[124px] h-[4px] rounded-[4px] bg-[#E6E7E8]">
                  <div className="sm:w-[130px] w-[60px] h-[4px] rounded-[4px] bg-[#85DD9B]"></div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center sm:gap-[27px] gap-1">
                <div
                  className={`${poppins.className} text-[#6B6E72] text-[14px] font-[500]`}
                >
                  2 star
                </div>
                <div className="sm:w-[304px] w-[124px] h-[4px] rounded-[4px] bg-[#E6E7E8]">
                  <div className="w-[30px] h-[4px] rounded-[4px] bg-[#FFAB01]"></div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center sm:gap-[27px] gap-1">
                <div
                  className={`${poppins.className} text-[#6B6E72] text-[14px] font-[500]`}
                >
                  1 star
                </div>
                <div className="sm:w-[304px] w-[124px] h-[4px] rounded-[4px] bg-[#E6E7E8]">
                  <div className="sm:w-[32px] w-[16px] h-[4px] rounded-[4px] bg-[#F1695F]"></div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row gap-[20px] items-center">
                <div className="flex flex-row px-[12px] py-[8px] rounded-[12px] bg-[#06AA2F] gap-[6px]">
                  <div
                    className={`${poppins600.className} text-[#FFF] sm:text-[18px] text-[16px] font-[600]`}
                  >
                    5.0
                  </div>
                  <Image
                    src="/images/star3.svg"
                    alt="Your Logo"
                    width={16}
                    height={16}
                  />
                </div>
                <div
                  className={`${poppins600.className} sm:text-[18px] text-[16px] font-[600]`}
                >
                  best study material
                </div>
              </div>
              <div
                className={`${poppins400.className} text-[#52565B] sm:text-[14px] text-[12px] font-[400] lowercase sm:w-[524px] w-[295px]`}
              >
                Best study material for NEET Foundation course. I have studied
                from Infinity Learn as well as Byjus material and the level of
                clarity from Infinity Learn is far better!
              </div>
              <div className="flex flex-row gap-[12px] items-center">
                <div
                  className={`${poppins600.className} sm:text-[16px] text-[14px] font-[600]`}
                >
                  Tejas Rao
                </div>
                <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007BFF]"></div>
                <div
                  className={`${poppins400.className} sm:text-[14px] text-[12px] font-[400]`}
                >
                  09 August, 2022
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row gap-[20px] items-center">
                <div className="flex flex-row px-[12px] py-[8px] rounded-[12px] bg-[#34C759] gap-[6px]">
                  <div
                    className={`${poppins600.className} text-[#FFF] sm:text-[18px] text-[16px] font-[600]`}
                  >
                    4.0
                  </div>
                  <Image
                    src="/images/star3.svg"
                    alt="Your Logo"
                    width={16}
                    height={16}
                  />
                </div>
                <div
                  className={`${poppins600.className} sm:text-[18px] text-[16px] font-[600]`}
                >
                  best study material
                </div>
              </div>
              <div
                className={`${poppins400.className} text-[#52565B] sm:text-[14px] text-[12px] font-[400] lowercase sm:w-[524px] w-[295px]`}
              >
                Best study material for NEET Foundation course. I have studied
                from Infinity Learn as well as Byjus material and the level of
                clarity from Infinity Learn is far better!
              </div>
              <div className="flex flex-row gap-[12px] items-center">
                <div
                  className={`${poppins600.className} sm:text-[16px] text-[14px] font-[600]`}
                >
                  Tejas Rao
                </div>
                <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007BFF]"></div>
                <div
                  className={`${poppins400.className} sm:text-[14px] text-[12px] font-[400]`}
                >
                  09 August, 2022
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row gap-[20px] items-center">
                <div className="flex flex-row px-[12px] py-[8px] rounded-[12px] bg-[#5DD27A] gap-[6px]">
                  <div
                    className={`${poppins600.className} text-[#FFF] sm:text-[18px] text-[16px] font-[600]`}
                  >
                    3.0
                  </div>
                  <Image
                    src="/images/star3.svg"
                    alt="Your Logo"
                    width={16}
                    height={16}
                  />
                </div>
                <div
                  className={`${poppins600.className} sm:text-[18px] text-[16px] font-[600]`}
                >
                  best study material
                </div>
              </div>
              <div
                className={`${poppins400.className} text-[#52565B] sm:text-[14px] text-[12px] font-[400] lowercase sm:w-[524px] w-[295px]`}
              >
                Best study material for NEET Foundation course. I have studied
                from Infinity Learn as well as Byjus material and the level of
                clarity from Infinity Learn is far better!
              </div>
              <div className="flex flex-row gap-[12px] items-center">
                <div
                  className={`${poppins600.className} sm:text-[16px] text-[14px] font-[600]`}
                >
                  Tejas Rao
                </div>
                <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007BFF]"></div>
                <div
                  className={`${poppins400.className} sm:text-[14px] text-[12px] font-[400]`}
                >
                  09 August, 2022
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="p-[30px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row gap-[20px] items-center">
                <div className="flex flex-row px-[12px] py-[8px] rounded-[12px] bg-[#FFAB01] gap-[6px]">
                  <div
                    className={`${poppins600.className} text-[#FFF] sm:text-[18px] text-[16px] font-[600]`}
                  >
                    2.0
                  </div>
                  <Image
                    src="/images/star3.svg"
                    alt="Your Logo"
                    width={16}
                    height={16}
                  />
                </div>
                <div className={`${poppins600.className} text-[18px] font-[600]`}>
                  best study material
                </div>
              </div>
              <div
                className={`${poppins400.className} text-[#52565B] sm:text-[14px] text-[12px] font-[400] lowercase sm:w-[524px] w-[295px]`}
              >
                Best study material for NEET Foundation course. I have studied
                from Infinity Learn as well as Byjus material and the level of
                clarity from Infinity Learn is far better!
              </div>
              <div className="flex flex-row gap-[12px] items-center">
                <div
                  className={`${poppins600.className} sm:text-[16px] text-[14px] font-[600]`}
                >
                  Tejas Rao
                </div>
                <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007BFF]"></div>
                <div
                  className={`${poppins400.className} sm:text-[14px] text-[12px] font-[400]`}
                >
                  09 August, 2022
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="p-[30px] max-sm:hidden">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row gap-[20px] items-center">
                <div className="flex flex-row px-[12px] py-[8px] rounded-[12px] bg-[#F1695F] gap-[6px]">
                  <div
                    className={`${poppins600.className} text-[#FFF] text-[18px] font-[600]`}
                  >
                    1.0
                  </div>
                  <Image
                    src="/images/star3.svg"
                    alt="Your Logo"
                    width={16}
                    height={16}
                  />
                </div>
                <div className={`${poppins600.className} text-[18px] font-[600]`}>
                  best study material
                </div>
              </div>
              <div
                className={`${poppins400.className} text-[#52565B] text-[14px] font-[400] lowercase md:w-[524px]`}
              >
                Best study material for NEET Foundation course. I have studied
                from Infinity Learn as well as Byjus material and the level of
                clarity from Infinity Learn is far better!
              </div>
              <div className="flex flex-row gap-[12px] items-center">
                <div className={`${poppins600.className} text-[16px] font-[600]`}>
                  Tejas Rao
                </div>
                <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007BFF]"></div>
                <div className={`${poppins400.className} text-[14px] font-[400]`}>
                  09 August, 2022
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div
            className={`${poppins.className}  p-[30px] flex justify-center items-center text-[#007BFF] underline cursor-pointer`}
          >
            show all 369 reviews
          </div>
        </div>
      </div>
      <div className="flex flex-col w-auto mx-[13px]">
        <div
          className={`${poppins700.className} w-full flex justify-start text-[#080E14] text-[32px] font-[700] py-[20px]`}
        >
          details
        </div>
        <div className="max-sm:hidden max-w-[600px] sm:w-full flex flex-row flex-wrap w-auto h-auto gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center transform hover:scale-105 hover:bg-[#e8e8e8] transition-transform duration-300"
            >
              <div className="flex flex-col gap-[20px] w-auto items-center">
                <Image
                  src={item.imageSrc}
                  alt="Your Logo"
                  width={42}
                  height={42}
                />
                <div
                  className={`${poppins.className} text-[#000] text-[20px] font-[600]`}
                >
                  {item.title}
                </div>
                <div
                  className={`${poppins.className} text-[#000] text-[14px] font-[400]`}
                >
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={containerRef}
          className="sm:hidden max-w-[350px] min-h-[120px] flex flex-row w-auto h-auto gap-3 overflow-hidden items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[188px] h-[154px] rounded-[12px] bg-[#F1F2F6] flex justify-center items-center transform hover:bg-[#e8e8e8] transition-transform duration-300"
              style={{ display: "inline-block" }}
            >
              <div className="flex flex-col gap-[12px] w-auto items-center justify-center mt-[12px]">
                <Image
                  src={item.imageSrc}
                  alt="Your Logo"
                  width={42}
                  height={42}
                />
                <div
                  className={`${poppins.className} text-[#000] text-[20px] font-[600]`}
                >
                  {item.title}
                </div>
                <div
                  className={`${poppins.className} text-[#000] text-[14px] font-[400]`}
                >
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
