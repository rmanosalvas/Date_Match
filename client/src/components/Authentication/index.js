import React, { useState, useEffect } from 'react';
import { } from 'react-bootstrap'
import API from '../../utils/API'


const Authentication = () => {
let [theUser, userState] = useState([])

    useEffect(() => {
        checkUserStatus()

    }, [])

    function checkUserStatus() {
        console.log("checking the users auth")
        API.isLoggedIn()
            .then(res => {
                console.log(res)
                if (res.status = 500) {
                    // The user is not Authenticated
                    console.log("This user is not authenticated")
                    window.location.href = "/"
                } else {
                    console.log("This user is authenticated")
                }
            }).catch((err) => {
                console.log(err)
            });
    }



    return (
        <div>

        </div>
    )
};

export default Authentication;