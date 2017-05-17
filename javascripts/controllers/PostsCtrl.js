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


  //init
  $scope.getComments()
  $scope.getPosts()

}]);