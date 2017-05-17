app.controller('PostsCtrl', ['$scope', 'postService', 'commentService', function($scope, postService, commentService){
  $scope.allPosts;
  $scope.allComments;

  $scope.getPosts = function(){
    postService.getPosts().then(function successCallback(response) {
      $scope.allPosts = response.data;

      }, function errorCallback(response) {
        console.log('getPosts() fail')
      });
  };

  $scope.getComments = function(){
    commentService.getComments().then(function successCallback(response) {
        $scope.allComments = response.data;
      }, function errorCallback(response) {
        console.log('getComments() fail')
      });
  };

  $scope.updateScore = function(increment, comment){
    comment['score'] += increment;
  };

  $scope.createComment = function(formData, form, postId){
    var nextIndex = Object.keys($scope.allComments).length + 1;

    $scope.allComments[ nextIndex ] = {
      "author": formData.author,
      "text": formData.text,
      "createdAt": "2016-01-01",
      "score": 0,
      "postId": postId
    }

  };

  //init
  $scope.getComments()
  $scope.getPosts()

}]);