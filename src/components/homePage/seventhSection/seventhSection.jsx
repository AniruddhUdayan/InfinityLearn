"use client";
import { useEffect, useState } from "react";
import phone from "./../../../../public/images/phone.webp";
import apple from "./../../../../public/images/apple.svg";
import android from "./../../../../public/images/android.svg";
import check from "./../../../../public/images/check-icon.svg";
import Image from "next/image";
import { Button, Input, InputBase } from "@mui/material";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../../store/BookSession/BookSessionData";
import { setIsExitingUser } from "../../../store/mobVeriSlice";
import { verifyPhone, sendOtp } from "../../../services/userServics";
import analytics from "../../../utils/analytics";
import {
  setIsPopupShow,
  setComponentToShow,
} from "../../../store/BookSession/BookSessionPopup";
import "./seventhSection.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const SeventhSection = () => {
  const [query, setQuery] = useState("");
  const isPopupShow = useSelector(
    (state) => state.bookSessionPopup.isPopupShow
  );

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (/^\d+$/.test(e.target.value) && e.target.value.length <= 10) {
      setQuery(e.target.value);
    }
  };

  const handleToggleOverlay = async () => {
    if (query.length === 10) {
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
          dispatch(setComponentToShow("EnterName"));
          dispatch(setIsPopupShow(!isPopupShow));
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
      dispatch(setIsPopupShow(!isPopupShow));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <div className="download-overlay">
        <div className="w-full lg:w-5/12 ">
          <div
            className="font-bold whitespace-nowrap text-c1  
          text-4xl lg:text-5xl mb-1 leading-[2.5rem]
           lg:leading-[3.6rem]"
          >
            speak to our{" "}
            <span className="text-[#FCDE5A] max-sm:hidden">academic</span>
          </div>
          <div className="text-[#FCDE5A]   text-c1  whitespace-nowrap font-bold text-4xl lg:text-5xl mb-4 leading-[2.5rem] lg:leading-[3.6rem]">
            <span className="text-[#FCDE5A] sm:hidden">academic</span>{" "}
            counsellor
          </div>
          <div className="lg:text-lg">
            {
              "access to India's best teachers with a record of producing top rankers year on year."
            }
          </div>
        </div>

        <div className="download-demo-session-input-box">
          <div className="download-demo-session-input-subbox">
            <div className={`${poppins.className} download-demo-session-input`}>
              <span className="text-[#080E14] sm:mr-[6px]">+91 </span>
              <input
                className="outline-none w-[181px] text-[#080E14]"
                type="text"
                placeholder="enter your mobile number"
                value={query}
                onChange={handleInputChange}
              />
            </div>
            <button
              onClick={handleToggleOverlay}
              className="download-book-button"
            >
              book now
            </button>
          </div>
          <div className="download-otp-info">
            we will send an otp for verification
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhSection;
