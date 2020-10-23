import React from 'react';
import Login from '../components/Login';
import Nav from '../components/Nav'
import { Row, Col, Container, Jumbotron } from 'react-bootstrap'

const LoginPage = () => {
    return (
        <div id='logIn'>
            <Jumbotron >
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Login />
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default LoginPage;