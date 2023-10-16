"use client";
import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import timeTable from "@/utils/timeTable";
function TimeTableCard(props) {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const handleToggleVisibility = (index) => {
    if (visibleIndexes.includes(index)) {
      // If index is in array, remove it
      setVisibleIndexes(visibleIndexes.filter((i) => i !== index));
    } else {
      // If index is not in array, add it
      setVisibleIndexes([...visibleIndexes, index]);
    }
    // setVisibleIndexes(!visibleIndexes);
  };

  return (
    <div className=" flex w-full  items-center max-md:items-start max-md:gap-0 max-md:justify-start  py-5 gap-12 justify-evenly ">
      <div className=" flex max-md:mr-4 max-md:w-1/5  flex-col">
        <div className=" text-2xl text-black font-light">{props.data.day}</div>
        <div className=" flex text-lg gap-1  opacity-50">
          <div>{props.data.id} </div>
          <div> {props.month}</div>
        </div>
      </div>
      <div className=" flex gap-12 max-md:gap5 justify-evenly w-full max-md:flex-col ">
        {props.data.class.map((item, index) => (
          // <div className=" flex ">
          <div
            key={index}
            className=" flex  bg-white max-md:h-full max-md:w-full max-md:gap-2 max-md:items-center  max-md:p-0 m p-4 w-1/2 rounded-2xl "
          >
            <div
              className={` relative ${
                item.subject === "Biology" ? " bg-[#8EC37A]" : ""
              } ${item.subject === "Physics" ? " bg-[#FFAD7A]" : ""}
            ${
              item.subject === "Chemistry" ? " bg-[#D85A6E]" : ""
            }  rounded-r-2xl top-2 right-4 h-16 ${
                visibleIndexes.includes(index) ? "max-md:h-18" : "max-md:h-9"
              }  max-md:right-0 max-md:top-0 max-md: w-2 `}
            ></div>
            <div className="flex w-full flex-col max-md:py-2  ">
              <div className=" flex max-md:gap-3 justify-start max-md:justify-evenly items-center my-2 ">
                <div className=" font-bold w-1/2 max-md:text-xl  max-md:w-fit  text-2xl">
                  {item.subject}
                </div>

                <div className=" max-md:text-sm opacity-60 max-md:w-fit  text-center w-1/2">
                  {item.time}
                </div>
                <div className=" md:hidden">
                  {visibleIndexes.includes(index) ? (
                    <BiChevronUp
                      size={30}
                      onClick={() => handleToggleVisibility(index)}
                    />
                  ) : (
                    <BiChevronDown
                      size={30}
                      onClick={() => handleToggleVisibility(index)}
                    />
                  )}
                </div>
              </div>
              <div
                className={`max-md:flex-col ${
                  visibleIndexes.includes(index) ? "flex" : "hidden"
                }  gap-5 text-lg items-center max-md:items-start max-md:gap-0`}
              >
                <div className=" font-thin">chapter {item.chapter}</div>
                <div className="">{item.about}</div>
              </div>
              <div
                className={`max-md:hidden flex  gap-5 text-lg items-center `}
              >
                <div className=" font-thin">chapter {item.chapter}</div>
                <div className="">{item.about}</div>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
const DateSelector = ({ onFromChange, onToDate }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const formatSelectedDate = (date) => {
    if (!date) return "";
    const options = { day: "numeric", month: "long" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleDateSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
    onFromChange(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
    onToDate(e.target.value);
    setIsOpen(false);
  };

  const getButtonLabel = () => {
    if (fromDate && toDate) {
      return `${formatSelectedDate(fromDate)} to ${formatSelectedDate(toDate)}`;
    }
    return "Select dates";
  };

  return (
    <div className="relative max-md:mt-[32px] z-30  max-md:w-full max-md:text-center inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleDateSelect}
          className={`inline-flex justify-between items-center w-[fit] rounded-2xl px-4 py-2 text-sm font-medium ${
            fromDate && toDate
              ? "bg-blue-500 bg-opacity-20 max-md:w-full border-blue-500 border-2 text-black"
              : "bg-white border-gray-300 text-gray-700"
          }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
        >
          {getButtonLabel()}
          <BiChevronDown size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2">
              <label
                htmlFor="fromDate"
                className="block text-sm font-medium text-gray-700"
              >
                From
              </label>
              <input
                type="date"
                id="fromDate"
                value={fromDate || ""}
                onChange={(e) => handleFromDateChange(e, setFromDate)}
                className="mt-1 p-1.5 rounded-md w-full border"
              />
            </div>
            <div className="px-4 py-2">
              <label
                htmlFor="toDate"
                className="block text-sm font-medium text-gray-700"
              >
                To
              </label>
              <input
                type="date"
                id="toDate"
                value={toDate || ""}
                onChange={(e) => handleToDateChange(e, setToDate)}
                className="mt-1 p-1.5 rounded-md w-full border"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function ThirdSection() {
  // const [selectedDates, setSelectedDates] = useState({
  //   fromDate: null,
  //   toDate: null,
  // });
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("9");
  const handleFromDate = (date) => {
    setSelectedFromDate(date);
  };
  const handleToDate = (date) => {
    setSelectedToDate(date);
  };
  console.log("nikal to", selectedToDate);
  console.log("nikal from", selectedToDate);
  const toMonth = selectedToDate ? new Date(selectedToDate).getMonth() : null;
  const fromMonth = selectedFromDate
    ? new Date(selectedFromDate).getMonth()
    : null;

  const fromDate = selectedFromDate
    ? new Date(selectedFromDate).getDate()
    : null;

  const toDate = selectedToDate ? new Date(selectedToDate).getDate() : null;
  // console.log(fromMonth, toMonth);
  // console.log(fromDate, toDate);
  const monthTimeTable = timeTable.find((item) => item.id == fromMonth + 1);
  console.log(monthTimeTable);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="p-16 max-md:mt-20 max-md:p-0  pb-32 px-32 max-md:mx-5  max-md:px-0  border-2">
      <div className=" font-[#080E14]  max-md:p-[20px]  h-min items-center p-8 rounded-xl bg-slate-200 flex flex-col">
        <div className="text-5xl flex max-md:mt-[32px] w-full max-md:justify-center mb-4 font-extrabold">
          schedule
        </div>
        <div className="flex text-[#52565B] text-lg font-[400]  max-md:text-[14px]  max-md:flex-col max-md:mt-[32px]   w-full items-center mb-8 justify-between">
          <div className=" max-md:text-center  ">
            syllabus will be completed by
            <span className="font-[600]"> 12 Dec, 2023</span>
            <span className=" max-md:hidden">
              after which revision will commence.
            </span>
          </div>
          <div className="md:hidden">after which revision will commence.</div>
          <DateSelector onFromChange={handleFromDate} onToDate={handleToDate} />
        </div>

        {monthTimeTable?.schedule.map((item, index) => (
          <TimeTableCard data={item} key={index} month={"Oct"} />
        ))}

        {selectedFromDate && selectedToDate && (
          <button className=" max-md:text-center relative top-8 left-5 mt5 font-semibold text-blue-500 flex items-center">
            view more <BiChevronDown />
          </button>
        )}
        <div className=" relative top-24 py-12 max-md:py-7  rounded-3xl w-full h-min items-center flex gap-9 flex-col bg-[#00364E]">
          <div className=" text-4xl max-md:text-3xl  font-bold max-md:w-full max-md:text-center text-white">
            need help with{" "}
            <span className=" text-yellow-300">your study plan</span>
          </div>
          <button className=" max-md:text-2xl w-80 bg-blue-500 text-white px-8  rounded-xl p-3">
            <div className=" font-semibold">
              let's plan together<span>&#8599;</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
