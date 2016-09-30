app.controller("RecentCommentsCtrl", ['$scope', 'commentService', function($scope, commentService){

  commentService.all().then(function success(comments){
    $scope.comments = comments;
    console.log("getting recent comments successful");
  })

}])