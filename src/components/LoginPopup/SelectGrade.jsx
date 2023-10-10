"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeClass, setIsGradeSelected } from "../../store/newUserSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BiArrowBack } from "react-icons/bi";
import { getGrades } from "../../services/userServics";

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);
    const showOverlay = useSelector(
      (state) => state.mobileVerification.showOverlay
    );
    const [name, setName] = useState("");
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
      dispatch(storeClass(stdClass));
    };
    const [showCourse, setShowCourse] = useState(false);
  
    const dispatch = useDispatch();
    // const storeNameHandler = () => {
    //   dispatch(storeClass(name));
    // };
    const handleToggleOverlay = () => {
      dispatch(showOverlayMode(!showOverlay));
    };
    const handleToggleOverlay1 = () => {
      dispatch(showOverlayMode(!showOverlay));
      setShowCourse(false);
    };
    const handleContinue = () => {
      // if (selectedClass) {
      //   setShowCourse(true);
      // }
      dispatch(setIsGradeSelected(true))
    };
    const handleHideCourse = () => {
      console.log("clicked ");
      setShowCourse(false);
    };
  
    function handleBack1() {}
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/login/newUser/newUser2.png"
                            height={250}
                            width={600}
                            alt="mob-ver-1"
                            className=" max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col md={12}>
                                <h2 className="otp_heading">Every champion sets a goal. Let's define yours</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div>
                                <label className="class_lable">select class</label>
                                    <div className="grid grid-cols-5 gap-4 ">
                                        {grades.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`border rounded-lg p-3 items-center   cursor-pointer hover:bg-gray-200 ${selectedClass === item ? "bg-blue-500 text-white" : ""
                                                    }`}
                                                onClick={() => handleClassClick(item)}
                                            >
                                                <span className="mx-auto max-md:ml-1 ">{item?.name}</span>
                                            </div>
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
                    </Col>
                </Row>
            </Container>
            <div class="marketpr_show">
                <div class="feslofrbottom">
                    <div class="pac_festpr_flexshow">
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
