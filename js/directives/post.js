angular.module('bulletinBoard').directive(
  'post', ['commentService', function(commentService) {

  return {
    templateUrl: 'js/directives/post.html',
    restrict: 'E',
    scope: {
      post: '='
    },
    link: function(scope) {
      scope.addComment = function(event) {
        event.preventDefault();
        commentService.addComment({
          author: scope.commentAuthor,
          content: scope.commentContent,
          created_at: (new Date()),
          post_id: scope.post.id
        });
      };
      // Resetting form.
      scope.commentAuthor = '';
      scope.commentContent = '';
    }
  };

}]);
