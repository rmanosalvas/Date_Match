import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Button, Container } from 'react-bootstrap';
import API from '../../utils/API';
import './style.css';

function Login() {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])

    function SignUserIn(){
        console.log("Signing User In")
        API.userLogin({
            email: formObject.email,
            password: formObject.password
        }).then(()=> {
            console.log("logging on")
            window.location.href = "/dashboard";
        })
        .catch(err => console.log(err))
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (
            formObject.email && 
            formObject.password) {
                SignUserIn()
            }
      };

    return (
        <div>
            <form className="form-group mt-5 mb-5">
                <Container id='loginForm'>
                    <br></br>
                    <Row>
                        <Col>
                            <br></br>
                            <input className="form-control mb-5"
                            placeholder="Email address"
                            required 
                            name="email" 
                            type="text" 
                            onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input className="form-control mb-5"
                            placeholder="Password"
                            required 
                            name="password" 
                            type="password" 
                            onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                className="btn btn-md btn-primary col"
                                onClick={handleFormSubmit}>
                                Sign In
                            </Button>
                            <br></br><br></br>
                            <Button href="/signup"
                                    className="btn btn-md btn-info col"
                            >
                                {/* <Redirect to="/somewhere/else" /> */}
                                    Sign Up
                            </Button>
                            <br></br><br></br>
                            <p><a href='/recoverpassword'id='aTag'>Forgot Password</a></p>
                        </Col>
                    </Row>
                </Container>
            </form>  
        </div>
    );
}



export default Login;