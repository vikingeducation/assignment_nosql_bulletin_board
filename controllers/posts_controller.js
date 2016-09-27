//postsctrl

BulletinBoard.controller('PostsCtrl', ['$scope', 'PostsService', function($scope, PostsService){
  console.log('loaded controller');

  PostsService.all().then(function(posts){
    $scope.posts = posts;
  });

}]);
