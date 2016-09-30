var app = angular.module("app", []);



app.factory('_', ['$window', function($window) {
  return $window._; 
}]);