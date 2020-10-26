import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import SomeUser from "../components/MatchedUser";
import API from "../utils/API";

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

export default function AlignItemsList() {
  const classes = useStyles();

  // Setting initial state
  const [matches, setMatches] = useState([]);

  // Load all matches and store them with setMatches
  useEffect(() => {
    loadMatches();
  }, []);

  // Loads all matches and sets them to matches
  function loadMatches() {
    API.getMatches()
      .then((res) => {
        console.log(res);
        setMatches(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <List className={classes.root}>
      <div>
        {matches.length ? (
          <div>
            {matches.map((match) => (
              <ListItem alignItems="flex-start" key={match.id}>
                  {<SomeUser data={match.user2}/>}
              </ListItem>
            ))}
          </div>
        ) : (
          <h3>No matches yet!</h3>
        )}
      </div>

      <Divider variant="inset" component="li" />
    </List>
  );
}
