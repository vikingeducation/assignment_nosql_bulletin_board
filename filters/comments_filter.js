BulletinBoard.filter('commentsFilter', function() {

  return function(collection, comments) {

    // if (!activateCommentFilter) {
    //   return false;
    // }

    var filteredComments = [];

    angular.forEach(collection, function(id) {
      filteredComments.push(comments[id])
    })
    return filteredComments;
  };

});