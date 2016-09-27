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

  CommentsService.add = function(params, post_id) {
    var comment = angular.copy(params, {});
    comment.score = 0;
    comment.date = Date.now();
    comment.post_id = post_id;
    _extendComment(comment);
    var nextId = _nextId();
    _comments[nextId] = comment;
    PostsService.addComment(comment.post_id, nextId);
    _id += 1;
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
