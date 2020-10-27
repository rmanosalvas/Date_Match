import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Logout from '../Logout';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CreateDate from '../CreateDate'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TwitterIcon from '@material-ui/icons/Twitter';
import HelpIcon from '@material-ui/icons/Help';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/dashboard">
        <ListItemIcon >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/community">
      <ListItemIcon>
        <SportsKabaddiIcon />
      </ListItemIcon>
      <ListItemText primary="Community" />
    </ListItem>
    <ListItem button component="a" href="/profile">
      <ListItemIcon>
        <InsertEmoticonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button component="a" href="/matches">
      <ListItemIcon>
        <WhatshotIcon />
      </ListItemIcon>
      <ListItemText primary="Matches" />
    </ListItem>
  </div>

);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem >
      <ListItemIcon>
        <TwitterIcon />
      </ListItemIcon>
      <CreateDate/>
    </ListItem>
    <ListItem button component="a" href="/password">
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Change Password" />
    </ListItem>
    <ListItem button component="a" href="/" onClick={Logout}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <Logout />
    </ListItem>
  </div>
); 

