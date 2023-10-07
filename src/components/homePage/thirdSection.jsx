"use client";
import React, { useState, useEffect } from "react";

const options = [
  "personal attention",
  "india's top faculty",
  "focused doubt resolution",
  "best study resource",
  "rigorous study plan",
];
function OptionZero() {
  return (
    <div className="flex max-md:flex-grow     flex-col 4">
      <div className="text-4xl text-black font-bold">focused</div>
      <div className="text-4xl text-blue-500 mb-5 font-bold">guidance</div>
      <div className="text-xl text-black max-md:text-base font-thin">
        Experience tailored guidance designed to cater to unique learning needs.
        We ensure every student receives the individual attention they deserve.
      </div>
      <div></div>
    </div>
  );
}
function OptionOne() {
  return (
    <div className="flex   flex-col ">
      <div className="text-4xl text-black font-bold">learn from the</div>
      <div className="text-4xl text-blue-500 mb-5 font-bold">experts</div>
      <div className="text-xl text-black max-md:text-base font-thin">
        learn from the finest faculty in jee/neet/cbse. our faculty consists of
        the country's most seasoned and insightful educators.
      </div>
    </div>
  );
}
function OptionTwo() {
  return (
    <div className="flex   flex-col">
      <div className="text-4xl text-black font-bold">clear doubts,</div>
      <div className="text-4xl text-blue-500 mb-5 font-bold">
        clear concepts
      </div>
      <div className="text-xl text-black max-md:text-base font-thin">
        we prioritise understanding over rote learning. our dedicated doubt
        resolution sessions ensure all your queries are addressed for a clear
        path to success.
      </div>
    </div>
  );
}
function OptionThree() {
  return (
    <div className="flex 6  flex-col ">
      <div className="text-4xl text-black font-bold">premium learning,</div>
      <div className="text-4xl text-blue-500 mb-5 font-bold">guidance</div>
      <div className="text-xl text-black max-md:text-base font-thin">
        gain access to top-notch learning resources. our study materials are
        meticulously curated by experts to provide comprehensive coverage of all
        topics.
      </div>
    </div>
  );
}
function OptionFour() {
  return (
    <div className="flex   flex-col ">
      <div className="text-4xl text-black font-bold">structured success</div>
      <div className="text-4xl text-blue-500 mb-5 font-bold"> plan</div>
      <div className="text-xl text-black max-md:text-base font-thin">
        follow a structured study plan designed for assured success in jee neet
        academics. our test series and question bank are crafted to boost exam
        readiness.
      </div>
    </div>
  );
}
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    setLeft(index * 200);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div className=" max-md:hidden bg-white  text-black  ">
        <div className=" h-full mt-1 flex items-center relative">
          {data.map((tab, index) => (
            <span
              key={index}
              className={`h-full px-1 text-center text-base cursor-pointer   mt-2 justify-center items-center
              ${selectedTab == index ? " text-black" : ""}  `}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 200 }}
            >
              {tab}
            </span>
          ))}
          <span
            className=" border-b-2   border-blue-500 text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500  mt-2"
            style={{ left, height: 30, width: 190 }}
          ></span>
        </div>
      </div>
    </div>
  );
};

const SwitchTabs1 = ({ onTabChange, data = options }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabWidth = 100; // Assume each tab has a width of 100px
  const gap = 100; // Assume a 10px gap between tabs
  const containerWidth = window.innerWidth; // Assume the container takes up the whole window width

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedTab((prev) => (prev + 1) % data.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  useEffect(() => {
    onTabChange && onTabChange(data[selectedTab], selectedTab);
  }, [selectedTab, onTabChange, data]);

  return (
    <div className="bg-white md:hidden text-black h-11 relative overflow-hidden w-full flex justify-center">
      <div
        style={{
          transform: `translateX(-${
            selectedTab * (tabWidth + gap) -
            containerWidth / 2 +
            (tabWidth / 2 + gap)
          }px)`,
          transition: "transform 1s ease",
          whiteSpace: "nowrap",
          display: "flex",
        }}
      >
        {data.map((option, index) => (
          <span
            key={index}
            className={`inline-block px-4 w-full text-center ${
              index === selectedTab
                ? "text-blue-500 border-blue-500 border-b-2"
                : "text-gray-400"
            } hover:cursor-pointer`}
            style={{ width: `${tabWidth}px`, marginRight: `${gap}px` }}
            onClick={() => setSelectedTab(index)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

function ThirdSection() {
  const optionComponents = {
    0: <OptionZero />,
    1: <OptionOne />,
    2: <OptionTwo />,
    3: <OptionThree />,
    4: <OptionFour />,
  };
  const [svgWidth, setSvgWidth] = useState(500);

  const useWindowWidth = () => {
    // Initialize state with undefined so server and client HTML match
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
      // Handler to call on window resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set width on client side
      handleResize();

      // Set resize event listener
      window.addEventListener("resize", handleResize);

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty array means effect is run on mount and unmount

    return windowWidth;
  };

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 315 : 500);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const [selectedOption, setSelectedOption] = useState(0);

  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab, index) => {
    setSelectedOption(index);
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const handleClick = (index) => {
    setSelectedOption(index);
  };
  const windowWidth = useWindowWidth();
  const isMobileView = typeof windowWidth !== "undefined" && windowWidth <= 768;

  const borderPosition = {
    transform: `translateX(-${(100 / options.length) * selectedOption}%)`,
  };

  return (
    <div className="items-center min-h-screen py-16 bg-white">
      <div className="md:w-[70%] md:max-w-[1000px] max-md:w-full mx-auto flex flex-col">
        <div className="flex max-md:overflow-x-auto no-scrollbar  justify-evenly mb-10  w-full h-max relative">
          <SwitchTabs data={options} onTabChange={onTabChange} />
          {isMobileView && (
            // <div className="">
            <SwitchTabs1 data={options} onTabChange={onTabChange} />
            // </div>
          )}
        </div>
      </div>
      <div className="flex md:px-20  max-md:flex-col max-md:w-full   justify-between  items-center rowww">
        <img
          src="/homePage/thirdSection/thirdSection.png"
          height={svgWidth}
          width={svgWidth}
          alt="thirdSection"
          className="my-image  md:w-1/2"
        />
        <div className=" flex md:w-1/2 md:pr-36 md:items-start items-center max-md:mt-8 max-md:ml-6 flex-col">
          {optionComponents[selectedOption]}
          <button className="text-white h-10 hover:space-x-2 w-60 max-md:w-80 hover:bg-blue-600 mt-8 bg-blue-500 rounded-2xl">
            <div>
              start learning for free <span>&#8599;</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
