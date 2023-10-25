"use client";
import expand from "./../../../../public/images/expand_more.svg";
import FacultyCard from "./FacultyCard";
import faculty1 from "./../../../../public/images/faculty1.webp";
import faculty2 from "./../../../../public/images/faculty2.webp";
import faculty3 from "./../../../../public/images/faculty3.webp";
import { Button, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./faculty.css";
import { GoArrowUpRight } from "react-icons/go";

const Faculty = ({ classFor, examFor }) => {
  const [progress, setProgress] = useState(0);
  const carousel = useRef(null);
  const carouselEle = useRef(null);

  const faculties = [
    {
      name: "Prerana AR",
      image: faculty1,
      headline: "10+ Years Teaching | NIT Nagpur",
      subject: "Maths",
      usp: "Taught 64 NEET Toppers",
    },
    {
      name: "Prerana AR",
      image: faculty2,
      headline: "10+ Years Teaching | NIT Nagpur",
      subject: "Maths",
      usp: "Taught 64 NEET Toppers",
    },
    {
      name: "Prerana AR",
      image: faculty3,
      headline: "10+ Years Teaching | NIT Nagpur",
      subject: "Maths",
      usp: "Taught 64 NEET Toppers",
    },
  ];

  const normalise = (value) => ((value - 0) * 100) / (faculties.length - 0);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const interval = setInterval(() => {
      if (progress === faculties.length - 1) {
        setProgress(0);
        carousel.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else if (progress === 0) {
        setProgress(progress + 1);
        if (
          carouselEle.current.offsetWidth <
          carousel.current.offsetWidth / 2
        ) {
          carousel.current.scrollTo({
            left:
              carousel.current.scrollLeft + carouselEle.current.offsetWidth / 2,
            behavior: "smooth",
          });
        } else {
          carousel.current.scrollTo({
            left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
            behavior: "smooth",
          });
        }
      } else {
        setProgress(progress + 1);
        carousel.current.scrollTo({
          left: carousel.current.scrollLeft + carouselEle.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [progress]);

  const scrollFacultiesLeft = () => {
    carousel.current.scrollTo({
      left: carousel.current.scrollWidth,
      behavior: "smooth",
    });
  };

  const scrollFacultiesRight = () => {
    carousel.current.scrollTo({
      left: -carousel.current.scrollWidth,
      behavior: "smooth",
    });
  };
  // <div style="width: 100%; height: 100%; text-align: center">
  //   <span style="color: #080E14; font-size: 48px; font-family: Poppins; font-weight: 700; line-height: 60px; word-wrap: break-word">
  //     Learn from the
  //   </span>
  //   <span style="color: #007BFF; font-size: 48px; font-family: Poppins; font-weight: 700; line-height: 60px; word-wrap: break-word">
  //     {" "}
  //     Best Faculty
  //   </span>
  // </div>;
  return (
    <div className="bg-[#F3F3F3] px-[112px] flex flex-col max-md:px9 items-center py-8 p-4 lg:p-10  lg:py-10 w-full">
      <div className=" text-[#080e14] fourthSectionHeading  ">
        Learn from the <span className="text-[#007BFF]">Best Faculty</span>
      </div>
      <div className="fourthSectionSubHeading">
        Our mentors are there with you at every step to help you create a
        personalised study plan for your success!
      </div>
      <div className="flex lg:hidden w-full max-lg:mb-[32px] gap-2 items-center mt-2">
        <div>01</div>
        <LinearProgress
          variant="determinate"
          value={normalise(progress + 1)}
          className="w-1/2"
        />
        <div>{faculties?.length}</div>
      </div>
      <div
        ref={carousel}
        className="flex gap-[1rem] mx-[112px]  justify-start no-scrollbar w-full  xl:overflow-x-hidden overflow-x-scroll snap-x lg:snap-none"
      >
        {faculties.map((f, i) => (
          <FacultyCard
            ref2={carouselEle}
            key={i}
            name={f?.name}
            image={f?.image}
            headline={f?.headline}
            subject={f?.subject}
            usp={f?.usp}
          />
        ))}
      </div>
      <button className=" mtt max-md:mt-7 max-md:h-[48px]  ">
        <div className="flex justify-center gap-2">
          <div className="mtt-test">meet the teachers</div>
          <div>
            <GoArrowUpRight size={24} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Faculty;
