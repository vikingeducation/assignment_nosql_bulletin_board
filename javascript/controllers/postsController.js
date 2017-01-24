BulletinBoard.controller("PostsCtrl", ["$scope", "PostService", "CommentService", function ($scope, PostService, CommentService) {


  $scope.commentForm = {};

  PostService.getAll()
    .then(function (response){
      $scope.posts = response;
        console.log(response);
    });

  CommentService.getAll()
      .then(function (response) {
        $scope.comments = response;
      });

  $scope.create = function(post){
    CommentService.create(post, $scope.commentForm);
    $scope.commentForm = {};
  };

  $scope.upVote = function (comment) {
    comment.vote += 1;
  }

  $scope.downVote = function (comment) {
      comment.vote -= 1;
  };

}]);
