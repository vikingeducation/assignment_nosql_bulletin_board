angular.module('bulletinBoard', []);


angular.module('bulletinBoard').factory('_', ['$window', function($window) {
  return $window._;
}]);
