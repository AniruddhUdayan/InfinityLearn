"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, InputBase } from "@mui/material";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "../css/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  showOverlayMode,
  storePhoneNumber,
  setIsExitingUser,
} from "../../../store/mobVeriSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { verifyPhone, sendOtp } from "../../../services/userServics";
import analytics from "../../../utils/analytics";
import { setComponentToShow } from "../../../store/modalToShow";
const words = ["learning", "academic"];
const duration = 2000; // Duration in milliseconds for each word
const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});
import "./firstSection.css";
function WordSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimating(true);
      }, 1000); // waits for the animation to complete
    }, duration + 1000); // adds the animation duration to the waiting duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.firstSctionHeadTextModifiedContainer}>
      <div
        className={
          animating
            ? styles.firstSctionHeadTextModifiedWordEntering
            : styles.firstSctionHeadTextModifiedWordExiting
        }
      >
        {words[currentIndex]}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className={styles.statsMobile}>
      <div className="stats-div1  ">
        <div className="text-left font-[400] text-[12px] ">learners</div>
        <div className="font-[600] text-[18px] text-left">50k+</div>
      </div>
      <div className="border-r-2 border-[#007BFF] opacity-20 h-full " />
      <div className="  flex text-left flex-col">
        <div className="text-left font-[400] text-[12px]  ">cities</div>
        <div className="font-[600] text-[18px]  text-left">60k+</div>
      </div>
      <div className="border-r-2 border-[#007BFF] opacity-20 h-full" />
      <div className="  text-left flex flex-col">
        <div className="text-left font-[400] text-[12px]  flex    flex-grow">
          <div className=" mr-1">classes</div> conducted
        </div>
        <div className="font-[600] text-[18px]  text-start">9200+</div>
      </div>
    </div>
  );
}
function FirstSection() {
  const [query, setQuery] = useState("");
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const [svgWidth, setSvgWidth] = useState(490);
  const [svgHeight, setSvgHeight] = useState(606);

  const updateWidth = () => {
    setSvgWidth(window.innerWidth <= 769 ? 300 : 490);
    setSvgHeight(window.innerWidth <= 769 ? 250 : 606);
  };
  useEffect(() => {
    // Update width on mount
    updateWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (/^\d+$/.test(e.target.value) && e.target.value.length <= 10) {
      setQuery(e.target.value);
    }
  };

  const handleToggleOverlay = async () => {
    if (query.length === 10) {
      dispatch(storePhoneNumber(query));
      let body = {
        isdCode: "+91",
        phone: query,
      };
      try {
        const userData = await verifyPhone(body);
        dispatch(setIsExitingUser(userData?.existingUser));
        analytics.track("otp_count", {
          phone: query,
          whatsapp_consent: false,
        });
        if (userData?.existingUser) {
          sentOtp();
        } else {
          dispatch(setComponentToShow("EnterName"));
          dispatch(showOverlayMode(!showOverlay));
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
      }
    } else {
      console.error("Phone number should be 10 digits!");
    }
  };
  const sentOtp = async () => {
    let body = {
      isdCode: "+91",
      phone: query,
    };
    try {
      const response = await sendOtp(body);
      console.log(response);
      dispatch(setComponentToShow("OtpVerification"));
      dispatch(showOverlayMode(!showOverlay));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div className={styles.firstSection}>
      <Col>
        <Col className={styles.firstSectionHeadTextWrapper}>
          <div className={`${styles.firstSectionHeadText} z-20 `}>
            power up your{" "}
          </div>
          <WordSlider />
          <div className={styles.firstSectionHeadText}>journey with </div>
          <div className={styles.firstSectionHeadText}>infinity learn </div>
        </Col>
        <Col className={styles.heroBannerResponsive}>
          <Image
            className={styles.heroBannerResponsive}
            src="/../homepage/firstSection/imageRes.webp"
            width={600}
            height={350}
            alt="firstSectionRes"
          />
        </Col>
        {/* <div className={` max-sm:hidden md:hidden ${styles.heroBannerTab} `}>
          <Image
            src="/homepage/firstSection/firstSection1.png"
            width={446}
            height={511}
            alt="firstSection"
          />
        </div> */}
        <Col className={styles.firstSectionInputWrapper}>
          <Col className={styles.firstSectionInput}>
            <div className="mb-1 items-stretch flex">
              <div className={styles.firstSectionInputCountryCode}>+91</div>
              <input
                className={styles.firstSectionInputHolder}
                type="text"
                placeholder="enter your mobile number"
                value={query}
                onChange={handleInputChange}
              />
              <button
                onClick={handleToggleOverlay}
                className={styles.firstSectionInputJoinForFree}
              >
                join for free
              </button>
            </div>
            <div className={styles.firstSectionInputOTP}>
              we will send an otp for verification
            </div>
          </Col>
        </Col>
        <Col className={styles.statsWrapper}>
          <Stats />
        </Col>
      </Col>

      <div className={`${styles.heroBannerLargeWrapper} max-md:hidden`}>
        <Image
          src="/homepage/firstSection/firstSection1.png"
          width={490}
          height={606}
          alt="firstSection"
        />
      </div>
    </div>
  );
}
{
}
export default FirstSection;
