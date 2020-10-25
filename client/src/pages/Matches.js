import React, { useState, useEffect } from 'react';
import { Card, Media } from 'react-bootstrap';
import SomeUser from '../components/MatchedUser'
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
                console.log(res)
                setMatches(res.data);
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            {matches.length ? (
                <div>
                    {matches.map(match => (
                        <Media key={match.id}>
                            {<SomeUser data={match.user2}/>}
                        </Media>
                    ))}
                </div>
            ) : (
                    <h3>No matches yet!</h3>
                )}
        </div>
    )

}

       
export default Matches;