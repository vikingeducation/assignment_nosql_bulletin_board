angular.module('bulletinBoard').factory("postService", ["$http", function($http) {

  var _posts = [];

  var _populatePosts = function() {
    return $http({
      method: 'GET',
      url: '/data/posts.json'
    }).then(function(response) {
      return angular.copy(response.data, _posts);
    });
  };

  var getPosts = function() {
    if (_posts.length) {
      return _posts;
    } else {
      return _populatePosts();
    }
  };

  var updatePostComment = function(post_id, comment_id) {
    _posts[post_id].comments.push(comment_id);
    return comment_id;
  };

  return {
    getPosts: getPosts,
    updatePostComment: updatePostComment
  };

}]);
