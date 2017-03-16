BulletinBoard.factory("postService", ['$http', function($http) {
  var postService = {};

  var _posts;

  postService.getAll = function() {
    return $http({
      method: "get",
      url: "/data/posts.json"
    }).then( function(response){
      return _posts = response.data;
    })
  }

  postService.addComment = function(post, comment_id) {
    _posts[post.id].comments.push(comment_id);
  }

  return postService;
}])