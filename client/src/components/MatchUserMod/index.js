import React, { Component, useState, useEffect } from "react";
import { Modal, Jumbotron, Figure } from 'react-bootstrap';
import ListItem from "@material-ui/core/ListItem";
import ChatIcon from '@material-ui/icons/Chat';
import API from '../../utils/API'

// get the match id from the click
// Use to get matches




function OtherProfileMod({ matchID }) {
    console.log("date id")
    console.log(matchID)

    const [messages, setMessages] = useState([])
    // const [currentProfile, setCurrentProfile] = useState([])
    useEffect(() => {
        
        // getMessages(id)
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function getMessages(id){
        // get the match info

        // get messages where
        // res.data.Userid is user1 or user2 and matchid 


        API.getMessages(messages.id)
        .then(res => {
            console.log("getting the current user to be matched with")
            console.log(res)
            getMessages(res.data)
        })
        .catch(err => console.log(err))
    }

    const handleShow = () => {
        API.getOneUser(matchID.UserId).then((res) => {
            getMessages(res.data)
            console.log(res)
        })
        setShow(true);

    }
    // function loadProfile() {
    //     console.log("CLIENT TESTING")

    //     API.getOneUser(data)
    //         .then(res => {
    //             console.log(res)
    //             // 
    //         })
    //         .catch(err => console.log(err))
    // }

    // function matchUsers() {
    //     console.log(profile)
    //     // define the match object
    //     var thisMatch = {
    //         user1: currentProfile.id,//client users id
    //         user2: profile.id, //posting users id
    //     }

    //     // API.newMatch(thisMatch)
    //     // .then(res => {
    //     //     console.log(res)

    //     // }).catch(err => console.log(err))

    //     // window.location.href = "/matches"

    // }

    return (
        <ListItem as="button">

        <ChatIcon variant="primary" onClick={handleShow} alignItems="flex-start">
        </ChatIcon>

                <Modal show={show} onHide={handleClose} 
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                    <Modal.Header closeButton>gfhfjghjf's Profile</Modal.Header>
                    <Jumbotron>
                        jhvjhgvjhg
                    </Jumbotron>
                </Modal>

        </ListItem>
    )
}

export default OtherProfileMod