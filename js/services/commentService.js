angular.module('bulletinBoard').factory("commentService", ["$http", function($http) {

  var _comments = [];

  var _populateComments = function() {
    return $http({
      method: 'GET',
      url: '/data/comments.json'
    }).then(function(response) {
      angular.copy(response.data, _comments);
      return response.data;
    });
  };

  var getComments = function() {
    if (_comments.length) {
      return _comments;
    } else {
      return _populateComments();
    }
  };

  return {
    getComments: getComments
  };

}]);
