BulletinBoard.factory('PostsService', ['$http', '_', function(_, $http){
  console.log('loaded posts service');

  var PostService = {};
  var _posts;

  PostService.all = function() {
    return $http({
      url: '/data/posts.json',
      method: 'GET'
    }).then(function(response){
      return _posts = response.data;
    });
  };
  return PostService;
}]);
