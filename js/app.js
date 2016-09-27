var app = angular.module('BulletinBoard', []);

app.factory('_', ['$window', function($window){
  return $window._;
}]);
