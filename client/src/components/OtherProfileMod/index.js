import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Modal, Jumbotron, Figure } from 'react-bootstrap';
import API from '../../utils/API'






function OtherProfileMod({ dateInfo }) {


    const [profile, setProfile] = useState([])
    const [currentProfile, setCurrentProfile] = useState([])
    useEffect(() => {
        getCurrentUser()
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    function getCurrentUser(){
        API.getProfileInfo(currentProfile.id)
        .then(res => {
            console.log(res)
            setCurrentProfile(res.data)
        })
        .catch(err => console.log(err))
    }


    const handleShow = () => {
        API.getOneUser(dateInfo.UserId).then((res) => {
            setProfile(res.data)
            console.log(res)
        })
        setShow(true);

    }
    // function loadProfile() {
    //     console.log("CLIENT TESTING")

    //     API.getOneUser(data)
    //         .then(res => {
    //             console.log(res)
    //             // 
    //         })
    //         .catch(err => console.log(err))
    // }

    function matchUsers() {
        console.log(profile)
        // define the match object
        var thisMatch = {
            user1: currentProfile.id,//client users id
            user2: profile.id, //posting users id
        }

        API.newMatch(thisMatch)
        .then(res => {
            console.log(res)

        }).catch(err => console.log(err))

        window.location.href = "/matches"

    }

    return (
        <Container>
            
            <Button variant="primary" onClick={handleShow}>
                See Poster
        </Button>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>{profile.first_name} {profile.last_name}'s Profile</Modal.Header>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={250}
                                        height={265}
                                        alt="User Avatar"
                                        src={profile.avatar}
                                        roundedCircle
                                    />
                                    <Figure.Caption>
                                        From {profile.location}
                                    </Figure.Caption>
                                </Figure>
                            </Col>

                        </Row>
                        <Form >
                            <Row className="justify-content-md-center">
                            </Row>
                            <Row>
                                <Col>
                                    <h3>
                                        Age: {profile.age}
                                    </h3>
                                </Col>
                                <Col>
                                    <h3>
                                        Orientation: {profile.orientation}
                                    </h3>
                                </Col>
                                <Col>
                                    <h3>
                                        Identifies as a : {profile.gender}
                                    </h3>
                                </Col>
                            </Row>
                            <Row>
                            </Row>
                            <Row>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col>
                                    <h5>
                                        Hello I'm {profile.first_name}, let me tell you a bit about myself.
                                    </h5>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>I make the best: {profile.aboutMe1} </Form.Label>

                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>I'm always: {profile.userPref1} </Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label> You can always catch me: {profile.aboutMe2}</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>I am looking for someone who wants to: {profile.userPref2}</Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Don't even try if you don't have a: {profile.aboutMe3}</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>We won't work if you can't: {profile.userPref3} </Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                        <Row>
                            <Button variant="danger" onClick={() => matchUsers()}>
                                Match With 
                            </Button>
                        </Row>
                    </Jumbotron>
                </Modal>
            </div>
        </Container>
    )
}

export default OtherProfileMod