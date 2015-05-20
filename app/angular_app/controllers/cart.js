cart.controller('CartController', function(cartService, $scope) {
  self = $scope;
  self.productsInCart = cartService.productsInCart();

  cartService.products().then(function(products){
    self.products = products;
  });

  self.addProduct = function(product){
    cartService.addProduct(product);
  };

  self.removeProduct = function(product){
    cartService.removeProduct(product);
  };

  self.numberInCart = function(){
    return cartService.numberInCart();  
  }; 

});