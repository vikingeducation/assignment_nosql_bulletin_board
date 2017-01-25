bulletin.factory('commentService',[
  '$http', '_',
  function($http, _){
    var _comments = {}
    var getComments = function getComments(){
      return $http.get('/data/comments.json').then(function(resp){
        angular.copy(resp.data, _comments);
        return _comments;
      })
    }

    var getCommentsByPost = function(list){
      return getComments().then(function(){
        var commentsArr = []
        for(var i = 0; i < list.length; i++){
          commentsArr.push(_comments[+list[i]])
        }
        return commentsArr
      })

    }

    return {
      get: getCommentsByPost
    }
  }
])
