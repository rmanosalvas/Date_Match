import React, { Component, useState, useEffect } from "react";
import { Row, Col, Button, } from 'react-bootstrap';
// import API from '../../utils/API';
import API from '../../utils/API.js';

function Signup() {



    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])


    // useEffect(() => {
    //     loadPage()
    // }, [])

    function loadPage() {
        console.log("Creating User")
        API.createUser({
            email: formObject.title,
            first_name: formObject.first_name,
            last_name: formObject.last_name,
            age: formObject.age,
            password: formObject.password,
            orientation: formObject.orientation,
            gender: formObject.gender
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
        formObject.first_name && 
        formObject.last_name &&
        formObject.age &&
        formObject.password &&
        formObject.orientation &&
        formObject.gender) {
            loadPage()
        }
  };


        return (
        <div>
            <form className="form-group mt-5 mb5" >
                <Row className="justify-content-md-center">
                    <Col md={5}>
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
                    <Col md={3}>
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
                    <Col md={3}>
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
                    <Col md={1}>
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
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={12}>
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
                        <option value="1">he, him, his</option>
                        <option value="2">she, her, her</option>
                        <option value="3">they, them, theirs</option>
                        </select>
                 </Col>
                 <Col md={6}>
                    <label for="orientation">Sexual Orientation</label>
                        <select name="orientation" className="form-control" onChange={handleInputChange}>
                        <option selected="selected">--------</option>
                        <option value="1">Straight</option>
                        <option value="2">Gay</option>
                        <option value="3">Bisexual</option>
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



export default Signup;