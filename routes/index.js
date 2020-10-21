const path = require('path');
const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const passport = require("../config/passport"); // Requiring passport
const isAuthenticated = require("../config/middleware/isAuthenticated.js");//Checks that a user has been authenticated

// dashboard route 
router.get('/', isAuthenticated, function (req, res) {
  // if the user is authenticated redirect to dashboard
  res.redirect('/dashboard');
});

// LOGIN route
router.post('/api/login', 
  passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login', failureFlash : true  }),
  function(req, res) {
    console.log(req)
    // redirect the user to the dashboard
    
    console.log("****************************")
    console.log(res)
  });

// API Routes
router.use("/api", apiRoutes );

// dashboard route 
router.get('/dashboard', isAuthenticated, function (req, res) {
  // dashboard
  res.redirect('/dashboard');
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;





