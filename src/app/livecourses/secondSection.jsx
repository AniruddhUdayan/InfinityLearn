"use client";
import React, { useState, useRef, useEffect } from "react";

const options = [
  "overview",
  "learn with live classes",
  "revise with recordings",
  "practice mock test",
  "study with IL books",
];
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const [widths, setWidths] = useState([]);
  const tabsRef = useRef([]);
  const activeTab = (tab, index) => {
    setLeft(calculateLeftPosition(index));
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  const calculateLeftPosition = (index) => {
    return widths.slice(0, index).reduce((acc, w) => acc + w, 0);
  };

  useEffect(() => {
    setWidths(tabsRef.current.map((tab) => tab.offsetWidth));
  }, [data]);

  return (
    <div className="max-md:hidden bg-white text-black relative">
      <div className="h-full mt-1 whitespace-nowrap  flex items-center">
        {data.map((tab, index) => (
          <span
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`h-full w-full   fle-grow px-4  text-center text-base cursor-pointer 
            ${selectedTab === index ? "text-black" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="border-b-2 border-blue-500 absolute bottom-0 transition-all duration-500"
          style={{ left, width: widths[selectedTab] }}
        ></span>
      </div>
    </div>
  );
};

const SwitchTabs1 = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const tabsRef = useRef([]);

  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);

    // Update highlight style
    const { offsetLeft, offsetWidth } = tabsRef.current[index];
    setHighlightStyle({ left: offsetLeft, width: offsetWidth });

    // Ensure the selected tab scrolls into view in the center
    tabsRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  //Add refs dynamically
  useEffect(() => {
    tabsRef.current = tabsRef.current.slice(0, data.length);
  }, [data]);

  // Automatic tab switching
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextTab = (selectedTab + 1) % data.length; // Cycle through tabs
      activeTab(data[nextTab], nextTab);
    }, 2000); // Switch tab every 2 seconds

    return () => clearInterval(intervalId); // Cleanup: clear interval on unmount
  }, [selectedTab, data]);

  return (
    <div className="bg-white text-black relative overflow-x-auto">
      <div className="h-full mt-1 no-scrollbar flex items-center whitespace-nowrap">
        {data.map((tab, index) => (
          <span
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`h-full px-4 py-2 text-center text-base cursor-pointer 
                        ${selectedTab === index ? "text-black" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="border-b-2 border-blue-500 absolute bottom-0 transition-all duration-500"
          style={highlightStyle}
        ></span>
      </div>
    </div>
  );
};
function SecondSection() {
  const [selectedOption, setSelectedOption] = useState(0);

  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const handleClick = (index) => {
    setSelectedOption(index);
  };

  const borderPosition = {
    transform: `translateX(-${(100 / options.length) * selectedOption}%)`,
  };
  return (
    <div className="items-center min-h-screen py-16 bg-white">
      <div className="w-[70%] max-w-[1000px] mx-auto flex flex-col">
        <div className="flex justify-evenly mb-10 space-x-16 w-full h-max relative">
          <SwitchTabs data={options} onTabChange={onTabChange} />
        </div>
      </div>
      <div className="flex justify-evenly max-md:flex-col max-md:ml-0  mx-auto ml-9 max-md:items-start  items-center">
        <div className=" md:hidden mb-7">
          <img
            src="./livecourses/secondSection/image1.svg"
            height={530}
            width={700}
            alt="thirdSection"
          />
        </div>
        <div className="flex pl-10 max-md:pl-8 flex-col">
          <div className="text-5xl text-black font-extrabold">all-rounder </div>
          <div className="text-5xl text-blue-500 mb-5 font-extrabold">
            learning!
          </div>
          <div className="text-base ml-auto max-md:ml-0 gap-5 text-black font-thin flex flex-col">
            <div> 1000+ hrs live classes </div>
            <div> 3000+ hrs recorded content</div>
            <div> AITS - 24 biweekly mock tests</div>
            <div> world class IL books</div>
          </div>
        </div>
        <img
          src="./livecourses/secondSection/image1.svg"
          height={530}
          width={600}
          alt="thirdSection"
          className="my-image max-md:hidden"
        />
      </div>
    </div>
  );
}
export default SecondSection;
