app.controller("PostsCtrl", ["$scope", 'postsService', "commentsService", function($scope, postsService, commentsService) {

  $scope.postComment = {};

  postsService.all()
    .then(function(posts) {
      $scope.posts = posts;
    });

  commentsService.all()
  .then(function(comments) {
    $scope.comments = comments;
  });

  $scope.createComment = function() {
    commentsService.createComment($scope.postComment);
  }

  $scope.upVote = function(comment) {
    commentsService.upVote(comment.id);
  }

  $scope.downVote = function(comment) {
    commentsService.downVote(comment.id);
  }

}])