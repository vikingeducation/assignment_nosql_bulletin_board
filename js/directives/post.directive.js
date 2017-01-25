bulletin.directive('post', [
  'postService',
  function(postService){
    linkFunction = function(s, e, a){
      console.log(s, e, a)
    }
    return {
      restrict: 'E',
      scope:{
        post: '='
      },
      templateUrl: 'js/directives/post.directive.html',
      link: linkFunction
    }
  }
])
