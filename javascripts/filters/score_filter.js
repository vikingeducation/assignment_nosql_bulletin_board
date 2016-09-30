app.filter('scoreFilter', ["_", function(_){

  return function(commentIndices, comments){
    var sorted = _.sortBy(commentIndices, function(index){
      var comment = comments[index];

      return comment.score;
    });
    sorted = sorted.reverse(); //this is hacky but underscore docs don't have 
    //good example how to to manipulate the sorting so this is quicker for now
    return sorted;
  }
}])