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
    console.log($scope.this_post);
    commentsService.createComment($scope.postComment);
  }

}])