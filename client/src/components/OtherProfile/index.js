import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';



function OtherProfile() {


    return (
        <Container >
            <div >
                <Row className="justify-content-md-center">
                    <img alt="responsive image" className="img-fluid rounded-circle"></img>
                </Row>

                <Row className="justify-content-md-center">
                    <h1>Name Goes Here</h1>
                </Row>
                <hr></hr>
                <Row >
                    <Col>
                        <h3 >
                            Age:
                        </h3>
                    </Col>
                    <Col>
                        <h3>
                            Orientation:
                        </h3>
                    </Col>
                    <Col>
                    <h3 id="location">Location Here</h3>

                    </Col>
                </Row>
                <Row>

                </Row>
                <hr></hr>
                <Row >
                    <Col >
                    <p >Hello, my name is Firstname Lastname and let me tell you a bit about myself.
                            </p>
                        <br></br>
                        <p>I like to aboutme1 and I am looking for someone who wants to userpref1. I'm always aboutme2, so lets  userpref2 .  Lastly, Know that aboutme3 is really important to me so I hope you userpref3.
                            </p>
                            <p>If you think this could workout then show interest in one of my <a href="/posts/{{Profile.dataValues.id}}">posts!</a></p>
                    </Col>
                </Row>
            </div>

        </Container>

    )
}

export default OtherProfile