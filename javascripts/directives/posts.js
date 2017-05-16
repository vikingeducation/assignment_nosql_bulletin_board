app.directive('posts',  function(){
  return {
    templateUrl: "javascripts/directives/posts.html",
    restrict: "E",
    scope: {
      allPosts: '='
    }
    // scope: true
  };
});
