"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsExitingUser } from "../../../store/mobVeriSlice";
import { verifyPhone, sendOtp } from "../../../services/userServics";
import analytics from "../../../utils/analytics";
import "./seventhSection.css";
import {
  setIsPopupShow,
  setComponentToShow,
} from "../../../store/BookSession/BookSessionPopup";
import { setPhoneNumber } from "../../../store/BookSession/BookSessionData";
import { setIsNewUser } from "../../../store/BookSession/BookSessionNewUser";
function SeventhSection() {
  // Added useState for 'query'
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const isPopupShow = useSelector(
    (state) => state.bookSessionPopup.isPopupShow
  );
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (/^\d+$/.test(e.target.value) && e.target.value.length <= 10) {
      setQuery(e.target.value);
      // Clear error when user starts typing
      setError("");
    }
  };

  const handleToggleOverlay = async () => {
    if (query.length === 0) {
      setError("Please enter a number.");
    } else if (query.length < 10) {
      setError("Number should be of 10 digits.");
    } else {
      setError("");
      dispatch(setPhoneNumber(query));
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
          dispatch(setIsNewUser(true));
          dispatch(setComponentToShow("EnterName"));
          dispatch(setIsPopupShow(!isPopupShow));
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
      }
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
      dispatch(setIsPopupShow(!isPopupShow));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div className="bg-[#00364E] flex flex-col lg:justify-evenly lg:flex-row gap-8 lg:gap-16 justify-centr w-full max-sm:p-4 max-sm:py-8 py-[70px] lg:p-20 text-[#FFFFFF]">
      <div className="w-full lg:w-5/12 ">
        <div className="font-bold whitespace-nowrap text-c1  text-4xl lg:text-5xl mb-1 leading-[2.5rem] lg:leading-[3.6rem]">
          speak to our{" "}
          <span className="text-[#FCDE5A] max-sm:hidden">academic</span>
        </div>
        <div className="text-[#FCDE5A]   text-c1  whitespace-nowrap font-bold text-4xl lg:text-5xl mb-4 leading-[2.5rem] lg:leading-[3.6rem]">
          <span className="text-[#FCDE5A] sm:hidden">academic</span> counsellor
        </div>
        <div className="lg:text-lg">
          {
            "access to India's best teachers with a record of producing top rankers year on year."
          }
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center inpp max-sm:px-[12px] max-sm:py-[14px] w-auto lg:w-7/12 max-w-[437px]">
        <div className="flex flex-row w-auto">
          <div
            className={`poppins sm:h-[56px] h-[42px] w-auto px-[12px] sm:w-auto bg-white rounded-tl-[20px] rounded-bl-[20px] max-sm:rounded-tl-[12px] max-sm:rounded-bl-[12px] flex justify-center items-center  sm:px-[28px] text-[13px] sm:text-[16px] font-[500] gap-0  sm:gap-1`}
          >
            <span className="text-[#080E14] sm:mr-[6px]">+91 </span>
            <input
              className="outline-none w-[181px] placeholder-[#9C9FA1] text-[#080E14]"
              type="text"
              placeholder="enter your mobile number"
              value={query}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={handleToggleOverlay}
            className="bg-[#007BFF] whitespace-nowrap    text-white px-[24px] text-[14px] sm:text-[16px] sm:px-[28px] max-sm:rounded-tr-[12px] max-sm:rounded-br-[12px] rounded-tr-[20px] rounded-br-[20px]"
          >
            book now
          </button>
        </div>
        <div className="hidden lg:block">
          we will send an otp for verification
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;