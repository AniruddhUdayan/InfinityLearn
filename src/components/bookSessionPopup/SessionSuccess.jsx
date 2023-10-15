import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
const SessionSuccess = () => {
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
                        </ul>
                    </div>
                    <p className='sscb_text'>you can still personalize your session in <span className='sscb_span'>my sessions</span> on your profile</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                    <div className="bss_button_row">
                    <button className={`otp_button`}>start learning <span>&#8599;</span></button>
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
                        start learning <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SessionSuccess
