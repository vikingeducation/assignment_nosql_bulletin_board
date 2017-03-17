BulletinBoard.controller("PostsCtrl", ['$scope', "postService", "commentService", function($scope, postService, commentService) {

  postService.getAll().then( function(posts) {
    $scope.posts = posts;
  })

  commentService.getAll().then ( function(comments) {
    $scope.comments = comments;
  })

  $scope.commentParams = {};

  $scope.createComment = function(post) {
    commentService.createNew($scope.commentParams, post);
    $scope.commentParams = {};
  }

}])