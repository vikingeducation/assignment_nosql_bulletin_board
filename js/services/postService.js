angular.module('bulletinBoard').factory("postService", ["$http", function($http) {

  var _posts = [];

  var _populatePosts = function() {
    return $http({
      method: 'GET',
      url: '/data/posts.json'
    }).then(function(response) {
      angular.copy(response.data, _posts);
      return response.data;
    });
  };

  var getPosts = function() {
    if (_posts.length) {
      return _posts;
    } else {
      return _populatePosts();
    }
  };

  return {
    getPosts: getPosts
  };

}]);
