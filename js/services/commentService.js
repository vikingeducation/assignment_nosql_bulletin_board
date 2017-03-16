BulletinBoard.factory("commentService", ['$http', function($http) {
  var commentService = {};

  var _comments;

  commentService.getAll = function() {
    return $http({
      method: 'get',
      url: "/data/comments.json"
    }).then( function(response) {
      return _comments = response.data;
    })
  }

  return commentService
}])