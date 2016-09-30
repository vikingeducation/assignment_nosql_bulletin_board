app.factory("postService", ['$http', '_', 'commentService', function($http, _, commentService){
  var service = {};

  var _posts = {};


  service.all = function(){
    return $http({
      method: "GET",
      url: '/data/posts.json'

    }).then(function success(response){
      console.log("success getting all posts");

      angular.copy(response.data, _posts);

      _extendPosts(_posts);
      return _posts;
    })
  };


  // service.addComment = function(postId, commentId){
  //   _posts[postId].comments.push(commentId);
  // };

  var _extendPost = function(post){
    post.createComment = function(commentParams){
      var comment = angular.copy(commentParams, {});
      comment.postId = post.id;


      var id = commentService.createComment(comment);
      
      post.comments.push(id)
      

      
    };
  };


  var _extendPosts = function(posts){
    _.each(posts, function(post){
      _extendPost(post);
    });
  };






  return service;
}])