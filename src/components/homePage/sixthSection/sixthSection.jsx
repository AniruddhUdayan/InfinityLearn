"use client";
import { useEffect, useState } from "react";
import phone from "./../../../../public/images/phone.webp";
import apple from "./../../../../public/images/apple.svg";
import android from "./../../../../public/images/android.svg";
import check from "./../../../../public/images/check-icon.svg";
import Image from "next/image";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { showOverlayMode } from "../../../store/mobVeriSlice";
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
import styles from "../css/styles.module.css";

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

const SixthSection = () => {
  const [query, setQuery] = useState("");
  const isPopupShow = useSelector(
    (state) => state.bookSessionPopup.isPopupShow
  );
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  //  const dispatch = useDispatch();

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
  const startLearning = async () => {
    dispatch(setComponentToShow("SendOtp"));
    dispatch(showOverlayMode(!showOverlay));
  };

  return (
    <div className="max-md:pt-28 pt-[30px]">
      <div className="w-full flex h-min justify-center items-center">
        <button
          onClick={startLearning}
          className={` text-white mt-[74px] items-center h-[52px] hover:space-x-2 w-80 
               bg-[#007BFF] rounded-2xl flex text-[16px] font-[600] justify-center gap-2 
               hover:bg-blue-600 ${styles.responsiveButton} `} // Added responsive-button class
        >
          start learning for free
          <GoArrowUpRight size={24} />
        </button>
      </div>

      <div className={styles.downloadContainer}>
        <div className={styles.downloadBox}>
          <div
            className={`${styles.downloadTitle} max-sm:flex max-sm:flex-col `}
          >
            best study material,{" "}
            <span className="text-[#080E14]">
              now at your finger <span className=" max-sm:hidden">tips!</span>
            </span>
            <span className="text-[#080E14] sm:hidden">tips!</span>
          </div>
          <div className={styles.checklistGrid}>
            <div className={styles.checklistItem}>
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={40}
                height={40}
              />
              <div className={styles.downloadChecklistText}>live classes</div>
            </div>
            <div className={styles.checklistItem}>
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={40}
                height={40}
              />
              <div className={styles.downloadChecklistText}>
                progress tracking
              </div>
            </div>
            <div className={styles.checklistItemSingle}>
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={40}
                height={40}
              />
              <div className={styles.downloadChecklistText}>
                Diverse question bank
              </div>
            </div>
          </div>
          <div className=" flex sm:hidden flex-col mt-[32px] gap-[20px]">
            <div className=" flex gap-2">
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={25}
                height={25}
              />
              <div className={styles.downloadChecklistText}>live classes</div>
            </div>
            <div className=" flex gap-2">
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={25}
                height={25}
              />
              <div className={styles.downloadChecklistText}>
                progress tracking
              </div>
            </div>
            <div className=" flex gap-2 ">
              <Image
                src="/images/checklist1.png"
                alt="check"
                width={25}
                height={25}
              />
              <div className={styles.downloadChecklistText}>
                diverse Question Banks
              </div>
            </div>
          </div>

          <div className={styles.downloadHiddenChecklist}>
            <div className={styles.downloadHeadText}>download the app</div>
            <div className={styles.downloadAppLinks}>
              <Link href="https://apps.apple.com/sg/app/infinity-learn/id1642492194">
                <Image src={apple} alt="apple" width={250} height={0} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=apps.infinitylearn.lms.tuition&hl=en&gl=US">
                <Image src={android} alt="android" width={250} height={0} />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative md:mx-auto bottom-7 top-[0px]">
          {" "}
          <Image
            src="/../homePage/sixthSection/newSixth.png"
            alt="phone"
            width={492}
            height={741}
            className="lg:-mb-[2px] max-sm:hidden aspect-[2/3]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/homePage/sixthSection/newSixth.png"
            alt="phone"
            width={313}
            height={470}
            className="lg:-mb-[2px] sm:hidden aspect-[2/3]"
          />
        </div>
        <div className="lg:hidden mb-4">
          <div className={` ${styles.downloadApp} `}>download the app</div>
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
      {/* <div className={styles.downloadOverlay}>
        <div className="flex flex-wrap flex-row justify-between sm:w-[1040px]">
          {" "}
          <div className={styles.downloadOverlayBox}>
            <div className={styles.downloadDemoSessionTitle}>
              book a <span className="text-[#FCDE5A]">demo session</span>
            </div>
            <div className="lg:text-lg sm:w-[495px]">
              {
                "a short sentence about how an academic counsellor would help the student."
              }
            </div>
          </div>
          <div className={styles.downloadDemoSessionInputBox}>
            <div className={styles.downloadDemoSessionInputSubbox}>
              <div
                className={`${poppins.className} ${styles.downloadDemoSessionInput}`}
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
                className={styles.downloadBookButton}
              >
                book now
              </button>
            </div>
            <div className={styles.downloadOtpInfo}>
              we will send an otp for verification
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SixthSection;
