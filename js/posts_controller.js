app.controller('PostsCtrl', ['$scope', '_', 'PostsSer', function($scope, _, PostsSer){

    PostsSer.all()
     .then(function(posts){
       $scope.posts = posts;
     });
}]);


app.factory('PostsSer', ['$http', '_', function($http, _){
  var _posts;

  var PostsSer = {};

  PostsSer.all = function(){
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    })
      .then(function(response){
        return _posts = response.data;
      });
  };

  return PostsSer;
}]);
