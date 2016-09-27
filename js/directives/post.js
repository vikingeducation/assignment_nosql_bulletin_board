angular.module('bulletinBoard').directive('post', function() {

  return {
    templateUrl: 'js/directives/post.html',
    restrict: 'E',
    scope: {
      post: '='
    }
  };

});
