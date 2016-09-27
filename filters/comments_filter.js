BulletinBoard.filter('commentsFilter', function() {

  return function(collection, post) {

    console.log(collection);
    console.log(post);
    // if (!activateCommentFilter) {
    //   return false;
    // }

    var filteredComments = [];

    angular.forEach(collection, function(comment) {
      if(comment.post === post.id){
        filteredComments.push(comment);
      }
    });
    console.log(filteredComments);
    return filteredComments;
  };

});
