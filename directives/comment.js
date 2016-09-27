bb.directive('commentDiv', [function(){

  return {
    templateUrl: "/directives/commentTemplate.html",
    restrict: "E",
    scope: {
      post: "=",
      comments: "="
    }


  };


}]);