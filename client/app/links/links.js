angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {

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
    //link = JSON.stringify({url: link});
    Links.addOne(link)
    .then(function(resp) {
      return resp.status;
    }).catch(function(err) {
      console.log(err);
    });
  };

  console.log('THE AUTH', Auth.isAuth(), Auth);
   if(Auth.isAuth()) {
     $scope.getAll();
   } else {
     $location.path('/signin');
   }


});
