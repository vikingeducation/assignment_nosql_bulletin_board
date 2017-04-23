BulletinBoard.factory('postsService', ['$http', 'commentsService', function($http, commentsService) {
  var _post;
  var getPost = function(p) {
    return $http.get('/data/posts.json').then(function(response) {
      _post = response.data[p];
      _extend(_post);
      return _post;
    });
  };

  var _extend = function(_post) {
    _post.addComment = commentsService.addComment;
  };

  return {
    getPost: getPost
  };
}]);
