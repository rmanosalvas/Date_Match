// import React, { Component, useState, useEffect } from "react";
// import { Row, Col, Button, } from 'react-bootstrap';
// import API from '../../utils/API';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'


// function Signup() {
//     const [users, setUsers] = useState([])
//     const [formObject, setFormObject] = useState([])


//     function RegisterUser() {
//         console.log("Creating User")
//         API.createUser({
//             email: formObject.email,
//             first_name: formObject.first_name,
//             last_name: formObject.last_name,
//             age: formObject.age,
//             password: formObject.password,
//             orientation: formObject.orientation,
//             gender: formObject.gender,
//             phone: formObject.phone
//         })
//         .then(res => {
//             console.log("User Created")
//             setUsers(res.data)
//             window.location.href = "/";
//         })
//         .catch(err => console.log(err))
        
//     }

//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setFormObject({...formObject, [name]: value})
//     };
 
// function handleFormSubmit(event) {
//     event.preventDefault();
//     if (
//         formObject.email && 
//         formObject.first_name && 
//         formObject.last_name &&
//         formObject.age &&
//         formObject.password &&
//         formObject.orientation &&
//         formObject.gender &&
//         formObject.phone) {
//             RegisterUser()
//         }
//   };


//         return (
//         <div>
//             <form className="form-group mt-5 mb5" >
//                 <Row className="justify-content-md-center">
//                     <Col md={4}>
//                         <h3>Email Address</h3>
//                         <input 
//                             className="form-control mb-5" 
//                             placeholder="email@example.com" 
//                             required 
//                             name="email" 
//                             type="text" 
                            // onChange={handleInputChange}
//                             />
//                     </Col>
//                     <Col md={4}>
//                         <h3>First Name</h3>
//                         <input 
//                             className="form-control mb-5" 
//                             placeholder="John/Jane" 
//                             required 
//                             name="first_name" 
//                             type="text"
//                             onChange={handleInputChange}
//                         />
//                     </Col>
//                     <Col md={4}>
//                         <h3>Last Name</h3>
//                         <input 
//                             className="form-control mb-5" 
//                             placeholder="Doe" 
//                             required 
//                             name="last_name" 
//                             type="text"
//                             onChange={handleInputChange}
//                         />
//                     </Col>
//                 </Row>
                    

//                 <Row className="justify-content-md-center">
//                     <Col md={4}>
//                         <h3>Phone Number</h3>
//                         <input
//                             className="form-control mb-5" 
//                             placeholder="Enter phone number"
//                             defaultCountry="US"
//                             name="phone"
//                             onChange={handleInputChange}/>
//                     </Col>
                    
//                     <Col md={4}>
//                         <h3>Age</h3>
//                         <input className="form-control" 
//                             type="number" 
//                             id="age" 
//                             max="130" min="18" 
//                             required 
//                             name="age" 
//                             onChange={handleInputChange}
//                         />
//                     </Col>

//                     <Col md={4}>
//                         <h3>Password</h3>
//                         <input 
//                             className="form-control mb-5" 
//                             placeholder="Hello" 
//                             required 
//                             name="password" 
//                             type="password"
//                             onChange={handleInputChange}
//                             />
//                     </Col>

//                 </Row>

//                 {/* <Row>
//                     <Col md={12}>
//                         <h1 className="h3 mb-3 font-weight-normal">Build Your Profile</h1>
//                         <Row>
//                             <Col md={{ span: 6, offset: 3 }}>
//                                 <picture>
//                                     <label for="avatar" className="">Upload photo:</label>
//                                 </picture>
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row> */}

//                 <Row> 
//                     <Col md={6}>
//                     <label for="gender">Select Your Pronouns</label>
//                         <select className="form-control" name="gender" onChange={handleInputChange}>
//                         <option selected="selected">--------</option>
//                         <option value="Man">he, him, his</option>
//                         <option value="Woman">she, her, her</option>
//                         <option value="Other">they, them, theirs</option>
//                         </select>
//                  </Col>
//                  <Col md={6}>
//                     <label for="orientation">Sexual Orientation</label>
//                         <select name="orientation" className="form-control" onChange={handleInputChange}>
//                         <option selected="selected">--------</option>
//                         <option value="Straight">Straight</option>
//                         <option value="Gay">Gay</option>
//                         <option value="Bisexual">Bisexual</option>
//                     </select>
//                  </Col>
//                 </Row>
//                 <br></br>
//                 <Row>
//                 <Col>
//                 <Button 
//                     className="btn btn-lg btn-primary btn-block" 
//                     onClick={handleFormSubmit}><a href='/'>
//                         Register
//                     </a></Button>
//                 </Col>
//                 </Row>

//             </form>
//         </div>
//         )
// }



// export default Signup;


import React, { useEffect, useState, Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from '../../utils/API';


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


    function RegisterUser() {
        console.log("Creating User")
        API.createUser({
            email: formObject.email,
            first_name: formObject.first_name,
            last_name: formObject.last_name,
            age: formObject.age,
            password: formObject.password,
            orientation: formObject.orientation,
            gender: formObject.gender,
            phone: formObject.phone
        })
        .then(res => {
            console.log("User Created")
            setUsers(res.data)
            window.location.href = "/";
        })
        .catch(err => console.log(err))
        
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
 
    function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject.email)
    console.log(formObject.first_name)
    console.log(formObject.last_name)
    console.log(formObject.age)
    console.log(formObject.password)
    console.log(formObject.orientation)
    console.log(formObject.gender)
    console.log(formObject.phone)
    if (
        formObject.email && 
        formObject.first_name && 
        formObject.last_name &&
        formObject.age &&
        formObject.password &&
        formObject.orientation &&
        formObject.gender &&
        formObject.phone) {
            RegisterUser()
        }
    };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
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
                    
                    <option selected="selected">
                    --------                    
                    </option>
                    <option value="Man">
                        He, Him, His
                    </option>
                    <option value="Woman">
                        She, His, Him
                    </option>
                    <option value="Other">
                        They, Them, Theirs
                    </option>
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
                    
                    <option selected="selected">
                    --------                    
                    </option>
                    <option value="Straight">
                        Straight
                    </option>
                    <option value="Gay">
                        Gay
                    </option>
                    <option value="Bisexual">
                        Bisexual
                    </option>
              </TextField>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
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