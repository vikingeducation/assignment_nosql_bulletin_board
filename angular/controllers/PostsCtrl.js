BulletinBoard.controller("PostsCtrl", ["$scope", "postsService", function($scope, postsService) {
  // declare scope environment
  postsService.getPost().then(function(response) {
    $scope.post = response.data;
  })

}])