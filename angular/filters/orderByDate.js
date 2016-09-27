// BulletinBoard.filter("orderByDate", function() {

//   return function(collection, value) {
//     console.log(collection, value)
//     var sortedCollection = collection.sort(function(a, b) {
//       var dateA = new Date(a);
//       var dateB = new Date(b);
//       if ( dateA < dateB ) {
//         return -1;
//       }
//       if (dateA > dateB ) {
//         return 1;
//       }
//       return 0;
//     })

//     return sortedCollection;
//   }

// });

BulletinBoard.filter("objectToArray", ["_", function(_) {
  return function(collection) {
    return _.map(collection, function(value) { return value });
  }
}]);