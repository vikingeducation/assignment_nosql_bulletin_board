BulletinBoard.controller("RecentCommentsCtrl", ["$scope", "commentsService", "orderByDate", function($scope, commentsService, orderByDate) {
  // add to $scope here
  commentsService.getAllComments().then(function (response) {
      $scope.allComments = response.data;
      console.log($scope.allComments)
  })
}])