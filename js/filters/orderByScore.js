BulletinBoard.filter('orderByScore', function () {
  return function (commentIds, comments, rev) {
    var result = _.sortBy(commentIds, [function(commentId){
      return comments[commentId].score;
    }]);
    if (rev === true)
      return _.reverse(result);
    else
      return result;
  };
});