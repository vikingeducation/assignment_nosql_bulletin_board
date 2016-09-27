"use strict";

app.controller('PostsCtrl', ['$scope', '_', 'PostsSer', 'CommentsSer', function($scope, _, PostsSer, CommentsSer){
  $scope.commentParams = {};

  PostsSer.all()
   .then(function(posts){
     $scope.posts = posts;
   });

   CommentsSer.all()
   .then(function(comments){
    $scope.comments = comments;
   });

   $scope.createComment = function(){
      CommentsSer.create($scope.commentParams);
      $scope.commentParams = {};
   };

   $scope.upvote = function(comment){
      CommentsSer.upvote(comment);
   };

   $scope.downvote = function(comment){
    CommentsSer.downvote(comment);
   };
}]);


app.factory('PostsSer', ['$http', '_', function($http, _){
  var _posts;

  var PostsSer = {};

  PostsSer.all = function(){
    return $http({
      url: '/js/data/posts.json',
      method: 'GET'
    })
      .then(function(response){
        return _posts = response.data;
      });
  };

  PostsSer.addComment = function(id){
    _posts["1"].comments.push(id);
  };

  return PostsSer;
}]);
