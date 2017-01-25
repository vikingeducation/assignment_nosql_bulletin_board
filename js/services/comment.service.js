bulletin.factory('commentService',[
  '$http', '_',
  function($http, _){
    var _comments = [];
    var getComments = function getComments(){
      return $http.get('/data/comments.json').then(function(resp){
        angular.copy(resp.data, _posts);
        return _comments;
      })
    }

    return {
      get: getComments
    }
  }
])
