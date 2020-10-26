import React, { Component, useState, useEffect } from "react";
import { Row, Col, Button, } from 'react-bootstrap';
import API from '../../utils/API';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


function Signup() {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])


    function RegisterUser() {
        console.log("Creating User")
        API.createUser({
            email: formObject.email,
            first_name: formObject.first_name,
            last_name: formObject.last_name,
            age: formObject.age,
            password: formObject.password,
            orientation: formObject.orientation,
            gender: formObject.gender,
            phone: formObject.phone
        })
        .then(res => {
            console.log("User Created")
            setUsers(res.data)
            window.location.href = "/";
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
        formObject.first_name && 
        formObject.last_name &&
        formObject.age &&
        formObject.password &&
        formObject.orientation &&
        formObject.gender &&
        formObject.phone) {
            RegisterUser()
        }
  };


        return (
        <div>
            <form className="form-group mt-5 mb5" >
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <h3>Email Address</h3>
                        <input 
                            className="form-control mb-5" 
                            placeholder="email@example.com" 
                            required 
                            name="email" 
                            type="text" 
                            onChange={handleInputChange}
                            />
                    </Col>
                    <Col md={4}>
                        <h3>First Name</h3>
                        <input 
                            className="form-control mb-5" 
                            placeholder="John/Jane" 
                            required 
                            name="first_name" 
                            type="text"
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={4}>
                        <h3>Last Name</h3>
                        <input 
                            className="form-control mb-5" 
                            placeholder="Doe" 
                            required 
                            name="last_name" 
                            type="text"
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                    

                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <h3>Phone Number</h3>
                        <input
                            className="form-control mb-5" 
                            placeholder="Enter phone number"
                            defaultCountry="US"
                            name="phone"
                            onChange={handleInputChange}/>
                    </Col>
                    
                    <Col md={4}>
                        <h3>Age</h3>
                        <input className="form-control" 
                            type="number" 
                            id="age" 
                            max="130" min="18" 
                            required 
                            name="age" 
                            onChange={handleInputChange}
                        />
                    </Col>

                    <Col md={4}>
                        <h3>Password</h3>
                        <input 
                            className="form-control mb-5" 
                            placeholder="Hello" 
                            required 
                            name="password" 
                            type="password"
                            onChange={handleInputChange}
                            />
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
                        <select className="form-control" name="gender" onChange={handleInputChange}>
                        <option selected="selected">--------</option>
                        <option value="Man">he, him, his</option>
                        <option value="Woman">she, her, her</option>
                        <option value="Other">they, them, theirs</option>
                        </select>
                 </Col>
                 <Col md={6}>
                    <label for="orientation">Sexual Orientation</label>
                        <select name="orientation" className="form-control" onChange={handleInputChange}>
                        <option selected="selected">--------</option>
                        <option value="Straight">Straight</option>
                        <option value="Gay">Gay</option>
                        <option value="Bisexual">Bisexual</option>
                    </select>
                 </Col>
                </Row>
                <br></br>
                <Row>
                <Col>
                <Button 
                    className="btn btn-lg btn-primary btn-block" 
                    onClick={handleFormSubmit}>
                        Register
                    </Button>
                </Col>
                </Row>

            </form>
        </div>
        )
}



export default SignupOld;