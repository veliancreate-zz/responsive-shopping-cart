var cart = angular.module('cart', ['ngRoute', 'ngResource', 'ngMessages']);

cart.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: '/partials/products.html',
      controller: 'CartController'
    }).
    when('/my-cart', {
      templateUrl: '/partials/my-cart.html',
      controller: 'CartController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);