bulletin.factory('commentService',[
  '$http', '_', 'dateFormatService',
  function($http, _, dateFormatService){
    var _comments = {};
    var _getComments = function getComments(){
      return $http.get('/data/comments.json').then(function(resp){
        angular.copy(resp.data, _comments);
        dateFormatService.parse(_comments);
        return _comments;
      });
    };

    var getCommentsByPost = function(list){
      return _getComments().then(function(){
        var commentsArr = [];
        for(var i = 0; i < list.length; i++){
          commentsArr.push(_comments[list[i]]);
        }
        return commentsArr;
      });

    };

    return {
      get: getCommentsByPost
    };
  }
]);
