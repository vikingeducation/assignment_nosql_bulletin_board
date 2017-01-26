bulletin.factory('postService',[
  '$http', '$q', '_', 'dateFormatService',
    function($http, $q, _, dateFormatService){
    var _posts = {};
    var getPosts = function getPosts(refresh){
      if(_.isEmpty(_posts) || refresh){
        return $http.get('/data/posts.json').then(function(resp){
          var data = resp.data
          for(var index in data){
            if(data[index].parent === undefined){
              _posts[index] = data[index]
            }
          }
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
