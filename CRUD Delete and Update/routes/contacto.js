var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    layout: 'admin/layout'
  }); // estos son los hbs
});

module.exports = router;

