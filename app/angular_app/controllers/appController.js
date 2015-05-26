cart.controller('AppController', function(productService, $scope, $http) {
  self = $scope;
  //get data
  $http.get('/json/products').success(function(data){
    self.products = data;
  });
  $http.get('/json/discounts').success(function(data){
    self.discounts = data;
  });

  self.inCart = function(){
    return productService.currentCart();
  };
});  