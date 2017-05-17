app.filter('orderJsonBy', function(){
  return function(collection, property){
    if ( property === '' ) { return collection; }

    var filteredCollection = [];

    for (comment in collection) {
      filteredCollection.push( collection[comment] );
    }

    if ( property === 'score' ) {
      filteredCollection.sort(function(a, b){
        return b[property] - a[property];
      });

      return filteredCollection;

    } else if ( property === 'createdAt' ) {
      filteredCollection.sort(function(a, b){
        return Date.parse(b[property]) - Date.parse(a[property]);
      });

      return filteredCollection;

    }
  };
});