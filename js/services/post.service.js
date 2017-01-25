bulletin.factory('postService',[
  '$http', '_',
  function($http, _){
    var _posts = [];
    var getPosts = function getPosts(){
      return $http.get('/data/posts.json').then(function(resp){
        angular.copy(resp.data, _posts);
        return _posts;
      })
    }
    var idList = function idList(){
      return _.map(Object.keys(_posts), function(id) {
        return parseInt(id);
      });
    }

    var getPostById = function getPostById(id){
      console.log(_.indexOf(idList(), id))
    }

    return {
      all: getPosts
      find: getPostById
    }
  }
])
