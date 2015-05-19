cart.factory('productService', ['$http', function($http){
  return {  
    getProducts: function() {
      var promise = $http.get('/json').then(function (response) {
        return response.data;
      });
      return promise
    }  
  }  
}]);