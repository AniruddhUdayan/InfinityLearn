/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Form, Button, FormLabel, Container } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setComponentToShow, setIsPopupShow } from "@/store/PackageSubscription/PackageSubscriptionPopup";
import './../LoginPopup/css/loginpopup.css'
import { setContactDetails, setPhoneNumber } from "@/store/PackageSubscription/PackageSubscriptionData";
import { setCookie, validateOTP, verifyPhone } from "@/services/userServics";
import analytics from "@/utils/analytics";

const NewUserDetails = () => {
  const phoneNumber = useSelector((state) => state.packageSubscriptionData.phoneNumber);
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [page, setPage] = useState('mobile') // mobile - otp - details

  const [number, setNumber] = useState("");
  const isNumberValid = number.length === 10 && /^\d+$/.test(number);
  const [isNumber, setIsNumber] = useState(false);

  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const [policyAgreement, setPolicyAgreement] = useState(true);
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [queryParams, setQueryParams] = useState({});
  const isExitingUser = useSelector(
    (state) => state.mobileVerification.isExitingUser
  );
  const otpRefs = useRef([]);


  const dispatch = useDispatch();

  const verifyMobileNumber = async ()=>{
    let body = {
      isdCode:'+91',
      phone: number
    }
    try {
      const userData = await verifyPhone(body);
      dispatch(setPhoneNumber(number))
      setPage('otp')
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      // setLoading(false);
    }
    // analytics.track("send_otp_clicked", {
    //   page_url: window.location.href,
    //   phone: number,
    //   platform:'Web'
    // });
  }
  const handleNumberChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setNumber(numericValue);
    console.log(value.length);
    if(value?.length == 10){
      setIsNumber(true);
      // analytics.track("number_entered", {
      //   page_url: window.location.href,
      //   phone: number,
      //   platform:'Web'
      // });
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
      if (value.length < 4) {
        setOtpError(false);
      }
    }
  };

  const verifyOtp = async () => {
    let body = {
      isdCode: "+91",
      phone: phoneNumber,
      userOtp: otp.join(",").replace(/[^0-9]/g, ""),
    };

    try {
      const response = await validateOTP(body);
      console.log(response);
      setOtpError(false);
      setShowOverlay(true);
      if (!isExitingUser) {
        updateUser(response);
      } else {
        localStorage.setItem("token", response?.accessToken);
        localStorage.setItem(
          "user_details_from_server",
          JSON.stringify(response?.userDto)
        );
        registerSuccess(response?.userDto);
        sendLsq();
        setCookie("INFINITY_LEARN", JSON.stringify(response), 1);
        setPage('details')
      }
    } catch (error) {
      setOtpError(true);
      console.error("Error fetching data:", error.message);
      setPage('details')

    } finally {
      // setLoading(false);
    }
  };

  const updateUser = async (response) => {
    try {
      let profileUpdate = {
        ...response?.userDto,
        exams: selectedExams,
        grade: selectedGrade,
      };
      const updatedUserData = await updateUserProfile(
        response?.accessToken,
        profileUpdate,
        response?.userDto?.userId
      );
      localStorage.setItem("token", updatedUserData?.accessToken);
      localStorage.setItem(
        "user_details_from_server",
        JSON.stringify(updatedUserData?.userDto)
      );
      registerSuccess(updatedUserData?.userDto);
      sendLsq();
      console.log(updatedUserData, "updatedUserData");
      setPage('details')
    } catch {
      console.error("Error fetching data:", error.message);
    } finally {
    }
    analytics.track("verify_otp_clicked", {
      page_url: window.location.href,
      phone: phoneNumber,
      platform: "Web",
    });
  };

  const [otpError, setOtpError] = useState(false);

  const sendLsq = async () => {
    let userDetails = JSON.parse(
      localStorage.getItem("user_details_from_server")
    );
    let Fields = {
      mx_Custom_1: window.location.href || undefined,
      mx_Custom_2: queryParams?.utm_source || undefined,
      mx_Custom_3: queryParams?.utm_campaign || undefined,
      mx_Custom_4: queryParams?.utm_medium || undefined,
      mx_Custom_5: queryParams?.utm_content || undefined,
      mx_Custom_6: queryParams?.utm_id || undefined,
      mx_Custom_7: queryParams?.utm_term || undefined,
      mx_Custom_8: queryParams?.page || undefined,
      mx_Custom_10: 'Website',
      mx_GCLID: queryParams?.GCLID || undefined,
      mx_Actual_source_URL: window.location.href,
      mx_Grade: Number(userDetails?.grade?.name?.replace(/[^0-9]/g, "")),
      mx_Exam: userDetails?.exams?.[0]?.name
        ?.replace(/[^a-z]/gi, "")
        .toUpperCase(),
      mx_Primary_Target_Exam: userDetails?.exams?.[0]?.name
        ?.replace(/[^a-z]/gi, "")
        .toUpperCase(),
    };
    let Payload = {
      ActivityDateTime: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      Fields: Fields,
      FirstName: userDetails?.firstName,
      LastName: userDetails?.lastName,
      environment: "staging",
      phone: userDetails?.phone,
      productId: 1,
      Source: "IL Website",
      type: "Lead",
    };
    sendSQSMsg(Payload);
  };

  const registerSuccess = (userDetails) => {
    analytics.track("Lead_Register_Success", {
      page_url: window.location.href,
      first_name: userDetails?.firstName,
      last_name: userDetails?.lastName,
      phone: userDetails?.phone,
      target_exam: userDetails?.exams?.[0]?.name
        ?.replace(/[^a-z]/gi, "")
        .toUpperCase(),
      grade: Number(userDetails?.grade?.name?.replace(/[^0-9]/g, "")),
      whatsapp_consent: whatsappConsent,
    });
  };

  const resendOtp = async () => {
    let body = {
      isdCode: "+91",
      phone: phoneNumber,
    };
    try {
      const response = await sendOtp(body);
      console.log(response);
      setOtp(Array(4).fill(""));
      setTimer(30);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      // setLoading(false);
    }
    analytics.track("resend_otp_clicked", {
      page_url: window.location.href,
      phone: phoneNumber,
      platform: "Web",
    });
  };

  const editMobileNum = () => {
    dispatch(setComponentToShow("SendOtp"));
  };
  const handleTC = () => {
    analytics.track("t&c_clicked", {
      page_url: window.location.href,
      phone: phoneNumber,
      platform: "Web",
    });
  };
  const handlePrivacy = () => {
    analytics.track("t&p&p_clicked", {
      page_url: window.location.href,
      phone: phoneNumber,
      platform: "Web",
    });
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the phone number has 10 digits
    if (phoneNumber2.length !== 10) {
      setPhoneNumberError(true);
      return;
    }

    // If the phone number is valid, proceed with saving the data
    setPhoneNumberError(false);

    // You can now save the full name and email
    // For example:
    const userData = {
      fullName,
      email,
    };

    // You can send the userData to your backend or handle it as needed
    dispatch(setContactDetails({
      phoneNumber: phoneNumber2,
      fullName,
      email
    }))

    // Reset the form fields
    setPhoneNumber2("");
    setFullName("");
    setEmail("");
    dispatch(setComponentToShow("shippingAddress"))
  };

  return (
    <div className="grow">
      <div className=" w-full h-full d-flex flex-col">
        <h2 className="text-[20px] mb-[32px] font-[600] right_box">
          please add your contact details
        </h2>
        {page === 'mobile' &&
          <div className="grow d-flex flex-col justify-content-between">
            <div className="right_box">
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
            </div>
            <div className="flex mt-auto gap-3 justify-evenly m-6">
              <button
                type="submit"
                className="btn l rounded btn-outline-secondary"
                style={{ width: "168px", height: "48px" }}
                onClick={() => {
                  dispatch(setComponentToShow("duration"))
                  dispatch(setIsPopupShow(true))
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="text-secondary">Back</div>
                </div>
              </button>
              <Button
                type="submit"
                className={`otp_button ${isNumberValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"}`}
                disabled={!isNumberValid}
                onClick={verifyMobileNumber}
                style={{ width: "168px", height: "48px" }}
              >
                <div className="flex justify-center items-center">
                  <div>Proceed</div>
                  <GoArrowUpRight size={20} className="ml-2" />
                </div>
              </Button>
            </div>
          </div>       
        }
        {page === 'otp' && 
          <div className="grow d-flex flex-col justify-content-between">
            <div className="right_box">
              <Row>
                <Col md={12}>
                  <h2 className="otp_heading">
                    Just ensuring it's our genius student. Enter the OTP
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <div className="exam_change_flex">
                    <h6>+91 {phoneNumber}</h6>
                    <button onClick={editMobileNum} className="exam_change_btn">
                      Edit
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <div className="flex flex-col max-md:justify-start max-md:py-12 justify-evenly text-black">
                    <div className=" flex flex-col">
                      <div className=" flex flex-col resend_otp_row">
                        <div className="otp_flex mb-4">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              type="text"
                              value={digit}
                              maxLength={1}
                              ref={(el) => (otpRefs.current[index] = el)}
                              className={`border rounded-xl w-20  h-12 text-center text-base ${
                                otpError
                                  ? "otp_border_error"
                                  : "otp_border_blue"
                              }`}
                              onChange={handleOtpChange(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  {otpError && (
                    <div className="text-red-500 text-sm mb-4">
                      this OTP is not valid. try again
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <div className="flex items-center">
                    {timer !== 0 ? (
                      <button
                        className={`text-blue-500 mr-1 resend_otp_text cursor-not-allowed"`}
                        disabled={timer !== 0}
                      >
                        <span style={{ color: "#52565B" }}>resend OTP in</span>
                        <span className="text-sm otp_time">00:{timer} sec</span>
                      </button>
                    ) : (
                      <button
                        onClick={resendOtp}
                        className={`text-blue-500 mr-1 resend_otp_text cursor-pointer"
                  }`}
                      >
                        <span style={{ color: "#52565B" }}>resend OTP</span>
                      </button>
                    )}
                  </div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} md={12} lg={12}>
                  <input
                    className="styled-checkbox"
                    defaultChecked={policyAgreement}
                    value={policyAgreement}
                    onChange={(e) => setPolicyAgreement(e?.target?.checked)}
                    id="styled-checkbox-2"
                    type="checkbox"
                  />
                  <label htmlFor="styled-checkbox-2" className="term_label">
                    By signing up you agree to our
                    <a
                      className="term_condition"
                      onClick={handleTC}
                      href="https://infinitylearn.com/terms"
                      target="blank"
                    >
                      T&C
                    </a>{" "}
                    and
                    <a
                      className="term_condition"
                      onClick={handlePrivacy}
                      href="https://infinitylearn.com/privacy"
                      target="blank"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </label>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col xs={12} md={12} lg={12}>
                  <div className="term_flex">
                    <input
                      className="styled-checkbox"
                      defaultChecked={whatsappConsent}
                      value={whatsappConsent}
                      onChange={(e) => setWhatsappConsent(e?.target?.checked)}
                      id="whatapp_checkbox"
                      type="checkbox"
                    />
                    <label
                      htmlFor="whatapp_checkbox"
                      className="term_label term_label_flex"
                    >
                      Receive updates on Whatsapp
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
                      disabled={
                        otp.join(",").replace(/[^0-9]/g, "").length < 4 ||
                        !policyAgreement
                      }
                      className={`otp_button`}
                    >
                      Verify OTP {}
                      <span>&#8599;</span>
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        }
        {page === 'details' && 
          <Form onSubmit={handleSubmit} className=" max-2xl:w[525px]">
            <Form.Group as={Col} controlId="phoneNumber" className="mb-[26px]">
              <Form.Label
                column
                className="font-[400] mb-[8px] w-full text-[#080E14] text-[14px]"
              >
                enter your phone number
              </Form.Label>
              <div className="mb-1 max-2xl:w-[340px] items-stretch flex">
                <div
                  className="rounded-s-2xl rounded-e-none 
                border-[1px] border-r-0 border-[#9C9FA1]
                max-2xl:bg-transparent max-md:bg-white px-4 py-2 max-md:text-[#080E14] max-2xl:text-black pe-2 flex justify-center items-center"
                >
                  +91
                </div>
                <input
                  className="rounded-2xl max-2xl:w-[320px] max-md:h-12 max-md:placeholder:text-sm 
                max-md:rounded--3xl max-md:bg-white
                max-md:placeholder-gray-500 
                  placeholder-text:ml-3 rounded-l-none rounded-r-none
                  focus:outline-none
                  border-[#9C9FA1]

                  placeholder-[#9C9FA1]
                  text-black max-md:w-96  border-l-0 border-r-0
                  pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                  type="text"
                  value={phoneNumber2}
                  placeholder="enter your mobile number"
                  onChange={(e) => setPhoneNumber2(e.target.value)}
                  // value={query}
                  // onChange={handleInputChange}
                />

                <div
                  className="rounded-2xl rounded-s-none 
                border-[1px] border-l-0 border-[#9C9FA1]
                max-2xl:bg-transparent max-md:bg-white w-[50px]
                max-md:text-[#080E14] max-2xl:text-black 
                pe-2 flex justify-center items-center"
                >
                  <Image src="/../tick1.svg" width={25} height={25}  alt=""/>
                </div>
              </div>
            </Form.Group>

            <Form.Group as={Col} className="mb-[26px]" controlId="fullName">
              <Form.Label
                column
                className="font-[400] mb-[8px] text-[#080E14] text-[14px]"
              >
                enter students name
              </Form.Label>
              <div className="mb-1  items-stretch flex">
                <input
                  className="rounded-2xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
                max-md:rounded--3xl max-md:bg-white
                max-md:placeholder-gray-500 
                  placeholder-text:ml-3 
                  border-[#9C9FA1]
                  focus:outline-none

                  placeholder-[#9C9FA1]
                  text-black max-md:w-96  
                  pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                  type="text"
                  value={fullName}
                  placeholder="eg: Rhiddit Paul"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </Form.Group>

            <Form.Group as={Row} className="mb-[26px]" controlId="email">
              <Form.Label
                column
                className="font-[400] mb-[8px] text-[#080E14] text-[14px]"
              >
                enter students email id
              </Form.Label>
              <div className="mb-1 items-stretch flex">
                <input
                  className="rounded-2xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
                max-md:rounded--3xl 
                max-md:placeholder-gray-500 
                  placeholder-text:ml-3 
                  focus:outline-none
                  border-[#9C9FA1]
                  placeholder-[#9C9FA1]
                  text-black max-md:w-96  
                  pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                  type="text"
                  value={email}
                  placeholder="eg: rhidditpaul@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Form.Group>

            <div className="flex mt-[220px] gap-3 justify-evenly m-6">
              <button
                type="submit"
                className="btn l rounded btn-outline-secondary"
                style={{ width: "168px", height: "48px" }}
              >
                <div className="flex justify-center items-center">
                  <div className="text-secondary">Back</div>
                </div>
              </button>
              <Button
                type="submit"
                className="bg-primary rounded text-white"
                style={{ width: "168px", height: "48px" }}
                onClick={() => dispatch(setComponentToShow("shippingAddress"))}
              >
                <div className="flex justify-center items-center">
                  <div>Proceed</div>
                  <GoArrowUpRight size={20} className="ml-2" />
                </div>
              </Button>
            </div>
          </Form>
        }
      </div>
    </div>
  );
};

export default NewUserDetails;
