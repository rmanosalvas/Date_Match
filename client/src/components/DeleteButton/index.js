import React from "react";
import { Row, Col, Container, Button, Card } from 'react-bootstrap'


function DeleteButton(props){
    return(
        <Button {...props} tabIndex="0">
            X
        </Button>
    )
}

export default DeleteButton