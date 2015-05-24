var express = require('express');
var router = express.Router();
var products = require('../json_data/products.json')
var discounts = require('../json_data/discounts.json')

router.get('/json/products', function(req, res, next) {
  res.send(products);
});

router.get('/json/discounts', function(req, res, next){
  res.send(discounts);
});

module.exports = router