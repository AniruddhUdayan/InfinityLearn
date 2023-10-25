import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
import { sendSQSMsg } from "../../services/userServics";
import * as moment from 'moment';
const FinalSuccess = () => {
    const studentPortal = process.env.studentPortal;
    const startLearning = ()=>{
      window.open(`${studentPortal}`,'_self');
    }
    const bookSessionData = useSelector(
        (state) => state.bookSessionData
      );
useEffect(()=>{
sendLSQ();
},[])
      const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
    const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
    const handleSign  = ()=>{
        analytics.track('form_closed',{
            page_url:window.location.href,
            platform:'Web',
        })
    }
    const sendLSQ = async ()=>{
  let Fields = {
    mx_Grade : Number(userDetails?.grade?.name?.replace(/[^0-9]/g, '')),
    mx_Exam: userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase(),
    mx_Primary_Target_Exam : userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase(),
    mx_Custom_6 : "website",
    mx_Parent_Or_Student: bookSessionData?.relations?.join(','),
    mx_Date_and_Time: `${bookSessionData?.selectedDate?.toLocaleDateString('en-GB', { weekday: 'long' ,day: 'numeric', month: 'long' })}, ${bookSessionData?.selectedTime}`,
    mx_Device: bookSessionData?.device,
    mx_Languages: bookSessionData?.language
  }
  let Payload = {
    "ActivityDateTime": moment().utc().format("YYYY-MM-DD HH:mm:ss"),
    "Fields": Fields,
    "FirstName": userDetails?.firstName,
    "LastName": userDetails?.lastName,
    "environment": 'staging',
    "phone": userDetails?.phone,
    "productId": 1,
    "Source": "IL Website",
    "type": "Lead",
  }
  sendSQSMsg(Payload);
}
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/login/mobVer/SuccessImage.webp"
                            alt="mob-ver-1"
                            className="side_image max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='right_box'>
                        <ProgressTabs />
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="success_Icon">
                                    <Image
                                        src="/bookSession/sessionSuccess.svg"
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
                                            <Image className='sscIcon' src='/bookSession/dateIcon.svg' alt='dateicon' />
                                            <span className='sscText'>{bookSessionData?.selectedDate?.toLocaleDateString('en-GB', { weekday: 'long' ,day: 'numeric', month: 'long' })} </span>
                                        </li>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/timeIcon.svg' alt='timeicon' />
                                            <span className='sscText'>{bookSessionData?.selectedTime}</span>
                                        </li>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/classIcon.svg' alt='classicon' />
                                            <span className='sscText'>class {userGrade} - {userExam} Preparation </span>
                                        </li>
                                        <li>
                                            <Image className='sscIcon' src='/bookSession/languageIcon.svg' alt='classicon' />
                                            <span className='sscText'>{bookSessionData?.language} </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="bss_button_row">
                                    <button onClick={startLearning} className={`otp_button`}>sign in <span>&#8599;</span></button>
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
                        <button onClick={startLearning} className={`otp_button`}>
                            sign in <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalSuccess
