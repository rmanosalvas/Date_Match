import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Nav, Navbar } from 'react-bootstrap';
import "./style.css"
import API from '../../utils/API';
import Logout from '../Logout'
import CreateDate from '../CreateDate'


function Nava() {




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
                <Nav.Link href="/profile">Account</Nav.Link>
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