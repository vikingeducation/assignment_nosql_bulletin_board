app.controller("PostsCtrl", ['$scope', 'postService', 'commentService', function($scope, postService, commentService){

  postService.all().then(function(posts){
    $scope.post = posts["1"];
  })
  
  commentService.all().then(function(comments){
    $scope.comments = comments;
  })

  $scope.commentParams = {};


  $scope.createComment = function(commentParams){
    var commentCopy = angular.copy(commentParams, {});
    commentCopy.postId = $scope.post.id;
    commentService.createComment(commentCopy);

  }


}])