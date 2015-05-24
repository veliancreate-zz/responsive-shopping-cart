cart.controller('CartController', function(cartService, displayService, calculatorService, $scope) {
  self = $scope;

  var inCart = cartService.currentCart();

  self.discountsRedeemed = calculatorService.discountsClaimed();
  self.products = cartService.products();

  calculatorService.discounts().then(function(discounts){
    self.discounts = discounts;
  });
  
  self.isCodeError = function(){
    return calculatorService.isCodeError();
  };

  self.checkCode = function(discountCode){
    calculatorService.checkCode(discountCode);
  };  

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
    return calculatorService.total(inCart);
  };

});