var cart = angular.module('cart', ['ngRoute', 'ngResource', 'ngMessages']);

cart.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: '/partials/products.html',
      controller: 'AppController'
    }).
    when('/my-cart', {
      templateUrl: '/partials/my-cart.html',
      controller: 'AppController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);