"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendSQSMsg,
  sendOtp,
  validateOTP,
  updateUserProfile,
  setCookie,
} from "../../services/userServics";
import * as moment from "moment";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import analytics from "../../utils/analytics";
import { setComponentToShow } from "../../store/BookSession/BookSessionPopup";
import { setIsStudentProfileCompleted } from "../../store/BookSession/BookSessionNewUser";
import ProgressTabs from "./ProgressTabs";
import {getQueryParams} from '../../utils/getQueryParams';
const OtpVerification = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const [policyAgreement, setPolicyAgreement] = useState(true);
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [queryParams, setQueryParams] = useState({});
  const phoneNumber = useSelector((state) => state.bookSessionData.phoneNumber);
  const selectedGrade = useSelector((state) => state.bookSessionNewUser.class);
  const selectedExams = useSelector((state) => state.bookSessionNewUser.course);
  const isExitingUser = useSelector(
    (state) => state.mobileVerification.isExitingUser
  );
  const dispatch = useDispatch();
  const otpRefs = useRef([]);
  useEffect(() => {
    const params = getQueryParams();
    console.log(params);
    setQueryParams(params);
  }, []);
  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [timer]);
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
        dispatch(setComponentToShow("DateTimeSelection"));
      }
    } catch (error) {
      setOtpError(true);
      console.error("Error fetching data:", error.message);
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
      setCookie("INFINITY_LEARN", JSON.stringify(response), 1);
      dispatch(setComponentToShow("DateTimeSelection"));
      dispatch(setIsStudentProfileCompleted(true));
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

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img
              src="/login/mobVer/mobVer2.webp"
              alt="mob-ver-otp"
              className="side_image max-md:hidden"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="right_box">
              <ProgressTabs />
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
                              className={`border rounded-xl w-20  h-12  text-center text-base ${
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
          </Col>
        </Row>
      </Container>
      <div className="marketpr_show">
        <div className="feslofrbottom">
          <div className="pac_festpr_flexshow">
            <button
              onClick={verifyOtp}
              className={`otp_button`}
              disabled={
                otp.join(",").replace(/[^0-9]/g, "").length < 4 ||
                !policyAgreement
              }
            >
              Verify OTP <span>&#8599;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
