BulletinBoard.factory('CommentService', ['$http', function($http){
  var CommentService = {};
  var _comments;
  CommentService.all = function() {
    return $http({
             method: 'GET',
             url: '/data/comments.json'
           }).then(
             function success(response) {
               _comments = response.data;
               return _comments;
             }
           );
  };

  return CommentService;
}]);