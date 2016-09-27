angular.module('bulletinBoard').filter('orderObjectBy', ['_', function(_) {
  return function(items, field, reverse) {
    var filtered = _.sortBy(items, field);
    if (reverse) { filtered.reverse(); }
    return filtered;
  };
}]);
