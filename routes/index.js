const path = require('path');
const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const passport = require("../config/passport"); // Requiring passport
const isAuthenticated = require("../config/middleware/isAuthenticated.js"); //Checks that a user has been authenticated
const userController = require('../controllers/userControllers');
const dateControllers = require('../controllers/dateControllers');
const matchControllers = require('../controllers/matchControllers');
const msgControllers = require('../controllers/msgControllers');
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({
  storage: storage
})

// LOGIN route
router.post('/api/login', passport.authenticate('local'), function (req, res) {
  res.json(req.user);
});

// API Routes
router.use("/api", apiRoutes);
// HTML Routes below ******

// route for authenticated pages
router.get('/authorize', isAuthenticated, function (req, res) {
  if (req.user) {
    console.log("user is logged")
    res.json("Authorized")
  } else {
    console.log("user is not loged in")
    res.json("Not Authorized")
  }

});

router.post('/avatar', upload.single('avatar'), function (req, res, next) {
  console.log("SERVER SIDE - changing the users avatar")
  userController.changeAvatar(req, res)
})

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
router.get("/api/comments/:id", (req, res) => {
  console.log("SERVER SIDE - loading profile of one user")
  userController.getComments(req, res);
});
router.post("/api/comments/", (req, res) => {
  console.log("SERVER SIDE - loading profile of one user")
  userController.postComment(req, res);
});


module.exports = router;