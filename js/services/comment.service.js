bulletin.factory('commentService',[
  '$http', '$q', '_', 'dateFormatService',
  function($http, $q, _, dateFormatService){
    var _comments = {};
    var _postComments = [];
    var getComments = function getComments(refresh){
      if(!_comments.length || refresh){
        return $http.get('/data/comments.json').then(function(resp){
          angular.copy(resp.data, _comments);
          dateFormatService.parse(_comments);
          return _comments;
        });
      }
      return $q(function(resolve){
        resolve(_comments)
      });
    };

    var refreshComments = function refreshComments(){
      return getComments(true);
    }

    var getCommentsByIds = function(list){
      return getComments().then(function(){
        var _postComments.splice(0);
        for(var i = 0; i < list.length; i++){
          _postComments.push(_comments[list[i]]);
        }
        return _postComments;
      });
    };

    var getCommentsByPost = function(postId){
      return getComments().then(function(){
        var _postComments.splice(0);
        for(i in _comments){
          if(_comments[i].post === postId){
            _postComments.push(_comments[i]);
          }
        }
        return _postComments;
      });
    };

    return {
      all: getComments,
      get: getCommentsByIds,
      refresh: refreshComments
    };
  }
]);
