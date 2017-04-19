BulletinBoard.factory('commentsService', ['$http', function($http){

  var getComments = function() {
    return $http.get('/data/comments.json')
      .then(function(response){
        return response.data;
      });
  };

  return {
    getComments: getComments
  };
}]);
