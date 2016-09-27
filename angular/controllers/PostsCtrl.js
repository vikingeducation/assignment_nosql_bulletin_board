BulletinBoard.controller("PostsCtrl", ["$scope", "postsService", "commentsService", "_", function($scope, postsService, commentsService, _) {
  
  postsService.getPost().then(function(response) {
    $scope.post = response.data["1"];
    $scope.postComments = commentsService.getPostComments($scope.post);
  })

  $scope.allComments = commentsService.getAllComments();
  $scope.comment = {}


  $scope.handleCommentForm = function(comment) {
    comment.id =  commentsService.getLastId() + 1;
    commentsService.addComment(comment)
    $scope.post.comments.push(comment.id);
    $scope.postComments = commentsService.getPostComments($scope.post);
  }

}])