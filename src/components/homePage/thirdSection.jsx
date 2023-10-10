"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
      <div className="text-xl text-black max-md:text-base">
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
      <div className="text-xl text-black max-md:text-base ">
        learn from the finest faculty in jee/neet/cbse. our faculty consists of
        {` the country's most seasoned and insightful educators.`}
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
      <div className="text-xl text-black max-md:text-base ">
        we prioritise understanding over rote learning. our dedicated doubt
        resolution sessions ensure all your queries are addressed for a clear
        path to success.
      </div>
    </div>
  );
}
function OptionThree() {
  return (
    <div className="flex 6 min-h-64  flex-col ">
      <div className="text-4xl text-black font-bold">premium learning,</div>
      <div className="text-4xl text-blue-500 mb-5 font-bold">guidance</div>
      <div className="text-xl text-black max-md:text-base ">
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
      <div className="text-xl text-black max-md:text-base ">
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
    <div className="items-center h-min py-16 bg-white">
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
        <Image
          src="/homepage/thirdSection/thirdSection.png"
          height={svgWidth}
          width={svgWidth}
          alt="thirdSection"
          className="my-image  md:w-1/2"
        />
        <div className=" flex md:w-1/2 md:pr-36 md:items-start items-center max-md:mt-8 max-md:ml-6 flex-col">
          <div className="optionContainer">
            {selectedOption === 0 && <OptionZero />}
            {selectedOption === 1 && <OptionOne />}
            {selectedOption === 2 && <OptionTwo />}
            {selectedOption === 3 && <OptionThree />}
            {selectedOption === 4 && <OptionFour />}
            {/* ... other options ... */}
          </div>
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
