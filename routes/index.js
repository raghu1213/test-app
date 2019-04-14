var express = require('express');
var router = express.Router();
var sleep = require('sleep');
/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("request received");
//  setTimeout(function () {
//     console.log('Blah blah blah blah extra-blah');
//   }, 120000);
  sleep.sleep(120);
  res.render('index', { title: 'Express' });
});

module.exports = router;
