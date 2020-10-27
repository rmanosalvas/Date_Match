import React, { useState, useEffect } from "react";
import { Container, Button, CssBaseline, TextField, Typography, Link, Grid, Box, makeStyles } from '@material-ui/core/';
import API from '../utils/API';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Date Match
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState([])

  function changeUserPassword(){
    console.log(formObject)
      console.log("changing the user's password ")
      API.changeUserPassword({
          password: formObject.password2,
      }).then((res)=> {
        console.log(res)
          console.log("Changing the user's password")
          window.location.href = "/";
      })
      .catch(err => console.log(err))
  }

  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    console.log(formObject)
      event.preventDefault();
      if (formObject.currentPassword !== undefined && 
          (formObject.password1 = formObject.password1)) {
              changeUserPassword()
          }
  };  
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Change that password. . . Make it secure this time!
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="currentPassword"
                label="Current Password"
                name="currentPassword"
                autoComplete="currentPassword"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="password1"
                label="New Password"
                type="password1"
                id="password1"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="password2"
                label="New Password"
                type="password2"
                id="password2"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleFormSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component="a" href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}