var cart = angular.module('cart', ['ngRoute', 'ngResource']);

cart.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: '/partials/products.html',
      controller: 'ProductsController'
    }).
    when('/my-cart', {
      templateUrl: '/partials/my-cart.html',
      controller: 'CartController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);