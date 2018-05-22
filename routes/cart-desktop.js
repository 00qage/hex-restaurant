var express = require('express');
var router = express.Router();

/* GET cart-desktop page. */
router.get('/', function(req, res, next) {
  res.render('cart-desktop');
});

module.exports = router;
