import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './css/selectGrade.css';
function SelectGradePopup() {
    const grades = [11,12,13]
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={true} centered onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col>
                        <div className='select_gradegrid'>
                            {
                                grades.map((g,index)=>(
                                    <button className='slt_grbtn' key={index} type='button'>{g == 13 ? 'Class 12 Pass' : `Class ${g}`}</button>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default SelectGradePopup;