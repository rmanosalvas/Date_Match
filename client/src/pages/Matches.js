import React, { useState, useEffect } from 'react';
import { Card, Media } from 'react-bootstrap';
import API from '../utils/API'

const  Matches = ()=> {

    // Setting initial state
    const [matches, setMatches] = useState([]);
    const [users, setUsers] = useState([]);

    // Load all matches and store them with setMatches
    useEffect(() => {
        loadMatches()
    }, [])

    // Loads all matches and sets them to matches
    function loadMatches() {
        API.getMatches()
            .then(res => {
                setMatches(res.data.foundMatches);
                setUsers(res.data.usersFound)
                console.log(res)
            })
            .catch(err => console.log(err));
    };

    console.log(matches)
    console.log(users)
    return (
        <div>
            {users.length ? (
                <ul className="list-unstyled">
                    {users.map(match => (
                        <Media as="li" key={match.id}>
                        <img
                            width={90}
                            height={85}
                            className="align-self-center mr-3"
                            src={match.avatar}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>{match.first_name} {match.last_name} </h5>
                            <p>Likes to {match.userPref1}</p>
                        </Media.Body>
                        </Media>
                    ))}
                </ul>
            ) : (
                    <h3>No matches yet!</h3>
                )}
        </div>
    )

}


export default Matches;