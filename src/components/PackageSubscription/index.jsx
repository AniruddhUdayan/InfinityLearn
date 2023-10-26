"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import PackageSummary from "./PackageSummary";
import ActiveTabs from "./ActiveTabs";
import SelectDuration from "./SelectDuration";
import MobileVerification from "./MobileVerification";
import OtpCheck from "./OtpCheck";
import NewUserDetails from "./NewUserDetails";
import ShippingAddress from "./ShippingAddress";
import "./css/packageSubscription.css";
import { setComponentToShow, setIsPopupShow } from "@/store/PackageSubscription/PackageSubscriptionPopup";


function PackageSubscription( show ) {
  const currentPage = useSelector((state) => state.packageSubscriptionPopup.componentName)
  const visible = useSelector((state) => state.packageSubscriptionPopup.isPopupShow)

  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(setIsPopupShow(false));
    dispatch(setComponentToShow(null));
  }

  const renderComponent = () => {
    switch (currentPage) {
      case "duration":
        return <SelectDuration />
      case "contactDetails":
        return <NewUserDetails />;
      case "shippingAddress":
        return <ShippingAddress />;
      default:
        return <SelectDuration />;
    }
  }

  return (
    <>
      <Modal
        show={visible}
        size="lg"
        centered
        className="subscription_popup"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton onClick={closePopup}></Modal.Header>
        <Modal.Body className="subscription_body">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <PackageSummary />
              </Col>
              <Col xs={12} md={6} className="custom-width-col">
                <div style={{ width: '100%'}}>
                  <ActiveTabs currentIndex={currentPage === "duration" ? 0 : currentPage === "contactDetails" ? 1 : currentPage === "shippingAddress" ? 2 : 0} />
                </div>
                {renderComponent()}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PackageSubscription;
