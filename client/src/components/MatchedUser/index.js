import React, { useState, useEffect } from 'react';
import { Row, Col, Card, NavLink, Media, Button} from 'react-bootstrap'
import OtherProfileMod from "../OtherProfileMod"
import DeleteButton from '../DeleteButton'
import API from '../../utils/API'


function MatchedUser( {data } ) {
    const [someUser, setUsers] = useState([]);

        // Load all matches and store them with setMatches
        useEffect(() => {
            getUserInfo(data)
            
        }, [])
    
        // Loads one users profile
        function getUserInfo(data) {
            API.getOneUser(data)
                .then(res => {
                    console.log(res)
                    setUsers(res.data)
                })
                .catch(err => console.log(err))
        };



    return (
        <div>
                <Media as="li" key={someUser.id}>
                <img
                    width={80}
                    height={60}
                    className="align-self-center mr-3"
                    src={someUser.avatar}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{someUser.first_name} {someUser.last_name} </h5>
                    <h5>Looking for: {someUser.userPref1}, {someUser.userPref3}, {someUser.userPref3}</h5>
                    <h5>Looking for: {someUser.userPref1}, {someUser.userPref3}, {someUser.userPref3}</h5>
                </Media.Body>
                </Media>
        </div>
        
    )
}

export default MatchedUser