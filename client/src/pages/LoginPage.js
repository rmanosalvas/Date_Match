import React from 'react';
import Login from '../components/Login';
import Nav from '../components/Nav'
import { Row, Col, Container } from 'react-bootstrap'

const LoginPage = () => {
    return (

        <Container >
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Login />
                </Col>
            </Row>
        </Container>

    );
};

export default LoginPage;