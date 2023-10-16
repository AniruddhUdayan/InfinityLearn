"use client";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gradeStyles from './css/selectGrade.module.css';
import { useRouter } from 'next/navigation'
import {setShowGradePopup, setSelectedGrade} from '../../store/HomePage/examGradeSelection';
function SelectGradePopup() {
  const showPopup = useSelector((state) => state.examGradeSelection.showGradePopup);
  const grades = useSelector((state) => state.examGradeSelection.grades);
  const dispatch = useDispatch();
  const router = useRouter()

  const examPageRedirection = (grade)=>{
    console.log(grade);
    dispatch(setSelectedGrade(grade));
    window.open('/exam','_self');
  }
  return (
    <div>

      <Modal show={showPopup} centered>
        <Modal.Header className={gradeStyles.modal_header} closeButton onClick={() => { dispatch(setShowGradePopup(!showPopup)); }}>
        </Modal.Header>
        <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={12}>
                <h5 className={gradeStyles.ch_grtitle}>Please select class</h5>
                </Col>
              </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className={gradeStyles.select_gradegrid}>
                            {
                                grades.map((g,index)=>(
                                    <button onClick={()=>examPageRedirection(g)} className={gradeStyles.slt_grbtn} key={index} type='button'>{g == 13 ? 'Class 12 Pass' : `Class ${g}`}</button>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default SelectGradePopup;