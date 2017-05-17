app.factory('commentService', ['$http', function($http){
  var service = {};

  service.getComments = function(){
    return $http({
      method: 'GET',
      url: 'data/comments.json',
    })
  };

  service.updateScore = function(){

  };

  return service;
}]);
