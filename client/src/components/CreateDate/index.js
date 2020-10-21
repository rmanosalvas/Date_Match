import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import API from '../../utils/API';


function CreateDate() {

    const [date, setDate] = useState([]);
    const [formObject, setFormObject] = useState([])
    //modal control
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };


    function CreateNewDate(){
        console.log("Creating New Date")
        API.createDate({
            category: formObject.category,
            title: formObject.title,
            location: formObject.location,
            body: formObject.body,
        })
        .then(res => setDate(res.data))
        .catch(err => console.log(err))

        }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        if (
            formObject.category && 
            formObject.title && 
            formObject.location &&
            formObject.body) {
                CreateNewDate()
            }
      };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create a New Date
            </Button>
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Date Plans</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="form-group mt-5 mb5">
                        <Row className="justify-content-md-center">
                            <Form.Group 
                            > 
                                <Form.Label>Select Type of Dates</Form.Label>
                                <Form.Control as="select" defaultValue="Select Date Type" name="category"> 
                                    <option value="0">Something Casual</option>
                                    <option value="1">Romantic</option>
                                    <option value="2">Business</option>
                                    <option value="3">Boredom Cure</option>
                                    <option value="4">Curiosity Killed the Cat</option>
                                    <option value="5">Someone Needs to Hear This</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group  >
                                <Form.Label>Name the date:</Form.Label>
                                <Form.Control 
                                name="title"
                                onChange={handleInputChange}>

                                </Form.Control>
                            </Form.Group>
                        </Row>
                            <Form.Group >
                                <Form.Label>Where will the date be:</Form.Label>
                                <Form.Control
                                name="location"
                                onChange={handleInputChange}
                                >

                                </Form.Control>
                        </Form.Group>
                        <Row>
                            <Form.Group 
                            
                            >
                                <Form.Label>Describe the date in detail.</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                name="body"
                                onChange={handleInputChange}>

                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleFormSubmit}>
                        Post Date
          </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </>
    )
}

export default CreateDate