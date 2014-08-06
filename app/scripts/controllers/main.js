(function() {
  'use strict';
  var app = angular.module('aniApp');

  app.controller('MainCtrl', ['$scope','$location', function ($scope, $location) {
        
    $scope.getClass = function(path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };

    $scope.imgclick = function($event) {
      $event.preventDefault();
    };
    
  }]);

}());
