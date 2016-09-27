//comment

BulletinBoard.directive('comment', function(){

  return {
    templateUrl: 'directives/comment.html',
    restrict: 'E',
    scope: {
      comment: '=',
      allcomments: '=',
      nestedCommentParams: '=',
      addNestedComment: '&'
    }
  };
});
