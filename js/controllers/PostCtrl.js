angular.module('bulletinBoard')
.controller("PostCtrl",
["$scope", "postService", "commentService",
function($scope, postService, commentService) {

  postService.getPosts().then(function(data) {
    $scope.posts = data;
  });

  commentService.getComments().then(function(data) {
    $scope.comments = data;
    console.log($scope.comments);
  });

}]);
