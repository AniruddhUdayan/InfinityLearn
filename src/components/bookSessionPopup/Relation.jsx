import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRelations } from "../../store/BookSession/BookSessionData";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setComponentToShow } from '../../store/BookSession/BookSessionPopup';
import { FaCheck } from "react-icons/fa";
import ProgressTabs from './ProgressTabs';
import analytics from '../../utils/analytics';
const relations = ['father','mother','guardian','not sure', 'the student'];

function Card(props){
    const { data, isSelected, onClick } = props;
    return(
        <li className={`relation_list ${isSelected ? 'active':''}`} onClick={onClick}>
        <span>{data}</span>
        <div
className={`relation_list_check ${isSelected ? "active" : "bg-white"
}`}
>
{isSelected && <FaCheck color="white" />}
</div>
    </li>
    )
}

function Relation() {
    const [selectedRelations, setSelectedRelations] = useState([]);
    const dispatch = useDispatch();
    const handleRelation = (relation) => {
        if (selectedRelations.includes(relation)) {
            setSelectedRelations((prevRelation) =>
                prevRelation.filter((c) => c !== relation)
            );
        } else {
            setSelectedRelations((prevRelation) => [...prevRelation, relation]);
        }
    };
    const userDetails = JSON.parse(localStorage.getItem('user_details_from_server'));
    const userGrade =  userDetails?.grade?.name?.replace(/[^0-9]/g, '');
    const userExam = userDetails?.exams?.[0]?.name?.replace(/[^a-z]/ig, '').toUpperCase();
    const handleContinue = ()=>{
        console.log(selectedRelations)
        dispatch(setRelations(selectedRelations));
        dispatch(setComponentToShow("SessionSuccess"));
        analytics.track('book_session_details_entered_2',{
            page_url:window.location.href,
            platform:'Web',
            grade: Number(userGrade),
            target_exam: userExam,
            phone: userDetails?.phone,
            first_name: userDetails?.firstName,
            last_name:userDetails?.lastName,
        })
    }
  return (
    <div>
              <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img
                            src="/bookSession/relation.webp"
                            alt="mob-ver-1"
                            className="side_image max-md:hidden"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="right_box">
                        <ProgressTabs />
                            <Row>
                                <Col md={12}>
                                    <h2 className="session_heading">Who will be attending the call?</h2>
                                    <p className="session_description">this journey is a group effort! we would love to include your family in the call!</p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={12} md={12}>
                                    <ul className="padding_none">
                                        {
                                            relations.map((re,index)=>(
                                                <Card
                                                key={index}
                                                data={re}
                                                isSelected={selectedRelations.includes(re)}
                                                onClick={() => {handleRelation(re);}}
                                            />
                                            ))
                                        }
                                    </ul>
                                </Col>
                            </Row>
                            <Row className="button_mobile_none">
                                <Col xs={12} md={12}>
                                    <div className="otp_button_row">
                                        <button onClick={handleContinue}
                                            className={`otp_button`}
                                            disabled={selectedRelations.length == 0}
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
                        <button onClick={handleContinue}
                            className={`otp_button`}
                            disabled={selectedRelations.length == 0}
                        >
                            continue <span>&#8599;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Relation
