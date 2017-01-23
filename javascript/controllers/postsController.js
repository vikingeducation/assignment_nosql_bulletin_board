BulletinBoard.controller("PostsCtrl", ["$scope", "PostService", "CommentService", function ($scope, PostService, CommentService) {

  PostService.getAll()
    .then(function (response){
      $scope.posts = response;
    }, function (response){
        console.log("Fuck It");
    });

  CommentService.getAll()
      .then(function (response) {
        $scope.comments = response;
      });

}]);
