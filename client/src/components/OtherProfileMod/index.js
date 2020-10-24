import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import API from '../../utils/API';


const OtherProfileMod = ({id}) => {

    const [otherUsers, setOtherUser] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function getOtherUsers(id){
        API.getOneUser(id).then(res => 
            console.log(res))
    }

}

import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Modal, Jumbotron, Figure } from 'react-bootstrap';
import Nav from '../components/Nav';
import API from '../utils/API'
import './style.css';

function Profile() {
    const [profile, setProfile] = useState([])
    const [formObject, setFormObject] = useState([])
        useEffect(() => {
            loadProfile()
        }, [])
        
        function loadProfile() {
            API.getProfileInfo(profile.id)
                .then(res => {
                    console.log(res)
                    setProfile(res.data)
                })
                .catch(err => console.log(err))
        }

        function handleInputChange(event) {
            const { name, value } = event.target;
            setFormObject({ ...formObject, [name]: value })
        };

        function updateUserProfile() {
            console.log("Updating the users profile")
            API.updateProfileInfo({
                id: profile.id,
                gender: formObject.gender,
                aboutMe1: formObject.aboutMe1,
                userPref1: formObject.userPref1,
                aboutMe2: formObject.aboutMe2,
                userPref2: formObject.userPref2,
                aboutMe3: formObject.aboutMe3,
                userPref3: formObject.userPref3,
            })
            
            window.location.reload()
            
        }

        function handleFormSubmit(event) {
            event.preventDefault();
            console.log(profile.id)
            if (formObject.gender ||
                formObject.aboutMe1 ||
                formObject.userPref1 ||
                formObject.aboutMe2 ||
                formObject.userPref2 ||
                formObject.aboutMe3 ||
                formObject.userPref3) {

                updateUserProfile()
    
            }
        };


    return (
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
            <Col>
            <h1>{profile.first_name} {profile.first_name}</h1>
            <p></p>

            </Col>
            </Row>
            <Form >
                <Row className="justify-content-md-center">
                </Row>
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
                            Identifies as a :
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            name="age"
                            value={profile.age}
                            readOnly
                            onChange={handleInputChange}>
                        </Form.Control>
                    </Col>
                    <Col>
                    <Form.Control
                            name="orientation"
                            value={profile.orientation}
                            readOnly
                            onChange={handleInputChange}>
                        </Form.Control>                    
                    </Col>
                    <Col>
                    <Form.Control
                            name="gender"
                            defaultValue={profile.gender}
                            onChange={handleInputChange}>
                        </Form.Control>                    
                    </Col>
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
                        <Form.Label>I make the best:  </Form.Label>
                            <Form.Control
                                name="aboutMe1"
                                defaultValue={profile.aboutMe1} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                        </Col>
                        <Col>
                    <Form.Group>
                        <Form.Label>I'm always : </Form.Label>
                            <Form.Control
                                name="userPref1"
                                defaultValue={profile.userPref1} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label> You can always catch me: </Form.Label>
                            <Form.Control
                                name="aboutMe2"
                                readOnly
                                defaultValue={profile.aboutMe2} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                        </Col>
                        <Col>
                    <Form.Group>
                        <Form.Label>I am looking for someone who wants to: </Form.Label>
                            <Form.Control
                                name="userPref2"
                                defaultValue={profile.userPref2} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label>Don't even try if you don't have a: </Form.Label>
                            <Form.Control
                                name="aboutMe3"
                                defaultValue={profile.aboutMe3} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                        </Col>
                        <Col>
                    <Form.Group>
                        <Form.Label>We won't work if you can't:  </Form.Label>
                            <Form.Control
                                name="userPref3"
                                defaultValue={profile.userPref3} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Form>
            <Jumbotron>
            <Button variant="success" onClick={handleFormSubmit}>
                        Update Account
            </Button>
            </Jumbotron>
        </Jumbotron>

    )
}

export default Profile