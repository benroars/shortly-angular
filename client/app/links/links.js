angular.module('shortly.links', [])

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
