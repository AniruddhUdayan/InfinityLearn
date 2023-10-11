"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeCourse, setIsExamSelected } from "../../store/newUserSlice";
import { setIsOtpSent } from "../../store/mobVeriSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaCheck } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { getExams, sendOtp } from "../../services/userServics";
import { allowedExamNamesCT } from "../../services/app.constants";

function Card(props) {
    const { data, isSelected, onClick } = props;
    return (
        <div
            className={`flex cursor-pointer p-2 border-2 rounded-xl items-center ${isSelected ? "exam_card_active" : "bg-white"
                }`}
            onClick={onClick}
        >
            <Image src="./iit.svg" width={50} height={50} alt="card svg" />
            <div className="flex flex-col ml-4 flex-grow items-start justify-center">
                <div className="exam_card_head">{data.name}</div>
                <div className="exam_card_dec">{data.description}</div>
            </div>
            <div
                className={`ml-4 w-6 h-6 flex items-center justify-center border rounded-full ${isSelected ? "exam_card_active_tick" : "bg-white"
                    }`}
            >
                {isSelected && <FaCheck color="white" />}
            </div>
        </div>
    );
}
const SelectExam = () => {
    const showOverlay = useSelector(
        (state) => state.mobileVerification.showOverlay
    );
    const [name, setName] = useState("");
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedExams, setSelectedExams] = useState([]);
    const phoneNumber = useSelector(
        (state) => state.mobileVerification.phoneNumber
    );
    const userName = useSelector(
        (state) => state.newUser.name
    );
    const userGrade = useSelector(
        (state) => state.newUser.class?.name?.replace(/[^0-9]/g, '')
    );
    const selectedGrade = useSelector(
        (state) => state.newUser.class
    );
    const [exams, setExams] = useState([]);
    console.log(userGrade)
    useEffect(() => {
        async function Exams() {
            try {
                const response = await getExams();
                const exams = await response?.filter(ex => {
                    const isCBSE = ex?.name?.replace(/[^a-z]/ig, '').toUpperCase().includes("CBSE");
                    if (isCBSE) {
                        ex.displayName = "CBSE";
                    }
                    if (isCBSE) {
                        return (allowedExamNamesCT[userGrade]?.indexOf('CBSE') > -1);
                    } else {
                        return (allowedExamNamesCT[userGrade]?.indexOf(ex?.name?.replace(/[^a-z]/ig, '').toUpperCase()) > -1);
                    }
                }).sort((a, b) => allowedExamNamesCT[userGrade]?.indexOf(a?.name?.replace(/[^a-z]/ig, '').toUpperCase()) < allowedExamNamesCT[userGrade]?.indexOf(b?.name?.replace(/[^a-z]/ig, '').toUpperCase()) ? -1 : 1);
                setExams(exams)
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {

            }
        }

        Exams();

    }, [userGrade])

    const dispatch = useDispatch();
    // const storeNameHandler = () => {
    //   dispatch(storeClass(name));
    // };
    // const handleToggleOverlay = () => {
    //     dispatch(showOverlayMode(true));
    //     return <MobileVerification />;
    // };
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleClassClick = (course) => {
        if (selectedCourses.includes(course.name)) {
            setSelectedCourses((prevCourses) =>
                prevCourses.filter((c) => c !== course.name)
            );
        } else {
            setSelectedCourses((prevCourses) => [...prevCourses, course.name]);
        }
    };
    const selectedTargetExamp = (exam) => {
        const index = selectedExams.findIndex((ind) => ind.examId === exam.examId);
        if (index > -1) {
          const updatedExams = [...selectedExams];
          updatedExams.splice(index, 1);
          setSelectedExams(updatedExams);
        } else {
          setSelectedExams([...selectedExams, exam]);
        }
      };
    const handleContinue = async () => {
        dispatch(storeCourse(selectedExams));
        dispatch(setIsExamSelected(true));
        let body = {
            isdCode:'+91',
            firstName: userName,
            lastName:'ildefaultfield',
            gradeId: selectedGrade?.gradeId,
            phone: phoneNumber,
            whatsappConsent:true
          }
          try {
            const response = await sendOtp(body);
            console.log(response);
            dispatch(setIsOtpSent(true));
          } catch (error) {
            console.error('Error fetching data:', error.message);
          } finally {
            // setLoading(false);
          }
      };
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
                        <Row>
                            <Col md={12}>
                                <h2 className="otp_heading">Every champion sets a goal. Let's define yours</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="select_exam_row">
                                    <label className="class_lable">
                                        select learning goal (choose at least one)
                                    </label>
                                    <div className="grid grid-cols-1 gap-4 select_exam_scroll">
                                        {exams.map((item, index) => (
                                            <Card
                                                key={index}
                                                data={item}
                                                isSelected={selectedCourses.includes(item.name)}
                                                onClick={() => {handleClassClick(item);selectedTargetExamp(item)}}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="button_mobile_none">
                            <Col xs={12} md={12}>
                                <div className="otp_button_row">
                                    <button
                                        className={`otp_button ${
                                            selectedCourses.length > 0
                                              ? "bg-blue-500 text-white"
                                              : "bg-blue-200 text-gray-400 cursor-not-allowed"
                                          }`}
                                          disabled={selectedCourses.length === 0}
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
            <div className="marketpr_show">
                <div className="feslofrbottom">
                    <div className="pac_festpr_flexshow">
                        <button
                            className={`otp_button ${selectedCourses.length > 0
                                    ? "bg-blue-500 text-white"
                                    : "bg-blue-200 text-gray-400 cursor-not-allowed"
                                }`}
                            disabled={selectedCourses.length === 0}
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

export default SelectExam
