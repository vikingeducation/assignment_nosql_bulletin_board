var BulletinBoard = angular.module("BulletinBoard", []);

BulletinBoard.controller("PostsCtrl", ['$scope', "postService", "commentService", function($scope, postService, commentService) {

  postService.getAll().then( function(posts) {
    $scope.posts = posts;
  })

  commentService.getAll().then ( function(comments) {
    $scope.comments = comments;
  })

}])

BulletinBoard.factory('_', ['$window', function($window) {
  return $window._;
}]);

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

BulletinBoard.factory("commentService", ['$http', function($http) {
  var commentService = {};

  var _comments;

  commentService.getAll = function() {
    return $http({
      method: 'get',
      url: "/data/comments.json"
    }).then( function(response) {
      return _comments = response.data;
    })
  }

  return commentService
}])

BulletinBoard.filter('scoreFilter', ['_', function(_) {
  return function(ids, comments) {

    if (comments) {
    var sorted = _.sortBy(ids, [function(id) {
      return comments[id].score;
    }])
    // console.log(sorted)
    return sorted;      
    }

    // console.log(comments) // why does this return undefined 

  }
}])