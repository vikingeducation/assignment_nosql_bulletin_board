bb.factory("CommentService",  ['$http', function($http){

  obj = {};

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

  obj.create = function(params) {

  };

  return obj;

}]);
