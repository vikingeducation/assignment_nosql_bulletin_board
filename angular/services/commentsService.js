BulletinBoard.factory("commentsService", ['$http', function($http) {
  var getAllComments = function() {
    return $http({
      url: "data/comments.json",
      method: "GET"
    })
  };


  var newComment = function(comment) {
    
  };


  return {
    getAllComments: getAllComments,
    newComment: newComment
  };
}]);