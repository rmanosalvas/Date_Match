import React, { useState, useEffect } from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import API from '../utils/API'
import Matches from '../components/Matches'

const Newpage = () => {


    return(

        <Container>
            <Matches />
        </Container>
    )

}


export default Newpage;