
BulletinBoard.controller('RecentCommentsCtrl', ['$scope', 'CommentsService', function($scope, CommentsService){

  CommentsService.all().then(function(comments){
    $scope.comments = comments;
  });

}]);
