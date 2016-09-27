BulletinBoard.factory("commentsService", ['$http', function($http) {

  var _comments = [];

  var getAllComments = function() {
    if (_comments.length) {
      return _comments;
    } else {
      _populateComments().then(function(response) {
        return angular.copy(response.data, _comments);
      });
      return _comments;
    }
  };

  var getLastId = function() {
    var integerArray = _.map(Object.keys(_comments), function(el) {
        return parseInt(el)
    })
    return _.max(integerArray);
  };  

  var _populateComments = function() {
    return $http({
      url: "data/comments.json",
      method: "GET"
    })
  };

  var _postComments = [];

  var getPostComments = function(post) {
    if (_postComments.length) {
      return _postComments
    } else {
      _populateComments().then(function() {
        var postComments = [];
        for(var commentID in _comments) {
          if(post.comments.includes(parseInt(commentID))) {
            postComments.push(_comments[commentID])
          }
        }
        return  _postComments = postComments;  
      })
      return _postComments;
    }
  }



  var addComment = function(comment) {
    comment.postId = "1";
    comment.date = JSON.stringify(new Date());
    comment.score = 0;
    _comments[String(comment.id)] = comment;
  }

  var _postComments;


  return {
    getAllComments: getAllComments,
    getLastId: getLastId,
    addComment: addComment,
    getPostComments: getPostComments
  };
}]);