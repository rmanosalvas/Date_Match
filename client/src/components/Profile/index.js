import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';



function Profile() {

    const [users, setUsers] = useState([]);


    return (
        <Container >

            <Form >
                <Row className="justify-content-md-center">
                    <h1>Name Goes Here</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <picture>
                        <img alt="user avatar" className="img-fluid rounded-circle"></img>
                    </picture>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <h3>
                            Age:
                        </h3>
                    </Col>
                    <Col>
                        <h3>
                            Orientation:
                        </h3>
                    </Col>
                    <Col>
                        <h3>
                            Identifies as:
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Where are you from?</p>
                        <input
                            type="text"
                            className="form-control">
                        </input>
                    </Col>
                    <Col>
                        <p>Where are you from?</p>
                        <Button type="submit">Use My Location</Button>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <p>
                            Hello, my name is ____ ___ and let me tell you a bit about myself.
                        </p>
                        <br></br>
                        <p>
                            I like to 
                            <input id="aboutMe1" type="text" value="" required></input> 
                            and I am looking for someone who wants to 
                            <input id="userPref1" type="text" value="" required></input> 
                            . I'm always  
                                <input id="aboutMe2" type="text" value="" required></input>
                                ,so lets 
                                <input id="userPref2" type="text" value="" required></input>
                                . Know that 
                                <input id="aboutMe3" type="text" value="" required></input> 
                                is really important to me so I hope you
                                 <input id="userPref3" type="text" value=""></input>.
                        </p>
                    </Col>
                </Row>
            </Form>

        </Container>

    )
}

export default Profile