// set up dependencies
var express = require('express');
var router = express.Router();

// setup routing
router.get('/', function(req, res, next) {
  res.render('base', {})
})

// export the module
module.exports = router;
