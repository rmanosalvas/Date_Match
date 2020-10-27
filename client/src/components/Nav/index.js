import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Nav, Navbar, Image} from 'react-bootstrap';
import "./style.css"
import API from '../../utils/API';
import Logout from '../Logout'
import CreateDate from '../CreateDate'



function Nava() {
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
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="dashboard">Dashboard</Navbar.Brand>
            <Container>
            <Nav className="">
                <Row>
                <Col>
                <Nav.Link> <CreateDate /></Nav.Link>
                </Col>
                <Col>
                <Nav.Link href="/community">Community</Nav.Link>
                </Col>
                <Col>
                <Nav.Link href="/profile">
                    <Image
                        width={25}
                        height={25}
                        alt="User Avatar"
                        src={profile.avatar}
                        roundedCircle></Image>
                    {profile.first_name}</Nav.Link>
                </Col>
                <Col>
                <Nav.Link><Logout /></Nav.Link>
                </Col>
                </Row>
            </Nav>
            </Container>
        </Navbar>

    );


}

export default Nava;