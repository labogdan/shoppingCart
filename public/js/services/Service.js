angular.module('MainCtrl').factory('ShoppingCart', ['$resource',
  function($resource) {
    return $resource('/cart/');
  }
]);