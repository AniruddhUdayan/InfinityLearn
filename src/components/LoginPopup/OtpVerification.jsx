"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storePhoneNumber } from "../../store/mobVeriSlice";
import { sendSQSMsg,sendOtp, validateOTP, updateUserProfile } from "../../services/userServics";
import * as moment from 'moment';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import analytics from '../../utils/analytics';
import {setComponentToShow} from '../../store/modalToShow';
const OtpVerification = () => {
    const dummyOtp = ["1", "2", "3", "4"];
    const [otp, setOtp] = useState(Array(4).fill(""));
    const [timer, setTimer] = useState(30);
    const [editingNumber, setEditingNumber] = useState(false);
    const phoneNumber = useSelector(
      (state) => state.mobileVerification.phoneNumber
    );
    const selectedGrade = useSelector(
      (state) => state.newUser.class
  );
  const selectedExams = useSelector(
    (state) => state.newUser.course
);
const isExitingUser = useSelector(
  (state) => state.mobileVerification.isExitingUser
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
        if(value.length < 4){
          setOtpError(false);
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
        if (!isExitingUser) {
          updateUser(response)
        } else {
          localStorage.setItem('token',response?.accessToken);
          localStorage.setItem('user_details_from_server', JSON.stringify(response?.userDto));
          registerSuccess(response?.userDto);
          sendLsq();
          dispatch(setComponentToShow('Success'));
        }
      } catch (error) {
        setOtpError(true);
        console.error('Error fetching data:', error.message);
      } finally {
        // setLoading(false);
      }
    };

   const updateUser = async (response)=>{
    try{
      let profileUpdate = { ...response?.userDto,
        exams: selectedExams,
        grade: selectedGrade
      }
        const updatedUserData = await updateUserProfile(response?.accessToken,profileUpdate,response?.userDto?.userId);
        localStorage.setItem('token',updatedUserData?.accessToken);
        localStorage.setItem('user_details_from_server', JSON.stringify(updatedUserData?.userDto));
        registerSuccess(updatedUserData?.userDto);
        sendLsq();
        dispatch(setComponentToShow('Success'));
        
    } catch{
      console.error('Error fetching data:', error.message);
    } finally{

    }
   }
  
    const [otpError, setOtpError] = useState(false);
  
    const sendLsq = async ()=>{
      let userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
      let Fields = {
        mx_Grade : Number(userDetails?.grade?.name?.replace(/[^0-9]/g, '')),
        mx_Exam: userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase(),
        mx_Primary_Target_Exam : userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase(),
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

    const registerSuccess = (userDetails)=>{
      analytics.track('Lead_Register_Success', {
        page_url: window.location.href,
        first_name: userDetails?.firstName,
        last_name: userDetails?.lastName,
        phone: userDetails?.phone,
        target_exam: userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase(),
        grade: Number(userDetails?.grade?.name?.replace(/[^0-9]/g, '')),
        whatsapp_consent: false
      })
    }

    const resendOtp = async ()=>{
      let body = {
        isdCode:'+91',
        phone: phoneNumber
      }
      try {
        const response = await sendOtp(body);
        console.log(response);
        setOtp(Array(4).fill(""));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        // setLoading(false);
      }
    }
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <Image
          src="/login/mobVer/mobVer2.png"
          height={400}
          width={400}
          alt="mob-ver-otp"
          className=" max-md:hidden"
        />
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col md={12}>
                <h2 className="otp_heading">Just ensuring it's our genius student. Enter the OTP</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
              <div className="flex flex-col max-md:justify-start max-md:py-12 justify-evenly text-black">
            <div className=" flex flex-col">
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
                      <button className="edit_btn" onClick={() => setEditingNumber(true)}>
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className=" flex flex-col resend_otp_row">
                <div className="otp_flex mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      maxLength={1}
                      ref={(el) => (otpRefs.current[index] = el)}
                      className={`border rounded-xl w-20  h-12 mr-2 text-center text-base ${
                        otpError ? "otp_border_error" : "otp_border_blue"
                      }`}
                      onChange={handleOtpChange(index)}
                    />
                  ))}
                </div>
                {otpError && (
                  <div className="text-red-500 text-sm mb-4">
                    this OTP is not valid. try again
                  </div>
                )}
              </div>

              <div className="flex items-center">
                {
                  timer !== 0 ? <button
                  className={`text-blue-500 mr-1 resend_otp_text cursor-not-allowed"`}
                  disabled={timer !== 0}
                >
                  <span style={{color:'#52565B'}}>resend OTP in</span>
                   <span className="text-sm otp_time">00:{timer} sec</span>
                </button> : <button onClick={resendOtp}
                  className={`text-blue-500 mr-1 resend_otp_text cursor-pointer"
                  }`}
                >
                  <span style={{color:'#52565B'}}>resend OTP</span>
                </button>
                }

              </div>
            </div>
          </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} md={12} lg={12}>
                <div className="term_flex">
                <Image
          src="/login/mobVer/check_box.svg"
          height={14}
          width={17}
          alt="mob-ver-otp"
        />
        <label className="term_label">By signing up you agree to our <a>T&C</a> <a>and Privacy Policy</a></label>
                </div>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={12} md={12} lg={12}>
                <div className="term_flex">
                <Image
          src="/login/mobVer/check_box.svg"
          height={14}
          width={17}
          alt="mob-ver-otp"
        />
        <label className="term_label term_label_flex">Receive updates on Whatsapp
        <Image
          src="/login/mobVer/whatsapp_icon.svg"
          height={20}
          width={15}
          alt="mob-ver-otp"
        />
        </label>
                </div>
              </Col>
            </Row>
            <Row className="button_mobile_none">
              <Col xs={12} md={12}>
                <div className="otp_button_row">
                  <button
                    onClick={verifyOtp}
                    className={`otp_button ${otp == "" ? 'opacity_off':''}`}
                  >
                    Verify OTP <span>&#8599;</span>
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="marketpr_show">
        <div className="feslofrbottom">
          <div className="pac_festpr_flexshow">
            <button
              onClick={verifyOtp}
              className={`otp_button ${otp == "" ? 'opacity_off' : ''}`}
            >
              Verify OTP <span>&#8599;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpVerification
