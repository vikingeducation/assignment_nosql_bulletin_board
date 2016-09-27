bb.factory("CommentService", [function(){

  obj = {};

  var _comments;

  obj.createComment = function() {}

  obj.list = function() {
    return $http({
      url: '/data/comments.json',
      method: 'GET'
    })
    .then(function(response){
      _comments = response.data;
      return _comments;
    })
  }

  return obj;

}]);
