import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import CreateDate from '../components/CreateDate'
import Logout from '../components/Logout'



const Dashboard = () => {
    return(
        <div>
            <Container>
                <Row>
                {/* <Nav /> */}
                </Row>
                <Row>
                <CreateDate />
                </Row>
                <Logout />
                <Footer />
            </Container>
        </div>
    )
};

export default Dashboard;