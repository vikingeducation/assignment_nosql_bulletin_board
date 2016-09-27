"use strict";
var app = angular.module('BulletinBoard', []);

app.factory('_', ['$window', function($window){
  return $window._;
}]);

app.filter('objToArray', ['_', function(){
  return function(obj) {
    return _.map(obj, function(item){
      return item;
    });
  };
}]);

app.filter('produceComments', ['_', function(){
  return function(collection, ids){
		return _.map(ids, function(id){
			return collection[id];
		});
	};
}])

// angular.element(document).ready(function(){
//   ('body').on('click', '.comment-btn', function(e){
//     console.log($(e.target).sibling('form'));
//
//   })
// });
