var y = angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {

  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll()
    .then(function(resp) {
      $scope.data.links = resp;
    }).catch(function(err) {
      console.log(err);
    });
  };

  $scope.addOne = function(link) {
    Links.addOne(link)
    .then(function(resp) {
      return resp.status;
    }).catch(function(err) {
      console.log(err);
    });
  };

  $scope.getAll();

});

y.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
        }
        });
        return result;
    };
});
