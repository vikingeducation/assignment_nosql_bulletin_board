BulletinBoard.factory('commentsService', ['$http', '_', function($http, _){
  var _comments;
  var _idCounter = 0;

  var getComments = function() {
    return $http.get('/data/comments.json')
      .then(function(response){
        if (_comments) return _comments;
        _comments = response.data;
        _id = _comments.length;
        _extendComments(_comments);

        return response.data;
      });
  };

  var addComment = function(commentData){
    var newComment = {
      parent_id: 1, //hard coded per assignment
      author: commentData.author,
      creation_date: new Date().toJSON(),
      text: commentData.text,
      votes: 0,
      id: _idCounter,
    };
    _extendComment(newComment);
    _idCounter += 1;
    _comments.push(newComment);
  };

  var _extendComment = function(comment){
    comment.vote = function(direction){
      comment.votes += direction;
    };
  };

  var _extendComments = function(comments){
    _.each(comments, function(comment){
      _extendComment(comment);
    });
  };



  return {
    getComments: getComments,
    addComment: addComment
  };
}]);
