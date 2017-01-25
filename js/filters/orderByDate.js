BulletinBoard.filter('orderByDate', function () {
  return function(comments, field, reverse) {
    var filtered = [];
    angular.forEach(comments, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});