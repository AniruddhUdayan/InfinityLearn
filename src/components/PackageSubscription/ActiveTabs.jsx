import React from "react";
import { Container } from "react-bootstrap";
import "./css/packageSubscription.css"; // Import the styles

const steps = ["Package Details", "Contact Details", "Shipping Address"];

const ProgressIndicator = ({ currentIndex = 0 }) => {
  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentIndex ? "active" : ""}`}
          >
            <div className="circle">{index + 1}</div>
            {index !== steps.length - 1 && (
              <div
                className={`dashed-line ${
                  index < currentIndex ? "filled" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex w-max justify-content-between mt-2  labels">
        {steps.map((step, index) => (
          <div key={index} className=" label">
            {step}
          </div>
        ))}
      </div>
    </Container>
  );
};

const ActiveTabs = () => {
  return (
    <div className="container">
      <ProgressIndicator currentIndex={1} />
    </div>
  );
};

export default ActiveTabs;
