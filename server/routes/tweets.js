var express = require('express');
var cors = require('cors');
var fs = require('fs');
var router = express.Router();
router.options('*', cors())

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

function writeToDatabase() {
  return(fs.writeFile('../server/public/db.json', JSON.stringify(databaseJSON, null, '\t'), function (err) {
    if (err) {
      return console.log(err);
    }
  }));
}

/* GET tweets listing */
router.get('/', cors(), function(req, res, next) {
  res.json(tweetsInDatabase);
});

/* GET tweet by id */
router.get('/:id', cors(), function(req, res, next) {
  var index = tweetsInDatabase.findIndex(function(element) {
    return element.id == req.params.id
  });
  if (index === -1) {
    res.status(404).send('Tweet with id: ' + req.params.id + ' was not found');
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
  res.send(writeToDatabase());
});

/* POST tweet interaction to tweet */
router.post('/:id', cors(), function(req, res, next) {
  var index = tweetsInDatabase.findIndex(function(element) {
    return element.id == req.params.id
  });
  if (!tweetsInDatabase[index].interactions || tweetsInDatabase[index].interactions.length == 0) {
    tweetsInDatabase[index].interactions = [];
    req.body.id = 1;
  }
  else {
    var lastInteractionId = tweetsInDatabase[index].interactions[tweetsInDatabase[index].interactions.length - 1].id;
    req.body.id = lastInteractionId + 1;
  }
  req.body.date = new Date().toString();
  tweetsInDatabase[index].interactions.push(req.body);
  res.send(writeToDatabase());
});

/* DELETE tweet by id */
router.delete('/:id', cors(), function(req, res, next) {
  tweetsInDatabase.splice(tweetsInDatabase.findIndex(function(element) {
    return element.id == req.params.id
  }), 1);
  res.send(writeToDatabase());
});

/* DELETE tweet interaction */
router.delete('/:id/:interactionId', cors(), function(req, res, next) {
  var index = tweetsInDatabase.findIndex(function(element) {
    return element.id == req.params.id
  });
  var interactionIndex = tweetsInDatabase[index].interactions.findIndex(function(element) {
    return element.id == req.params.interactionId
  });
  tweetsInDatabase[index].interactions.splice(interactionIndex, 1);
  res.send(writeToDatabase());
});

module.exports = router;
