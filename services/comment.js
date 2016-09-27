bb.factory("CommentService",  ['$http', '_', 'PostService', function($http,_, PostService){

  obj = {};

  var _id;
  var _comments;

  obj.list = function() {
    return $http({
      url: '/data/comments.json',
      method: 'GET'
    })
    .then(function(response){
      _comments = response.data;
      return _comments;
    })
  };

  obj.nextId = function(){
    if (!_id) {
      if (_.isEmpty(_comments)){
        return _id = 1;
      }
      var ids = _.map(Object.keys(_comments), function(id){
        return parseInt(id);
      })

      _id = _.max(ids);

      return _id + 1;
    }
    return _id + 1;
  };

  obj.create = function(commentObj, postId) {
    commentObj.date = new Date().toISOString().slice(0, 10);
    commentObj.upvotes = [];
    commentObj.downvotes = [];
    commentObj.id = obj.nextId();
    _comments[obj.nextId()] = commentObj;
    _id++;
    PostService.addComment(postId, commentObj.id)
    return new Promise(function(resolve) { resolve(commentObj)});
  };

  return obj;

}]);
