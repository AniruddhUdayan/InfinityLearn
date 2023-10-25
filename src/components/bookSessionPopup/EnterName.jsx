"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeName} from "../../store/BookSession/BookSessionNewUser";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {setComponentToShow} from '../../store/BookSession/BookSessionPopup';
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
function EnterName() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const storeNameHandler = () => {
    dispatch(storeName(name));
    dispatch(setComponentToShow('SelectGrade'));
    analytics.track("name_entered", {
        page_url: window.location.href,
        first_name: name,
        platform:'Web'
      });
  };

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/login/newUser/newUser1.webp"
                            alt="mob-ver-1"
                            className="side_image max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="right_box">
                    <ProgressTabs />
                        <Row>
                            <Col md={12}>
                                <h2 className="otp_heading">Tell us your name, our next topper!</h2>
                            </Col>
                        </Row>
                        <Row className="margin_100">
                            <Col xs={12} md={12}>
                                <div className="otp_mob_input">
                                    <label className="">
                                        enter your name
                                    </label>
                                    <div className="name_input">
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
                        <Row className="button_mobile_none">
                            <Col xs={12} md={12}>
                                <div className="otp_button_row single_input_btn">
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
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="marketpr_show">
                <div className="feslofrbottom">
                    <div className="pac_festpr_flexshow">
                        <button
                            className={`otp_button ${!name ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            onClick={storeNameHandler}
                            disabled={!name}
                        >
                            continue <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EnterName;
