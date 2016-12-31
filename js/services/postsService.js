BulletinBoard.factory('PostService', ['$http', function($http){
  var PostService = {};
  var _posts;
  PostService.all = function() {
    return $http({
             method: 'GET',
             url: '/data/posts.json'
           }).then(
             function success(response) {
               _posts = response.data;
               _extendPosts(_posts);
               return _posts;
             }
           );
  };

  PostService.appendTo = function(post, comment_id) {
    _posts[post.id].commentIds.push(comment_id);
  };

  // Extend post to add a comment
  var _extendPost = function(post, comment) {
    post.addComment = function(comment) {
      _posts[post.id].commentIds.push(comment.id);
    };
  };
  var _extendPosts = function(posts) {
    _.each(posts, function(post, comment) {
      _extendPost(post, comment);
    });
  };

  return PostService;
}]);