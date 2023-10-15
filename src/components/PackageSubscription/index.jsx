"use client";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import PackageSummary from './PackageSummary';
import ActiveTabs from './ActiveTabs';
import SelectDuration from './SelectDuration';
import MobileVerification from './MobileVerification';
import OtpCheck from './OtpCheck';
import NewUserDetails from './NewUserDetails';
import ShippingAddress from './ShippingAddress';
import './css/packageSubscription.css';
function PackageSubscription() {

  return (
    <>
      <Modal show={true} size="lg" centered className='subscription_popup' aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="subscription_body">
          <Container>
            <Row>
                <Col xs={12} md={6}>
                    <PackageSummary />
                </Col>
                <Col xs={12} md={6}>
                    <ActiveTabs />
                    <SelectDuration />
                    <MobileVerification />
                    <OtpCheck />
                    <NewUserDetails />
                    <ShippingAddress />
                </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PackageSubscription;
