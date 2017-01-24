BulletinBoard.factory("CommentService", ["$http", function($http) {
  var CommentService = {};
  var _comments;



  CommentService.getAll = function(){
    return $http.get("data/comments.json")
        .then(function(response) {
          return _comments = response.data;
        });
  };

  CommentService.create = function(data) {

  };

  return CommentService;

}]);
