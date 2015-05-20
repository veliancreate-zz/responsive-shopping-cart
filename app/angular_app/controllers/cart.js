cart.controller('CartController', function(cartService, $scope) {
  self = $scope;

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

  self.productsInCart = function(){
    return cartService.productsInCart();
  };

  self.total = function(){
    return cartService.total();
  };
});