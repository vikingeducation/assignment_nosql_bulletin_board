BulletinBoard.controller("RecentCommentsCtrl", ["$scope", "commentsService", function($scope, commentsService) {
  // add to $scope here
  commentsService.getAllComments().then(function (response) {
      $scope.allComments = response.data;
      console.log($scope.allComments)
  })
}])