bulletin.directive('comment', [
  function() {

    return {
      templateUrl: 'js/directives/comment.directive.html',
      scope: {
        comment: '='
      },
      restrict: 'E',
    };
  }
]);
