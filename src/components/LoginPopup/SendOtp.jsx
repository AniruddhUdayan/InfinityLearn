"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode, storePhoneNumber, setIsOtpSent } from "../../store/mobVeriSlice";
import Image from "next/image";
import { sendOtp } from "@/services/userServics";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const SendOtp = () => {
    const phoneNumber = useSelector(
        (state) => state.mobileVerification.phoneNumber
      );
  const [number, setNumber] = useState(phoneNumber);
  const [otpSent, setOtpSent] = useState(false);
  const isNumberValid = number.length === 10 && /^\d+$/.test(number);
  const isNumberValid1 = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  const [isNumber, setIsNumber] = useState(true);


  useEffect(() => {
    if (isNumberValid1) {
      // When number becomes valid, send OTP
      phoneNumberHandler();
    }
  }, [isNumberValid1]);

  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const dispatch = useDispatch();

  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };

  const phoneNumberHandler = async () => {
    dispatch(storePhoneNumber(number));
    let body = {
        isdCode:'+91',
        phone: phoneNumber
      }
      try {
        const response = await sendOtp(body);
        console.log(response);
        setOtpSent(response);
        dispatch(setIsOtpSent(true));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        // setLoading(false);
      }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setNumber(value);
    }
    if(value?.length == 10){
        setIsNumber(false)
    }else{
        setIsNumber(true)
    }
  };
  return (
    <div>
       <Container>
          <Row>
            <Col xs={12} md={6}>
            <Image
          src="/login/mobVer/mobVer1.svg"
          height={250}
          width={600}
          alt="mob-ver-1"
          className=" max-md:hidden"
        />
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col md={12}>
                    <h2 className="otp_heading">Drop your number, we’ve <br/> got the rest!</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                    <div className="otp_mob_input">
                    <label className="">
                enter your mobile number
              </label>
              <div className="otp_mobile_input">
              <select
                  defaultValue="+91"
                  className="appearance-none bg-transparent border-r-2 w-1/6  pl-4 focus:outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  className="appearance-none  border-l-0 flex-grow p-2 focus:outline-none"
                  placeholder="Your number..."
                  value={number}
                  onChange={handleNumberChange}
                />
              </div>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                    <div className="otp_button_row">
                    <button
            className={`otp_button ${
              isNumberValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
            }`}
            disabled={!isNumberValid}
            onClick={phoneNumberHandler}
          >
            Send OTP <span>&#8599;</span>
          </button>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default SendOtp
