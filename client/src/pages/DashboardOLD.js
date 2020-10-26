import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, Accordion, Media } from 'react-bootstrap'
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Logout from '../components/Logout'
import CreateDate from '../components/CreateDate'
import Profile from '../components/Profile'
import API from '../utils/API'
import DeleteButton from '../components/DeleteButton'
import BulkExports from 'twilio/lib/rest/preview/BulkExports';
import Community from './Community';
import OtherProfileMod from "../components/OtherProfileMod"
import UserProfileList from "../components/UserProfileList"
import './style.css';

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

    const deleteDates = (id) => {
        console.log("deleting")
        API.deleteDate(id)
        window.location.href = "/dashboard"
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
                    <h2>User Community</h2>
                        <Community />
                    </Row>
                    <Row>
                    <Accordion defaultActiveKey="0">
                            <h2>Posted Dates</h2>
                            {dates.length ? (
                                <div>
                                    {<UserProfileList data={dates}/>}
                                </div>
                            ) : (
                                    <h3>No Results to Display </h3>
                                )}
                        </Accordion>
                    </Row>

                    <Footer />
                </Container>
            </div>
        </div>
    )
};

export default Dashboard;