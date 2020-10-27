import React, { useEffect, useState, Component } from "react";
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, makeStyles, Container } from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import API from "../../utils/API";
import validator from "validator";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Date Match
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState([]);

  function RegisterUser() {
    console.log("Creating User");
    API.createUser({
      email: formObject.email,
      first_name: formObject.first_name,
      last_name: formObject.last_name,
      age: formObject.age,
      password: formObject.password,
      orientation: formObject.orientation,
      gender: formObject.gender,
      phone: formObject.phone,
    })
      .then((res) => {
        console.log("User Created");
        setUsers(res.data);
        window.location.href = "/";
      })
      .catch((err) => alert("Recheck the form, looks like something is wrong. . ."));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.email &&
      formObject.first_name &&
      formObject.last_name &&
      formObject.age &&
      formObject.password &&
      formObject.orientation &&
      formObject.gender &&
      formObject.phone
    ) {
      RegisterUser();
    }  
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Here
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                type="number"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="gender"
                variant="outlined"
                required
                fullWidth
                id="gender"
                label="Gender"
                select
                autoFocus
                onChange={handleInputChange}
              >
                <option value="Man">He, Him, His</option>
                <option value="Woman">She, His, Him</option>
                <option value="Non-binary">They, Them, Theirs</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="orientation"
                variant="outlined"
                required
                fullWidth
                id="orientation"
                label="Orientation"
                select
                autoFocus
                onChange={handleInputChange}
              >
                <option value="Straight">Straight</option>
                <option value="Gay">Gay</option>
                <option value="Bisexual">Bisexual</option>
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/"
            onClick={handleFormSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2" className="submit">
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
