BulletinBoard.factory("commentService", ['$http', 'postService',function($http, postService) {
  var commentService = {};

  var _comments;

  var _extendComment = function(comment) {
    comment.upvote = function() {
      comment.score++
    };
    comment.downvote = function() {
      comment.score--
    };
  };

  var _extendComments = function(comments) {
    _.each(comments, function(comment) {
      _extendComment(comment);
    });
  };

  // commentService.getComments = function() {
  //   return _comments;
  // }

  commentService.nextID = function() {
    var ids = _.map(Object.keys(_comments), function(id) {
      return parseInt(id);
    })
    return _.max(ids) + 1;
  }

  commentService.getAll = function() {
    return $http({
      method: 'get',
      url: "/data/comments.json"
    }).then( function(response) {
      _comments = response.data;
      _extendComments(_comments);
      return _comments;
    })
  }

  commentService.createNew = function(commentParams, post) {
    var comment = angular.copy(commentParams, {});
    // add id
    comment.id = commentService.nextID();
    // add created at
    comment.created_at = new Date();
    // add score
    comment.score = 0;

    _comments[comment.id] = comment;

    _extendComment(comment);

    postService.addComment(post, comment.id);

    return new Promise(function(resolve) { resolve(comment) });
  }

  return commentService
}])