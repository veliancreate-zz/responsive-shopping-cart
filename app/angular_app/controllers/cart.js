cart.controller('CartController', function(cartService, displayService, $scope) {
  self = $scope;

  var inCart = cartService.currentCart();

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
    return displayService.displayCart(inCart);
  };

  self.total = function(){
    return cartService.total();
  };
});