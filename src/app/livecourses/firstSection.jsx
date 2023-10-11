"use client";
import React from "react";
import { BsDownload } from "react-icons/bs";
function FirstSection() {
  return (
    <div className=" h-full mx-auto  text-white bg-blue-500">
      <div className=" flex justify-center max-md:flex-col max-md:py-0  max-md:pt-16  py-16">
        <img
          className="relative max-md:hidden ml-10  rounded-3xl w-[578px] h-[528px] object-cover"
          alt=""
          src="livecourses/firstSection/mask-group@2x.png"
        />
        <img
          className="relative ml-10 md:hidden pb-7 w-[308px] h-[328px] object-cover"
          alt=""
          src="livecourses/firstSection/image1.svg"
        />

        <div className=" max-md:bg-white  max-md:px-4 max-md:text-black max-md:ml-0 ml-10  pb-12 flex flex-col justify-evenly ">
          <div>
            <div className=" relative max-md:mt-6  lowercase">
              <span className=" text-yellow-400  max-md:text-red-500  font-semibold">
                Full Syllabus Course
              </span>
              <span className="text-background-02">
                {" "}
                + Revision + Test Series
              </span>
            </div>
            <div className=" font-extrabold my-7">
              <span className=" text-5xl text-yellow-400 max-md:text-blue-500  ">
                NEET
              </span>
              <span className=" text-5xl text-background-02">
                {" "}
                rankers course
              </span>
            </div>
            <div className="font-thin">
              <p className=" max-md:mb-3 ">
                write a short description of the course here that talks about
                <span className="ml-1 md:hidden">
                  what is included and why it should be taken.
                </span>
              </p>
              <p className="m-0 max-md:hidden">
                what is included and why it should be taken.
              </p>
            </div>
          </div>
          <div className="flex max-md:flex-col font-thin my-4 gap-9 items-start justify-evenly ">
            <div className="flex  items-center gap-3 justify-evenly">
              <img
                className="relative max-md:hidden w-8 h-8"
                alt=""
                src="/livecourses/firstSection/subjectslogo.svg"
              />
              <img
                className="relative w-10  md:hidden  h-10"
                alt=""
                src="/livecourses/firstSection/image2.svg"
              />
              <div className="relative ">Biology, Physics, Chemistry</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <img
                className="relative max-md:hidden w-8 h-8"
                alt=""
                src="/livecourses/firstSection/calendar.svg"
              />
              <img
                className="relative w-10 md:hidden h-10"
                alt=""
                src="/livecourses/firstSection/image3.svg"
              />
              <div className="relative ">
                <span>{`batch starts `}</span>
                <span className="font-semibold">24th June</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-evenly   max-md:bg-blue-300 max-md:bg-opacity-50 gap-14 max-md:gap-3 my-4 max-md:border-0  border-2 border-yellow-300 rounded-2xl p-4">
            <div className=" flex flex-col">
              <div className=" text-sm lowercase font-medium ">{`Starting at `}</div>
              <div className=" flex items-center max-md:text-black gap-3 text-yellow-300">
                <d className="  font-bold text-4xl    ">₹ 1,660</d>

                <div className="  lowercase font-medium ">/month</div>
              </div>
              <div className=" flex items-center max-md:w-max gap-3">
                <div className=" text-red-500  text-lg [text-decoration:line-through] lowercase font-medium text-crimson">
                  {" "}
                  ₹ 2,550
                </div>
                <div className="  text-sm">* offer valid until 21st June</div>
              </div>
            </div>
            <div className="rounded-2xl p-3  max-md: px-5 items-center bg-[#00364E] ">
              <div className=" flex flex-col  max-md:text-white ">
                <p className="m-0 text-2xl max-md:text-white font-bold">40%</p>
                <p className="m-0 text-3xl ">Off</p>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-5 justify-evenly">
            <button className="border-2 max-md:bg-[#007BFF] max-md:text-white text-blue-500 bg-white px-8  rounded-xl p-3">
              <div className=" font-semibold">
                enrol at ₹1,660/month
                <span className=" ml-10">&#8599;</span>
              </div>
            </button>
            <button className="border-2 text-yellow-300 max-md:text-black border-yellow-300  px-8  rounded-xl p-3">
              <div className=" max-md:hidden font-semibold">
                start learning for free<span>&#8599;</span>
              </div>
              <div className=" md:hidden font-semibold">
                book a free demo classes
                <span className=" ml-4 max-md:text-blue-500">&#8599;</span>
              </div>
            </button>
            <button className=" md:hidden w-full text-blue-500  rounded-xl p-3">
              <div className=" gap-5 flex justify-center items-center font-bold">
                <div>download broncure</div>

                <BsDownload size={25} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FirstSection;
