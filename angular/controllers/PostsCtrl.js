BulletinBoard.controller("PostsCtrl", ["$scope", "postsService", "commentsService", "_", function($scope, postsService, commentsService, _) {
  // declare scope environment
  postsService.getPost().then(function(response) {
    $scope.post = response.data["1"];
    getAllComments();
  })

  var _getLastId = function() {
    console.log(Object.keys($scope.allComments))
    return Math.max(_.map(Object.keys($scope.allComments), function(el) {
        return parseInt(el)
    }));
  };


  $scope.comment = {}


  $scope.handleCommentForm = function(comment) {
    comment.postId = "1";
    comment.date = new Date();
    comment.id =  $scope.lastId + 1;
    $scope.lastId++
    $scope.allComments[String(comment)] = comment;
  }

  // helpers

  var getAllComments = function() {
    commentsService.getAllComments().then(function (response) {
      // angular.copy($scope.allComments, response.data); // ????
      $scope.allComments = response.data
      $scope.lastId = _getLastId()
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