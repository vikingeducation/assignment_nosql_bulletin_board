bulletin.factory('postService',[
  '$http', '$q', '_', 'dateFormatService',
    function($http, $q, _, dateFormatService){
    var _posts = {};
    var getPosts = function getPosts(){
      if(!_.size(_posts) || refresh){
        return $http.get('/data/posts.json').then(function(resp){
          angular.copy(resp.data, _posts);
          dateFormatService.parse(_posts);
          return _posts;
        });
      }
      return $q(function(resolve){
        resolve(_posts)
      });
    };

    var refreshPosts = function refreshPosts(){
      return getComments(true);
    };

    var idList = function idList(){
      return _.map(Object.keys(_posts), function(id) {
        return parseInt(id);
      });
    };

    var getPostById = function getPostById(id){
      return _posts[id];
    };

    return {
      all: getPosts,
      find: getPostById,
      refresh: refreshPosts
    };
  }
]);
