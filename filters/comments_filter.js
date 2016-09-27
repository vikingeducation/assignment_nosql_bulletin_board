app.filter('objToArrayFilter', ['_', function (_) {
  var filtered = [];

  return function(collection) {
    filtered = _.values(collection);
    return filtered
  };  
}]);