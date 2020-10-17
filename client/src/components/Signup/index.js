import React, { useEffect, useState } from "react";
import { Row, Col, } from 'react-bootstrap';
import API from '../../utils/API';

function Signup() {

    const [user, setUser] = useState([])
    const [formObject, setFormObject] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: "",
        orientation: "",
        avatar: "",
        gender: "",
        securityQuestion1: "",
        securityQuestion2: "",            
        userPref1: "",
        userPref2: "",
        userPref3: "",
        aboutMe1: "",
        aboutMe2: "",
        aboutMe3: "",
        matches: "",
        location: ""

    })
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };


    return (
        <div>
            <form className="form-group mt-5 mb5">
                <Row className="justify-content-md-center">
                    <Col xs={5}>
                        <h3>Email Address(Username)</h3>
                <input className="form-control mb-5" placeholder="email@example.com" />
                    </Col>
                    <Col xs={3}>
                    <h3>First Name</h3>
                <input className="form-control mb-5" placeholder="John/Jane" />
                    </Col>
                    <Col xs={3}>
                    <h3>Last Name</h3>
                <input className="form-control mb-5" placeholder="Doe" />
                    </Col>
                    <Col xs={1}>
                    <h3>Age</h3>
                <input className="form-control mb-5" placeholder="Age" />
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col xs={12}>
                        <h3>Password</h3>
                        <input className="form-control mb-5" placeholder="Hello" />
                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        
                    </Col>
                </Row>

                {/* </Row> */}
                {/* <Row>
                <input className="form-control mb-5" placeholder="Password" />

                </Row>
                <Row>
                <input className="form-control mb-5" placeholder="Password" />

                </Row>
                <Row>
                <input className="form-control mb-5" placeholder="Password" />

                </Row> */}
            </form>
        </div>
    );
}



export default Signup;