import React, { Component, useState, useEffect } from "react";

import { Container, Row, Col, Form, Button, Card, Modal, Jumbotron, Figure } from 'react-bootstrap';
import API from '../../utils/API'
import './style.css';




function Message({ id, msgID, messageUserID, Body, UserId, MatchId }) {

    const [profile, setProfile] = useState([])
    const [formObject, setFormObject] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(() => {
    //     console.log("loading profile")
    //     loadProfile()

    // }, [])


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    function createMessage() {
        console.log("Creating New Message")
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.message) {
            createMessage()
        }

    }


    return (
        <div>
            <a variant="primary" onClick={handleShow}>
                New Message
        </a>
            <Container >
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Name of Match Goes Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Messages Goes Here
                </Modal.Body>
                    <Modal.Footer>
                        <Row>
                            <Col sm={8}>
                            <Form>
                                <Form.Group  >
                                    <Form.Control
                                        name="message"
                                        onChange={handleInputChange}>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            </Col >
                            <Col sm={4}>
                            <Button variant="primary" onClick={handleFormSubmit} className="buttonStyle">
                                Send Message
                        </Button>
                        </Col>
                        </Row>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default Message