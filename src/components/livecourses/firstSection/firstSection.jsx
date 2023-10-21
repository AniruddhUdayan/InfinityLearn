"use client";
import Image from "next/image";
import React from "react";
import "../liveCourses.css";
import { BsDownload } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./firstSection.css";
function FirstSection() {
  return (
    <div className=" flex poppins  bg-[#007BFF] h-full mx-auto text-white justify-center max-md:flex-col max-md:py-0  max-md:pt-16  py-16">
      {/* <div className="relative  md:hidden items-center mx-auto inline-block text-black mt-10 w-[335px]">
        <select className="block appearance-none font-[600] text-[#007BFF]  w-full bg-white border border-gray-400 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="12/neet">{"class 12 + |  NEET"}</option>
          <option value="12/iit">12/IIT</option>
        </select>
        <div className="pointer-events-none rounded-2xl absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l4-4z" />
          </svg>
        </div>
      </div> */}
      <Image
        className="relative max-md:hidden   rounded-3xl w-[586px] h-[502px] object-cover"
        alt=""
        height={586}
        width={502}
        src="/../livecourses/firstSection/image2.webp"
      />
      <Image
        className="relative mt-6  mx-auto md:hidden pb-7  object-cover"
        alt=""
        width={227}
        height={195}
        src="/../livecourses/firstSection/image1.webp"
      />

      <div className=" max-md:bg-white  max-md:px-4 max-md:text-black max-md:ml-0 ml-10  pb-12 flex flex-col justify-evenly ">
        <div>
          <div className=" relative max-md:mt-6  lowercase">
            <span className=" text-yellow-400  max-md:text-red-500  font-semibold">
              live classes
            </span>
            <span className="text-background-02">
              {" "}
              + Revision + Test Series
            </span>
          </div>
          <div className=" font-bold my-7">
            <span className=" text-5xl text-yellow-400 max-md:text-blue-500  ">
              NEET
            </span>
            <span className=" text-5xl text-background-02">
              {" "}
              rankers course
            </span>
          </div>
          <div className="font-[400]">
            <div className=" max-md:mb-3 ">
              Comprehensive Live Classes by the Faculty Behind AIR 1 Top
              <span className="ml-1 md:hidden">
                Rankers. Learn from the Teachers Committed to Your Success.
              </span>
            </div>
            <p className="m-0 max-md:hidden">
              Rankers. Learn from the Teachers Committed to Your Success.
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col font-thin my-4 gap-9 items-start justify-evenly ">
          <div className="flex  items-center gap-3 justify-evenly">
            <Image
              className="relative max-md:hidden"
              alt=""
              width={32}
              height={32}
              src="/../livecourses/firstSection/subjectslogo.svg"
            />
            <Image
              className="relative   md:hidden  "
              alt=""
              width={32}
              height={32}
              src="/../livecourses/firstSection/subjectslogo1.svg"
            />
            <div className="relative ">Biology, Physics, Chemistry</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <Image
              className="relative max-md:hidden "
              alt=""
              width={32}
              height={32}
              src="/../livecourses/firstSection/calendar.svg"
            />
            <Image
              className="relative  md:hidden"
              alt=""
              width={32}
              height={32}
              src="/../livecourses/firstSection/calendar1.svg"
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
              <div className="   text-lg [text-decoration:line-through] lowercase font-medium text-crimson">
                {" "}
                ₹ 2,550
              </div>
              <div className="  text-sm">* offer valid until 21st June</div>
            </div>
          </div>
          <div className="rounded-2xl py-[17px]  max-md: px-[18px] items-center bg-[#00364E] ">
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

    // <Container fluid></Container>
  );
}
export default FirstSection;
