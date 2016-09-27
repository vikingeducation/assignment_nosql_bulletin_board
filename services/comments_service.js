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

  stub.createComment = function(params) {
    var _comment = params;
    console.log(postComment.author);
  }

  return stub

}]);