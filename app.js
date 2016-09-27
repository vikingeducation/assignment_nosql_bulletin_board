var BulletinBoard = angular.module("BulletinBoard", []);

// add underscore
BulletinBoard.factory("_", ['$window', function($window) {
  return $window._
}]);