bulletin.directive('comments', [
  'commentService',
  function(commentService){
    var linkFunc = function($scope){
      commentService.get($scope.parentId, $scope.commentList).then(
        function(comments){
          $scope.comments = comments;
        });
    };

    return {
      restrict: 'E',
      scope:{
        parentId: '@',
        commentList: '='
      },
      templateUrl: 'js/directives/comments.directive.html',
      link: linkFunc
    };
  }
]);
