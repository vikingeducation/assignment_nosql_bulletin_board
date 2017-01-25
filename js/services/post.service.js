bulletin.factory('postService',[
  '$http', '$q', '_', 'dateFormatService',
    function($http, $q, _, dateFormatService){
    var _posts = {};
    var getPosts = function getPosts(refresh){
      if(_.isEmpty(_posts) || refresh){
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

    var getPostById = function getPostById(id){
      return _posts[id];
    };

    var addCommentId = function addCommentId(pId, cId){
      _posts[pId].comments.push(cId);
    }

    return {
      all: getPosts,
      find: getPostById,
      refresh: refreshPosts,
      insertComment: addCommentId
    };
  }
]);
