cart.controller('ProductsController', function(productService, $scope) {
  self = $scope;
  productService.getProducts().then(function(products){
    self.products = products;
  })
});