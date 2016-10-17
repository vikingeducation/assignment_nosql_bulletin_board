var app = angular.module("BulletinBoard", []);

app.factory("_", ['$window', function($window){
  return $window._;
}]);
////////////////posts controller//////////////////////////
app.controller("PostsCtrl", ['commService', '$window','_', '$scope', "$http", function(commService, $window, _, $scope, $http){
  $scope.posts = {};
  $scope.comments = {};
  $scope.formData = {};

  $scope.createComment = function(){
    commService.createComment($scope.formData).then(function(comment){
      delete $scope.formData.author;
      delete $scope.formData.body;
      $scope.comments = comment[0];
      $scope.posts["1"].comments.push(comment[1].id);
    })
  }

  commService.all().then(function(data){
    $scope.comments = data;
  });

  $http.get('/data/posts.json').then(function(response) {
    $scope.posts = response.data;
  });

}]);

///////////////recent comment controller ///////////////////////////

app.controller("RecentCtrl", ['commService', '$window','_', '$scope', "$http", function(commService, $window, _, $scope, $http){
  $scope.comments = {};

  commService.all().then(function(data){
    $scope.comments = data;
  });

}]);

////////////////////Comment service/////////////////////////////////

app.factory("commService", ['$window', '_', '$http', function($window, _, $http){
  var _id = 0;
  var _comments = {};

  // public //

  var obj = {};

  obj.all = function(){
    return $http.get('/data/comments.json').then(function(response){
      _comments = response.data;
      return _comments;
    });
  };

  obj.createComment = function(data){
    var comment = angular.copy(data,{});
    comment.created_at = Date.now();
    comment.rank = 0;
    comment.post = 1;
    comment.id = obj.nextId();
    _comments[comment.id] = comment;
    _id += 1;
    return new Promise(function(resolve) { resolve([_comments, comment]) });
  };

  obj.nextId = function(){
    if (_id === 0){
      if (_.isEmpty(_comments)){
        return _id + 1;
      };

      var ids = _.map(Object.keys(_comments), function(id){
        return parseInt(id);
      });

      _id = _.max(ids);

      return _id + 1;
    };
    return _id + 1;
  };

  return obj;
}]);
/////////////////rank filter/////////////////////
app.filter("rankFilter", function(){
  return function(items,field, reverse){
    if (reverse){
      return _.sortBy(items,field).reverse();
    } else {
    return _.sortBy(items, field);
    };
  };
});
