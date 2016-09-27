app.directive('commentsDirective', [function() {

  return {
    templateUrl: "templates/comments.html",
    restrict: "A",
    
    scope: {
      comment: '='
    },

    link: function(scope) {
      scope.upVote = function() {

      };

      scope.downVote = function() {

      };
    }
  }

}]);