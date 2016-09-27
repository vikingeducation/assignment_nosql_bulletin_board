BulletinBoard.factory('PostsService', ['_', '$http', 'CommentsService', function(_, $http, CommentsService){
  console.log('loaded posts service');

  var PostsService = {};
  var _posts;

  // var _extendPost = function(post, allcomments) {
  //   var comments = [];
  //   for(comment_id in post.comments) {
  //     comments.push(allcomments[comment_id])
  //   }
  //   return comments;
  // }

  // var _extendPosts = function(posts) {
    
  // }

  PostsService.all = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    }).then(function(response){
      return _posts = response.data;
    });
  };
  return PostsService;
}]);
