bb.directive('commentDiv', [function(){

  return {
    templateUrl: "/directives/commentTemplate.html",
    restrict: "AE",
    scope: {
      comment: "="
    }


  };


}]);
