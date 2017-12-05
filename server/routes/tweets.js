var express = require('express');
var http = require('http');
var cors = require('cors');
var router = express.Router();

/* GET tweets listing. */
router.get('/', cors(), function(req, res, next) {
  var options = {
    host: 'localhost',
    path: '/tweets/',
    port: '4000'
  };
  var callback = function(response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      res.send(str);
    });
  }
  http.request(options, callback).end();
});

/* GET tweets by id */
router.get('/:id', cors(), function(req, res, next) {
  var options = {
    host: 'localhost',
    path: '/tweets/' + req.params.id,
    port: '4000'
  };
  callback = function(response) {
    var str = '';
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      res.send(str);
    });
  }
  http.request(options, callback).end();
});

module.exports = router;
