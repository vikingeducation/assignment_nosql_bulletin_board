"use strict";

app.controller('PostsCtrl', ['$scope', '_', 'PostsSer', 'CommentsSer', function($scope, _, PostsSer, CommentsSer){
  $scope.commentParams = {};
  $scope.commentCommentParams = {};
  PostsSer.all()
   .then(function(posts){
     $scope.posts = posts;
      $scope.currentPost = $scope.posts["1"];
   });


   CommentsSer.all()
   .then(function(comments){
    $scope.comments = comments;
   });

   $scope.postComments = function(){
    for (var i = 0 ; i < $scope.posts["1"].comments.length; i++){
      $scope.postComments.push($scope.comments[$scope.posts["1"].comments[i]]);
    }
  };


   $scope.createComment = function(){
      CommentsSer.create($scope.commentParams);
      $scope.commentParams = {};
   };

   $scope.createNestedComment = function(parent){
    console.log($scope.commentCommentParams);
     CommentsSer.create($scope.commentCommentParams, parent);
     $scope.commentCommentParams = {};
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
