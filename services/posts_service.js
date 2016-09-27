app.factory('postsService', ['$http', function($http) {
  var stub = {};

  var _id;
  var _posts;

  stub.all = function() {
    return $http.get("data/posts.json")
      .then(function(response) {
        _users = response.data;
        return _users;
      });
  };

  return stub;
}]);