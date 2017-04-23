BulletinBoard.controller("RecentCommentsCtrl", ["$scope", "$http", "_", "commentsService", function($scope, $http, _, commentsService){

  commentsService.getComments().then(function(comments){
    $scope.recentComments = comments;
  });

}]);
