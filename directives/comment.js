bb.directive('commentDiv', [function(){

  return {
    templateUrl: "/directives/commentTemplate.html",
    restrict: "AE",
    scope: {
      comment: "=",
      comments: "=",
      commentId: "=",
      createComment: "&"
    },
    link: function(scope, ele, attrs){
    }

    // "/directives/commentTemplate.html",

  };


}]);
