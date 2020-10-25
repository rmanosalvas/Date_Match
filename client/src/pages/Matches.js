import React, { useState, useEffect } from 'react';
import { Card, Media } from 'react-bootstrap';
import API from '../utils/API'

const  Matches = ()=> {

    // Setting initial state
    const [matches, setMatches] = useState({});

    // Load all matches and store them with setMatches
    useEffect(() => {
        loadMatches()
    }, [])

    // Loads all matches and sets them to matches
    function loadMatches() {
        API.getMatches()
            .then(res => {
                setMatches(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            {matches.length ? (
                <ul className="list-unstyled">
                    {matches.map(match => (
                        <Media as="li" key={match.id}>
                        <img
                            width={75}
                            height={75}
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