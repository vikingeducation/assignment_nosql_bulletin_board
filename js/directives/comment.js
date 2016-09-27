angular.module('bulletinBoard').directive('comment', function() {

  return {
    templateUrl: 'js/directives/comment.html',
    restrict: 'E',
    scope: {
      comment: '='
    }
  };

});
