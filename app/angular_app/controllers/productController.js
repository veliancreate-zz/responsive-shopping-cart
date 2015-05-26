cart.controller('ProductController', function(productService, myCartService, $scope) {
  self = $scope;
  //add, remove products
  self.addProduct = function(product){
    productService.addProduct(product, self.products); 
    self.requestedOutOfStock = productService.requestedOutOfStock(product);
  };
  self.removeProduct = function(product){
    productService.removeProduct(product); 
  };
  //my-cart page
  self.productsInCart = function(){
    return myCartService.displayCart(self.inCart());
  };
});  