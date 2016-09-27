BulletinBoard.controller("PostsCtrl", ["$scope", "postsService", "commentsService", function($scope, postsService, commentsService) {
  // declare scope environment
  postsService.getPost().then(function(response) {
    $scope.post = response.data["1"];
  })

  commentsService.getAllComments().then(function (response) {
    $scope.allComments = response.data
  });

  $scope.filterCommentsByPost = function(post) {
    var postComments = [];
    for(var commentID in $scope.allComments) {
      if(post.comments.includes(String(commentID))) {
        postComments.push($scope.allComments[commentID])
      }
    }
    return postComments;
  };

  $scope.postComments = $scope.filterCommentsByPost($scope.post)


}])