BulletinBoard.controller("RecentCommentsCtrl", ["$scope", "commentsService", function($scope, commentsService) {
  // add to $scope here
  $scope.allComments = commentsService.getAllComments();
}])