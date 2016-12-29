angular.module('app').controller('mainCtrl', function($scope, $http) {

  $scope.username = {}

  $scope.getUser = function() {
    return $http({
      method: 'GET',
      url: '/users'
    }).then(function(response) {
      console.log(response.data);
      $scope.username = response.data;
    })
  }

})
