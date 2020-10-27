// import React, { useState, useEffect } from "react";
// import clsx from "clsx";
// import { Row, Col, Card, NavLink, Media, Button } from "react-bootstrap";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
// import Box from "@material-ui/core/Box";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
// import MatchedUser from "../components/MatchedUser";
// // import ChatWithUser from "../components/MatchChat";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Link from "@material-ui/core/Link";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import { mainListItems } from "../components/ListItems";
// import MatchedUserMod from "../components/MatchUserMod";

// import API from "../utils/API";
// const drawerWidth = 175;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: "inline",
//   },
//   root: {
//     display: "flex",
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: "none",
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

// export default function AlignItemsList() {
//   const classes = useStyles();
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   // Setting initial state
//   const [matches, setMatches] = useState([]);
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   // Load all matches and store them with setMatches
//   useEffect(() => {
//     loadMatches();
//   }, []);

//   // Loads all matches and sets them to matches
//   function loadMatches() {
//     API.getMatches()
//       .then((res) => {
//         console.log(res);
//         console.log(res)
//         setMatches(res.data);
//       })
//       .catch((err) => console.log(err));
//   }

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         className={clsx(classes.appBar, open && classes.appBarShift)}
//       >
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(
//               classes.menuButton,
//               open && classes.menuButtonHidden
//             )}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             component="h1"
//             variant="h6"
//             color="inherit"
//             noWrap
//             className={classes.title}
//           >
//             Dashboard
//           </Typography>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>{mainListItems}</List>
//       </Drawer>

//       <List className={classes.root}>
//         <div>
//           {matches.length ? (
//             <div>
//               {matches.map((match) => (
//                 <List
//                   alignItems="flex-start"
//                   key={match.id}
//                   component="a"
                  
//                 >
                  
//                   {<MatchedUser data={match.user2} />}
//                   {<MatchedUserMod matchID={match.id} size="lg" 
//                   aria-labelledby="contained-modal-title-vcenter"
//                   centered/>}
//                 </List>
                
//               ))}
//             </div>
//           ) : (
//             <h3>No matches yet!</h3>
//           )}
//         </div>

//         <Divider variant="inset" component="li" />
//       </List>
//     </div>
//   );
// }
