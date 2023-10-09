"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeClass } from "@/store/newUserSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import ChooseCourse from "./chooseCourse";
import { BiArrowBack } from "react-icons/bi";
import { getGrades } from "../../../services/userServics";
const std = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "12+",
];
function ChooseClass({ handleBack }) {
    const [grades, setGrades] = useState([]);
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(()=>{
    async function Grades() {
      try {
        const response = await getGrades();
        response.map(g=>{
          g.name = g?.name == '13th' ? '12+' : g?.name?.replace(/[^0-9]/g, '');
        })
        console.log(response);
        setGrades(response)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {

      }
    }

    Grades();

  },[])

  const handleClassClick = (stdClass) => {
    setSelectedClass(stdClass);
    dispatch(storeClass(stdClass));
  };
  const [showCourse, setShowCourse] = useState(false);

  const dispatch = useDispatch();
  // const storeNameHandler = () => {
  //   dispatch(storeClass(name));
  // };
  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };
  const handleToggleOverlay1 = () => {
    dispatch(showOverlayMode(!showOverlay));
    setShowCourse(false);
  };
  const handleContinue = () => {
    if (selectedClass) {
      setShowCourse(true);
    }
  };

  if (showCourse) {
    // console.log("nikla");
    return <ChooseCourse handleBack={handleToggleOverlay1} />;
  }
  const handleHideCourse = () => {
    console.log("clicked ");
    setShowCourse(false);
  };

  function handleBack1() {}

  return (
    <div>
      {showCourse ? (
        <ChooseCourse handleBack={handleHideCourse} />
      ) : (
        <div
          className={`fixed max-md:h-screen inset-0 max-md:z-50   bg-black bg-opacity-50 flex max-md:flex-col items-center justify-center`}
        >
          <div className="bg-white gap-10  flex p-8 max-md:h-screen max-md:rounded-none rounded-xl justify-evenly relative">
            <Image
              src="/login/newUser/newUser2.png"
              height={400}
              width={400}
              className=" max-md:hidden"
              alt="newUser-ver-1"
            />
            <div className="flex flex-col justify-evenly text-black">
              <div className=" flex flex-col max-md:gap-8 gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold mb-2">
                    every champion sets a{" "}
                  </h2>
                  <h2 className="text-2xl font-extrabold mb-4">
                    {`goal. let's define yours`}
                  </h2>
                </div>
                <div>
                  <div className=" opacity-50 text-sm ">select class</div>
                  <div className="grid grid-cols-5 gap-4 ">
                    {grades.map((item, index) => (
                      <div
                        key={index}
                        className={`border rounded-lg p-3 items-center   cursor-pointer hover:bg-gray-200 ${
                          selectedClass === item ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => handleClassClick(item)}
                      >
                        <span className="mx-auto max-md:ml-1 ">{item?.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className={`mt-4 p-2 max-md:hidden rounded bg-blue-500 text-white ${
                  !selectedClass ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!selectedClass}
                onClick={handleContinue}
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
              className={`mt-4 p-2 w-80 mb-4  rounded-xl bg-blue-500 text-white ${
                !selectedClass ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedClass}
              onClick={handleContinue}
            >
              continue <span>&#8599;</span>
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
export default ChooseClass;
