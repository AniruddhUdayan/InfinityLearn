"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';
import { setIsPersonalizeStarted } from '../../store/BookSession/BookSessionData';
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
const SessionSuccess = () => {
  const dispatch = useDispatch();
  const date = useSelector(
    (state) => state.bookSessionData.selectedDate
  );
  const time = useSelector(
    (state) => state.bookSessionData.selectedTime
  );
  const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
  const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
  const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
const [isSkipNow, setSkipNow] = useState(false)

const handleSkipNow = ()=>{
  setSkipNow(!isSkipNow);
  analytics.track('skip_for_now_clicked',{
    page_url:window.location.href,
    platform:'Web',
    grade: Number(userGrade),
    target_exam: userExam
})
}

const handlePersonalized = ()=>{
  dispatch(setIsPersonalizeStarted(true));
  dispatch(setComponentToShow("Language"));
  analytics.track('personalisation_clicked',{
    page_url:window.location.href,
    platform:'Web',
    grade: userGrade,
    target_exam: userExam
})
}
  return (
    <div>
             <Container>
          <Row>
            <Col xs={12} md={6}>
            <Image
          src="/bookSession/relation.webp"
          height={250}
          width={600}
          alt="mob-ver-1"
          className=" max-md:hidden"
        />
            </Col>
            <Col xs={12} md={6}>
            <ProgressTabs />
                { isSkipNow &&             
              <Row>
                <Col xs={12} md={12}>
                  <div className="success_Icon">
                    <Image
                      src="/bookSession/sessionSuccess.png"
                      height={200}
                      width={200}
                      alt="mob-ver-1"
                    />
                  </div>
                </Col>
              </Row>
              }
              <Row className={`${!isSkipNow ? 'session_skip' :''}`}>
                <Col md={12}>
                    <h2 className="session_success_heading">
                    Super! session has <br /> been booked</h2>
                    <p className='session_success_text'>details will be sent to whatsapp and our academic counsellor will get in touch.</p>
                </Col>
              </Row>
              <Row>
                 <Col xs={12} md={12}>
                    <div className='session_success_card'>
                        <ul className='session_success_card_list'>
                            <li>
                                <img className='sscIcon' src='/bookSession/dateIcon.png' alt='dateicon'></img>
                                <span className='sscText'>{date} </span>
                            </li>
                            <li>
                                <img className='sscIcon' src='/bookSession/timeIcon.png' alt='timeicon'></img>
                                <span className='sscText'>{time}</span>
                            </li>
                            <li>
                                <img className='sscIcon' src='/bookSession/classIcon.png' alt='classicon'></img>
                                <span className='sscText'>class {userGrade} - {userExam} Preparation </span>
                            </li>
                        </ul>
                    </div>
                    <p className='sscb_text'>you can still personalize your session in <span className='sscb_span'>my sessions</span> on your profile</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                    {
                      !isSkipNow &&
                      <div className="bss_button_row">
                      <button onClick={handlePersonalized} className={`otp_button`}>personalize you session <span>&#8599;</span></button>
                      <button onClick={handleSkipNow} className={`skip_button`}>skip for now</button>
                      </div>
                    }
                    {
                      isSkipNow && 
                      <div className="bss_button_row">
                      <button  className={`otp_button`}>start learning <span>&#8599;</span></button>
                      </div>
                    }
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      <div className="marketpr_show">
        <div className="feslofrbottom">
            {
              !isSkipNow && 
              <div className="pac_festpr_flexshow">
              <button onClick={handlePersonalized} className={`otp_button`}> personalize you session <span>&#8599;</span></button>
              <button onClick={handleSkipNow} className={`skip_button`}>skip for now</button>
            </div>
            }

            {
              isSkipNow &&
              <div className="pac_festpr_flexshow">
              <button className={`otp_button`}> start learning <span>&#8599;</span></button>
            </div>
            }
        </div>
      </div>
    </div>
  )
}

export default SessionSuccess
