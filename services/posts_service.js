BulletinBoard.factory('PostsService', ['_', '$http', function(_, $http){
  console.log('loaded posts service');

  var PostsService = {};
  var _posts = {};

  PostsService.addComment = function(post_id, comment_id) {
    var post = _posts[post_id];
    post.comments.push(comment_id);
  };

  PostsService.all = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    }).then(function(response){
      return angular.copy(response.data, _posts);
    });
  };
  return PostsService;
}]);
