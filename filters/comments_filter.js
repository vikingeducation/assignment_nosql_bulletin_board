app.filter('objToArrayFilter', ['_', function (_) {
  var filtered = [];

  return function(collection) {

    filtered = _.values(collection);
    console.log("filtered: " +filtered);
    return filtered;
  };  
}]);