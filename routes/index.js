// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });




const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/api/user", (res, req) => {
    console.log("POST ROUTE HIT");
    db.User.create(req.body).then(function (user) {
        res.json(user);
    }).catch((err) => {
      console.log(err) 
    })
});

module.exports = router;





