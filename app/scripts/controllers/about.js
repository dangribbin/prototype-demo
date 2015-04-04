'use strict';

/**
 * @ngdoc function
 * @name prototypeDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prototypeDemoApp
 */
angular.module('prototypeDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
