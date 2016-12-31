BulletinBoard.controller('RecentCommentsCtrl', ['$scope','CommentService',
  function($scope, CommentService){
    $scope.comments = CommentService.all().then(
      function (comments) {
        $scope.comments = comments;
      }
    );


  }
]);