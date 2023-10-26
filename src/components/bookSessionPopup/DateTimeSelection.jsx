"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate, setSelectedTime } from "../../store/BookSession/BookSessionData";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
// const slots = [
//     {
//         date: 'thu 3 Aug',
//         daymonth:'3 Aug',
//         day:'thu',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     },
//     {
//         date: 'fir 4 Aug',
//         daymonth:'4 Aug',
//         day:'fri',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     },
//     {
//         date: 'sat 5 Aug',
//         daymonth:'5 Aug',
//         day:'sat',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     },
//     {
//         date: 'sun 6 Aug',
//         daymonth:'6 Aug',
//         day:'Aug',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     },
//     {
//         date: 'mon 7 Aug',
//         daymonth:'7 Aug',
//         day:'mon',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     },
//     {
//         date: 'tus 8 Aug',
//         daymonth:'8 Aug',
//         day:'tus',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     },
//     {
//         date: 'web 10 Aug',
//         daymonth:'10 Aug',
//         day:'web',
//         timeslots: ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
//     }
// ]
const timeSlots = ['12 pm', '1 pm', '2 pm', '3 pm', '4 pm']
const DateTimeSelection = () => {
    const [selectedDate, setDate] = useState(null);
    const [selectedTime, setTime] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
    const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
    const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
    const nextSevenDays = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + index);
        return date;
      });
    const handleDate = (date)=>{
        setDate(date);
        setTime("");
    }

    const handleTime = (time)=>{
        setTime(time);
    } 

    const handleContinue = ()=>{
        dispatch(setSelectedDate(new Date(selectedDate)));
        dispatch(setSelectedTime(selectedTime));
        dispatch(setComponentToShow("Relation"));
        analytics.track('book_session_details_entered_1',{
            page_url:window.location.href,
            platform:'Web',
            grade: Number(userGrade),
            target_exam: userExam,
            phone: userDetails?.phone,
            first_name: userDetails?.firstName,
            last_name:userDetails?.lastName,
            couselling_date: selectedDate?.toLocaleDateString('en-GB', { weekday: 'long' ,day: 'numeric', month: 'long' })
        })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img
                            src="/bookSession/datetime.webp"
                            alt="mob-ver-1"
                            className="side_image max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="right_box">
                    <ProgressTabs />
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
                                        {nextSevenDays.map((date, index) => (
                                            // <button onClick={()=>handleDate(item)} key={index} className={`date_selection_btn ${selectedDate == item ? 'active': ''}`}>{item?.date}</button>
                                            <div onClick={()=>handleDate(date)} key={index} className={`date_selection_btn ${selectedDate?.toLocaleDateString('en-GB', { day: 'numeric'}) === date?.toLocaleDateString('en-GB', { day: 'numeric'}) ? 'active': ''}`}>
                                                <p className="date_day">{date.toLocaleDateString('en-GB', { weekday: 'short' })}</p>
                                                <p className="day_month">{date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={12} md={12}>
                                 {<label className="session_label">select time</label>}
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
