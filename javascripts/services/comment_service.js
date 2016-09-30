app.factory("commentService", ['$http', '_', function($http, _){

  var service = {};

  var _comments = {};

  service.all = function(){
    return $http({
      method: "GET", 
      url: "/data/comments.json"
    }).then(function success(response){
      console.log("getting all comments successful");

      angular.copy(response.data, _comments);


      return _comments;
    });
  };



  return service;
}])