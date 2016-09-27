bb.filter('orderComments', ["_", function(_){

  return function(collection, filterParam) {
    var sortedArr = _.sortBy(collection, function(index) {
      return (downvotes.length - comment.upvotes.length);
    });
    return sortedArr
  }
}])
