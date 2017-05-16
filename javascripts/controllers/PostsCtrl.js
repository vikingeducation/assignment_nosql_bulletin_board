app.controller('PostsCtrl', ['$scope', 'postService', function($scope, postService){
  $scope.allPosts;

  $scope.getPosts = function(){
    postService.getPosts().then(function successCallback(response) {
      $scope.allPosts = response.data;
      }, function errorCallback(response) {
        console.log('getPosts() fail')
      });
  }

  $scope.getPosts()

}]);