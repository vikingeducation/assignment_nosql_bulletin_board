app.controller("PostsCtrl", ["$scope", 'postsService', "commentsService", function($scope, postsService, commentsService) {
  

  postsService.all()
    .then(function(posts) {
      $scope.posts = posts;
      console.log($scope.posts);
    });

  commentsService.all()
  .then(function(comments) {
    $scope.comments = comments;
    console.log($scope.comments);
  });

}])