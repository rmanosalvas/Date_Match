import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import API from '../../utils/API'
import MatchedUserMod from '../MatchUserMod'

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      // display: "inline",
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

        function openChatWith(){
          console.log(data)
        }



    return (
      <ListItem className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="User Avatar" src={someUser.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={someUser.first_name + " "+someUser.last_name} 
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {someUser.location}
              </Typography>
              {"Click the message icon to chat with me"}
            </React.Fragment>
          }
        />
      </ListItem>
    </ListItem>
    )
}

export default MatchedUser