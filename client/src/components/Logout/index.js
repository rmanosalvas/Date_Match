import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Modal, } from 'react-bootstrap';
import API from '../../utils/API';

function Logout(){

    function getMeOut(){
        localStorage.clear();
        window.location.href="/"
    }

    return(
        <Button onClick={getMeOut}>Logout</Button>
    )
}


export default Logout