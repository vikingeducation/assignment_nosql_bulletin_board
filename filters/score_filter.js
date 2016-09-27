bb.filter('scoreFilter', ["_", function(_){

  return function(collection, comments) {
    var sortedArr = _.sortBy(collection, function(index) {
      var comment = comments[index]
      return (comment.downvotes.length - comment.upvotes.length);
    });
    return sortedArr
  }
}])
