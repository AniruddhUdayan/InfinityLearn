"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "../../store/mobVeriSlice";
import { setComponentToShow } from "../../store/modalToShow";
const options = [
  "personal attention",
  "india's top faculty",
  "focused doubt resolution",
  "best study resource",
  "rigorous study plan",
];
function OptionZero() {
  return (
    <div className="flex max-md:flex-grow   min-h-56   flex-col 4">
      <div className="text-4xl max-md:[32px] font-[700] text-black ">
        focused
      </div>
      <div className="text-4xl max-md:[32px]  font-[700] text-blue-500 mb-5 ">
        guidance
      </div>
      <div className="text-xl max-md:[14px] font-[400] text-black">
        Experience tailored guidance designed to cater to unique learning needs.
        We ensure every student receives the individual attention they deserve.
      </div>
      <div></div>
    </div>
  );
}
function OptionOne() {
  return (
    <div className="flex min-h-56  flex-col ">
      <div className="text-4xl text-black max-md:[32px]   font-[700]">
        learn from the
      </div>
      <div className="text-4xl text-blue-500 mb-5 font-[700]">experts</div>
      <div className="text-xl text-black max-md:[14px] font-[400]  ">
        learn from the finest faculty in jee/neet/cbse. our faculty consists of
        {` the country's most seasoned and insightful educators.`}
      </div>
    </div>
  );
}
function OptionTwo() {
  return (
    <div className="flex min-h-56  flex-col">
      <div className="text-4xl  max-md:[32px] text-black font-[700]">
        clear doubts,
      </div>
      <div className="text-4xl text-blue-500 mb-5 font-[700]">
        clear concepts
      </div>
      <div className="text-xl text-black max-md:[14px] font-[400] ">
        we prioritise understanding over rote learning. our dedicated doubt
        resolution sessions ensure all your queries are addressed for a clear
        path to success.
      </div>
    </div>
  );
}
function OptionThree() {
  return (
    <div className="flex 6 min-h-56  flex-col ">
      <div className="text-4xl max-md:[32px] text-black font-[700]">
        premium learning,
      </div>
      <div className="text-4xl text-blue-500 mb-5 font-[700]">guidance</div>
      <div className="text-xl text-black max-md:[14px] font-[400] ">
        gain access to top-notch learning resources. our study materials are
        meticulously curated by experts to provide comprehensive coverage of all
        topics.
      </div>
    </div>
  );
}
function OptionFour() {
  return (
    <div className="flex  min-h-56  flex-col ">
      <div className="text-4xl  max-md:[32px] text-black font-[700]">
        structured success
      </div>
      <div className="text-4xl text-blue-500 mb-5 font-[700]"> plan</div>
      <div className="text-xl text-black max-md:[14px] font-[400] ">
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

  const handleTabClick = (option, index) => {
    setSelectedTab(index);
    onTabChange && onTabChange(option, index);
  };

  return (
    <div className="bg-white md:hidden no-scrollbar text-black h-11 relative w-full">
      <div className="flex space-x-4 whitespace-nowrap overflow-x-auto">
        {data.map((option, index) => (
          <span
            key={index}
            className={`inline-flex items-center justify-center px-4 py-2 cursor-pointer ${
              index === selectedTab
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400"
            }`}
            onClick={() => handleTabClick(option, index)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

// export default SwitchTabs;

function ThirdSection() {
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const dispatch = useDispatch();
  const optionComponents = {
    0: <OptionZero />,
    1: <OptionOne />,
    2: <OptionTwo />,
    3: <OptionThree />,
    4: <OptionFour />,
  };

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
  const [svgWidth, setSvgWidth] = useState(590);
  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 768 ? 315 : 592);
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
    console.log(index);
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

  const startLearning = async () => {
    dispatch(setComponentToShow("SendOtp"));
    dispatch(showOverlayMode(!showOverlay));
  };
  return (
    <div className="items-center container no-scrollbar h-min py-16 bg-white">
      <div className="md:w-[70%] md:max-w-[1000px] max-md:w-full mx-auto flex flex-col">
        <div className="flex max-md:overflow-x-auto no-scrollbar  justify-evenly mb-10  w-full h-max relative">
          <SwitchTabs data={options} onTabChange={onTabChange} />
          {isMobileView && (
            <div className=" overflow-x-auto ">
              <SwitchTabs1 data={options} onTabChange={onTabChange} />
            </div>
          )}
        </div>
      </div>
      <div
        className="flex md:px-20  max-md:flex-col max-md:w-full  
       justify-between  items-center rowww"
      >
        <Image
          src="/homepage/thirdSection/thirdSection.png"
          height={svgWidth}
          width={svgWidth}
          alt="thirdSection"
          className="my-imag max-md:w-screen  md:w-1/2"
        />
        <div className=" flex md:w-1/2 md:pr-36 md:items-start items-center max-md:mt-8 max-md:ml-6 flex-col">
          <div className="optionContaier  max-md:h-[200px]">
            {[OptionZero, OptionOne, OptionTwo, OptionThree, OptionFour].map(
              (Component, index) => (
                <div
                  key={index}
                  style={{
                    display: selectedOption === index ? "flex" : "none",
                  }}
                >
                  <Component />
                </div>
              )
            )}
          </div>
          <div className=" w-full flex justify-center items-center">
            <button
              onClick={startLearning}
              className="text-white h-10 hover:space-x-2 w-60 max-md:w-80 hover:bg-blue-600 mt-8 bg-blue-500 rounded-2xl"
            >
              <div>
                start learning for free <span>&#8599;</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
