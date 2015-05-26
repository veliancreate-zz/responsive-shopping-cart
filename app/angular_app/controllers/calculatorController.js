cart.controller('CalculatorController', function(productService, calculatorService, $scope) {
  self = $scope;

  //nav-cart
  self.numberInCart = function(){
    return productService.numberInCart();  
  };
  self.total = function(){
    return calculatorService.total(self.inCart());
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