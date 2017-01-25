bulletin.directive('comment', ['commentService',
  function(commentService) {

    var linkFunc = function linkFunc(s) {
      s.modifyUpvotes = function(direction) {
        commentService.modifyUpvotes(s.comment.id, direction);
      };
    };

    return {
      templateUrl: 'js/directives/comment.directive.html',
      scope: {
        comment: '='
      },
      restrict: 'E',
      link: linkFunc
    };
  }
]);
