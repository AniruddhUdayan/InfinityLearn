"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate, setSelectedTime } from "../../store/BookSession/BookSessionData";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';

const slots = [
    {
        date: 'thu 3 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    },
    {
        date: 'fir 4 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    },
    {
        date: 'sat 5 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    },
    {
        date: 'sun 6 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    },
    {
        date: 'mon 7 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    },
    {
        date: 'tus 8 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    },
    {
        date: 'web 10 Aug',
        timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
    }
]

const DateTimeSelection = () => {
    const [selectedDate, setDate] = useState("");
    const [selectedTime, setTime] = useState("");
    const [timeSlots, setTimeSlots] = useState([]);
    const dispatch = useDispatch();
    const handleDate = (date)=>{
        setDate(date);
        setTimeSlots(date?.timeslots);
        setTime("");
    }

    const handleTime = (time)=>{
        setTime(time);
    } 

    const handleContinue = ()=>{
        dispatch(setSelectedDate(selectedDate));
        dispatch(setSelectedTime(selectedTime));
        dispatch(setComponentToShow("Relation"));
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/bookSession/datetime.webp"
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
                                    <h2 className="session_heading">When would you like to speak to the counsellor?</h2>
                                    <p className="session_description">please pick your suitable date and time for the call.</p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={12} md={12}>
                                    <label className="session_label">select date</label>
                                    <div className="date_selection_box">
                                        {slots.map((item, index) => (
                                            <button onClick={()=>handleDate(item)} key={index} className={`date_selection_btn ${selectedDate == item ? 'active': ''}`}>{item?.date}</button>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={12} md={12}>
                                 { timeSlots.length > 0 && <label className="session_label">select time</label>}
                                    <div className="time_selection_box">
                                        {timeSlots?.map((time, index) => (
                                            <button onClick={()=>handleTime(time)} key={index} className={`time_selection_btn ${selectedTime == time ? 'active': ''}`}>{time}</button>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row className="button_mobile_none">
                                <Col xs={12} md={12}>
                                    <div className="otp_button_row">
                                        <button onClick={handleContinue}
                                            className={`otp_button`}
                                            disabled={selectedTime == ''}
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
                            disabled={selectedTime == ''}
                        >
                            continue <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateTimeSelection
