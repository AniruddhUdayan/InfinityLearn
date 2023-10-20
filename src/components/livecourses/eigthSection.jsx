"use client";
import React from "react";
import Image from "next/image";
import SixthSection from "../livecourses/sixthSection";
import SeventhSection from "../homePage/seventhSection/seventhSection";
function EigthSection() {
  return (
    <div className=" pt-96">
      <div className=" bg-[#00364E] text-white max-md:flex-col flex w-full">
        <div
          className="  flex pl-24 max-md:w-full max-md:pl-0   
         justify-center items-center flex-col w-1/2"
        >
          <div className=" md:hidden px-4 pt-6 w-full flex  gap-2  flex-col">
            <div className="  font-extrabold text-4xl mb-1">
              get up to <span className=" text-yellow-300">50%</span>
            </div>
            <div className=" text-yellow-300 mb-6 font-extrabold text-4xl">
              scholarship!
            </div>
            <div className=" text-white text-md">
              over <span className=" font-bold">500+</span> students awarded
              scholarships
            </div>
            <div className=" mb-8 text-md ">
              worth of <span className=" font-bold">₹50L</span>
            </div>
          </div>
          <div className=" max-md:relative max-md:bottom-16 flex flex-col items-center justify-center w-full">
            <Image
              src="./livecourses/eigthSection/image2.svg"
              width={130}
              height={63}
              alt="eigthsection"
              className=" relative top-9  "
            />
            <Image
              src="./livecourses/eigthSection/image1.svg"
              width={605}
              height={444}
              alt="eigthsection"
            />
            <div className=" md:hidden w-full  p-5 flex justify-center">
              <button className="  bg-blue-500 max-md:h-[48px]   text-white w-full px-12  rounded-xl p-3">
                <div className=" font-semibold">
                  apply to scholarships<span className=" ml-2">&#8599;</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/2 max-md:hidden flex p-24 gap-2  flex-col">
          <div className="  font-extrabold text-4xl mb-1">
            get up to <span className=" text-yellow-300">50%</span>
          </div>
          <div className=" text-yellow-300 mb-6 font-extrabold text-4xl">
            scholarship!
          </div>
          <div className=" font-thin">
            over <span className=" font-bold">500+</span> students awarded
            scholarships worth
          </div>
          <div className=" mb-8 font-thin">
            of <span className=" font-bold">₹50L</span>
          </div>
          <button className=" bg-blue-500 text-white w-fit px-12  rounded-xl p-3">
            <div className=" font-semibold">
              apply to scholarships<span className=" ml-2">&#8599;</span>
            </div>
          </button>
        </div>
      </div>
      <SixthSection />
      <SeventhSection />
    </div>
  );
}
export default EigthSection;
