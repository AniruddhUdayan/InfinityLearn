"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeName, setIsNameEntered } from "../../store/newUserSlice";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function EnterName() {
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  function handleBack() {
    setShowClassOverlay(true);
  }
  const [showClassOverlay, setShowClassOverlay] = useState(true);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const storeNameHandler = () => {
    dispatch(storeName(name));
    dispatch(setIsNameEntered(true));
    // setShowClassOverlay(false);
    // dispatch(showOverlayMode(!showOverlay));
  };
  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/login/newUser/newUser1.png"
                            height={250}
                            width={600}
                            alt="mob-ver-1"
                            className=" max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col md={12}>
                                <h2 className="otp_heading">Tell us your name, our next topper!</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="otp_mob_input">
                                    <label className="">
                                        enter your mobile number
                                    </label>
                                    <div className="otp_mobile_input">
                                        <input
                                            className="appearance-none border-l-0 flex-grow p-2 focus:outline-none"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
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
                                            !name ? "opacity-50 cursor-not-allowed" : ""
                                          }`}
                                          onClick={storeNameHandler}
                                          disabled={!name}
                                    >
                                        continue <span>&#8599;</span>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default EnterName;
