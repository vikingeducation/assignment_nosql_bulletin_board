app.controller("PostsCtrl", ['$scope', 'postService', function($scope, postService){

  postService.all().then(function(posts){
    $scope.post = posts["1"];
  })
  

}])