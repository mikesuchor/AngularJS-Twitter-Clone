var express = require('express');
var router = express.Router();

/* GET hello listing. */
router.get('/', function(req, res, next) {
  res.send({hello: 'hello world'});
});

module.exports = router;
