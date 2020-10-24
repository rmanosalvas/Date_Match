import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Modal, Jumbotron } from 'react-bootstrap';
import Nav from '../components/Nav';
import API from '../utils/API'
import './style.css';

function Profile() {

    const [profile, setProfile] = useState([])

        useEffect(() => {
            loadProfile()
        }, [])
        
        function loadProfile() {
            API.getProfileInfo()
                .then(res => {
                    console.log(res)
                    setProfile(res.data)
                })
                .catch(err => console.log(err))
        }
    return (
        <Jumbotron >
            <Form >
                <Row className="justify-content-md-center">
                    <h1>{profile.first_name}</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <picture>
                        <img src={profile.avatar} alt="user avatar" className="img-fluid rounded-circle"></img>
                    </picture>
                </Row>
                <hr></hr>
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
                    <Col>
                        <p>Is from: </p>
                        <input
                            type="text"
                            className="form-control" value={profile.location} readOnly>
                            
                        </input>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <p>
                            Hello, my name is {profile.first_name} and let me tell you a bit about myself.
                        </p>
                        <br></br>
                        <p>
                            I like to {profile.aboutMe1}
                            <input id="aboutMe1" type="text" value="" required></input> 
                            and I am looking for someone who wants to 
                            <input id="userPref1" type="text" value="" required></input> 
                            . I'm always  
                                <input id="aboutMe2" type="text" value="" required></input>
                                ,so lets {profile.aboutMe2}
                                <input id="userPref2" type="text" value="" required></input>
                                . Know that 
                                <input id="aboutMe3" type="text" value="" required></input> 
                                is really important to me so I hope you {profile.aboutMe3}
                                 <input id="userPref3" type="text" value=""></input>.
                        </p>
                    </Col>
                </Row>
            </Form>

        </Jumbotron>

    )
}

export default Profile