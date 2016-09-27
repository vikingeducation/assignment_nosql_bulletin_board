BulletinBoard.factory('PostsService', ['_', '$http', function(_, $http){
  console.log('loaded posts service');

  var PostsService = {};
  var _posts = {};

  var _extendPost = function(post) {
    post.getComments = function(comments) {
      if (comments) {
        return _.map(post.comments, function(comment_id){
          return comments[comment_id];
        });
      }
    }
  };

  var _extendPosts = function(posts){
    _.each(posts, function(post){
      _extendPost(post);
    });
  };

  PostsService.addComment = function(post_id, comment_id) {
    var post = _posts[post_id];
    post.comments.push(comment_id);
  };

  PostsService.all = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    }).then(function(response){
      angular.copy(response.data, _posts);
      _extendPosts(_posts);
      return _posts;
    });
  };
  return PostsService;
}]);
