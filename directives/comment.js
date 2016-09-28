bb.directive('commentDiv', [function(){

  return {
    templateUrl: "/directives/commentTemplate.html",
    restrict: "AE",
    scope: {
      comment: "=",
      comments: "=",
      createComment: "&"
    },
    link: function(scope, ele, attrs){

    }

    // "/directives/commentTemplate.html",

  };


}]);
