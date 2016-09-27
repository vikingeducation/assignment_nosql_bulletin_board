app.controller("PostsCtrl", ["$scope", 'postsService', function($scope, postsService) {
  

  postsService.all()
    .then(function(posts) {
      $scope.posts = posts;
      console.log($scope.posts);
    } );
}])