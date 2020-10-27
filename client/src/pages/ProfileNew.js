import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Row, Col, Form, Button, Jumbotron, Figure } from 'react-bootstrap';
import {CssBaseline, Drawer, 
    Box, AppBar, Toolbar, 
    List, Typography, Divider,
    IconButton, Badge, Container, Grid, Paper, Link, makeStyles} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../components/ListItems';
import FilesUploadComponent from "../components/FileUpload";
import API from '../utils/API'
import './style.css';



function Profile() {
    const [profile, setProfile] = useState([])
    const [formObject, setFormObject] = useState([])
        useEffect(() => {
            loadProfile()
        }, [])
        
        function loadProfile() {
            API.getProfileInfo(profile.id)
                .then(res => {
                    console.log(res)
                    setProfile(res.data)
                })
                .catch(err => console.log(err))
        }

        function handleInputChange(event) {
            const { name, value } = event.target;
            setFormObject({ ...formObject, [name]: value })
        };

        function updateUserProfile() {
            console.log("Updating the users profile")
            API.updateProfileInfo({
                id: profile.id,
                gender: formObject.gender,
                aboutMe1: formObject.aboutMe1,
                userPref1: formObject.userPref1,
                aboutMe2: formObject.aboutMe2,
                userPref2: formObject.userPref2,
                aboutMe3: formObject.aboutMe3,
                userPref3: formObject.userPref3,
            })
            
            window.location.reload()
            
        }

        function handleFormSubmit(event) {
            event.preventDefault();
            console.log(profile.id)
            if (formObject.gender ||
                formObject.aboutMe1 ||
                formObject.userPref1 ||
                formObject.aboutMe2 ||
                formObject.userPref2 ||
                formObject.aboutMe3 ||
                formObject.userPref3) {

                updateUserProfile()
    
            }
        };


    return (
        <Jumbotron>
            <Row>
            <Col>
            <Figure>
                <Figure.Image
                    width={250}
                    height={265}
                    alt="User Avatar"
                    src={profile.avatar}
                    roundedCircle
                />
                    <Figure.Caption>
                        From {profile.location}
                    </Figure.Caption>
                    <FilesUploadComponent />
            </Figure>
            </Col>
            <Col>
            <h1>{profile.first_name} {profile.last_name}</h1>
            <p></p>

            </Col>
            </Row>
            <Form >
                <Row className="justify-content-md-center">
                </Row>
                <Row>
                    <Col>
                        <h3>
                            Age:
                        </h3>
                    </Col>
                    <Col>
                        <h3>
                            Orientation: 
                        </h3>
                    </Col>
                    <Col>
                        <h3>
                            Identifies as a :
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            name="age"
                            value={profile.age}
                            onChange={handleInputChange}>
                        </Form.Control>
                    </Col>
                    <Col>
                    <Form.Control
                            name="orientation"
                            value={profile.orientation}
                            readOnly
                            onChange={handleInputChange}>
                        </Form.Control>                    
                    </Col>
                    <Col>
                    <Form.Control
                            name="gender"
                            readOnly
                            defaultValue={profile.gender}
                            onChange={handleInputChange}>
                        </Form.Control>                    
                    </Col>
                </Row>
                <Row>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                    <h5>
                        Hello I'm {profile.first_name}, let me tell you a bit about myself.
                    </h5>
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label>I make the best:  </Form.Label>
                            <Form.Control
                                name="aboutMe1"
                                defaultValue={profile.aboutMe1} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                        </Col>
                        <Col>
                    <Form.Group>
                        <Form.Label>I'm always : </Form.Label>
                            <Form.Control
                                name="userPref1"
                                defaultValue={profile.userPref1} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label> You can always catch me: </Form.Label>
                            <Form.Control
                                name="aboutMe2"
                                defaultValue={profile.aboutMe2} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                        </Col>
                        <Col>
                    <Form.Group>
                        <Form.Label>I am looking for someone who wants to: </Form.Label>
                            <Form.Control
                                name="userPref2"
                                defaultValue={profile.userPref2} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label>Don't even try if you don't have a: </Form.Label>
                            <Form.Control
                                name="aboutMe3"
                                defaultValue={profile.aboutMe3} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                        </Col>
                        <Col>
                    <Form.Group>
                        <Form.Label>We won't work if you can't:  </Form.Label>
                            <Form.Control
                                name="userPref3"
                                defaultValue={profile.userPref3} 
                                onChange={handleInputChange}>
                            </Form.Control>
                    </Form.Group>
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Form>
            <Jumbotron>
            <Button variant="success" onClick={handleFormSubmit}>
                        Update Account
            </Button>
            </Jumbotron>
        </Jumbotron>

    )
}



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function ProfileNew() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
          </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper>
                                <Profile />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>

                </Container>
            </main>
        </div>
    );
}