import React, { useState, useEffect } from 'react';
import { Row, Col, Container, ListItem, List, Card } from 'react-bootstrap'
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Logout from '../components/Logout'
import CreateDate from '../components/CreateDate'
import Profile from '../components/Profile'
import API from '../utils/API'
import DeleteButton from '../components/DeleteButton'
import BulkExports from 'twilio/lib/rest/preview/BulkExports';

const Dashboard = () => {

    const [dates, setDates] = useState([])

    useEffect(() => {
        loadDates()
    }, [])

    function loadDates() {
        API.getDates()
            .then(res => {
                console.log(res)
                setDates(res.data)
            })
            .catch(err => console.log(err))
    }

    const deleteDates = (id) => {
        console.log("deleting")
        API.deleteDate(id)
        window.location.href = "/dashboard"
    }


    return (
        <div>
            <div>
            <Container>
                <Row>
                    {/* <Nav /> */}
                </Row>
                <Row>
                    <CreateDate />
                    <Logout />
                </Row>
                <Row>
                    <Col>
                        <h2>Posted Dates</h2>
                        {dates.length ? (
                            <div>
                                {dates.map(date => (
                                    <Card key={date.id}>
                                        <Card.Body>

                                            <Card.Title>
                                                <h5>
                                                    {date.title}
                                                </h5>
                                            </Card.Title>
                                            <Card.Text>
                                                {date.body}
                                            </Card.Text>
                                        </Card.Body>
                                        <DeleteButton onClick={() => deleteDates(date.id)} />
                                    </Card>
                                ))}
                            </div>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>

                <Footer />
            </Container>
            </div>
        </div>
    )
};

export default Dashboard;