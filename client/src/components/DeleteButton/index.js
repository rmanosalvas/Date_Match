import React from "react";
import { Button } from 'react-bootstrap'


function DeleteButton(props){
    return(
        <Button {...props} tabIndex="0">
            Delete Date
        </Button>
    )
}

export default DeleteButton