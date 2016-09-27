angular.module('bulletinBoard').controller("PostCtrl", ["$scope", "postService", function($scope, postService) {

  postService.getPosts().then(function(response) {
    $scope.posts = response.data
  });

}]);
