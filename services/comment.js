bb.factory("CommentService",  ['$http', '_', function($http,_){

  var obj = {};

  var _id;
  var _comments = {};

  obj.list = function() {
    return $http({
      url: '/data/comments.json',
      method: 'GET'
    })
    .then(function(response){
      angular.copy(response.data, _comments);

      _extendComments(_comments);
      return _comments;
    });
  };

  obj.nextId = function(){
    if (!_id) {
      if (_.isEmpty(_comments)){
        return _id = 1;
      }
      var ids = _.map(Object.keys(_comments), function(id){
        return parseInt(id);
      });

      _id = _.max(ids);

      return _id + 1;
    }
    return _id + 1;
  };

  obj.create = function(commentParams) {
    var commentObj = angular.copy(commentParams, {});
    commentParams = {};
    commentObj.date = new Date().toISOString().slice(0, 10);
    commentObj.upvotes = [];
    commentObj.downvotes = [];
    commentObj.id = obj.nextId();
    _comments[obj.nextId()] = commentObj;
    _extendComment(commentObj);
    return _id++;
    // PostService.addComment(postId, commentObj.id);
    // return new Promise(function(resolve) { resolve(commentObj)});
  };

  var _extendComment = function(comment) {
    comment.upvote = function() {
      comment.upvotes.push(1);
    };
    comment.downvote = function() {
      comment.downvotes.push(1);
    };
    // comment.destroy = function() {
    //   delete _comments[comment.id];
    //   //remove from posts
    // };
    comment.addComment = function(commentObj) {
      var newCommentId = obj.create(commentObj);
      comment.comments.push(newCommentId);
      commentObj.body = "";
      commentObj.author = "";
    };
  };

  obj.commentFormData = {};

  var _extendComments = function(comments) {
    _.each(comments, function(comment) {
      _extendComment(comment);
    });
  };

  return obj;

}]);
