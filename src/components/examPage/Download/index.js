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
import { setPhoneNumber,} from "../../../store/BookSession/BookSessionData";
import {setIsExitingUser,} from "../../../store/mobVeriSlice";
import { verifyPhone, sendOtp } from "../../../services/userServics";
import analytics from "../../../utils/analytics";
import {setIsPopupShow,setComponentToShow} from "../../../store/BookSession/BookSessionPopup";
import './download.css'

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

const Download = () => {
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
      <div className="download-container">
        <div className="download-box">
          <div className="download-title">
            best study material,{" "}
            <span className="text-[#080E14]">now at your finger tips!</span>
          </div>
          <div className="max-sm:hidden flex gap-2">
            <Image
              src="/images/checklist1.png"
              alt="check"
              width={40}
              height={40}
            />
            <div className="download-checklist-text">
              live classes
            </div>
          </div>
          <div className="sm:hidden flex gap-2 mb-[20px]">
            <Image
              src="/images/checklist1.png"
              alt="check"
              width={25}
              height={25}
            />
            <div className="download-checklist-text">
              live classes
            </div>
          </div>
          <div className="max-sm:hidden flex gap-2">
            <Image
              src="/images/checklist1.png"
              alt="check"
              width={40}
              height={40}
            />
            <div className="download-checklist-text">
              progress tracking
            </div>
          </div>
          <div className="sm:hidden flex gap-2 mb-[20px]">
            <Image
              src="/images/checklist1.png"
              alt="check"
              width={25}
              height={25}
            />
            <div className="download-checklist-text">
              progress tracking
            </div>
          </div>
          <div className="max-sm:hidden flex gap-2">
            <Image
              src="/images/checklist1.png"
              alt="check"
              width={40}
              height={40}
            />
            <div className="download-checklist-text">
              diverse question banks
            </div>
          </div>
          <div className="sm:hidden flex gap-2 mb-[20px]">
            <Image
              src="/images/checklist1.png"
              alt="check"
              width={25}
              height={25}
            />
            <div className="download-checklist-text">
              diverse question banks
            </div>
          </div>
          <div className="download-hidden-checklist">
            <div className="download-head-text">download the app</div>
            <div className="download-app-links">
              <Link href="https://apps.apple.com/sg/app/infinity-learn/id1642492194">
                <Image src={apple} alt="apple" width={150} height={0} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=apps.infinitylearn.lms.tuition&hl=en&gl=US">
                <Image src={android} alt="android" width={150} height={0} />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={phone}
          alt="phone"
          width={400}
          height={0}
          className="lg:-mb-[2px] max-sm:hidden aspect-[2/3]"
        />
        <div className="flex justify-center">
          <Image
            src="/images/appver.webp"
            alt="phone"
            width={313}
            height={470}
            className="lg:-mb-[2px] sm:hidden aspect-[2/3]"
          />
        </div>
        <div className="lg:hidden mb-4">
          <div className="text-2xl text-center mb-4 font-bold">
            download the app
          </div>
          <div className="grid grid-cols-2 gap-0 mt-2">
            <Image
              src={apple}
              alt="apple"
              width={150}
              height={0}
              className="w-full"
            />
            <Image
              src={android}
              alt="android"
              width={150}
              height={0}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="download-overlay">
        <div className="download-overlay-box ">
          <div className="download-demo-session-title">
            book a <span className="text-[#FCDE5A]">demo session</span>
          </div>
          <div className="lg:text-lg">
            {
              "access to India's best teachers with a record of producing top rankers year on year."
            }
          </div>
        </div>
        <div className="download-demo-session-input-box">
          <div className="download-demo-session-input-subbox">
            <div
              className={`${poppins.className} download-demo-session-input`}
            >
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

export default Download;
