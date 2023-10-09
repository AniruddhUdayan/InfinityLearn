import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
const Success = () => {
  return (
    <div>
             <Container>
          <Row>
            <Col xs={12} md={6}>
            <Image
          src="/../login/mobVer/SuccessImage.png"
          height={250}
          width={600}
          alt="mob-ver-1"
          className=" max-md:hidden"
        />
            </Col>
            <Col xs={12} md={6}>
            <Row>
                <Col xs={12} md={12}>
                    <div className="success_Icon">
                    <Image
          src="../login/mobVer/SuccessIcon.svg"
          height={200}
          width={200}
          alt="mob-ver-1"
        /> 
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                    <h2 className="success_heading">You're all set! Your success <br/> story starts now.</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                    <div className="otp_button_row">
                    <button className={`otp_button`}>start learning <span>&#8599;</span></button>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Success;
