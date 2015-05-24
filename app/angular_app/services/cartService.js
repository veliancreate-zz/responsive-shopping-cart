cart.service('cartService', ['$http', function($http){
  var inCart = [];

  canReduceStockQuantity = function(product, catalogue){
    if(isProductInCart(product)){
      for(var i = 0; i<catalogue.length; i++){
        if(catalogue[i].name === product.name){
          return true;
        }
      } 
    }  
  };

  isProductInCart = function(product){
    var proceed = false;
    inCart.forEach(function(item){
      if(product.name === item.name){
        proceed = true;
      }
    });
    return proceed;
  };

  return {  
    products: function(){
      var promise = $http.get('/json/products').then(function (response) {
        return response.data;
      });
      return promise;
    },
    addProduct: function(product, catalogue) {   
      catalogue.forEach(function(item){   
        if(item.name === product.name && item.stock_quantity > 0){
          inCart.push(product);
          product.stock_quantity -=1;
        }
      });
    },
    removeProduct: function(product, catalogue) {
      if(canReduceStockQuantity(product, catalogue)) {
        inCart.splice(product, 1);
        product.stock_quantity +=1;
      }  
    },
    currentCart: function() {
      return inCart;
    },
    numberInCart: function() {
      return inCart.length;
    }
  };  
}]);