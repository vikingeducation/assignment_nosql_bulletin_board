app.factory('postsService', ['$http', function($http) {
  var stub = {};

  var _id;
  var _posts;

  stub.all = function() {
    return $http.get("data/posts.json")
      .then(function(response) {
        _posts = response.data;
        return _posts;
        //return angular.copy(response.data, _posts)
      });
  };

  stub.addCommentTo = function(postId, commentId) {
    _posts[postId].comment_ids.push(commentId);
  }

  return stub;
}]);