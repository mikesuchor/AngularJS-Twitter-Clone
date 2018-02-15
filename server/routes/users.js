var express = require('express');
var cors = require('cors');
var fs = require('fs');
var router = express.Router();
router.options('*', cors())

var usersJSON;
var usersInDatabase;
var pathToDatabase = '../server/public/users.json';

fs.readFile(pathToDatabase, function(err, data) {
  if (err) {
    return console.log(err);
  }
  usersJSON = JSON.parse(data);
  usersInDatabase = usersJSON.users;
});

/* GET users listing */
router.get('/', cors(), function(req, res, next) {
  res.json(usersInDatabase);
});

/* POST new user to users.json file */
router.post('/', cors(), function(req, res, next) {
  usersInDatabase.forEach(function(dbuser) {
    if (dbuser.username === req.body.username && dbuser.password === req.body.password) {
      res.status(200).json(true);
    }
  });
  res.status(404).json(false);
});

module.exports = router;