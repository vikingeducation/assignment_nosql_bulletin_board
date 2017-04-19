BulletinBoard.factory('postsService', ['$http', function($http) {
  var _post;
  var getPost = function(p) {
    return $http.get('/data/posts.json').then(function(response) {
      _post = response.data[p];
      return _post;
    });
  };

  return {
    getPost: getPost
  };
}]);
