import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, Jumbotron, Media } from 'react-bootstrap'
import OtherProfileMod from "../OtherProfileMod"
import DeleteButton from '../DeleteButton'
import API from '../../utils/API'


function UserProfileList({ data }) {

    const deleteDates = (id) => {
        console.log("deleting")
        API.deleteDate(id)
        window.location.href = "/dashboard"
    }

    return (
        
            data.map(date => (

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
                            <h5>{date.title}</h5>
                            <OtherProfileMod id={date.UserId} />
                            <p>{date.body}  </p>
                        </Media.Body>
                        <DeleteButton onClick={() => deleteDates(date.id)} />
                    </Media>
                    <br></br>
                </ul>
            ))
        
    )
}

export default UserProfileList