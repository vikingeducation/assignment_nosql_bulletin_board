bb.controller('PostCtrl', ['$scope', '_', 'CommentService', 'PostService', function($scope, _, CommentService, PostService){


  $scope.userParams = {


  }


  CommentService.list()
    .then(function(comments){
      $scope.comments = comments;
    });


  PostService.list()
    .then(function(posts){
      $scope.posts = posts;
    });

    $scope.createComment = function() {
      CommentService.create($scope.userParams, $scope.commentParams)
    }


}]);
