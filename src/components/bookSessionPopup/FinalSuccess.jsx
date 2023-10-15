import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import ProgressTabs from './ProgressTabs';
const FinalSuccess = () => {
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
                        {/* <Row>
                            <Col xs={12} md={12}>
                                <ProgressTabs />
                            </Col>
                        </Row> */}
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
                                            <img className='sscIcon' src='/bookSession/dateIcon.png' alt='dateicon'></img>
                                            <span className='sscText'>thursday, 3 august </span>
                                        </li>
                                        <li>
                                            <img className='sscIcon' src='/bookSession/timeIcon.png' alt='timeicon'></img>
                                            <span className='sscText'>1 pm</span>
                                        </li>
                                        <li>
                                            <img className='sscIcon' src='/bookSession/classIcon.png' alt='classicon'></img>
                                            <span className='sscText'>class 11 - NEET Preparation </span>
                                        </li>
                                        <li>
                                            <img className='sscIcon' src='/bookSession/languageIcon.svg' alt='classicon'></img>
                                            <span className='sscText'>english </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="bss_button_row">
                                    <button className={`otp_button`}>sign in <span>&#8599;</span></button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="marketpr_show">
                <div className="feslofrbottom">
                    <div className="pac_festpr_flexshow">
                        <button className={`otp_button`}>
                            sign in <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalSuccess
