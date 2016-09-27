BulletinBoard.controller("PostsCtrl", ["$scope", "postsService", "commentsService", "_", function($scope, postsService, commentsService, _) {
  // declare scope environment
  postsService.getPost().then(function(response) {
    $scope.post = response.data["1"];
    getAllComments();
    
  })

  $scope.comment = {}

  var _getNewId = function() {
    return Math.max(_.map($scope.allComments.keys(), function(el) {
        return parseInt(el)
    })) + 1;
  };


  $scope.handleCommentForm = function(comment) {
    comment.postId = "1";
    comment.date = new Date();
    comment.id = _getNewId();
    commentsService.newComment(comment).then(function(response) {
      $scope.getAllComments()
    })
  }


  // helpers

  var getAllComments = function() {
    commentsService.getAllComments().then(function (response) {
      // angular.copy($scope.allComments, response.data); // ????
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