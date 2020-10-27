import React, { useState, useEffect } from "react";
import {Avatar, Button, CssBaseline, TextField, 
  Link, Paper, Box, Grid, Typography, makeStyles} from '@material-ui/core/';
import API from '../utils/API';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url(" + "https://dailyentertainment.me/wp-content/uploads/2016/10/laughing-couple-on-date.jpg" + ")",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState([])

    function SignUserIn(){
        console.log("Signing User In")
        API.userLogin({
            email: formObject.email,
            password: formObject.password
        }).then(()=> {
            console.log("logging on")
            window.location.href = "/dashboard";
        })
        .catch(err => alert("That password is incorrect!"))
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (
            formObject.email && 
            formObject.password) {
                SignUserIn()
            }
      };  

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="Email address"
              required 
              name="email" 
              type="text" 
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Password"
              required 
              name="password" 
              type="password" 
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              className="btn btn-md btn-primary col"
              onClick={handleFormSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/recover" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              Date Match - Created by Don Tran, Ricardo Manosalvas, and James Hudgins
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
