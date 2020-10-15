import React from 'react';
import Login from '../components/Login';
import { Row, Container } from '../components/Grid';
import Nav from '../components/Nav'
import Col from 'react-bootstrap/Col'

const LoginPage = () => {
    return (

        <Container fluid>
            <Row>
                <Col size='col-md-6'>
                </Col>
                <Col size='col-md-6'>
                    <Login />
                </Col>
                <Col size='col-md-6'>
                </Col>
            </Row>
        </Container>

    );
};

export default LoginPage;