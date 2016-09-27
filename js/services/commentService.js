angular.module('bulletinBoard').factory(
  "commentService",
  ["$http", "postService", function($http, postService) {

  var _comments = [];
  var _id;

  var _populateComments = function() {
    return $http({
      method: 'GET',
      url: '/data/comments.json'
    }).then(function(response) {
      return angular.copy(response.data, _comments);
    });
  };

  var getComments = function() {
    if (_comments.length) {
      return _comments;
    } else {
      return _populateComments();
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
  };

  var _createComment = function (commentParams) {
    commentParams.votes = 0;
    var comment = angular.copy(commentParams, {});
    var nextId = _nextId();
    comment.id = nextId;
    _comments.push(comment);
    _extendComment(comment);
    _id++;
    postService.updatePostComment(comment.post_id, comment.id);
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
