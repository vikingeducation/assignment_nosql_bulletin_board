bb.factory("PostService", ['$http', 'CommentService', '_', function($http, CommentService, _){

  obj = {};

  var _posts = {};


  obj.list = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    })
    .then(function(response){
      console.log("reaching the then of posts")
      angular.copy(response.data, _posts);
      _extendPosts(_posts)
      return _posts;
    })
  }

  // obj.addComment = function(postId, commentId){
  //   _posts[postId].comments.push(commentId);
  // }


  var _extendPost = function(post) {
    post.addComment = function(commentObj) {
      var newCommentId = CommentService.create(commentObj)
      post.comments.push(newCommentId)
      commentObj = {}
    }
  }


  var _extendPosts = function(posts) {
    _.each(posts, function(post) {
      _extendPost(post);
    });
  };


  return obj;
}]);
