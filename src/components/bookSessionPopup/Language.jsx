"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/BookSession/BookSessionData";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
const languages = ['telugu','english','hindi','kannada','tamil']
const Language = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const dispatch = useDispatch();
    const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
    const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
    const handleChange = (event)=>{
        const value = event.target.value;
        setSelectedLanguage(value);
    }

    const handleContinue = () => {
        dispatch(setLanguage(selectedLanguage));
        dispatch(setComponentToShow("SelectDevice"));
        analytics.track('personalisation_details_entered_1',{
            page_url:window.location.href,
            platform:'Web',
            grade: Number(userGrade),
            target_exam: userExam,
            phone: userDetails?.phone,
            first_name: userDetails?.firstName,
            last_name:userDetails?.lastName,
            language: selectedLanguage
        });
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/login/mobVer/mobVer2.webp"
                            height={250}
                            width={600}
                            alt="mob-ver-1"
                            className=" max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                    <ProgressTabs />
                        <div className="right_box">
                            <Row>
                                <Col md={12}>
                                    <h2 className="session_heading">Do you have any language preferences?</h2>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={12} md={12}>
                                    <label className="session_label">language preference</label>
                                    <div className="UNFAPP-form-fld-row">
                                         <div className="UNFAPP-form-fld-wrp UNFAPP-wthicon">
                                            <select className="UNFAPP-form-fld" value={selectedLanguage} onChange={handleChange}>
                                                <option value="" selected disabled>select language</option>
                                                {
                                                    languages.map((l,index)=>(
                                                        <option key={index}>{l}</option>
                                                    ))
                                                }
                                            </select>
                                            </div>   
                                    </div>
                                </Col>
                            </Row>
                            <Row className="button_mobile_none">
                                <Col xs={12} md={12}>
                                    <div className="otp_button_row">
                                        <button onClick={handleContinue}
                                            className={`otp_button`}
                                            disabled={selectedLanguage == ''}
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
                        <button onClick={handleContinue}
                            className={`otp_button`}
                            disabled={selectedLanguage ==''}
                        >
                            continue <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language
