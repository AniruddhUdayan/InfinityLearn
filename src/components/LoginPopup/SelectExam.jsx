"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeClass, setIsExamSelected } from "../../store/newUserSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaCheck } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { getExams } from "../../services/userServics";
import { allowedExamNamesCT } from "../../services/app.constants";

function Card(props) {
    const { data, isSelected, onClick } = props;
    return (
        <div
            className={`flex cursor-pointer p-2 border-2 rounded-xl items-center ${isSelected ? "bg-green-400 bg-opacity-25" : "bg-white"
                }`}
            onClick={onClick}
        >
            <Image src={data.svg} width={50} height={50} alt="card svg" />
            <div className="flex flex-col ml-4 flex-grow items-start justify-center">
                <div>{data.name}</div>
                <div>{data.description}</div>
            </div>
            <div
                className={`ml-4 w-6 h-6 flex items-center justify-center border rounded-full ${isSelected ? "bg-green-500" : "bg-white"
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
    const [selectedExams, setselectedExams] = useState([]);
    // const userGrade = useSelector(
    //     (state) => state.newUser.class?.name?.replace(/[^0-9]/g, '')
    // );
    const userGrade = 11;
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
    const handleToggleOverlay = () => {
        dispatch(showOverlayMode(true));
        return <MobileVerification />;
    };
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
    const  selectedTargetExamp = (exam) => {
        const selectedObject = exams.find((item) => item.examId == exam.examId);

        if (selectedObject) {
            setselectedExams((prevArray) => [...prevArray, selectedObject]);
        }
        console.log(selectedExams, 'selectedExams')
        
    }
    const handleContinue = () => {
        dispatch(storeClass(selectedExams));
        dispatch(setIsExamSelected(true))
      };
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/../login/newUser/newUser3.svg"
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
                                    <div className="grid grid-cols-1 gap-4 ">
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
                        <Row>
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
        </div>
    )
}

export default SelectExam
