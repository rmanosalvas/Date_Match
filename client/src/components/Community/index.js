// should contain a fetch of all users
// should map each user avatar
// state should contain the users information

import React, { useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import API from '../../utils/API'


function Community () {

    // Setting initial state
    const [users, setUsers] = useState([]);

    // Load all matches and store them with setMatches
    useEffect(() => {
        loadUsers()
    }, [])

    // Loads all matches and sets them to matches
    function loadUsers() {
        API.getAllUsers()
            .then(res => {
                console.log("getAllUsers");
                setUsers(res.data);
                console.log(res)
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            {users.length ? (
                <CardDeck>
                    {users.map(user => (
                        <Card style={{ width: '18rem' }} key={user.id}>
                            <Card.Img variant="top" src={user.avatar} rounded />
                        </Card>
                    ))}
                </CardDeck>
            ) : (
                    <h3>No users yet James!</h3>
                )}
        </div>
    )
};

export default Community;