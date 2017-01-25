bulletin.controller('CommentsCtl', [
  '$scope', 'commentService',
  function($scope, commentService) {

    $scope.comments = [];

    commentService.all().then(function(comments) {
      angular.copy(comments, $scope.comments);
    });
  }
]);
