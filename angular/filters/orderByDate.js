BulletinBoard.filter("orderByDate", function() {
  

  return function(collection) {

    var sortedCollection = collection.sort(function(a, b) {
      var dateA = new Date(a);
      var dateB = new Date(b);
      if ( dateA < dateB ) {
        return -1;
      };
      if (dateA > dateB ) {
        return 1;
      };
      return 0;
    })
    return sortedCollection;
  }

});