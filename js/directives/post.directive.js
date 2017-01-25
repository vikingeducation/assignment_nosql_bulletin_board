bulletin.directive('post', [
  'postService',
  function(postService){

    return {
      restrict: 'E',
      scope:{
        post: '='
      },
      templateUrl: 'js/directives/post.directive.html',
    };
  }
]);
