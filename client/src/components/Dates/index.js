import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Accordion } from 'react-bootstrap'
import API from '../../utils/API'
import UserProfileList from "../UserProfileList"
// import './style.css';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState([])
    const [dates, setDates] = useState([])


    useEffect(() => {
        loadAllUsers()
        loadDates()
        loadOtherProfile()

    }, [])


    function loadDates() {
        API.getDates()
            .then(res => {
                console.log(res)
                setDates(res.data)
            })
            .catch(err => console.log(err))
    }


    function loadAllUsers() {
        API.getAllUsers()
            .then(res => {
                console.log(res)
                setUserInfo(res.data)
            })
            .catch(err => console.log(err))
    }

    const loadOtherProfile = (id) => {
        console.log("Client Testing")
        console.log(id)
        API.getOneUser(id)

    }


    return (
        <div>
            <div>
                <Container>
                    <Row className="communityRow">
                    {/* <h2>User Community</h2> */}
                        
                    </Row>
                    <Col>
                    <Accordion defaultActiveKey="0">
                            {/* <h2>Posted Dates</h2> */}
                            {dates.length ? (
                                <div>
                                    {<UserProfileList data={dates}/>}
                                </div>
                            ) : (
                                    <h3>No Results to Display </h3>
                                )}
                        </Accordion>
                    </Col>

                </Container>
            </div>
        </div>
    )
};

export default Dashboard;