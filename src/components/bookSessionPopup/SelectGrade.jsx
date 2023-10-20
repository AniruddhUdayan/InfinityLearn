"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeClass } from "../../store/BookSession/BookSessionNewUser";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getGrades } from "../../services/userServics";
import {setComponentToShow} from '../../store/BookSession/BookSessionPopup';
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
const SelectGrade = () => {
    const [grades, setGrades] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
  
    useEffect(()=>{
      async function Grades() {
        try {
          const response = await getGrades();
          response.map(g=>{
            g.name = g?.name == '13th' ? '12+' : g?.name?.replace(/[^0-9]/g, '');
          })
          console.log(response);
          setGrades(response)
        } catch (error) {
          console.error('Error fetching data:', error.message);
        } finally {
  
        }
      }
  
      Grades();
  
    },[])
  
    const handleClassClick = (stdClass) => {
      setSelectedClass(stdClass);
    };
  
    const dispatch = useDispatch();
    const handleContinue = () => {
        dispatch(storeClass(selectedClass));
      dispatch(setComponentToShow('SelectExam'));
      analytics.track("grade_entered", {
        page_url: window.location.href,
        first_name: Number(selectedClass?.name?.replace(/[^0-9]/g, '')),
        platform:'Web'
      });
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img
                            src="/login/newUser/newUser2.webp"
                            alt="mob-ver-1"
                            className="side_image max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="right_box">
                        <ProgressTabs />
                        <Row>
                            <Col md={12}>
                                <h2 className="otp_heading">Every champion sets a goal. Let's define yours</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div>
                                <label className="class_lable">select class</label>
                                    <div className="select_grade_box">
                                        {grades.map((item, index) => (
                                        <button key={index} className={`select_grade ${selectedClass === item ? "active" : ""}`} onClick={() => handleClassClick(item)}>{item?.name}</button>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="button_mobile_none">
                            <Col xs={12} md={12}>
                                <div className="otp_button_row">
                                    <button
                                        className={`otp_button ${!selectedClass ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        disabled={!selectedClass}
                                        onClick={handleContinue}
                                    >
                                        continue <span>&#8599;</span>
                                    </button>
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
                        <button
                            className={`otp_button ${!selectedClass ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={!selectedClass}
                            onClick={handleContinue}
                        >
                            continue <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectGrade
