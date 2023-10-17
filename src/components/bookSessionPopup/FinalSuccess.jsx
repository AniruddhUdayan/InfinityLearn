import React from 'react'
import { useSelector } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
const FinalSuccess = () => {
    const date = useSelector(
      (state) => state.bookSessionData.selectedDate
    );
    const time = useSelector(
      (state) => state.bookSessionData.selectedTime
    );
    const language = useSelector(
        (state) => state.bookSessionData.language
      );
      const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
    const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
    const handleSign  = ()=>{
        analytics.track('form_closed',{
            page_url:window.location.href,
            platform:'Web',
        })
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
                        <div className='right_box'>
                        <ProgressTabs />
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
                        <Row>
                            <Col md={12}>
                                <h2 className="session_success_heading">
                                Fantastic! all done!</h2>
                                <p className='session_success_text'>We’ll get in touch with your personalized
                                    session soon!</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className='session_success_card'>
                                    <ul className='session_success_card_list'>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/dateIcon.png' alt='dateicon'></Image>
                                            <span className='sscText'>{date} </span>
                                        </li>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/timeIcon.png' alt='timeicon'></Image>
                                            <span className='sscText'>{time}</span>
                                        </li>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/classIcon.png' alt='classicon'></Image>
                                            <span className='sscText'>class {userGrade} - {userExam} Preparation </span>
                                        </li>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/languageIcon.svg' alt='classicon'></Image>
                                            <span className='sscText'>{language} </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="bss_button_row">
                                    <button onClick={handleSign} className={`otp_button`}>sign in <span>&#8599;</span></button>
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
                        <button onClick={handleSign} className={`otp_button`}>
                            sign in <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalSuccess
