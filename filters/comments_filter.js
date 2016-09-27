BulletinBoard.filter('commentsFilter', function() {

  return function(collection, post) {

    // if (!activateCommentFilter) {
    //   return false;
    // }

    var filteredComments = [];

    angular.forEach(collection, function(comment) {
      if(comment.post_id === post.id){
        filteredComments.push(comment);
      }
    });
    return filteredComments;
  };

});
