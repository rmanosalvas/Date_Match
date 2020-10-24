const path = require('path');
const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const passport = require("../config/passport"); // Requiring passport
const isAuthenticated = require("../config/middleware/isAuthenticated.js");//Checks that a user has been authenticated
const userController = require('../controllers/userControllers');

// API Routes
router.use("/api", apiRoutes );

// dashboard route 
router.get('/', isAuthenticated, function (req, res) {
  // if the user is authenticated redirect to dashboard
  res.redirect('/dashboard');
});

// LOGIN route
router.post('/api/login', passport.authenticate('local'), function(req, res) {
     res.json(req.user);
  });


// dashboard route 
router.get('/dashboard', isAuthenticated, function (req, res) {
  // dashboard
  console.log(req)
});

router.get("/logout", function (req, res) {
  console.log(req.user)
  req.logout();
  console.log(req.user)

  res.redirect("/");
});

router.get("/api/community", (req, res) => {
  console.log(req)
  userController.getUserCommunity(req, res);
});








// router.post('/api/dates', (req, res )=> {
//   dateControllers.newDate(req)  
// })
// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;





