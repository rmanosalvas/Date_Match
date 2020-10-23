import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';



function Changepassword () {

    // function formSubmit (event) {
    //     event.preventDefault();
    //     if (
    //         formObject.current_password &&
    //         formObject.new_password &&
    //         formObject.changed_password
    //     ) {

    //     }
    // };







    return (
        <div>
            <form className="form-group mt-5 mb5">
                <Container>
                    <Row>
                        <Col>
                            <h3>Change Password:</h3>
                            <input className="form-control"
                                type="password"
                                name="current_password"
                                placeholder="Current Password"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <input className="form-control"
                                type="password"
                                name="new_password"
                                placeholder="New Password"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <input className="form-control"
                                type="password"
                                name="changed_password"
                                placeholder="Re-type Password"
                            />
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    )
};

export default Changepassword;