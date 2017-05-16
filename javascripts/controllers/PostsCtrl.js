app.controller('PostsCtrl', ['$scope', 'postService', function($scope, postService){
    $scope.test = 'yes'
    console.log(postService, '~~')

    $scope. getPosts = function(){
      postService.getPosts().then(function(response){
        console.log(response, '!!')
      }).then(function(response){
        console.log(response, '!!')
      });
    }
    $scope.getPosts()

}]);