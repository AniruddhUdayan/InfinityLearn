"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeClass } from "@/store/newUserSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import ChooseClass from "./chooseClass";
import MobileVerification from "../mobileVerify/mobileVerification";
import { getExams } from "../../../services/userServics";
import { allowedExamNamesCT } from "../../../services/app.constants";
const course = [
  {
    id: 0,
    name: "IIT JEE",
    about: "for engineering aspirants",
    svg: "./iit.svg",
  },
  {
    id: 1,
    name: "NEET",
    about: "for medical aspirants",
    svg: "./medical.svg",
  },
  {
    id: 2,
    name: "CUET",
    about: "common university entrance",
    svg: "./cuet.svg",
  },
];

function Card(props) {
  const { data, isSelected, onClick } = props;
  console.log(data)
  return (
    <div
      className={`flex cursor-pointer p-2 border-2 rounded-xl items-center ${
        isSelected ? "bg-green-400 bg-opacity-25" : "bg-white"
      }`}
      onClick={onClick}
    >
      <Image src={data.svg} width={50} height={50} alt="card svg" />
      <div className="flex flex-col ml-4 flex-grow items-start justify-center">
        <div>{data.name}</div>
        <div>{data.description}</div>
      </div>
      <div
        className={`ml-4 w-6 h-6 flex items-center justify-center border rounded-full ${
          isSelected ? "bg-green-500" : "bg-white"
        }`}
      >
        {isSelected && <FaCheck color="white" />}
      </div>
    </div>
  );
}

function ChooseCourse({ handleBack }) {
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const userGrade = useSelector(
    (state) => state.newUser.class?.name?.replace(/[^0-9]/g, '')
  );
  const [exams, setExams] = useState([]);
  console.log(userGrade)
  useEffect(()=>{
    async function Exams() {
      try {
        const response = await getExams();
        const exams = await response?.filter(ex => {
          const isCBSE = ex?.name?.replace(/[^a-z]/ig, '').toUpperCase().includes("CBSE");
          if(isCBSE) {
            ex.displayName = "CBSE";
          }
          if(isCBSE){
            return (allowedExamNamesCT[userGrade]?.indexOf('CBSE') > -1 );
          }else{
            return (allowedExamNamesCT[userGrade]?.indexOf(ex?.name?.replace(/[^a-z]/ig, '').toUpperCase()) > -1 );
          }
        }).sort((a, b) => allowedExamNamesCT[userGrade]?.indexOf(a?.name?.replace(/[^a-z]/ig, '').toUpperCase())<allowedExamNamesCT[userGrade]?.indexOf(b?.name?.replace(/[^a-z]/ig, '').toUpperCase()) ? -1 : 1);
        setExams(exams)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
  
      }
    }
  
    Exams();
  
  },[userGrade])

  const dispatch = useDispatch();
  // const storeNameHandler = () => {
  //   dispatch(storeClass(name));
  // };
  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(true));
    return <MobileVerification />;
  };
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleClassClick = (course) => {
    if (selectedCourses.includes(course.name)) {
      setSelectedCourses((prevCourses) =>
        prevCourses.filter((c) => c !== course.name)
      );
    } else {
      setSelectedCourses((prevCourses) => [...prevCourses, course.name]);
    }
  };
  // function handleBack() {
  //   return <ChooseClass />;
  // }

  return (
    <div
      className={`fixed inset-0  max-md:flex-col max-md:z-50   bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white  max-md:w-screen max-md:rounded-none gap-10 max-md:h-screen flex p-8 rounded-xl justify-evenly relative">
        <Image
          src="../../../../public/login/newUser/newUser3.webp"
          height={400}
          width={400}
          alt="newUser-ver-1"
          className=" max-md:hidden"
        />
        <div className="flex flex-col justify-evenly text-black">
          <div className=" flex flex-col gap-3">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">
                every champion sets a{" "}
              </h2>
              <h2 className="text-2xl font-extrabold mb-4">
                {`goal. let's define yours`}
              </h2>
            </div>
            <div>
              <div className=" opacity-50 text-sm ">
                select learning goal (choose at least one)
              </div>
              <div className="grid grid-cols-1 gap-4 ">
                {exams.map((item, index) => (
                  <Card
                    key={index}
                    data={item}
                    isSelected={selectedCourses.includes(item.name)}
                    onClick={() => handleClassClick(item)}
                  />
                ))}
              </div>
            </div>
          </div>
          <button
            className={`mt-4 max-md:hidden p-2 rounded ${
              selectedCourses.length > 0
                ? "bg-blue-500 text-white"
                : "bg-blue-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedCourses.length === 0}
          >
            continue <span>&#8599;</span>
          </button>
        </div>
        <button
          onClick={handleToggleOverlay}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
        >
          <IoClose size={24} color="black" />
        </button>
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 p-2 hover:bg-gray-200 rounded-full"
        >
          <BiArrowBack size={24} color="black" />
        </button>
      </div>
      <footer className=" md:hidden flex border-opacity-20 justify-center  border-t-2  border-black h-20 w-full bg-white ">
        <button
          className={`mt-4 w-80 my-4 p-2 rounded ${
            selectedCourses.length > 0
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={handleToggleOverlay}
          disabled={selectedCourses.length === 0}
        >
          continue <span>&#8599;</span>
        </button>
      </footer>
    </div>
  );
}
export default ChooseCourse;
