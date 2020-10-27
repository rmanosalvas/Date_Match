import React, { useState, useEffect } from 'react';
import { Row, Col, Card, NavLink, Accordion, Button, Form } from 'react-bootstrap'
import OtherProfileMod from "../OtherProfileMod"
import DeleteButton from '../DeleteButton'
import API from '../../utils/API'

function UserProfileList({ data }) {

    console.log(data)
    const [message, setMessages] = useState([]);

    const [formObject, setFormObject] = useState([])


    const deleteDates = (id) => {
        console.log("deleting")
        API.deleteDate(id)
        window.location.href = "/dashboard"
    }
    function loadComments(id) {
        
        API.getComments(id)
            .then(res => {
                setMessages(res.data);
                console.log(res)
            })
            .catch(err => console.log(err));
    };
    function sendComments(id) {
        API.newComment({
            body: formObject.comments
        }).then((res) => {
            console.log("Comments Created");
            setMessages(res.data);
        })
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        if (
            formObject.comments

        ) {
            sendComments();
        }
    }

    return (

        data.map(date => (
            <Col xs={12}>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col xs={9}><h3>{date.title}</h3></Col>
                            <Col xs={3}><DeleteButton onClick={() => deleteDates(date.id)} /></Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Category: {date.category}</Card.Subtitle>
                        <hr></hr>
                        {date.body}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Row sm={8}>
                            <Col xs={6}>
                                <Accordion.Toggle as={Button} eventKey={date.id} >
                                    <a onClick={() => loadComments(date.id)}>Comment</a>
                        </Accordion.Toggle>
                            </Col>
                            <Col xs={6}><OtherProfileMod as={Button} dateInfo={date}  /></Col>
                        </Row>
                        <Accordion.Collapse eventKey={date.id}>
                            <Card.Body>
                            {date.location} {date.body}

                                <Col sm={8}>
                                    <Form>
                                        <Form.Group  >
                                            <Form.Control
                                                name="comment"
                                                onChange={handleInputChange}
                                            >
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col >
                                <Col sm={4}>
                                    <Button variant="primary"
                                        onClick={handleFormSubmit}
                                        className="buttonStyle">
                                        Send Comment
                        </Button>
                                </Col>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card.Footer>
                </Card>
                <br></br>
            </Col>
        ))

    )
}

export default UserProfileList