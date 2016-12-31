BulletinBoard.controller('PostsCtrl', ['$scope', 'PostService',
  function($scope, PostService){
    PostService.all().then(
      function (posts) {
        $scope.posts = posts;
      }
    );
  }
]);