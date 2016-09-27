BulletinBoard.factory('CommentsService', ['_', '$http', function(_, $http){

  var CommentsService = {};
  var _comments;

  CommentsService.all = function() {
    return $http({
      url: '/data/comments.json',
      method: 'GET'
    }).then(function(response){
      return _comments = response.data;
    });
  };
  return CommentsService;
}]);
