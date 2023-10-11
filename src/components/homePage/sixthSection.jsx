"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function SixthSection() {
  const [svgWidth, setSvgWidth] = useState(410);

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 662 ? 285 : 410);
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
    <div className=" flex flex-col max-md:pt-20 justify-center">
      <div className=" w-full flex justify-center items-center">
        <button className="text-white h-[52px] hover:space-x-2 w-80 max-md:w-[340px] hover:bg-blue-600 mt-8 bg-[#007BFF] rounded-2xl">
          <div>
            start learning for free <span>&#8599;</span>
          </div>
        </button>
      </div>

      <div className=" h-min bg-gray-200 max-md:mt-12 max-2xl:mt-24 ">
        <div className=" max-w-screen-xl mx-auto px-4 flex max-md:flex-col  justify-between relative">
          <div className=" flex flex-col max-md:justify-end   mt-20  ">
            <div className=" text-6xl max-md:text-4xl   font-bold md:mb-4  text-blue-500">
              best study
              <span className="text-blue-500 ml-2 max-md:text-4xl md:hidden  mb-4 font-bold text-6xl">
                material,{" "}
              </span>
            </div>
            <div className="text-blue-500 max-md:hidden  mb-4 font-bold text-6xl">
              material,{" "}
              <span className="text-black font-bold text-6xl">now at</span>
            </div>
            <div className=" text-black max-md:text-4xl font-bold md:mb-10 max-md:mb-6  text-6xl">
              <span className=" md:hidden text-black max-md:text-4xl font-bold text-6xl">
                now at
              </span>{" "}
              your finger tips!
            </div>
            <div className="flex max-md:flex-col flex-wrap">
              <div className="w-1/2 max-md:w-full p-2">
                <div className="flex items-center space-x-4 mb-5 text-black">
                  <Image
                    src="/../homepage/sixthSection/tick.svg"
                    height={25}
                    width={25}
                    alt="tick.svg"
                    className=""
                  />
                  <div className="text-sm opacity-70">live classes</div>
                </div>
                <div className="flex items-center space-x-4 mb-5 text-black">
                  <Image
                    src="/../homepage/sixthSection/tick.svg"
                    height={25}
                    width={25}
                    alt="tick.svg"
                    className=""
                  />
                  <div className="text-sm opacity-70">progress tracking</div>
                </div>
              </div>

              <div className="w-1/2 max-md:w-full p-2">
                <div className="flex items-center space-x-4 mb-5 text-black">
                  <Image
                    src="/../homepage/sixthSection/tick.svg"
                    height={25}
                    width={25}
                    alt="tick.svg"
                    className=""
                  />
                  <div className="text-[14px] opacity-70">
                    diverse question bank
                  </div>
                </div>
                {/* Add another div here if needed */}
              </div>
            </div>

            <div className="download max-md:hidden py-16  flex flex-col text-start">
              <div className="mb-4 ml-3 tracking-wider text-black font-extrabold">
                download the app
              </div>
              <div className="flex items-center  justify-evenly">
                <a
                  href="https://apps.apple.com/sg/app/infinity-learn/id1642492194"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/../homepage/sixthSection/apple.svg"
                    height={50}
                    width={180}
                    alt="Download on the Apple App Store"
                    className=" pb-3 "
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=apps.infinitylearn.lms.tuition&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/../homepage/sixthSection/playstore.svg"
                    height={50}
                    width={186}
                    alt="playsto.svg"
                    className=" pb-2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-end">
            <div className=" md:mt-10 mt-3 relative">
              <Image
                src="/../homepage/sixthSection/sixthSec1.svg"
                alt="Sixth Section Background"
                height={730}
                width={491}
              />
            </div>
          </div>
          <div className="download md:hidden  py-6  flex flex-col text-start">
            <div className="mb-4 ml- text-black text-center text-4xl font-bold">
              download the app
            </div>
            <div className="flex max-md:w-96 pl-4 max-md:justify-center items-center  justify-between">
              {/* <div className=" bg-black bg-apple rounded-xl w-full  h-fit"> */}

              <a
                href="https://apps.apple.com/sg/app/infinity-learn/id1642492194"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/../homepage/sixthSection/apple1.svg"
                  height={20}
                  width={160}
                  alt="apple1.svg"
                  className=" mb-5 bg-url()  hover:cursor-pointer"
                />
              </a>
              {/* </div> */}
              <a
                href="https://play.google.com/store/apps/details?id=apps.infinitylearn.lms.tuition&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/../homepage/sixthSection/playstore1.svg"
                  height={20}
                  width={150}
                  alt="playsto.svg"
                  className=" hover:cursor-pointer"
                />
              </a>
            </div>
          </div>
          {/* <MyComponent /> */}
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
