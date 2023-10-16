"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsExitingUser } from "../../store/mobVeriSlice";
import {verifyPhone, sendOtp} from '../../services/userServics';
import analytics from '../../utils/analytics';
import {setIsPopupShow,setComponentToShow} from '../../store/BookSession/BookSessionPopup';
import {setPhoneNumber} from '../../store/BookSession/BookSessionData';
import {setIsNewUser} from '../../store/BookSession/BookSessionNewUser';
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
      dispatch(setIsPopupShow(!isPopupShow));
      let body = {
        isdCode:'+91',
        phone: query
      }
      try {
        const userData = await verifyPhone(body);
        dispatch(setIsExitingUser(userData?.existingUser));
        analytics.track('otp_count', {
          phone: query,
          whatsapp_consent: false
        });
        if(userData?.existingUser){
          sentOtp();
        } else {
          dispatch(setIsNewUser(true))
          dispatch(setComponentToShow('EnterName'));
          dispatch(setIsPopupShow(!isPopupShow));
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
      }
    }
  };

  const sentOtp =  async() =>{
    let body = {
      isdCode:'+91',
      phone: query
    }
    try {
      const response = await sendOtp(body);
      console.log(response);
      dispatch(setComponentToShow('OtpVerification'));
      dispatch(setIsPopupShow(!isPopupShow));
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      // setLoading(false);
    }
  }
  return (
    <div className="bg-[#00364E] min-h-max h-min">
      <div className="flex max-md:flex-col max-md:py-12 max-md:px-2 max-md:ml-2 justify-evenly py-40">
        <div className="flex flex-col text-white">
          <div className="tracking-wider text-4xl max-md:text-3xl font-extrabold">
            speak to our{" "}
            <span className="text-yellow-400 max-md:hidden">academic</span>
          </div>
          <div className="h-2"></div>
          <div className="max-md:text-3xl text-4xl gap-2 flex text-yellow-400 font-extrabold">
            <span className="text-yellow-400 md:hidden">academic </span>{" "}
            counsellor
          </div>
          <div className="h-2"></div>
          <div className=" max-md:text-base text-xl">
            {`access to India's best teachers with a record of`}
            <span className=" md:hidden max-md:text-base text-xl">
              {" "}
              producing top rankers year on year.
            </span>
          </div>
          <div className="max-md:hidden text-xl">
            producing top rankers year on year.
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex h-4/5 max-md:px-    md:h-3/5 mt-9 mb-5">
            <input
              className="rounded-l-lg max-md:h-12 max-md:placeholder:text-sm max-md:rounded-l-3xl max-md:bg-white max-md:placeholder-gray-500 bg-blue-500 text-black w-full sm:w-1/2 md:w-96 h-10 md:h-12 pl-4 md:pl-6 text-base md:text-lg border-2 placeholder-white"
              type="text"
              placeholder="enter your mobile number"
              value={query} maxLength={10}
              onChange={handleInputChange}
            />
            <button
              onClick={handleToggleOverlay}
              className="md:w-32 max-md:w-40 max-md:text-black max-md:rounded-r-3xl rounded-r-lg bg-yellow-500"
            >
              book now
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-sm max-md:text-base bg-white p-2 rounded">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;
