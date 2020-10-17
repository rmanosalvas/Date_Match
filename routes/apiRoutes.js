const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/api/user", (res, req) => {
    console.log("POST ROUTE HIT");
    db.User.create(req.body).then(function (user) {
        res.json(user);
    })
});

module.exports = router;