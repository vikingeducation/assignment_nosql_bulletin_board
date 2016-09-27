bb.controller('PostCtrl', ['$scope', 'CommentService', 'PostService', function($scope, CommentService, PostService){


  CommentService.list()
    .then(function(comments){
      $scope.comments = comments;
    });




  PostService.list()
    .then(function(posts){
      $scope.post = posts["1"];
    });

  $scope.createComment = function() {
    CommentService.create($scope.commentParams)
  }


}]);
