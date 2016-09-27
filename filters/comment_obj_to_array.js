app.filter('objToArrayFilter', ['_', function (_) {

  return function(collection) {
    return _.values(collection);
  };  
}]);