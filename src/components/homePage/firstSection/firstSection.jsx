"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, InputBase } from "@mui/material";
import Image from "next/image";
import { Poppins } from "next/font/google";
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
    <div className="slider-container tracking-wide head-text-modified ">
      <div className={animating ? "word-entering z-0" : " z-0 word-exiting"}>
        {words[currentIndex]}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div
      className="flex mt-10 stats py-3  max-lg:w-full mb-6 max-lg:mx-10
     max-lg:h-24 justify-evenly text-[#007BFF] p- 
      text-center  font-bold text-base gap-3 mx-auto stats
     flex-row items-center h-20 bg-white px-4 rounded-[20px]"
    >
      <div className="stats-div1  ">
        <div className="text-center font-[400] text-[12px] ">learners</div>
        <div className="font-[600] text-[18px] text-center">50k+</div>
      </div>
      <div className="border-r-2 border-[#007BFF] opacity-20 h-full " />
      <div className=" items-center flex text-center flex-col border-black">
        <div className="text-center font-[400] text-[12px]  ">cities</div>
        <div className="font-[600] text-[18px]  text-center">60k+</div>
      </div>
      <div className="border-r-2 border-[#007BFF] opacity-20 h-full" />
      <div className="  text-start flex flex-col">
        <div className="text-center font-[400] text-[12px]  flex    flex-grow">
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
    <div className=" w-screen poppins h-screen firstSection  ">
      <Row>
        <Col>
          <Col className="  ">
            <div className=" items-center head-text max-md:pt-6 pt-9">
              power up your{" "}
            </div>
            <WordSlider />
            <div className="head-text">journey with </div>
            <div className="head-text">infinity learn </div>
          </Col>
          <Col className=" imageRes ">
            <Image
              className="imageRes"
              src="/../homepage/firstSection/imageRes.webp"
              width={600}
              height={350}
              alt="firstSectionRes"
            />
          </Col>
          <Col className=" inputSec">
            <Col className="flex inputSec1 flex-col treew md:mt-16 mt-[32px] max-md:w-[335px]  gap-2 justify-center">
              <div className="mb-1 items-stretch flex">
                <div className="iSDCode">+91</div>
                <input
                  className="focus-no-outline Input "
                  type="text"
                  placeholder="enter your mobile number"
                  value={query}
                  onChange={handleInputChange}
                />
                <button onClick={handleToggleOverlay} className="jFF">
                  join for free
                </button>
              </div>
              <div className="otp">we will send an otp for verification</div>
            </Col>
          </Col>
          <Col className=" mx-auto px-5 md:hidden">
            <Stats />
          </Col>
        </Col>
      </Row>
      <Row>
        <div className="imageNonRes w-full">
          <Image
            src="/homepage/firstSection/firstSection.svg"
            width={490}
            height={606}
            alt="firstSection"
          />
        </div>
      </Row>
    </div>
  );
}
{
}
export default FirstSection;
