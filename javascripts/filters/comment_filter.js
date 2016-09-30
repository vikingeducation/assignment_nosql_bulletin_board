app.filter("filterComments", ["_", function(_){

  return function(comments, filter){
    
    var sorted = _.sortBy(comments, function(comment){

      return comment[filter];
    });
    sorted = sorted.reverse();
    return sorted;
  };

}]);