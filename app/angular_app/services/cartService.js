cart.service('cartService', ['$http', function($http, ){
  var inCart = [];
  return {  
    products: function() {
      var promise = $http.get('/json').then(function (response) {
        return response.data;
      });
      return promise;
    },
    addProduct: function(product) {
      inCart.push(product);
    },
    removeProduct: function(product) {
      for(var i = 0; i < inCart.length; i++){
        if(inCart[i].name === product.name) {
          inCart.splice(i, 1);
          break;
        }
      }
    },
    productsInCart: function(){
      var prettyCart = [];
      for(var i = 0; i < inCart.length; i++) {
        var count = 0;
        for(var x = 0; x < inCart.length; x++) {
          if(inCart[i].name === inCart[x].name){
            count ++;
            prettyCart.push(inCart[i]);
            prettyCart[prettyCart.length -1].count = count;
          }    
        }
      }
      return _.uniq(prettyCart);
    },
    numberInCart: function() {
      return inCart.length;
    },
    total: function() {
      var total = 0;
      for(var i = 0; i < inCart.length; i++){
        total += inCart[i].price;
      }
      return total;
    } 
  };  
}]);