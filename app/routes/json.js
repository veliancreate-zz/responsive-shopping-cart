var express = require('express');
var router = express.Router();
var products = require('../json_data/products.json');

router.get('/json', function(req, res, next) {
  res.json(products);
});

module.exports = router