bulletin.factory('postService',[
  '$http', '_', '$parse',
  function($http, _, $parse){
    var _posts = [];
    var getPosts = function getPosts(){
      return $http.get('/data/posts.json').then(function(resp){
        angular.copy(resp.data, _posts);
        _posts.comments = angular.fromJson(_posts.comments)
        return _posts;
      })
    }
    var idList = function idList(){
      return _.map(Object.keys(_posts), function(id) {
        return parseInt(id);
      });
    }

    var getPostById = function getPostById(id){
      return _posts[id]
    }

    return {
      all: getPosts,
      find: getPostById
    }
  }
])
