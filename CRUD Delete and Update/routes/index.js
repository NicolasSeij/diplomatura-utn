var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('admin/login');
});

module.exports = router;

/*
var moment = require('moment');
moment.locale("es");
console.log("naci " + moment("09/05/1996", "DD/MM/YYYY").fromNow());
*/