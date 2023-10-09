"use client";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { showOverlayMode } from "../../store/mobVeriSlice";
import { setIsExitingUser } from "../../store/mobVeriSlice";
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
      const phoneNumber = useSelector(
        (state) => state.mobileVerification.phoneNumber
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
      const [isExitingUser, setExitingUser] = useState(false);
      const [loading, setLoading] = useState(true);
      useEffect(()=>{
        async function verifyMobileNumber() {
          let body = {
            isdCode:'+91',
            phone: phoneNumber
          }
          try {
            const userData = await verifyPhone(body);
            setExitingUser(userData?.existingUser);
            dispatch(setIsExitingUser(userData?.existingUser));
            console.log(isExitingUser)
          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            setLoading(false);
          }
        }
    
        verifyMobileNumber();
      },[])
  return (
<>
<Modal show={showOverlay} size="lg" centered aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton onClick={()=>{dispatch(showOverlayMode(!showOverlay));}}>
      </Modal.Header>
      <Modal.Body className="grid-example">
        {isExitingUser && !isOtpSent && !isOtpVerified && <SendOtp />}
        {isOtpSent && !isOtpVerified && <OtpVerification />}
        {isOtpVerified && <Success />}
        {!isExitingUser && !isNameEntered && !isGradeSelected && <EnterName />}
        {isNameEntered && !isGradeSelected && <SelectGrade />}
        {isGradeSelected && <SelectExam />}
      </Modal.Body>
    </Modal>
</>
  );
}


export default LoginPopup