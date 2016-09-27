app.directive('commentsDirective', [ "commentsService", function(commentsService) {

  return {
    templateUrl: "templates/comments.html",
    restrict: "A",
    
    scope: {
      comment: '='
    },

    link: function(scope) {
      scope.upVote = function() {
        commentsService.upVote(scope.comment.id);
      };

      scope.downVote = function() {
        commentsService.downVote(scope.comment.id);
      };
    }
  }

}]);