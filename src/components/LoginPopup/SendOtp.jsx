"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode, storePhoneNumber, setIsExitingUser } from "../../store/mobVeriSlice";
import Image from "next/image";
import { sendOtp, verifyPhone } from "../../services/userServics";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {setComponentToShow} from '../../store/modalToShow';
const SendOtp = () => {
    const phoneNumber = useSelector(
        (state) => state.mobileVerification.phoneNumber
      );
      const dispatch = useDispatch();
    
  const [number, setNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const isNumberValid = number.length === 10 && /^\d+$/.test(number);
  const isNumberValid1 = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  const [isNumber, setIsNumber] = useState(false);


  // useEffect(() => {
  //   if (isNumberValid1) {
  //     // When number becomes valid, send OTP
  //     phoneNumberHandler();
  //   }
  // }, [isNumberValid1]);

  const verifyMobileNumber = async ()=>{
    let body = {
      isdCode:'+91',
      phone: number
    }
    try {
      const userData = await verifyPhone(body);
      dispatch(storePhoneNumber(number));
      dispatch(setIsExitingUser(userData?.existingUser));
      if(userData?.existingUser){
        phoneNumberHandler()
      } else {
        dispatch(setComponentToShow('EnterName'));
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      // setLoading(false);
    }
  }
  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };

  const phoneNumberHandler = async () => {
    let body = {
        isdCode:'+91',
        phone: phoneNumber || number
      }
      try {
        const response = await sendOtp(body);
        console.log(response);
        setOtpSent(response);
        dispatch(setComponentToShow('OtpVerification'));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        // setLoading(false);
      }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setNumber(numericValue);
    console.log(value.length);
    if(value?.length == 10){
      setIsNumber(true);
    }else{
        setIsNumber(false)
    }
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };
  return (
    <div>
       <Container>
          <Row>
            <Col xs={12} md={6}>            
            <Image
          src="/login/mobVer/mobVer1.svg"
          height={200}
          width={400}
          alt="mob-ver-1"
          className="side_image max-md:hidden"
        />
            </Col>
            <Col xs={12} md={6}>
              <div className="right_box">
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
                  className="bg-transparent border-r-2 w-1/6 focus:outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  className="appearance-none  border-l-0 flex-grow p-2 focus:outline-none"
                  placeholder="Your number..." maxLength={10} pattern="[6-9]\\d{9}"
                  value={number}
                  onChange={handleNumberChange} onKeyUp={handleKeyPress}
                />
              </div>
                    </div>
                </Col>
              </Row>
              <Row className="button_mobile_none">
                <Col xs={12} md={12}>
                    <div className="otp_button_row">
                    <button
            className={`otp_button ${
              isNumber ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
            }`}
            disabled={!isNumber}
            onClick={verifyMobileNumber}
          >
            Send OTP <span>&#8599;</span>
          </button>
                    </div>
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </Container>
      <div className="marketpr_show">
        <div className="feslofrbottom">
          <div className="pac_festpr_flexshow">
            <button
              className={`otp_button ${isNumberValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
                }`}
              disabled={!isNumberValid}
              onClick={verifyMobileNumber}
            >
              Send OTP <span>&#8599;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendOtp
