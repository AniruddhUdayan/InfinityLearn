"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import "./thirdSection.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "../../../store/mobVeriSlice";
import { setComponentToShow } from "../../../store/modalToShow";
const options = [
  "overview",
  "learn with live classes",
  "revise with recordings",
  "practice with test series",
  "master with books",
];
const arr = [
  {
    id: 0,
    heading: "all-rounder Learning!",
    content: [
      "1000+ hrs live classes",
      "3000+ hrs recorded content",
      "AITS - 24 Tests in All-India Test Series",
      "Comprehensive Sri Chaitanya Books",
    ],
  },
  // {
  //   id: 1,
  //   heading: " Strong Conceptual Understanding        ",
  //   content: [],
  // },
];
function OptionZero() {
  return (
    <div className="option">
      <div className="option-head1">all-rounder </div>
      <div className=" option-head2">learning!</div>
      <ul className=" ">
        {arr[0].content.map((item, index) => (
          <li key={index} className="flex mb-[21px] gap-[16px]">
            <Image src="/../tick.svg" height={25} width={25} alt="third" />
            <div>{item}</div>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
function OptionOne() {
  return (
    <div className="option ">
      <div className="option-head1">Strong Conceptual </div>
      <div className="option-head2">Understanding</div>
      <div className="option-info ">
        {`1000+ hrs of live classes by India's top faculty to make sure you
        understand the concepts in-depth and remember them for a lifetime.`}
      </div>
    </div>
  );
}
function OptionTwo() {
  return (
    <div className="option">
      <div className="option-head1"> Learn anytime,</div>
      <div className="option-head2"> anywhere </div>
      <div className="option-info ">
        Your JEE/NEET journey is unique, learn at your own pace from the video
        lessons crafted by the expert faculty.
      </div>
    </div>
  );
}

function OptionThree() {
  return (
    <div className="option ">
      <div className="option-head1"> Be exam-ready </div>
      <div className="option-head2 "> plan</div>
      <div className="option-info ">
        Our All-India Test Series (AITS) tailored to JEE/NEET pattern preps you
        for the actual examination.
      </div>
    </div>
  );
}
function OptionFour() {
  return (
    <div className="option ">
      <div className="option-head1"> A must have ! </div>
      <div className="option-head2 ">study material</div>
      <div className="option-info ">
        Sri Chaitanya books are the most preferred study material by JEE/NEET
        aspirants. Make sure you make the most of it and cover all important
        topics.
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
    <div className=" bg-white text-black relative">
      <div className="h-full mt-1 whitespace-nowrap  flex items-center">
        {data.map((tab, index) => (
          <span
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`h-full w-full px-4  text-center text-base cursor-pointer 
            ${selectedTab === index ? "text-black" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="border-b-2 bg-black border-blue-500 absolute bottom-0 transition-all duration-500"
          style={{ left, width: widths[selectedTab] }}
        ></span>
      </div>
    </div>
  );
};

const SwitchTabs1 = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const containerRef = useRef(null);

  const handleTabClick = (option, index) => {
    setSelectedTab(index);
    onTabChange && onTabChange(option, index);

    // Ensure the container is available and has been rendered
    if (containerRef.current) {
      const container = containerRef.current;
      const clickedTab = container.children[index];

      // Calculate the scroll position required to center the clicked tab
      const halfContainerWidth = container.offsetWidth / 2;
      const halfTabWidth = clickedTab.offsetWidth / 2;
      const containerPadding = parseFloat(
        window.getComputedStyle(container).paddingLeft
      );

      const scrollLeft =
        clickedTab.offsetLeft +
        halfTabWidth -
        halfContainerWidth -
        containerPadding;

      // Update the container's scroll position
      container.scrollLeft = scrollLeft;
    }
  };

  return (
    <div className="bg-white no-scrollbar text-black h-11 relative w-screen">
      <div
        ref={containerRef}
        className="flex space-x-4 whitespace-nowrap overflow-x-auto"
      >
        {data.map((option, index) => (
          <span
            key={index}
            className={`inline-flex items-center justify-center px-2 py-2 cursor-pointer ${
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
  const [svgWidth, setSvgWidth] = useState(592);
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
    // console.log(index);
  };
  const handleClick = (index) => {
    setSelectedOption(index);
  };
  const windowWidth = useWindowWidth();
  const isMobileView =
    typeof windowWidth !== "undefined" && windowWidth <= 1023;
  // console.log(windowWidth, "jvmjv", isMobileView);
  const borderPosition = {
    transform: `translateX(-${(100 / options.length) * selectedOption}%)`,
  };

  const startLearning = async () => {
    dispatch(setComponentToShow("SendOtp"));
    dispatch(showOverlayMode(!showOverlay));
  };
  return (
    <div className=" ST">
      <div className=" sT   no-scrollbar   relative">
        {isMobileView && (
          <div className=" mx-auto overflow-x-auto ">
            <SwitchTabs1 data={options} onTabChange={onTabChange} />
          </div>
        )}
        {!isMobileView && (
          <div>
            <SwitchTabs data={options} onTabChange={onTabChange} />
          </div>
        )}
      </div>
      <div className=" items-center thirdSection-lc min-h-[118px] container no-scrollbar ">
        <Image
          src="/livecourses/secondSection/thirdSectionres.webp"
          height={svgWidth}
          width={svgWidth}
          alt="thirdSection"
          className="ires"
        />
        <div className="thirdSection-fc  rowww">
          <div className=" thirdsection-content  items-end  ">
            <div className="  max-md:h-max">
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
          </div>

          <Image
            src="/homepage/thirdSection/thirdSection.webp"
            height={svgWidth}
            width={svgWidth}
            alt="thirdSection"
            className=" i-large max-md:w-screen  md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
