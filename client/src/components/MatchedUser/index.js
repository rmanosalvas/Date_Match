import React, { useState, useEffect } from 'react';
import { Row, Col, Card, NavLink, Media, Button} from 'react-bootstrap'
import OtherProfileMod from "../OtherProfileMod"
import DeleteButton from '../DeleteButton'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }));

function MatchedUser( {data } ) {
    const classes = useStyles();
    const [someUser, setUsers] = useState([]);

        // Load all matches and store them with setMatches
        useEffect(() => {
            getUserInfo(data)
            
        }, [])
    
        // Loads one users profile
        function getUserInfo(data) {
            API.getOneUser(data)
                .then(res => {
                    console.log(res)
                    setUsers(res.data)
                })
                .catch(err => console.log(err))
        };



    return (
        // <div>
        //         <Media as="li" key={someUser.id}>
        //         <img
        //             width={80}
        //             height={60}
        //             className="align-self-center mr-3"
        //             src={someUser.avatar}
        //             alt="Generic placeholder"
        //         />
        //         <Media.Body>
        //             <h5>{someUser.first_name} {someUser.last_name} </h5>
        //             <h5>Looking for: {someUser.userPref1}, {someUser.userPref3}, {someUser.userPref3}</h5>
        //             <h5>Looking for: {someUser.userPref1}, {someUser.userPref3}, {someUser.userPref3}</h5>
        //         </Media.Body>
        //         </Media>
        // </div>
        <div>
        <ListItemAvatar key={someUser.id}>
        <Avatar alt="Remy Sharp" src={someUser.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
      </div>
        
    )
}

export default MatchedUser