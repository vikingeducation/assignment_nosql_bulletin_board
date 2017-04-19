BulletinBoard.controller('PostsCtrl', ['$scope', '_', 'postsService', function($scope, _, postsService){

  postsService.getPost(1).then(function(response) {
    // hard coded for just one post per assignment
    $scope.post = response;
  });

}]);
