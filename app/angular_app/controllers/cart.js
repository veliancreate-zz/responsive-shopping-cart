cart.controller('CartController', function(cartService, displayService, calculatorService, $scope) {
  self = $scope;
  //get data
  cartService.products().then(function(data){
    self.products = data;
  });
  calculatorService.discounts().then(function(discounts){
    self.discounts = discounts;
  });

  //add, remove products
  self.addProduct = function(product){
    cartService.addProduct(product, self.products); 
    self.requestedOutOfStock = cartService.requestedOutOfStock(product);
  };
  self.removeProduct = function(product){
    cartService.removeProduct(product); 
  };

  //my-cart page
  var inCart = cartService.currentCart();
  self.productsInCart = function(){
    return displayService.displayCart(inCart);
  };

  //nav-cart
  self.numberInCart = function(){
    return cartService.numberInCart();  
  };
  self.total = function(){
    return calculatorService.total(inCart);
  };

  //discounts
  self.discountsRedeemed = calculatorService.discountsClaimed();
  self.isCodeError = function(){
    return calculatorService.isCodeError();
  };
  self.checkCode = function(discountCode){
    calculatorService.checkCode(discountCode, self.discounts);
  };  


});