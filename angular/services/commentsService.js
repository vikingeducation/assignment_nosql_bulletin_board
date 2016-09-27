BulletinBoard.factory("commentsService", ['$http', function($http) {
  getAllComments = function() {
    return $http({
      url: "data/comments.json",
      method: "GET"
    });
  };


  return {
    getAllComments: getAllComments
  };
}]);