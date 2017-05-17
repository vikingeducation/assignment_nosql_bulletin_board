app.controller('CommentsCtrl', ['$scope', 'commentService', function($scope, commentService){
  $scope.allComments;

  $scope.getComments = function(){
    commentService.getComments().then(function successCallback(response) {
      $scope.allComments = response.data;
      }, function errorCallback(response) {
        console.log('getComments() fail')
      });
  }

  $scope.getComments()

}]);