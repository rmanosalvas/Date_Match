import React, { useState, useEffect } from 'react';
import { Figure, Image } from 'react-bootstrap';
import API from '../utils/API';
import './style.css';


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
        <div class="block">
            {users.length ? (
                <div class="scrolling-wrapper">
                    {users.map(user => (
                    <div key={user.id} class="avatar">
                        <Image
                            width={185}
                            height={170}
                            alt="User Avatar"
                            src={user.avatar}
                        />
                            <Figure.Caption>
                                {user.first_name}
                            </Figure.Caption>
                    </div>
                    ))}
                </div>
            ) : (
                    <h3>You must be logged in to see users.</h3>
                )}
        </div>
    )
};

export default Community;