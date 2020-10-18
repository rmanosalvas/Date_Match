import React, { useState, useEffect } from "react";
import { Row, Col, Button, } from 'react-bootstrap';
import API from '../../utils/API';

function Login() {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])

    function SignUserIn(){
        console.log("Signing User In")
        API.userLogin({
            email: formObject.email,
            password: formObject.password
        })
        .then(res => setUsers(res.data))
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
                <Col>
                    <Row>
                    <h1 class="h2 mb-2 font-weight-normal">Please sign in</h1>
                    </Row>
                    <Row>
                        <h3 class="h5 mb-5 font-weight-normal">Email Address</h3>
                        <input className="form-control mb-5"
                        placeholder="Email address"
                        required 
                        name="email" 
                        type="text" 
                        onChange={handleInputChange}
                        />
                    </Row>
                    <Row>
                        <input className="form-control mb-5"
                        placeholder="Password"
                        required 
                        name="password" 
                        type="password" 
                        onChange={handleInputChange}
                        />
                    </Row>
                </Col>
                    <Row>
                        <Button
                            className="btn btn-md btn-primary col"
                            onClick={handleFormSubmit}>
                            Sign In
                        </Button>
                        <Button
                            className="btn btn-md btn-info col"
                            onClick={handleFormSubmit}>
                            Sign Up
                        </Button>
                    </Row>
            </form>
        </div>
    );
}



export default Login;