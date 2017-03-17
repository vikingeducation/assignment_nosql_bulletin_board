BulletinBoard.filter('dateFilter', ['_', function(_) {
  return function(collection, comments) {
    var sorted = _.sortBy(collection, function(comment) { return comment.created_at});
    return sorted;
  }
}])