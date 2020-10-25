import React from 'react';
import CreateDate from '../CreateDate'



function Footer(){
    return (
    <nav className="nav nav-pills nav-justified bg-light fixed-bottom">
    <li class="nav-item">
    <a class="nav-link" ></a>
    </li>

  <CreateDate/>

    <li class="nav-item">
    <a class="nav-link" href="/matches">Matches</a>
    </li>        
    </nav>
    );


}

export default Footer;