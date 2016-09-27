app.controller("PostsCtrl", ["$scope", 'postsService', "commentsService", function($scope, postsService, commentsService) {

  postsService.all()
    .then(function(posts) {
      $scope.posts = posts;
    });

  commentsService.all()
  .then(function(comments) {
    $scope.comments = comments;
  });

  $scope.createComment = function() {
    //commentsService.createComment($scope.postComment)
    console.log($scope.postComment)
  }

}])