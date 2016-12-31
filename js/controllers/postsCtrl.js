BulletinBoard.controller('PostsCtrl', ['$scope', 'PostService', 'CommentService',
  function($scope, PostService, CommentService){
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
  }
]);