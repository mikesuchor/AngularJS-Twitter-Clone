var express = require('express');
var cors = require('cors');
var fs = require('fs');
var router = express.Router();
router.options('/', cors())

var databaseJSON;
var tweetsInDatabase;
var pathToDatabase = '../server/public/db.json';

fs.readFile(pathToDatabase, function(err, data) {
  if (err) {
    return console.log(err);
  }
  databaseJSON = JSON.parse(data);
  tweetsInDatabase = databaseJSON.tweets;
});

/* GET tweets listing */
router.get('/', cors(), function(req, res, next) {
  res.json(tweetsInDatabase);
});

/* GET tweets by id */
router.get('/:id', cors(), function(req, res, next) {
  var tweetId = req.params.id;
  var index = tweetsInDatabase.findIndex(function(element) {return element.id == tweetId});
  if (index === -1) {
    res.status(404).send('Tweet with id: ' + tweetId + ' was not found');
  } else {
    res.json(tweetsInDatabase[index]);
  }
});

/* POST tweets to db.json file */
router.post('/', cors(), function(req, res, next) {
  /* Create an id for the new tweet */
  if (tweetsInDatabase.length === 0) {
    req.body.id = 1;
  }
  else {
    var lastTweetId = tweetsInDatabase[tweetsInDatabase.length - 1].id;
    req.body.id = lastTweetId + 1;
  }
  /* Push the new tweet onto the tweets array and write it to db.json */
  tweetsInDatabase.push(req.body);
  res.send(fs.writeFile('../server/public/db.json', JSON.stringify(databaseJSON, null, '\t'), function (err) {
    if (err) {
      return console.log(err);
    }
  }));
});

module.exports = router;
