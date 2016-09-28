angular.module('bulletinBoard').controller('RecentCommentsCtrl', ['$scope', 'commentService', function($scope, commentService) {
  commentService.getComments().then(function(data) {
    $scope.comments = data;
  });
}]);
