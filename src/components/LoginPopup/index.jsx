"use client";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { showOverlayMode } from "../../store/mobVeriSlice";
import SendOtp from './SendOtp';
import OtpVerification from './OtpVerification';
import Success from './Success';
import EnterName from './EnterName';
import SelectGrade from './SelectGrade';
import SelectExam from './SelectExam';
import './css/loginpopup.css';

function LoginPopup() {
  const showOverlay = useSelector((state) => state.mobileVerification.showOverlay);
  const componentName = useSelector((state) => state.componentToShow.componentName);
  const dispatch = useDispatch();

  const renderComponent = () => {
    switch (componentName) {
      case 'SendOtp':
        return <SendOtp />;
      case 'OtpVerification':
        return <OtpVerification />;
      case 'EnterName':
        return <EnterName />;
      case 'SelectGrade':
        return <SelectGrade />;
      case 'SelectExam':
        return <SelectExam />;
      case 'Success':
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal show={showOverlay} size="lg" centered className='login_popup' aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton onClick={() => { dispatch(showOverlayMode(!showOverlay)); }}>
        </Modal.Header>
        <Modal.Body className="login_body">
          {renderComponent()}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginPopup;
