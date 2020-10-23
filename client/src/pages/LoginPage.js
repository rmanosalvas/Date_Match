import React from 'react';
import Login from '../components/Login';
import Nav from '../components/Nav'
import { Row, Col, Container } from 'react-bootstrap'

const LoginPage = () => {

    const divStyle = {
        backgroundImage: "url(" + "https://dailyentertainment.me/wp-content/uploads/2016/10/laughing-couple-on-date.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    };


    return (

        <Container style={divStyle}>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Login />
                </Col>
            </Row>
        </Container>

    );
};

export default LoginPage;