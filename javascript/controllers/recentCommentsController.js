BulletinBoard.controller("RecentCommentsCtrl", ["$scope", "CommentService", function ($scope, CommentService) {

    CommentService.getAll()
      .then(function(response){
        $scope.comments = response;
      });
}]);
