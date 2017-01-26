bulletin.factory('commentService',[
  '$http', '$q', '_', 'dateFormatService',
  function($http, $q, _, dateFormatService){
    var _comments = {};
    var _postComments = {};
    var _id = 0;

    var getComments = function getComments(refresh){
      if(_.isEmpty(_comments) || refresh){
        return $http.get('/data/posts.json').then(function(resp){
          var data = resp.data
          angular.copy({}, _comments)
          for(var index in data){
            _comments[index] = data[index]
          }
          dateFormatService.parse(_comments);
          _id = _.size(data);
          return _comments;
        });
      }
      return $q(function(resolve){
        resolve(_comments);
      });
    };

    var refreshComments = function refreshComments(){
      return getComments(true);
    };

    var getCommentsByIds = function getCommentsByIds(id, list){
      if(!_postComments[id]) _postComments[id] = [];

      return getComments().then(function(){
        _postComments[id].splice(0);
        for(var i = 0; i < list.length; i++){
          _postComments[id].push(_comments[list[i]]);
        }
        return _postComments[id];
      });
    };

    var getCommentsByPost = function getCommentsByPost(id){
      if(!_postComments[id]) _postComments[id] = [];

      return getComments().then(function(){
        _postComments[id].splice(0);
        for(var i in _comments){
          if(_comments[i].parent === id){
            _postComments[id].push(_comments[i]);
          }
        }
        return _postComments[id];
      });
    };

    var nextId = function nextId(){
      return _id + 1;
    };

    var newCommentObj = function newCommentObj(comment){
      if(comment.body && comment.author){
        return {
          body: comment.body,
          author: comment.author,
          created_at: new Date(),
          upvotes: 0,
          parent: comment.parentId,
          id: nextId(),
          comments: []
        };
      }
    };

    var createComment = function createComment(commentData) {
      var comment = newCommentObj(commentData),
          parentId = commentData.parentId
      if(comment){
        // if(_postComments[parentId].length && (_postComments[parentId][0].parent === commentData.parentId)){
        //   _postComments[parentId].push(comment);
        // }
        _comments[nextId()] = comment;
        _id++;
        getCommentsByPost(parentId);
        return comment.id;
      }
      return false;
    };

    var modifyUpvotes = function modifyUpvotes(commentId, direction) {
      _comments[commentId].upvotes += direction ? 1 : -1;
    };

    var addCommentId = function addCommentId(pId, cId){
      _comments[pId].comments.push(cId);
    }

    return {
      all: getComments,
      get: getCommentsByIds,
      refresh: refreshComments,
      create: createComment,
      modifyUpvotes: modifyUpvotes,
      insertComment: addCommentId
    };
  }
]);
