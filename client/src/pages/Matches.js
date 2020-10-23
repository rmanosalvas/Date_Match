import React, { useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import API from '../utils/API'

const  Matches = ()=> {

    // Setting initial state
    const [matches, setMatches] = useState([]);

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
                <CardDeck>
                    {matches.map(match => (
                        <Card style={{ width: '18rem' }} key={match.id}>
                            <Card.Img variant="top" src={match.avatar} />
                            <Card.Body>
                                <Card.Title>{match.first_name} {match.last_name}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            ) : (
                    <h3>No matches yet!</h3>
                )}
        </div>
    )

}


export default Matches;