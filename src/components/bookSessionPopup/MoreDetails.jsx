"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoreDetails } from "../../store/BookSession/BookSessionData";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';

const MoreDetails = () => {
  const [enteredText, setEnteredText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (device)=>{
      setEnteredText(device);
  }

  const handleContinue = () => {
      dispatch(setMoreDetails(enteredText))
  }
  return (
      <div>
          <Container>
              <Row>
                  <Col xs={12} md={6}>
                      <Image
                          src="/login/mobVer/SuccessImage.png"
                          height={250}
                          width={600}
                          alt="mob-ver-1"
                          className=" max-md:hidden"
                      />
                  </Col>
                  <Col xs={12} md={6}>
                      <div className="right_box">
                          <Row>
                              <Col md={12}>
                                  <h2 className="session_heading">Just a few more details!</h2>
                                  <p className="session_description">Tell us more about the current goals as well as areas you want to focus on at Infinity Learn.</p>
                              </Col>
                          </Row>
                          <Row className="mt-4">
                              <Col xs={12} md={12}>
                                  <div className="">
                                  <textarea className="more_textarea" name="" id="" cols="40" rows="10"></textarea>
                                  </div>
                              </Col>
                          </Row>
                          <Row className="button_mobile_none">
                              <Col xs={12} md={12}>
                                  <div className="otp_button_row">
                                      <button onClick={handleContinue}
                                          className={`otp_button`}
                                          disabled={enteredText == ''}
                                      >
                                          continue <span>&#8599;</span>
                                      </button>
                                      <button className={`skip_button`}>
                                        skip for now
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
                      <button onClick={handleContinue}
                          className={`otp_button`}
                          disabled={enteredText ==''}
                      >
                          continue <span>&#8599;</span>
                      </button>
                      <button className={`skip_button`}>
                                        skip for now
                                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default MoreDetails
