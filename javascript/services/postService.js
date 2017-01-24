BulletinBoard.factory("PostService", ["$http", "CommentService", function ($http, CommentService) {
  var PostService = {};

  var _posts;


  PostService.getAll = function () {
    return $http({
          url: "data/posts.json",
          method: "GET"
        })
      .then(function (response) {
        return _posts = response.data;
      });
  };

  PostService.create = function (post, comment) {
    post.comments.push({
      author: comment.author,
      body:  comment.body,
      vote: 0,
      commentDate: new Date
    });
  };

  return PostService;
}]);
