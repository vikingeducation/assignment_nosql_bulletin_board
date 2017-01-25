bulletin.controller('PostsCtl', [
  '$scope', '_', 'postService',
  function($scope, _, postService){
    postService.all().then(function(posts){
      $scope.posts = posts;
      $scope.currentPost = postService.find(1);
      $scope.currentPost.created_at = convertDate($scope.currentPost.created_at)
    });

    var convertDate = function(string){
      return Date.parse(string)
    }
  }
])
