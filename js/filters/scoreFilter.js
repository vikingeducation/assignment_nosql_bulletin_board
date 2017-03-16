BulletinBoard.filter('scoreFilter', ['_', function(_) {
  return function(ids, comments) {

    if (comments) {
      console.log(comments)
      var sorted = _.sortBy(ids, function(id) {

        return comments[id].score;
      });
      return sorted;      
    }

  }
}])