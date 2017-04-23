BulletinBoard.controller('PostsCtrl', ['$scope', '_', 'postsService', 'commentsService', function($scope, _, postsService, commentsService){

  postsService.getPost(1).then(function(response) {
    // hard coded for just one post per assignment
    $scope.post = response;

  });

  commentsService.getComments().then(function(response) {
    $scope.comments = response;
  });

  $scope.commentSubmit = function(newComment){
    $scope.post.addComment(newComment);
    $scope.newComment = {}; //clear form
  };

}]);
