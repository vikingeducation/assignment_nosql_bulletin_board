bulletin.controller('CommentsCtl', [
  '$scope', 'commentService',
  function($scope, commentService) {

    commentService.all().then(function(comments) {
      $scope.comments = comments;
    });
  }
]);
