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
          created_at: new Date().toISOString().slice(0, 10),
          post_id: scope.post.id,
          commentable_type: 'post'
        });
        scope.commentAuthor = '';
        scope.commentContent = '';
      };
      scope.getComments = function(commentsArr) {
        var comments = [];
        for (var i = 0; i < commentsArr.length; i++) {
          comments.push(commentService.getComments()[commentsArr[i]]);
        }
        return comments;
      };
    }
  };

}]);
