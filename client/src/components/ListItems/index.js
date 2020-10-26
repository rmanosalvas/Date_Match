import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import Logout from '../Logout'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateDate from '../CreateDate'




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
        <PeopleIcon />
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
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Matches" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <Logout />
    </ListItem>
  </div>
);


