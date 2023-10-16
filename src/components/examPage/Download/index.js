"use client";
import { useEffect, useState } from "react";
import phone from "./../../../../public/images/phone.svg";
import apple from "./../../../../public/images/apple.svg";
import android from "./../../../../public/images/android.svg";
import check from "./../../../../public/images/check-icon.svg";
import Image from "next/image";
import { Button, Input, InputBase } from "@mui/material";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhoneNumber,
  setSelectedDate,
  setSelectedTime,
  setRelations,
  setLanguage,
  setDevice,
  setMoreDetails,
  setIsPersonalizeCompleted,
} from "../../../store/BookSession/BookSessionData";
import {
  showOverlayMode,
  setIsExitingUser,
  setIsOtpSent,
  setIsOtpVerified,
  setIsPhoneVerified,
} from "../../../store/mobVeriSlice";

import { verifyPhone, sendOtp } from "../../../services/userServics";
import analytics from "../../../utils/analytics";
import {
  setIsPopupShow,
  setComponentToShow,
} from "../../../store/BookSession/BookSessionPopup";

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
      dispatch(setIsPersonalizeCompleted(!isPopupShow));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-center bg-[#F1F2F6] pt-8 lg:pt-16 px-4 lg:px-16 pb-0 gap-8 text-[#080E14]">
        <div className="flex flex-col gap-2 lg:gap-8 w-full lg:w-6/12 px-0 lg:px-10">
          <div className="font-bold text-4xl lg:text-5xl text-[#007BFF] mb-4 leading-[2.5rem] lg:leading-[3.6rem]">
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
            <div className="text-[#6B6E72] text-lg flex items-center">
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
            <div className="text-[#6B6E72] text-lg flex items-center">
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
            <div className="text-[#6B6E72] text-lg flex items-center">
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
            <div className="text-[#6B6E72] text-lg flex items-center">
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
            <div className="text-[#6B6E72] text-lg flex items-center">
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
            <div className="text-[#6B6E72] text-lg flex items-center">
              diverse question banks
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-xl font-bold">download the app</div>
            <div className="flex gap-4 mt-2">
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
          className="lg:-mb-[2px] max-sm:hidden"
        />
        <div className="flex justify-center">
          <Image
            src="/images/appver.svg"
            alt="phone"
            width={313}
            height={470}
            className="lg:-mb-[2px] sm:hidden "
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
      <div className="bg-[#00364E] flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center w-full max-sm:p-4 max-sm:py-8 py-[70px] lg:p-20 text-[#FFFFFF]">
        <div className="w-full lg:w-5/12 ">
          <div className="font-bold text-4xl lg:text-5xl mb-4 leading-[2.5rem] lg:leading-[3.6rem]">
            book a <span className="text-[#FCDE5A]">demo session</span>
          </div>
          <div className="lg:text-lg">
            {
              "access to India's best teachers with a record of producing top rankers year on year."
            }
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center max-sm:px-[12px] max-sm:py-[14px] w-auto lg:w-7/12 max-w-[437px]">
          <div className="flex flex-row w-auto">
            <div
              className={`${poppins.className} sm:h-[56px] h-[48px] w-auto px-[12px] sm:w-auto bg-white rounded-tl-[12px] rounded-bl-[12px] flex justify-center items-center  sm:px-[28px] text-[13px] sm:text-[16px] font-[500] gap-0  sm:gap-1`}
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
              className="bg-[#007BFF]   text-white px-[24px] text-[14px] sm:text-[16px] sm:px-[28px] rounded-tr-[12px] rounded-br-[12px]"
            >
              book now
            </button>
          </div>
          <div className="hidden lg:block">
            we will send an otp for verification
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
