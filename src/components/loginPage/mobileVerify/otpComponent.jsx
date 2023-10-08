"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { storePhoneNumber } from "@/store/mobVeriSlice";
import Verified from "./verified";
import { BiArrowBack } from "react-icons/bi";
import Tick from "./tick";
import { sendSQSMsg, validateOTP } from "../../../services/userServics";
import * as moment from 'moment';

function OtpComponent({ onClose }) {
  const dummyOtp = ["1", "2", "3", "4"];
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const [editingNumber, setEditingNumber] = useState(false);
  const phoneNumber = useSelector(
    (state) => state.mobileVerification.phoneNumber
  );

  const [tempNumber, setTempNumber] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const dispatch = useDispatch();
  const otpRefs = useRef([]);

  const handleNumberEdit = () => {
    dispatch(storePhoneNumber(tempNumber));
    setEditingNumber(false);
  };

  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [timer]);

  // const handleOtpChange = (index) => (e) => {
  //   const value = e.target.value;
  //   if (value === "" || /^\d$/.test(value)) {
  //     setOtp([...otp.slice(0, index), value, ...otp.slice(index + 1)]);
  //   }
  // };
  const handleOtpChange = (index) => (e) => {
    const value = e.target.value;

    if (value === "" || /^\d$/.test(value)) {
      setOtp([...otp.slice(0, index), value, ...otp.slice(index + 1)]);

      // Move to next input box if this box has been filled
      if (value !== "" && index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1].focus();
      }

      // Move to previous input box if this box has been emptied
      if (value === "" && index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  const verifyOtp = async () => {

    let body = {
      isdCode:'+91',
      phone: phoneNumber,
      userOtp: otp.join(',').replace(/[^0-9]/g, '')
    }

    try {
      const response = await validateOTP(body);
      console.log(response)
      setOtpError(false);
      setShowOverlay(true);
      localStorage.setItem('user_details_from_server', JSON.stringify(response?.userDto));
      sendLsq();
    } catch (error) {
      setOtpError(true);
      console.error('Error fetching data:', error.message);
    } finally {
      // setLoading(false);
    }
    // if (JSON.stringify(otp) === JSON.stringify(dummyOtp)) {
    //   // OTP is correct
    //   setOtpError(false);
    //   // TODO: Handle what happens after successful OTP verification
    //   setShowOverlay(true);
    // } else {
    //   // If OTP is incorrect
    //   setOtpError(true);
    // }
  };

  const [otpError, setOtpError] = useState(false);

  const sendLsq = async ()=>{
    let userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    let Fields = {
      mx_Grade : userDetails?.name?.replace(/[^0-9]/g, ''),
      mx_Custom_6 : "website",
    }
    let Payload = {
      "ActivityDateTime": moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      "Fields": Fields,
      "FirstName": userDetails?.firstName,
      "LastName": userDetails?.lastName,
      "environment": 'staging',
      "phone": userDetails?.phone,
      "productId": 1,
      "Source": "IL Website",
      "type": "Lead",
    }

    sendSQSMsg(Payload);

  }
  return (
    <div
      className={`fixed inset-0  bg-black max-md:z-50 max-md:flex-col bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white max-md:h-screen max-md:rounded-none  max-md:w-screen  gap-5 flex p-8 rounded justify-evenly relative">
        <img
          src="/login/mobVer/mobVer2.png"
          height={400}
          width={400}
          alt="mob-ver-otp"
          className=" max-md:hidden"
        />

        {!showOverlay ? (
          <div className="flex flex-col max-md:justify-start max-md:py-12 justify-evenly text-black">
            <div className=" flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-extrabold mb-2">
                  just ensuring it's our genius
                </h2>
                <h2 className="text-2xl font-extrabold mb-4">
                  student. enter the OTP
                </h2>
              </div>
              <div className="bg-gray-100 w-full p-2 rounded-xl flex justify-stretch">
                {editingNumber ? (
                  <div className=" flex gap-12 ">
                    <div className=" flex gap-2 items-center">
                      <div>+91</div>
                      <input
                        value={tempNumber}
                        onChange={(e) => setTempNumber(e.target.value)}
                        className=" rounded p-1"
                      />
                    </div>
                    <button onClick={handleNumberEdit}>Save</button>
                  </div>
                ) : (
                  <div className=" flex w-full gap-28   ">
                    <div className=" flex">
                      <div className=" text-lg pr-2">+91</div>
                      <div className=" text-lg pr-7   ">{phoneNumber}</div>
                    </div>
                    <div>
                      <button onClick={() => setEditingNumber(true)}>
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className=" flex flex-col">
                <div className="flex mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      maxLength={1}
                      ref={(el) => (otpRefs.current[index] = el)}
                      className={`border rounded-xl w-20  h-12 mr-2 text-center text-base ${
                        otpError ? "border-red-500" : "border-gray-300"
                      }`}
                      onChange={handleOtpChange(index)}
                    />
                  ))}
                </div>
                {otpError && (
                  <div className="text-red-500 text-sm mb-4">
                    Invalid OTP. Try again.
                  </div>
                )}
              </div>

              <div className="flex   items-center">
                <button
                  className={`text-blue-500 mr-1 underline  ${
                    timer === 0 ? " cursor-pointer" : "cursor-not-allowed"
                  }`}
                  disabled={timer !== 0}
                >
                  resend otp in{" "}
                  <span className=" text-sm underline">{timer} sec</span>
                </button>
              </div>
            </div>
            <button
              onClick={verifyOtp}
              className={`mt-4 p-2 max-md:hidden rounded ${"bg-blue-500 hover:bg-blue-600"} text-white`}
            >
              Verify OTP <span>&#8599;</span>
            </button>
          </div>
        ) : (
          <div>
            <Verified />
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
        >
          <IoClose size={24} color="black" />
        </button>
        <button
          // onClick={handleBack}
          onClick={onClose}
          className="absolute md:hidden top-4 left-4 p-2 hover:bg-gray-200 rounded-full"
        >
          <BiArrowBack size={24} color="black" />
        </button>
      </div>
      <footer className=" md:hidden flex border-opacity-20 justify-center  border-t-2  border-black h-20 w-full bg-white ">
        <button
          onClick={verifyOtp}
          className={`my-4 p-2 w-80 rounded ${"bg-blue-500 hover:bg-blue-600"} text-white`}
        >
          Verify OTP <span>&#8599;</span>
        </button>
      </footer>
    </div>
  );
}

export default OtpComponent;
