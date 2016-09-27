//postsctrl

BulletinBoard.controller('PostsCtrl', ['$scope', 'PostsService', 'CommentsService', function($scope, PostsService, CommentsService){
  
  $scope.commentParams = {};

  PostsService.all().then(function(posts){
    $scope.posts = posts;
  });

  CommentsService.all().then(function(comments){
    $scope.allcomments = comments;
  });

  $scope.addComment = function(post_id) {
    CommentsService.add($scope.commentParams, post_id);
  };

}]);
