import React from 'react';
import Changepassword from '../components/Changepassword';
import Nav from '../components/Nav'
import { Row, Col, Container } from 'react-bootstrap'

const Password = () => {
    return (

        <Container >
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Changepassword />
                </Col>
            </Row>
        </Container>

    );
};

export default Password