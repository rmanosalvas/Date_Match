// Connect to the DB
const db = require('../models');
const notifier = require('../config/middleware/notifier');
const isAuthenticated = require("../config/middleware/isAuthenticated.js");//Checks that a user has been authenticated


module.exports = {
    newMatch: (req, res) => {
      console.log("SERVER ACTION - Creating New Match")
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
      // matches
      let matchPackage = {
          foundMatches: [],
          usersFound: []
      }
      console.log("SERVER ACTION - Finding matches for " + req.user.first_name)
      db.Match.findAll({
        where: { user1: req.user.id}
      }).then((result) => {
        matchPackage.foundMatches.push(result)
        // map the result for the user IDs matched with the current user
        let matchedUsers = result.map(match => {
          const usersFiltered = [];
          usersFiltered.push(match.dataValues.user2)
          return usersFiltered
        });
        db.User.findAll({
          where: {id: matchedUsers}
          
        }).then((foundUsers) => {
          matchPackage.usersFound.push(foundUsers)
          res.json(matchPackage)
        })
        // res.json(result)
      }).catch((err) => {
        // if there are errors log them to the console
        console.log(err)
      });
    }
  
}