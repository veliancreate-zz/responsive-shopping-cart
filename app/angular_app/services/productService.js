cart.service('productService', [function(){
  var inCart = [];

  return {  
    addProduct: function(product, catalogue) {
      catalogue.forEach(function(item){   
        if(item.name === product.name && item.stock_quantity > 0){
          inCart.push(product);
          product.stock_quantity -=1;
        }
      });
    },
    removeProduct: function(product) {
      for(var i=0; i<inCart.length; i++){
        if(inCart[i].name === product.name){  
          inCart.splice(i, 1);
          product.stock_quantity +=1;
          break;
        }  
      }  
    },
    currentCart: function() {
      return inCart;
    },
    numberInCart: function() {
      return inCart.length;
    },
    requestedOutOfStock: function(product){
      return product.initial_quantity === 0;
    }
  };  
}]);