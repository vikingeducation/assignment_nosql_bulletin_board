//postsctrl

BulletinBoard.controller('PostsCtrl', ['$scope', 'PostsService', 'CommentsService', function($scope, PostsService, CommentsService){

  $scope.commentParams = {};
  $scope.nestedCommentParams = {};

  PostsService.all().then(function(posts){
    $scope.posts = posts;
  });

  CommentsService.all().then(function(comments){
    $scope.allcomments = comments;
  });

  $scope.addNestedComment = function(parent_id, type){
    CommentsService.add($scope.nestedCommentParams[parent_id], parent_id, type);
    $scope.nestedCommentParams[parent_id] = {};
  };

  $scope.addComment = function(parent_id, type) {
    CommentsService.add($scope.commentParams, parent_id, type);
    $scope.commentParams = {};
  };

}]);
