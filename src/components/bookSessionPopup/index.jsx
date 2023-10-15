"use client";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { setIsPopupShow } from "../../store/BookSession/BookSessionPopup";
import SendOtp from './SendOtp';
import OtpVerification from './OtpVerification';
import Success from './Success';
import EnterName from './EnterName';
import SelectGrade from './SelectGrade';
import SelectExam from './SelectExam';
import DateTimeSelection from './DateTimeSelection';
import Relation from './Relation';
import SessionSuccess from './SessionSuccess';
import Language from './Language';
import SelectDevice from './SelectDevice';
import MoreDetails from './MoreDetails';
import FinalSuccess from './FinalSuccess';
import './css/sessionpopup.css';

function BookSessionPopup() {
  const isPopupShow = useSelector((state) => state.bookSessionPopup.isPopupShow);
  const componentName = useSelector((state) => state.bookSessionPopup.componentName);
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
      case 'DateTimeSelection':
        return <DateTimeSelection />;
      case 'Relation':
        return <Relation />;
      case 'SessionSuccess':
        return <SessionSuccess />;
      case 'Language':
        return <Language />;
      case 'SelectDevice':
        return <SelectDevice />;
      case 'MoreDetails':
        return <MoreDetails />;
      case 'FinalSuccess':
        return <FinalSuccess />;
      case 'Success':
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal show={isPopupShow} size="lg" centered className='session_popup' aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton onClick={() => { dispatch(setIsPopupShow(!isPopupShow)); }}>
        </Modal.Header>
        <Modal.Body className="session_body">
          {renderComponent()}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookSessionPopup;
