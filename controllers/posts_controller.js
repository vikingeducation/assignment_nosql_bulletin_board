//postsctrl

BulletinBoard.controller('PostsCtrl', ['$scope', 'PostsService', 'CommentsService', function($scope, PostsService, CommentsService){
  console.log('loaded controller');

  PostsService.all().then(function(posts){
    $scope.posts = posts;
  });

  CommentsService.all().then(function(comments){
    $scope.comments = comments;
  });

}]);
