cart.service('cartService', ['$http', function($http){
  var inCart = [];
  var catalogue = [];
  var promise = $http.get('/json/products').then(function (response) {
    return response.data;
  });
  promise.then(function(data){
    catalogue = data;
  });

  function reduceStockQuantity(product){
    if(isProductInCart(product)){
      for(var i = 0; i<catalogue.length; i++){
        if(catalogue[i].name === product.name){
          product.stock_quantity +=1;
          break;
        }
      } 
    }  
  }

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
      return catalogue;
    },
    addProduct: function(product) {   
      catalogue.forEach(function(item){   
        if(item.name === product.name && item.stock_quantity > 0){
          inCart.push(product);
          item.stock_quantity -=1;
        }
      });
    },
    removeProduct: function(product) {
      for(var i = 0; i<inCart.length; i++){
        if(inCart[i].name === product.name) {
          reduceStockQuantity(product); 
          inCart.splice(i, 1);
          break;
        }  
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