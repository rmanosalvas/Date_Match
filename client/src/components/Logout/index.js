import React from 'react'
import API from '../../utils/API';

function Logout(){

    function getMeOut(){
        API.logMeOut().then(()=> {
            console.log("logging out!")
            window.location.href = "/";

            })        
            .catch(err => console.log(err))

    }

    return(
        <a onClick={getMeOut}>Logout</a>
    )
}


export default Logout