"use client";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { showOverlayMode, setIsExitingUser,setIsPhoneVerified } from "../../store/mobVeriSlice";
import {verifyPhone} from '../../services/userServics';
import SendOtp from './SendOtp';
import OtpVerification from './OtpVerification';
import Success from './Success';
import EnterName from './EnterName';
import SelectGrade from './SelectGrade';
import SelectExam from './SelectExam';
import './css/loginpopup.css';
function LoginPopup(props) {
    const showOverlay = useSelector(
        (state) => state.mobileVerification.showOverlay
      );
      const isExitingUser = useSelector(
        (state) => state.mobileVerification.isExitingUser
      );
      const phoneNumber = useSelector(
        (state) => state.mobileVerification.phoneNumber
      );
      const isPhoneVerified = useSelector(
        (state) => state.mobileVerification.isPhoneVerified
      );
      const isOtpSent = useSelector(
        (state) => state.mobileVerification.isOtpSent
      );
      const isOtpVerified = useSelector(
        (state) => state.mobileVerification.isOtpVerified
      );
      const isNameEntered = useSelector(
        (state) => state.newUser.isNameEntered
      );
      const isGradeSelected = useSelector(
        (state) => state.newUser.isGradeSelected
      );
      const isExamSelected = useSelector(
        (state) => state.newUser.isExamSelected
      );
      const dispatch = useDispatch();
      const [loading, setLoading] = useState(true);
      useEffect(()=>{
        async function verifyMobileNumber() {
          let body = {
            isdCode:'+91',
            phone: phoneNumber
          }
          try {
            const userData = await verifyPhone(body);
            dispatch(setIsExitingUser(userData?.existingUser));
            dispatch(setIsPhoneVerified(!isPhoneVerified));
            console.log(isExitingUser)
          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            setLoading(false);
          }
        }
    
        if(phoneNumber.length == 10 && !isPhoneVerified){
          verifyMobileNumber();
        }
      },[])
  return (
<>
<Modal className='modal-lg modal-dialog-centered' show={showOverlay} size="lg" centered aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton onClick={()=>{dispatch(showOverlayMode(!showOverlay));}}>
      </Modal.Header>
      <Modal.Body className="grid-example">
        {!isPhoneVerified && !isOtpSent && <SendOtp />}
        {isPhoneVerified && isOtpSent && !isOtpVerified && <OtpVerification />}
        {isPhoneVerified && !isExitingUser && !isNameEntered && <EnterName />}
        {isNameEntered && !isGradeSelected && <SelectGrade />}
        {isGradeSelected && !isExamSelected && <SelectExam />}
        {isOtpVerified && <Success />}
      </Modal.Body>
    </Modal>
</>
  );
}


export default LoginPopup