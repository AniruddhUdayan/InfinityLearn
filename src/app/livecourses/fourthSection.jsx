"use client";
import React from "react";
import Image from "next/image";
function TopperIcon({
  width = 12,
  height = 16,
  fill = "#169C38",
  stroke = "#D6F4DE",
  strokeWidth = 0.2,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.40156 8.75313L5.00313 6.85313L3.42188 5.61979H5.38125L6 3.75313L6.61875 5.61979H8.57812L6.97969 6.85313L7.58125 8.75313L6 7.56979L4.40156 8.75313ZM1.875 14.9531V9.80313C1.43958 9.33646 1.10156 8.80313 0.860938 8.20312C0.620313 7.60313 0.5 6.96424 0.5 6.28646C0.5 4.79757 1.03281 3.53646 2.09844 2.50313C3.16406 1.46979 4.46458 0.953125 6 0.953125C7.53542 0.953125 8.83594 1.46979 9.90156 2.50313C10.9672 3.53646 11.5 4.79757 11.5 6.28646C11.5 6.96424 11.3797 7.60313 11.1391 8.20312C10.8984 8.80313 10.5604 9.33646 10.125 9.80313V14.9531L6 13.6198L1.875 14.9531ZM6 10.2865C7.14583 10.2865 8.11979 9.89757 8.92188 9.11979C9.72396 8.34201 10.125 7.39757 10.125 6.28646C10.125 5.17535 9.72396 4.2309 8.92188 3.45312C8.11979 2.67535 7.14583 2.28646 6 2.28646C4.85417 2.28646 3.88021 2.67535 3.07812 3.45312C2.27604 4.2309 1.875 5.17535 1.875 6.28646C1.875 7.39757 2.27604 8.34201 3.07812 9.11979C3.88021 9.89757 4.85417 10.2865 6 10.2865ZM3.25 12.9698L6 12.2865L8.75 12.9698V10.9031C8.34896 11.1253 7.91641 11.3003 7.45234 11.4281C6.98828 11.5559 6.50417 11.6198 6 11.6198C5.49583 11.6198 5.01172 11.5559 4.54766 11.4281C4.08359 11.3003 3.65104 11.1253 3.25 10.9031V12.9698Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
const teacher = [
  {
    id: 0,
    name: "Prerana AR",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "livecourses/fourthSection/teachers/image1.svg",
  },
  {
    id: 1,
    name: "Anirudh",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "./livecourses/fourthSection/teachers/image2.svg",
  },
  {
    id: 2,
    name: "Aparna",
    college: "NIT Nagpur",
    experience: "10 + years teaching",
    subject: "Maths",
    aluminiTaught: "taught 64 NEET Toppers",
    image: "./livecourses/fourthSection/teachers/image3.svg",
  },
];
function Card(props) {
  return (
    <div className=" shadow-md py-2 p-2 rounded-3xl gap-3  bg-white flex flex-col w-1/3 text-black items-center">
      <Image src={props.data.image} height={310} width={370} alt="teacher" />
      <div className="tracking-wide text-xl font-bold ">{props.data.name}</div>
      <div className=" font-light gap-2 tracking-wide flex">
        <div className=" border-r-2 border-opacity-40 border-black px-2 ">
          {props.data.experience}
        </div>
        <div className=" ">{props.data.college}</div>
      </div>
      <div className=" flex items-center gap-2 mb-3">
        <div className=" text-[#FF7A00] bg-[#FF7A00] border-[#FF7A00] rounded-xl bg-opacity-30 p-2 text-sm border-2 bg-">
          {props.data.subject}
        </div>
        <div className=" text-[#169C38] bg-[#169C38] border-[#169C38] bg-opacity-30 p-1 rounded-xl items-center gap-2 flex  border-2 bg-">
          <div>
            <TopperIcon />
          </div>
          <div>{props.data.aluminiTaught}</div>
        </div>
      </div>
    </div>
  );
}
function FourthSection() {
  return (
    <div className=" flex flex-col bg-gray-100 items-center py-8">
      <div className=" text-4xl mb-12 text-black  text-center font-extrabold">
        faculty
      </div>
      <div className=" px-28 gap-6 mb-6 flex mx-auto">
        {/* <Card data={teacher[0]} />
        <Card data={teacher[1]} />
        <Card data={teacher[2]} /> */}
        {teacher.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <button className=" w-80  text-black px-8 border-2 border-gray-300  rounded-xl p-3">
        <div className=" font-semibold">
          meet the teachers <span className=" ml-5 items-center">&#8599;</span>
        </div>
      </button>
    </div>
  );
}
export default FourthSection;
