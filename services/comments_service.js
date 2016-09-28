BulletinBoard.factory('CommentsService', ['_', '$http', 'PostsService', function(_, $http, PostsService){

  var CommentsService = {};
  var _comments = {};
  var _id;

  var _extendComments = function(comments){
    _.each(comments, function(comment){
      _extendComment(comment);
    });
  };

  var _extendComment = function(comment) {
    comment.upvote = function(){
      comment.score++;
    };
    comment.downvote = function(){
      comment.score--;
    };
    comment.getComments = function(allcomments){
      if(allcomments){
        return _.map(comment.child_comments, function(child_comment_id){
          return allcomments[child_comment_id];
        });
      }
    };
  };

  var _nextId = function() {
    if (!_id) {
      if (_.isEmpty(_comments)) {
        return _id = 1;
      }
    }
    var ids = _.map(Object.keys(_comments), function(id){
      return parseInt(id);
    });
    _id = _.max(ids);
    return _id + 1;
  };

  CommentsService.add = function(params, parent_id, parent_type) {
    console.log(params);
    var comment = angular.copy(params, {});
    comment.score = 0;
    comment.date = Date.now();
    comment.parent_id = parent_id;
    comment.parent_type = parent_type;
    comment.child_comments = [];
    _extendComment(comment);
    var nextId = _nextId();
    comment.id = nextId;
    _comments[nextId] = comment;
    if(parent_type === 'post'){
      PostsService.addComment(comment.parent_id, nextId);
    } else if(parent_type === 'comment'){
      CommentsService.addComment(comment.parent_id, nextId);
    }
    _id += 1;
  };

  CommentsService.addComment = function(parentId, childId){
    var parentComment = _comments[parentId];
    parentComment.child_comments.push(childId);
    // console.log(parentComment);
    // console.log(parentComment.child_comments);
    // console.log(_comments);
  };

  CommentsService.all = function() {
    return $http({
      url: '/data/comments.json',
      method: 'GET'
    }).then(function(response){
      angular.copy(response.data, _comments);
      _extendComments(_comments);
      return _comments;
    });
  };

  return CommentsService;
}]);
