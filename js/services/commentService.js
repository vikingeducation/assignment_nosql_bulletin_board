angular.module('bulletinBoard').factory(
  "commentService",
  ["$http", "postService", "_", function($http, postService, _) {

  var _comments = {};
  var _id;

  var _populateComments = function() {
    return $http({
      method: 'GET',
      url: '/data/comments.json'
    }).then(function(response) {
      var comments =  angular.copy(response.data, _comments);
      for (var comment in comments) {
        _extendComment(comments[comment]);
      }
      return comments;
    });
  };

  var _updateCommentComment = function(post_id, comment_id) {
    _comments[post_id].comments.push(comment_id);
  };

  var getComments = function() {
    if (_.isEmpty(_comments)) {
      return _populateComments();
    } else {
      return _comments;
    }
  };

  // Return the next id, but don't mutate it.
  var _nextId = function() {
    if (!_id) {
      if (_.isEmpty(_comments)) {
        _id = 1;
        return _id;
      }
      var ids = _.map(Object.keys(_comments), function(id) {
        return parseInt(id);
      });
      _id = _.max(ids);
      return _id + 1;
    }
    return _id + 1;
  };

  // Give comment ability to destroy itself.
  var _extendComment = function(comment) {
    comment.destroy = function() {
      delete _comments[comment.id];
    };
    comment.upvote = function(event) {
      event.preventDefault();
      _comments[comment.id].votes++;
    };
    comment.downvote = function(event) {
      event.preventDefault();
      _comments[comment.id].votes--;
    };
  };

  var _createComment = function (commentParams) {
    commentParams.votes = 0;
    var comment = angular.copy(commentParams, {});
    var nextId = _nextId();
    comment.id = nextId;
    _comments[nextId] = comment;
    _extendComment(comment);
    _id++;

    // Commentables
    switch (comment.commentable_type) {
      case 'post':
        postService.updatePostComment(comment.post_id, comment.id);
        break;
      case 'comment':
        _updateCommentComment(comment.post_id, comment.id);
        break;
    }

    return Promise.resolve(comment);
  };

  var addComment = function(params) {
    return _createComment(params);
  };

  return {
    getComments: getComments,
    addComment: addComment
  };

}]);
