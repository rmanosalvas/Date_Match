import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card , Jumbotron, Media } from 'react-bootstrap'
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Logout from '../components/Logout'
import CreateDate from '../components/CreateDate'
import Profile from '../components/Profile'
import API from '../utils/API'
import DeleteButton from '../components/DeleteButton'
import BulkExports from 'twilio/lib/rest/preview/BulkExports';
import Community from './Community';
import './style.css';




const Dashboard = () => {
    // const isloggedInState = false
const [userInfo, setUserInfo] = useState([])
const [dates, setDates] = useState([])

// let [isloggedIn, isloggedInState] = useState(false)

    useEffect(() => {
        // isLoggedIn()
        loadAllUsers()
        loadDates()

    }, [])

    // function isLoggedIn() {
    //     API.isLoggedIn()
    //         .then(res => {
    //             console.log("response hit")
    //             console.log(res.data)
    //             isloggedInState(res)
    //             isloggedIn = res
    //             if (isloggedIn = "true") {
    //                 // redirect 
    //                 console.log("This user is authenticated.")

    //             } else if(isloggedIn = "false") {
    //                 // do nothing
    //                 window.location.href = "/"

    //             }
    //         })
    //         .catch(err => console.log(err))
    // }

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

    // function load all use


    return (
        <div>
            <div>
            <Container>
                <Row>
                </Row>
                <Row>
                    <CreateDate />
                </Row>
                <Row className="communityRow">
                    <Community />
                </Row>
                <Row>
                    <Col>
                            <h2>Posted Dates</h2>
                            {dates.length ? (
                                <div>
                                    {dates.map(date => (
                                    
                                    <ul className="list-unstyled">
                                        <Media as="li" key={date.id}>
                                        {/* <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={userInfo[{date,UserId}].avatar} 
                                            alt="Generic placeholder"
                                        /> */}
                                        <Media.Body>
                                            <h5>{date.first_name} {date.last_name}</h5>
                                            <p>{date.body}  </p>
                                        </Media.Body>
                                        <DeleteButton onClick={() => deleteDates(date.id)} />
                                        </Media>
                                        <br></br>
                                    </ul>
                                    ))}
                                </div>
                              ) : (
                              <h3>No Results to Display </h3>
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