"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProgressTabs() {
  const isNewUser = useSelector((state) => state.bookSessionNewUser.isNewUser);
  const isStudentProfileCompleted = useSelector(
    (state) => state.bookSessionNewUser.isStudentProfileCompleted
  );
  const isPersonalizeStarted = useSelector(
    (state) => state.bookSessionData.isPersonalizeStarted
  );
  return (
    <div>
      {isNewUser ? (
        <div className="session_progress_center">
          <Row>
            <Col xs={12} md={12} className="session_progress">
              <div className="steps_bar steps_mob_d_done">
                <div className="step one complete active">
                  1<div className="step_desc">student details</div>
                </div>
                <div className="step_sep"></div>
                <div
                  className={`step three ${
                    isStudentProfileCompleted ? "complete active" : ""
                  }`}
                >
                  2<div className="step_desc">book session</div>
                </div>
                <div className="step_sep"></div>
                <div
                  className={`step four ${
                    isPersonalizeStarted ? "complete active" : ""
                  }`}
                >
                  3<div className="step_desc">personalized session</div>
                </div>
              </div>
              <div className="mob_steps_flex">
                <div className={`mob_step_sep active`}></div>
                <div
                  className={`mob_step_sep ${
                    isStudentProfileCompleted ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`mob_step_sep ${
                    isPersonalizeStarted ? "active" : ""
                  }`}
                ></div>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="session_progress_center">
          <Row>
            <Col xs={12} md={12} className="session_progress">
              <div className="steps_bar steps_mob_d_done">
                <div className="step one complete active">
                  1<div className="step_desc">book session</div>
                </div>
                <div className="step_sep"></div>
                <div
                  className={`step three ${
                    isPersonalizeStarted ? "complete active" : ""
                  }`}
                >
                  2<div className="step_desc">personalized session</div>
                </div>
              </div>
              <div className="mob_steps_flex">
                <div className={`mob_step_sep  active`}></div>
                <div
                  className={`mob_step_sep ${
                    isPersonalizeStarted ? "active" : ""
                  }`}
                ></div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default ProgressTabs;
