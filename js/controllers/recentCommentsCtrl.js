BulletinBoard.controller('RecentCommentsCtrl', ['$scope','CommentService',
  function($scope, CommentService){
    $scope.recentcomments = {};
    CommentService.all().then(
      function (comments) {
        $scope.recentcomments = comments;
      }
    );
  }
]);