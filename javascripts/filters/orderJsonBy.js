app.filter('orderJsonBy', function(){
  return function(collection, property){
    if ( property === '' ) { return collection; }

    var filteredCollection = [];

    for (comment in collection) {
      filteredCollection.push( collection[comment] );
    }

    filteredCollection.sort(function(a, b){
      return b[property] - a[property];
    });

    return filteredCollection;
  };
});