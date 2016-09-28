bb.filter('orderComments', ["_", function(_){

  return function(collection, filterParam) {
    var sortedArr = _.sortBy(collection, function(element) {
      return element[filterParam];
    });
    return sortedArr.reverse();
  }
}])
