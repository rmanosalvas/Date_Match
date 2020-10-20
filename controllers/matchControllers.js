// Connect to the DB
const db = require('../models');
const notifier = require('../config/middleware/notifier');

module.exports = {
    newMatch: (req, res) => {
        db.Match.create({
            user1: req.body.user1,
            user2: req.body.user2,
            UserId: req.body.UserId
          },).then((newMatch) => {
            // return the result in JSON format
            res.json(newMatch);
          }).catch((err) => {
            // if there are errors log them to the console
            console.log(err)
          });
        //   notify the other user that someone matched with them
        notifier("Lucky you, someone just matched with you! Go check out your messages to talk with them.", req.body.phone)
		
    },
    getMatches: (req, res) => {
        // get all matches for the requesting user
        // map results in object to be returned in the res.
    }
}