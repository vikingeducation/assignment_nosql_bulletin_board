bulletin.controller('RecentCommentsCtl', [
  '$scope', 'commentService',
  function($scope, commentService) {

    $scope.comments = [];

    commentService.all().then(function(comments) {
      angular.copy(toArray(comments), $scope.comments);
    });

    var toArray = function(obj) {
      var returnArray = [];
      for (var commentId in obj) {
        returnArray.push(obj[commentId]);
      }
      return returnArray;
    };
  }
]);
