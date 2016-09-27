app.filter('filterByIds', ['_', function (_) {

  return function(collection, ids) {

    
    // var filtered = _.values(collection);

    return _.filter(collection, function(el) {
      // -1 if nothing, +0 if true
      return (_.indexOf(ids, el.id) >= 0);
    });

  
  };  
}]);