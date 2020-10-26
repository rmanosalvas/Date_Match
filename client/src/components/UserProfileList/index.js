import React, { useState, useEffect } from 'react';
import { Row, Col, Card, NavLink, Accordion, Button} from 'react-bootstrap'
import OtherProfileMod from "../OtherProfileMod"
import DeleteButton from '../DeleteButton'
import API from '../../utils/API'

function UserProfileList({ data }) {
    console.log('LOL')
    console.log(data)



    const deleteDates = (id) => {
        console.log("deleting")
        API.deleteDate(id)
        window.location.href = "/dashboard"
    }

    return (
        
            data.map(date => (
                <Col xs={12}>
                    <Card>
                    <Card.Header>
                        <Row>
                        <Col xs={9}><h3>{date.title}</h3></Col>
                        <Col xs={3}><DeleteButton onClick={() => deleteDates(date.id)} /></Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Category: {date.category}</Card.Subtitle>
                        <hr></hr>
                        {date.body}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Row sm={8}>
                        <Col xs={6}>
                        <Accordion.Toggle as={Button} eventKey={date.id}>
                        Comment
                        </Accordion.Toggle>   
                        </Col>
                        <Col xs={6}><OtherProfileMod as={Button} dateInfo={date} /></Col>
                        </Row>
                        <Accordion.Collapse eventKey={date.id}>
                    <Card.Body>
                        {date.body}
                    </Card.Body>
                    </Accordion.Collapse>
                    </Card.Footer>
                    </Card>
                </Col>
            ))
        
    )
}

export default UserProfileList