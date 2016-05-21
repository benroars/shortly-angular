angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {};

  $scope.link.urls = [];

  $scope.addLink = function(link) {
    Links.addOne(link)
      .then(function(resp) {
        return resp.status;
      });
  };


});
