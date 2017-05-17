app.factory('commentService', ['$http', function($http){
  var service = {};

  service.getComments = function(){
    return $http({
      method: 'GET',
      url: 'data/comments.json',
    })
  };

  service.updateScore = function(increment, comment){
    comment['score'] += increment;
  };

  return service;
}]);
