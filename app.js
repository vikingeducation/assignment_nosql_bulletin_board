var BulletinBoard = angular.module("BulletinBoard", []);

BulletinBoard.controller("PostsCtrl", ['$scope', "postService", function($scope, postService) {

postService.getAll().then( function(posts) {
  $scope.posts = posts;
})

}])

BulletinBoard.factory("postService", ['$http', function($http) {
  var postService = {};

  var _posts;

  postService.getAll = function() {
    return $http({
      method: "get",
      url: "/data/posts.json"
    }).then( function(response){
      return _posts = response.data;
    })
  }

  return postService;
}])