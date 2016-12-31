BulletinBoard.controller('RecentCommentsCtrl', ['$scope','CommentService',
  function($scope, CommentService){
    CommentService.all().then(
      function (comments) {
        $scope.comments = comments;
      }
    );
  }
]);