import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Nav, Navbar } from 'react-bootstrap';
import "./style.css"
import API from '../../utils/API';



function Nava(){


    function getMeOut(){
        API.logMeOut().then(()=> {
            console.log("logging out!")
            window.location.href = "/";
            })        
            .catch(err => console.log(err))
    }

    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="dashboard">DateMatch</Navbar.Brand>
        <Nav className="">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#matches">Matches</Nav.Link>
        <Nav.Link onSelect={() => API.logMeOut().then(() => window.location.href ="/")}>Logout</Nav.Link>
    </Nav>
      </Navbar>

    );


}

export default Nava;