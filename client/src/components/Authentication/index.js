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
                if (res.status !== 200 || res.data !== "Authorized") {
                    console.log("This user is not authenticated")
                    alert("Session Not Authorized, Please log back in.")
                    console.log(res)
                    window.location.href = "/"
                } else {
                    console.log("This user is authenticated.")
                }
            })
    }



    return (
        <div>

        </div>
    )
};

export default Authentication;