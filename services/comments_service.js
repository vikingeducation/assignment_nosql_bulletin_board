app.factory('commentsService', ['$http', function($http) {

  var stub = {};
  var _comments = [];

  stub.all = function() {
    return $http.get("data/comments.json")
    .then(function(response) {
      _comments = response.data;
      return _comments;
    })
  };

  return stub

}]);