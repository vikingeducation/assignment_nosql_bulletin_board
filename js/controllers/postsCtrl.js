BulletinBoard.controller('PostsCtrl', ['$scope', 'PostService', 'CommentService',
  function($scope, PostService, CommentService){
    $scope.commentParams = {};

    PostService.all().then(
      function (posts) {
        $scope.posts = posts;
      }
    );

    CommentService.all().then(
      function (comments) {
        $scope.comments = comments;
      }
    );

    $scope.createComment = function(post) {
      CommentService.create($scope.commentParams, post);
      $scope.commentParams = {};
    }
  }
]);