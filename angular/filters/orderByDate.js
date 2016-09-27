BulletinBoard.filter("objectToArray", ["_", function(_) {
  return function(collection) {
    return _.map(collection, function(value) { return value });
  }
}]);