import React, { useState, useEffect } from 'react';
import { Card, CardDeck, Carousel, Jumbotron} from 'react-bootstrap';
import API from '../utils/API';
// import Slider from './Slider';
import "./style.css"


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
        <div className="carousel">
            {users.length ? (
                <Carousel controls="false" slide="true" touch="true" indicators="false" pause="hover" keyboard="true" wrap="false">
                    {users.map(user => (
                    <Carousel.Item interval={50}>
                            <img
                            width={400}
                            height={200}
                            className="d-block w-100"
                            src={user.avatar}
                            alt="First slide"
                          />
                        <Carousel.Caption>
                        <h3>{user.first_name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                    <h3>You must be logged in to see users.</h3>
                )}
        </div>
    )
};

export default Community;