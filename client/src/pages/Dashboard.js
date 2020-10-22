import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Logout from '../components/Logout'
import CreateDate from '../components/CreateDate'



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