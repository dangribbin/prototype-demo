'use strict';

/**
 * @ngdoc function
 * @name prototypeDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototypeDemoApp
 */
angular.module('prototypeDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
