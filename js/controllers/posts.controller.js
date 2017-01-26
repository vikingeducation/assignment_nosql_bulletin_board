bulletin.controller('PostsCtl', [
  '$scope', '_', 'postService',
  function($scope, _, postService){
    postService.all().then(function(posts){
      $scope.posts = posts;
      $scope.currentPost = postService.find(1);
    });
  }
]);
