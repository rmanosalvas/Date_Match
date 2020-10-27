import React, {  useState } from "react";
import {  Button, Card  } from 'react-bootstrap';
import API from '../../utils/API'


function CreateMatch({ id }) {

    const [match, setMatch] = useState([])
    const [user, setUser] = useState([])
    console.log(id)

    const matchCreate = () =>{
        API.newMatch({
   
        }).then(res => {
            console.log(res)

        })
    }
    function matchThisUser(id){
        console.log(id)
        matchCreate()
    }

    return(
        <Button onClick={matchThisUser}>Interested</Button>



    )


}


export default CreateMatch