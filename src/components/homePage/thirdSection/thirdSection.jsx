"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import "./thirdSection.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "../../../store/mobVeriSlice";
import { setComponentToShow } from "../../../store/modalToShow";
const options = [
  "personal attention",
  "india's top faculty",
  "focused doubt resolution",
  "best study resource",
  "rigorous study plan",
];
function OptionZero() {
  return (
    <div className={styles.option}>
      <div className={styles.optionHead1}>focused</div>
      <div className={styles.optionHead2}>guidance</div>
      <div className={styles.optionInfo}>
        Experience tailored guidance designed to cater to unique learning needs.
        We ensure every student receives the individual attention they deserve.
      </div>
    </div>
  );
}

function OptionOne() {
  return (
    <div className={styles.option}>
      <div className={styles.optionHead1}>learn from the</div>
      <div className={styles.optionHead2}>experts</div>
      <div className={styles.optionInfo}>
        Learn from the finest faculty in JEE/NEET/CBSE. Our faculty consists of
        the country's most seasoned and insightful educators.
      </div>
    </div>
  );
}

function OptionTwo() {
  return (
    <div className={styles.option}>
      <div className={styles.optionHead1}>clear doubts,</div>
      <div className={styles.optionHead2}>clear concepts</div>
      <div className={styles.optionInfo}>
        We prioritise understanding over rote learning. Our dedicated doubt
        resolution sessions ensure all your queries are addressed for a clear
        path to success.
      </div>
    </div>
  );
}

function OptionThree() {
  return (
    <div className={styles.option}>
      <div className={styles.optionHead1}>premium learning,</div>
      <div className={styles.optionHead2}>guidance</div>
      <div className={styles.optionInfo}>
        Gain access to top-notch learning resources. Our study materials are
        meticulously curated by experts to provide comprehensive coverage of all
        topics.
      </div>
    </div>
  );
}

function OptionFour() {
  return (
    <div className={styles.option}>
      <div className={styles.optionHead1}>structured success</div>
      <div className={styles.optionHead2}>plan</div>
      <div className={styles.optionInfo}>
        Follow a structured study plan designed for assured success in JEE NEET
        academics. Our test series and question bank are crafted to boost exam
        readiness.
      </div>
    </div>
  );
}

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [underlineStyles, setUnderlineStyles] = useState({
    left: "0px",
    width: "0px",
  });

  const tabsRefs = useRef([]);

  useLayoutEffect(() => {
    if (tabsRefs.current[0]) {
      setUnderlineStyles({
        left: "0px",
        width: `${tabsRefs.current[0].offsetWidth}px`,
      });
    }
  }, []);

  const activeTab = (tab, index, e) => {
    setSelectedTab(index);
    setUnderlineStyles({
      left: `${e.currentTarget.offsetLeft}px`,
      width: `${e.currentTarget.offsetWidth}px`,
    });
    onTabChange && onTabChange(tab, index);
  };

  return (
    <div className={`${styles.switchTabs1Container}`}>
      {data.map((tab, index) => (
        <span
          key={index}
          ref={(el) => (tabsRefs.current[index] = el)}
          className={`${styles.switchTab1Item} ${
            selectedTab === index ? styles.active : ""
          }`}
          onClick={(e) => activeTab(tab, index, e)}
        >
          {tab}
        </span>
      ))}
      <div
        className={styles.switchTab1underlineItem}
        style={underlineStyles}
      ></div>
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
        className="flex space-x-4  whitespace-nowrap overflow-x-auto"
      >
        {data.map((option, index) => (
          <span
            key={index}
            className={`inline-flex mx-[16px]  items-center justify-center px-2 py-2 cursor-pointer ${
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
  const [svgWidth, setSvgWidth] = useState(524);
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
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  const windowWidth = useWindowWidth();
  const isMobileView =
    typeof windowWidth !== "undefined" && windowWidth <= 1023;
  // console.log(windowWidth, "jvmjv", isMobileView);

  const startLearning = async () => {
    dispatch(setComponentToShow("SendOtp"));
    dispatch(showOverlayMode(!showOverlay));
  };
  return (
    <div className={styles.thirdSectionWrapper}>
      <div className={`${styles.switchTabs1Wrapper}   no-scrollbar `}>
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
      <div className={` ${styles.thirdSection} no-scrollbar `}>
        <div className={styles.thirdSectionContentWrapper}>
          <Image
            src="/thirdSection1.png"
            height={svgWidth}
            width={svgWidth}
            alt="thirdSection"
            className=" max-md:w-screen  md:w-1/2"
          />
          <div className={styles.thirdSectionContent}>
            <div>
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

            <button
              onClick={startLearning}
              className={` ${styles.sLFFButton}  hover:space-x-2  hover:bg-blue-600`}
            >
              start learning for free <span className=" ml-[8px]">&#8599;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
