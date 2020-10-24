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