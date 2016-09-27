angular.module('bulletinBoard')
.controller("PostCtrl",
["$scope", "postService", "commentService",
function($scope, postService, commentService) {

  postService.getPosts().then(function(data) {
    console.log(data);
    $scope.posts = data;
  });

  commentService.getComments().then(function(data) {
    console.log(data);
    $scope.comments = data;
  }).catch(function(reason) {
    console.log(['error:', reason].join(''));
  });

}]);
