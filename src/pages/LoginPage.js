import React from 'react';
import Login from '../components/Login';
import { Col, Row, Container } from '../components/Grid';
import Nav from '../components/Nav'


const LoginPage = () => {
    return (
        <div>
                <Container >
                        <Row>
                            <Col size='md-6'>
                                <Login />
                            </Col>
                        </Row>
                </Container>
        </div>
    );
};

export default LoginPage;