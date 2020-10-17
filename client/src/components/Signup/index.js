import React, { Component } from "react";
import { Row, Col, Button, Input } from 'react-bootstrap';
import API from '../../utils/API';

class Signup extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: "",
        orientation: "",
        // avatar: "",
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

    };
 

    render() {
        return (
        <div>
            <form className="form-group mt-5 mb5" >
                <Row className="justify-content-md-center">
                    <Col md={5}>
                        <h3>Email Address(Username)</h3>
                        <input className="form-control mb-5" placeholder="email@example.com" required value={this.state.first_name} name="first_name" type="text" />
                    </Col>
                    <Col md={3}>
                        <h3>First Name</h3>
                        <input className="form-control mb-5" placeholder="John/Jane" required/>
                    </Col>
                    <Col md={3}>
                        <h3>Last Name</h3>
                        <input className="form-control mb-5" placeholder="Doe" required/>
                    </Col>
                    <Col md={1}>
                        <h3>Age</h3>
                        <input className="form-control" type="number" id="age" max="130" min="18" required/>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <h3>Password</h3>
                        <input className="form-control mb-5" placeholder="Hello" />
                    </Col>

                </Row>

                {/* <Row>
                    <Col md={12}>
                        <h1 className="h3 mb-3 font-weight-normal">Build Your Profile</h1>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <picture>
                                    <label for="avatar" className="">Upload photo:</label>
                                </picture>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}

                <Row> 
                    <Col md={6}>
                    <label for="gender">Select Your Pronouns</label>
                    <select className="form-control" id="gender">
                    <option selected="selected">--------</option>
                    <option value>he, him, his</option>
                    <option value>she, her, her</option>
                    <option value>they, them, theirs</option>
                    </select>
                 </Col>
                 <Col md={6}>
                 <label for="orientation">Sexual Orientation</label>
                 <select id="orientation" class="form-control">
                    <option selected="selected">--------</option>
                    <option value>Straight</option>
                    <option value>Gay</option>
                    <option value>Bisexual</option>
                </select>
                 </Col>
                </Row>
                <br></br>
                <Row>
                <Col>
                <Button className="btn btn-lg btn-primary btn-block" type="submit">Register</Button>
                </Col>
                </Row>

            </form>
        </div>
    )}
}



export default Signup;