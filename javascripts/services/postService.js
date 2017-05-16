app.factory('postService', ['$http', function($http){
  var service = {};

  service.getPosts = function(){
    return $http({
      method: 'GET',
      url: 'data/posts.json',
    })
  };

  return service;
}]);
