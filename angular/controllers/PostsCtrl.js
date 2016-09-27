BulletinBoard.controller("PostsCtrl", ["$scope", "postsService", "commentsService", function($scope, postsService, commentsService) {
  // declare scope environment
  postsService.getPost().then(function(response) {
    $scope.post = response.data["1"];
    establishPostComments();
    
  })


  // helpers

  var establishPostComments = function() {
    commentsService.getAllComments().then(function (response) {
      $scope.allComments = response.data
      $scope.postComments = filterCommentsByPost($scope.post);
    });
  }

  var filterCommentsByPost = function(post) {
    var postComments = [];
    for(var commentID in $scope.allComments) {
      if(post.comments.includes(parseInt(commentID))) {
        postComments.push($scope.allComments[commentID])
      }
    }
    return postComments;
  };  


}])