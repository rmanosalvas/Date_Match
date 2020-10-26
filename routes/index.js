const path = require('path');
const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const passport = require("../config/passport"); // Requiring passport
const isAuthenticated = require("../config/middleware/isAuthenticated.js");//Checks that a user has been authenticated
const userController = require('../controllers/userControllers');
const dateControllers = require('../controllers/dateControllers');
const matchControllers = require('../controllers/matchControllers');
const msgControllers = require('../controllers/msgControllers');

// API Routes
router.use("/api", apiRoutes );

// // dashboard route 
// router.get('/', isAuthenticated, function (req, res) {
//   // if the user is authenticated redirect to dashboard
//   res.redirect('/dashboard');
// });

// LOGIN route
router.post('/api/login', passport.authenticate('local'), function(req, res) {
     res.json(req.user);
  });

// dashboard route attempt from saturday oct 24 
router.get('/authorize', isAuthenticated, function (req, res) {
  console.log("SERVER SIDE  - Authorize Route HIT")
  // console.log(req.user)
  if (req.user){
    console.log("the user is logged in")
    userStatus = "Authenticated"
    res.json(userStatus)
  } else{
    userStatus = "Note Authenticated"
    res.json(userStatus)
  }
});

// router.get("/api/dates", (req, res) => {
//   console.log("SERVER SIDE - loading community")
//   dateControllers.getAllDates(req, res);
// });

router.get("/logout", function (req, res) {
  console.log(req.user)
  req.logout();
  console.log(req.user)
  res.redirect("/");
});

router.post("/recover", (req, res) => {
  console.log("SERVER SIDE - Request to change password")
  userController.recoverAccount(req, res);
});

router.get("/api/allusers", (req, res) => {
  console.log("SERVER SIDE - loading community")
  userController.getAllUsers(req, res);
});

router.get("/api/community", (req, res) => {
  console.log("SERVER SIDE - loading community")
  userController.getUserCommunity(req, res);
});

router.get("/api/profile", (req, res) => {
  console.log("SERVER SIDE - loading profile of the user logged in")
  userController.getUserProfile(req, res);
});

router.get("/api/user/:id", (req, res) => {
  console.log("SERVER SIDE - loading profile of one user")
  userController.getOneUser(req, res);
});

router.put('/api/user/:id', (req, res) => {
  console.log("SERVER SIDE - making new password for the user")
  userController.updateProfile(req, res)
});

router.put('/api/password', (req, res) => {
  console.log("SERVER SIDE - changing the users passwrd")
  userController.changeUserPassword(req, res)
});





router.get("/api/messages/match/:id", (req, res) => {
  console.log("SERVER SIDE - loading profile of one user")
  msgControllers.getMsgs(req, res);
});












// router.post('/api/dates', (req, res )=> {
//   dateControllers.newDate(req)  
// })
// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });}

module.exports = router;





