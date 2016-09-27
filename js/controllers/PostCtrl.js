angular.module('bulletinBoard').controller("PostCtrl", ["$scope", "postService", function($scope, postService) {

  postService.getPosts().then(function(data) {
    $scope.posts = data;
    console.log($scope.posts);
  });

}]);
