angular.module('cart').controller('CartController', function(productService, $scope) {
  self = $scope;
  productService.getProducts().then(function(products){
    self.products = products;
  })
});