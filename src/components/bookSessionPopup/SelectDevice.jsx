"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "../../store/BookSession/BookSessionData";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
const devices = [
    {
        icon:"/bookSession/laptopIcon.svg" ,
        text:"laptop"
    },
    {
        icon:"/bookSession/tabletIcon.png",
        text:"tablet"
    },
    {
        icon:"/bookSession/mobileIcon.svg",
        text:"mobile"
    },
    {
        icon:"/bookSession/searchIcon.svg",
        text:"search"
    }
]
const SelectDevice = () => {
    const [selectedDevice, setSelectedDevice] = useState('');
    const dispatch = useDispatch();
    const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
    const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
    const handleChange = (device)=>{
        setSelectedDevice(device);
    }

    const handleContinue = () => {
        dispatch(setDevice(selectedDevice?.text));
        dispatch(setComponentToShow("MoreDetails"));
        analytics.track('personalisation_details_entered_2',{
            page_url:window.location.href,
            platform:'Web',
            grade: Number(userGrade),
            target_exam: userExam,
            phone: userDetails?.phone,
            first_name: userDetails?.firstName,
            last_name:userDetails?.lastName,
        });
    }
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
                        <div className="right_box">
                        <ProgressTabs />
                            <Row>
                                <Col md={12}>
                                    <h2 className="session_heading">How will you be attending the session?</h2>
                                    <p className="session_description">please select the device that you feel comfortable attending the class from.</p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={12} md={12}>
                                    <div className="device_list_box">
                                        {
                                            devices.map((de,index)=>(
                                                <div className={`device_lists ${selectedDevice == de ? 'active' :''}`} key={index} onClick={()=>handleChange(de)}>
                                                    <Image src={de?.icon} alt={de?.icon} />
                                                    <p className="device_Icon_text">{de?.text}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row className="button_mobile_none">
                                <Col xs={12} md={12}>
                                    <div className="otp_button_row">
                                        <button onClick={handleContinue}
                                            className={`otp_button`}
                                            disabled={selectedDevice == ''}
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
                            disabled={selectedDevice ==''}
                        >
                            continue <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDevice
