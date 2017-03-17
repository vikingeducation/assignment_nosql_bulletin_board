BulletinBoard.controller("RecentCommentsCtrl", ['$scope', "commentService", function($scope, commentService) {

  commentService.getAll().then ( function(comments) {
    $scope.comments = comments;
  })

}])